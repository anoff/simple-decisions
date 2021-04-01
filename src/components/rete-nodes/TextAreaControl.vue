<template>
<textarea :value="value" cols="40" rows="5" @input='change($event)'></textarea>
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

<style>
select, input {
  width: 100%;
  border-radius: 2px;
  background-color: lightcyan;
  padding: 2px 6px;
  border: 1px solid #fff;
  font-size: 110%;
  width: 170px;
}
</style>
