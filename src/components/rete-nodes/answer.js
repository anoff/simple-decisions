import Rete from 'rete'
import { TextControl } from './textControl.js'
import { event as eventSocket } from './sockets'

export class AnswerNode extends Rete.Component {
  constructor () {
    super('Answer')
  }

  builder (node) {
    const inp1 = new Rete.Input('q', 'q', eventSocket, true)
    const out = new Rete.Output('output', 'trigger', eventSocket, true)
    const answerText = new TextControl(this.editor, 'sometext')

    return node
      .addInput(inp1)
      .addControl(answerText)
      .addOutput(out)
  }

  worker (node, inputs, outputs) {
  }
}
