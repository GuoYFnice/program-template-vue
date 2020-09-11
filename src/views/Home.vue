<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header title="VUE_TEMPLATE"/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu/>
        </el-aside>
        <el-main>
          <Breadcrumb/>
          <div class="content">
            <PageTitle/>
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import PageTitle from './components/PageTitle.vue'
import Breadcrumb from './components/Breadcrumb.vue'

@Component({
  components: {
    Menu,
    Header,
    PageTitle,
    Breadcrumb
  },
})
export default class Home extends Vue {
  private created(): void {
  }
}
</script>
<style lang="scss">
.home {
  .el-header {
    border: 1px solid #e5e5e5;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    height: calc( 100vh - 80px );
    border: 1px solid #e5e5e5;
    color: #333;
    line-height: 200px;
  }
  .el-main {
    height: calc( 100vh - 80px );
    border: 1px solid #e5e5e5;
    color: #333;
    text-align: center;
    background: #e5e5e5;
    line-height: 160px;
  }
  .content {
    background: #fff;
    height: calc(100% - 30px);
    padding: 0 20px;
  }
}
</style>