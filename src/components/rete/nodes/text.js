import Rete from 'rete'
import { TextControl } from './textControl.js'
import { answer as answerSocket, event as eventSocket } from '../sockets'
import Node from './QuestionNode.vue'

export class TextNode extends Rete.Component {
  constructor () {
    super('Q')
    this.data.component = Node
  }

  builder (node) {
    const inp1 = new Rete.Input('t', 'trigger', eventSocket, true)
    const out = new Rete.Output('A', 'possible answers', answerSocket)
    const answerText = new TextControl(this.editor, 'text', true)

    return node
      .addInput(inp1)
      .addControl(answerText)
      .addOutput(out)
  }

  worker (node, inputs, outputs) {
  }
}
