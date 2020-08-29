<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/PageOne' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{routes.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Breadcrumb extends Vue {
  routes:object = {}
  @Watch('$route')
  getVisible(newVal:any) {
    this.routes = newVal
  }
  private created(): void {
    this.routes = this.$route
  }
}
</script>

<style lang="scss">
.breadcrumb {
  height: 30px;
  line-height: 30px;
}
</style>