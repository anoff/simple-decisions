import Rete from 'rete'
import { event as eventSocket } from '../sockets'
import { TextControl } from './textControl.js'
import Node from './DiamondNode.vue'

export class DiamondNode extends Rete.Component {
  constructor () {
    super('Diamond')
    this.data.component = Node
  }

  builder (node) {
    const inp1 = new Rete.Input('t', 'trigger', eventSocket)
    const out = new Rete.Output('a', 'possible answers', eventSocket)
    const ctrl = new TextControl(this.editor, 'text', true)

    return node
      .addInput(inp1)
      .addOutput(out)
      .addControl(ctrl)
  }

  worker (node, inputs, outputs) {

  }
}
