<template>
  <div class="title">
    -{{ title }}-
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class PageTitle extends Vue {
  title:string = ''
  @Watch('$route')
  getVisible(newVal:any) {
    this.title = newVal.meta.title
  }
  private created(): void {
    this.title = this.$route.meta.title
  }
}
</script>

<style lang="scss">
.title{
  font-size: 18px;
  font-weight: 600;
  height: 50px;
  text-align: left;
  line-height: 50px;
}
</style>