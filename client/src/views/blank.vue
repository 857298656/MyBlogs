<template>
  <div class="layout-default">
    <el-container>
      <el-header height="100%">
        <my-header />
      </el-header>
      <el-main>
        <router-view v-if="isRouterAlive"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '../components/header/index'
export default {
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.$store.dispatch('getComment')
        this.isRouterAlive = true
      })
    },
  },
  components: {
    MyHeader,
  },
}
</script>

<style lang="less">
@import '../assets/CSS/public/default.less';
</style>
