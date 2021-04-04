<template>
<div class="node" :class="[selected(), node.name] | kebab">
  <div class="title">{{node.name}}</div>
  <div class="content">
    <!-- Inputs-->
    <div class="input" v-for="input in inputs()" :key="input.key">
      <Socket v-socket:input="input" type="input" :socket="input.socket"></Socket>
    </div>
    <!-- Controls-->
    <div class="control" v-for="control in controls()" :key="control.key" v-control="control"></div>
    <!-- Outputs-->
    <div class="output" v-for="output in outputs()" :key="output.key">
      <Socket v-socket:output="output" type="output" :socket="output.socket"></Socket>
    </div>
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
$node-color: rgba(200,200,200)
$node-color-selected: #ac3000
$socket-size: 18px
$socket-margin: 5px
$socket-color: #000
$socket-border-color: #fff
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
    background: lighten($node-color,10%)
  &.selected
    border-color: $node-color-selected

  .content
  .title
    color: white
    font-family: sans-serif
    font-size: 14px
    font-weight: bold
    padding: 8px
    text-align: left

  .output
    text-align: right
    display: inline-block

  .input
    text-align: left
    display: inline-block

  .control
    border: dotted 0.5px #333
    font-family: sans-serif
    display: inline-block

  .socket
    background: $socket-color
    border: 2px solid white
    border-radius: 0
    width: $socket-size
    height: $socket-size
  .output
    .socket
      background: lighten($socket-color, 50%)
      border-color: darken($socket-border-color, 5%)
</style>
