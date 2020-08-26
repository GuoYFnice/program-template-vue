<template>
  <div class="content-box">
    two
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PageTwo extends Vue {
  @Prop(String) private title!: string;
  private handleOpen(): void {
  } 
  private handleClose(): void {
  }
}
</script>

<style lang="scss">
.content-box {
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>