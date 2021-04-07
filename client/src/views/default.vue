<template>
  <div class="layout-default">
    <el-container>
      <el-header height='100%'>
          <my-header />
      </el-header>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../components/header/index';
export default {
    components: {
        MyHeader
    }
}
</script>

<style lang='less'>
@import '../assets/CSS/public/default.less';
</style>