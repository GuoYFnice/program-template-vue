<template>
  <div class="content-box">
    one
    <Dialog title="提示"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dialog from '../../components/Dialog/index.vue'

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