<template>
<input type='text' :readonly='readonly' :value='value' @input='change($event)'/>
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
      console.log('update', this.value)
      this.emitter.trigger('process')
    },
    getString () {
      console.log(this.value)
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
  background-color: white;
  padding: 2px 6px;
  border: 1px solid #fff;
  font-size: 110%;
  width: 170px;
}
</style>
