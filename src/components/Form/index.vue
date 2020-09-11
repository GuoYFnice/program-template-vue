<template>
  <el-form ref="form" :model="form" class="formBox">
    <el-form-item v-for="(item,index) in formList" :key="index" :label="`${item.label}:`" class="formItem">
      <el-input v-if="item.type==='input'" v-model="form[item.key]"></el-input>
      <el-select v-if="item.type==='select'" v-model="form[item.key]" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
      </el-select>
      <el-date-picker
        v-if="item.type==='date'"
        type="date"
        placeholder="选择日期"
        v-model="form[item.key]"
        style="width: 100%;"
      ></el-date-picker>
      <el-time-select v-if="item.type==='time'" v-model="form[item.key]" placeholder="选择时间"></el-time-select>
    </el-form-item>
    <el-form-item class="formItem">
      <el-button type="primary" @click="handleClick">查询</el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import resetFields from "../../mixins/resetFields"

@Component
export default class Dialog extends Vue {
  @Prop(Array) private formList!: [];
  @Prop(Object) private form!: {};
  private handleClick ():void {
    this.$emit('query')
  }
  private handleReset ():void {
    this.$refs['form'].resetFields()
    // this.$emit('reset')
    // this.$refs.form.resetFields();
  }
}
</script>

<style lang="scss">
.formBox {
  display: flex;
  .formItem {
    display: flex;
    margin-left: 40px;
  }
}
</style>