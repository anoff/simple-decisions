import Rete from 'rete'
import { TextControl } from './textControl.js'
import { event as eventSocket } from './sockets'
import Node from './AnswerNode.vue'

export class AnswerNode extends Rete.Component {
  constructor () {
    super('Answer')
    this.data.component = Node
  }

  builder (node) {
    const inp1 = new Rete.Input('q', 'q', eventSocket, true)
    const out = new Rete.Output('output', 'trigger', eventSocket, true)
    const answerText = new TextControl(this.editor, 'text')

    return node
      .addInput(inp1)
      .addControl(answerText)
      .addOutput(out)
  }

  worker (node, inputs, outputs) {
  }
}
