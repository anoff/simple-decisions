<template>
<textarea :value="value" cols="30" rows="5" @input='change($event)'></textarea>
</template>

<script>
export default {
  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    change (e) {
      this.value = e.target.value
      this.update()
    },
    update () {
      if (this.ikey) this.putData(this.ikey, this.value)
      this.emitter.trigger('process')
    }
  },
  mounted () {
    this.value = this.getData(this.ikey)
  }
}
</script>

<style lang="sass">
textarea
  resize: none
  background: none
  font-family: sans-serif
  font-size: 12px
  border: solid 0.5px #333
  border-radius: 3px
  width: 100%
</style>
