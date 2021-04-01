import Rete from 'rete'
import { event as eventSocket } from './sockets'
import { TextControl } from './textControl.js'

// class TextInputControl extends Rete.Control {
//   constructor (key) {
//     super(key)
//     this.render = 'js'
//     this.key = key
//   }

//   handler (el, editor) {
//     var input = document.createElement('input')
//     el.appendChild(input)

//     var text = this.getData(this.key) || 'Some message..'

//     input.value = text
//     this.putData(this.key, text)
//     input.addEventListener('change', () => {
//       this.putData(this.key, input.value)
//     })
//   }
// }

export class QuestionNode extends Rete.Component {
  constructor () {
    super('Question')
  }

  builder (node) {
    const inp1 = new Rete.Input('t', 'trigger', eventSocket)
    const out = new Rete.Output('a', 'possible answers', eventSocket)
    const ctrl = new TextControl(this.editor, 'text', true)

    inp1.addControl(ctrl)
    return node
      .addInput(inp1)
      .addOutput(out)
  }

  worker (node, inputs, outputs) {

  }
}
