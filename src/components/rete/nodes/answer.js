import Rete from 'rete'
import { TextControl } from './textControl.js'
import { answer as answerSocket, event as eventSocket } from '../sockets'
import Node from './AnswerNode.vue'

export class AnswerNode extends Rete.Component {
  constructor () {
    super('A')
    this.data.component = Node
  }

  builder (node) {
    const inp1 = new Rete.Input('q', 'q', answerSocket, true)
    const out = new Rete.Output('output', 'q/x', eventSocket, true)
    const answerText = new TextControl(this.editor, 'text')

    return node
      .addInput(inp1)
      .addControl(answerText)
      .addOutput(out)
  }

  worker (node, inputs, outputs) {
  }
}
