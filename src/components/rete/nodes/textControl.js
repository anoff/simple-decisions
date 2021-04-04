import Rete from 'rete'
import VueTextControl from './TextControl.vue'
import VueTextAreaControl from './TextAreaControl.vue'

export class TextControl extends Rete.Control {
  constructor (emitter, key, multiline = false) {
    super(key)
    this.component = multiline ? VueTextAreaControl : VueTextControl
    this.props = { emitter, ikey: key }
  }

  setValue (val) {
    this.vueContext.value = val
  }
}
