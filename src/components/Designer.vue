<template>
  <div id="editor-wrapper">
    <div id="rete" ref="rete"></div>
  </div>
</template>

<script>
import Rete from 'rete'
import VueRenderPlugin from 'rete-vue-render-plugin'
import ConnectionPlugin from 'rete-connection-plugin'
import AreaPlugin from 'rete-area-plugin'
import ContextMenuPlugin from 'rete-context-menu-plugin'
import { QuestionNode } from './rete-nodes/question'
import { AnswerNode } from './rete-nodes/answer'
import { DiamondNode } from './rete-nodes/diamond'
import data from './rete-nodes/data.json'

export default {
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
  }
}

</script>

<style lang="sass">
#rete
  width: 100%
  height: 100%

.node .control input, .node .input-control input
  width: 140px

#editor-wrapper
  flex: 2
  width: 500px
  height: 500px

.event
  background: white
  border-color: grey
  border-radius: 3px
  width: 15px

.node-diamond
  //transform: rotate(45deg)
  background-color: lightyellow
</style>
