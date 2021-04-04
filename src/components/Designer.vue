<template>
  <div id="editor-wrapper">
    <div id="rete" ref="rete"></div>
    <v-btn
      color="pink"
      fab
      dark
      bottom
      right
      @click="doStuff()"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Rete from 'rete'
import VueRenderPlugin from 'rete-vue-render-plugin'
import ConnectionPlugin from 'rete-connection-plugin'
import AreaPlugin from 'rete-area-plugin'
import ContextMenuPlugin from 'rete-context-menu-plugin'
import { QuestionNode } from './rete/nodes/question'
import { AnswerNode } from './rete/nodes/answer'
import { DiamondNode } from './rete/nodes/diamond'
import data from './rete/data.json'

export default {
  data () {
    return {
      editor: null
    }
  },
  async mounted () {
    const components = [
      new QuestionNode(),
      new AnswerNode(),
      new DiamondNode()
    ]

    const editor = new Rete.NodeEditor('demo@0.1.0', this.$refs.rete)
    editor.use(ConnectionPlugin)
    editor.use(VueRenderPlugin)
    editor.use(ContextMenuPlugin)
    editor.use(AreaPlugin)

    const engine = new Rete.Engine('demo@0.1.0')

    components.map(c => {
      editor.register(c)
      engine.register(c)
    })

    editor.on(
      'process nodecreated noderemoved connectioncreated connectionremoved',
      async () => {
        await engine.abort()
        await engine.process(editor.toJSON())
      }
    )

    editor.view.resize()
    await editor.fromJSON(data)

    AreaPlugin.zoomAt(editor)
    setTimeout(() => editor.trigger('process'), 1000)
    // setInterval(() => console.log(JSON.stringify(editor.toJSON())), 2000)
    this.editor = editor
  },
  methods: {
    doStuff () {
      window.e = this.editor
      console.log(this.editor)
    }
  }
}

</script>

<style lang="sass">
#rete
  width: 100%
  height: 100%
  background-color: #eee

#editor-wrapper
  flex: 2
  width: 100%
  height: 800px

.event
  background: white
  border-color: grey
  border-radius: 3px
  width: 15px
</style>
