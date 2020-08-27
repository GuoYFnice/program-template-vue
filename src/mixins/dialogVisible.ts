import { Vue, Component } from 'vue-property-decorator';


declare module 'vue/types/vue' {
    interface Vue {
      visible: boolean;
    }
}

@Component
export default class dialogVisible extends Vue {
    visible: boolean = false
    private openDialog():void{
      this.visible = true
    }
    private closeDialog():void{
      this.visible = false
    }
}