<template>
<div class="node-container" :class="[selected(), node.name] | kebab">
    <!-- Inputs-->
    <div class="diamond" :class="selected() | kebab"></div>
    <div class="input" v-for="input in inputs()" :key="input.key">
      <Socket v-socket:input="input" type="input" :socket="input.socket"></Socket>
    </div>
    <!--- hide title <div class="title">{{node.name}}</div> -->
    <!-- Controls-->
    <div class="control" v-for="control in controls()" :key="control.key" v-control="control"></div>
    <!-- Outputs-->
    <div class="output" v-for="output in outputs()" :key="output.key">
      <Socket v-socket:output="output" type="output" :socket="output.socket"></Socket>
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

.node-container
  .diamond
    background: $node-color
    border: 3px solid black
    width: 150px
    height: 150px
    transform: rotate(45deg)
    cursor: pointer
    position: relative
    user-select: none
    &:hover
      background: lighten($node-color,50%)
    &.selected
      border-color: $node-color-selected
  .output
    position: absolute
    bottom: -24px
    left: 31px
  .input
    position: absolute
    top: -24px
    left: 40px
  .socket
    background: black
    border: 2px solid white
    border-radius: 0
    width: 20px
    height: 20px
  .control
    position: absolute
    display: inline
    top: 45px
    left: 7px
    width: 140px
  textarea
    resize: none
    background: red
</style>
