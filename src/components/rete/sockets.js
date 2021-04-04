import { Socket } from 'rete'
const answer = new Socket('answer')
const event = new Socket('event')
const question = new Socket('question')

export {
  answer,
  event,
  question
}
