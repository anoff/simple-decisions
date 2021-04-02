<template>
<div class="node" :class="[selected(), node.name] | kebab">
  <div class="title">{{node.name}}</div>
  <!-- Outputs-->
  <div class="output" v-for="output in outputs()" :key="output.key">
    <Socket v-socket:output="output" type="output" :socket="output.socket"></Socket>
  </div>
  <!-- Controls-->
  <div class="control" v-for="control in controls()" :key="control.key" v-control="control"></div>
  <!-- Inputs-->
  <div class="input" v-for="input in inputs()" :key="input.key">
    <Socket v-socket:input="input" type="input" :socket="input.socket"></Socket>
  </div>
</div>
</template>

<script>
import VueRenderPlugin from 'rete-vue-render-plugin'
export default {
  mixins: [VueRenderPlugin.mixin],
  components: {
    Socket: VueRenderPlugin.Socket
  }
}
</script>

<style lang="sass" scoped>
$node-color: rgba(100,100,100,0.3)
$node-color-selected: #ac3000
$group-color: rgba(15,80,255,0.2)
$group-handler-size: 40px
$group-handler-offset: -10px
$socket-size: 24px
$socket-margin: 6px
$socket-color: #96b38a
$node-width: 180px

.node
  background: $node-color
  border: 2px solid #333
  border-radius: 3px
  cursor: pointer
  min-width: $node-width
  height: auto
  padding-bottom: 6px
  box-sizing: content-box
  position: relative
  user-select: none
  &:hover
    background: lighten($node-color,50%)
  &.selected
    border-color: $node-color-selected
  .title
    color: white
    font-family: sans-serif
    font-size: 14px
    font-weight: bold
    padding: 8px
    text-align: left
  .output
    text-align: right
  .input
    text-align: left
  .control
    padding: $socket-margin $socket-size/2 + $socket-margin
  .socket
    background: black
    border: 2px solid white
    border-radius: 0
    width: 20px
    height: 20px
</style>
