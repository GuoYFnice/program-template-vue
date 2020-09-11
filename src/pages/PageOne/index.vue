<template>
  <div class="content-box">
    <Form :formList="formList" :form="form" @query="handleQurey" @reset="reset('form')"/>
    <!-- <Dialog title="提示" :dialogVisible="dialogVisible"  content="123" @close="dialogVisible = false" @confirm="dialogVisible = false"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Dialog from '../../components/Dialog/index.vue'
import Form from '../../components/Form/index.vue'
import resetFields from "../../mixins/resetFields"

@Component({
  components: { Dialog,Form },
  mixins:[resetFields]
})
export default class PageOne extends Vue {
  dialogVisible:boolean = false
  title:string = ''
  formList :Array<any> = [
    {
      type :'input',
      key:'input',
      label:'input'
    },{
      type :'input',
      key:'input1',
      label:'input'
    },{
      type :'input',
      key:'input2',
      label:'input'
    },
  ]
  form:Object = {
    input:'',
    input1:'',
    input2:'',
  }
  private handleOpen(): void {
  } 
  private handleClose(): void {
  } 
  private handleQurey(): void {
    console.log(this.form,123)
  }
}
</script>

<style lang="scss">
</style>