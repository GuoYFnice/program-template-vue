import { Vue, Component } from 'vue-property-decorator';

declare module 'vue/types/vue' {
    interface Vue {
      visible: boolean;
    }
}

@Component
export default class resetFields extends Vue {
    visible: boolean = false
    private reset(name:string):void{
      console.log(this.$refs[name])
      this.$refs[name].resetFields()
    }
}