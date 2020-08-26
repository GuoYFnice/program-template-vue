<template>
  <div class="header-box">
    <h1>{{ title }}</h1>
    <div>HEllO</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {
  @Prop(String) private title!: string;
  private handleOpen(): void {
  } 
  private handleClose(): void {
  }
}
</script>

<style lang="scss">
.header-box {
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>