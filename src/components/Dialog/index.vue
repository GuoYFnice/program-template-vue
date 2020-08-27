<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%">
    <span>{{content}}</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="closeDialog">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import dialogVisible from '../../mixins/dialogVisible'

@Component({
  mixins: [dialogVisible]
})
export default class Dialog extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private content!: string;
  private created(): void {
  }
}
</script>

<style lang="scss">
.content-box {
}
</style>