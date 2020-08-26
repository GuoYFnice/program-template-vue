<template>
  <el-menu
    default-active="2"
    router
    class="el-menu-vertical-demo">
    <el-submenu 
    v-for="(value,key,index) in menus"
    :key="value.name"
    :index="`${index}-${value.name}`">
      <template slot="title">
        <i :class="value.icon"></i>
        <span slot="title">{{value.name}}</span>
      </template>
      <template v-for="(cilValue,cilKey,cilIndex) in value.children" >
        <el-menu-item
        :index="cilValue.url"
        :key="`${index}-${cilIndex}`">
          {{cilValue.name}}
        </el-menu-item>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { menusItem } from '../../config/menus'

@Component
export default class Menu extends Vue {
  menus:object = {};
  private created(): void {
    this.menus = menusItem
  }
  private handleClick(path:string): void {
    console.log(path)
  }
}
</script>