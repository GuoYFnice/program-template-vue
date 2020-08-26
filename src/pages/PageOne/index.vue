<template>
  <div class="content-box">
    one
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PageOne extends Vue {
  @Prop(String) private title!: string;
  private handleOpen(): void {
  } 
  private handleClose(): void {
  }
}
</script>

<style lang="scss">
.content-box {
}
</style>