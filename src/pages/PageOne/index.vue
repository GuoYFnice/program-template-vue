<template>
  <div class="content-box">
    one
    <el-button @click="dialogVisible = true">click</el-button>
    <Dialog title="提示" :dialogVisible="dialogVisible"  content="123" @close="dialogVisible = false" @confirm="dialogVisible = false"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dialog from '../../components/Dialog/index.vue'

@Component({
  components: { Dialog },
})
export default class PageOne extends Vue {
  dialogVisible:boolean = false
  title :string = ''
  private handleOpen(): void {
  } 
  private handleClose(): void {
  }
}
</script>

<style lang="scss">
</style>