<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :show-close='showClose'
    :close-on-click-modal="closeOnClickModal"
    :width="width">
    <span>{{content}}</span>
    <span slot="footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="confirmDialog">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
  @Prop(Boolean) private dialogVisible!: false;
  @Prop(Boolean) private showClose!: true;
  @Prop(Boolean) private closeOnClickModal!: true;
  @Prop(String) private title!: string;
  @Prop(String) private width!: '50%';
  @Prop(String) private content!: string;
  private closeDialog (): void  {
    this.$emit('close')
  }
  private confirmDialog (): void  {
    this.$emit('confirm')
  }
}
</script>

<style lang="scss">
</style>