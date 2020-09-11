<template>
  <el-form ref="form" :model="form">
    <el-form-item v-for="(item,index) in formList" :key="index">
      <el-input v-model="form.name"></el-input>
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  @Prop(Array) private formList!: [];
  form :object = {}
}
</script>

<style lang="scss">
</style>