<template>
  <div class="h-top">
    <div class="h-topBar">
      <el-col :span="12">
        <m-nav />
      </el-col>
      <el-col :span="12">
        <m-geo />
      </el-col>
    </div>
  </div>
</template>

<script>
import MNav from './nav'
import MGeo from './geo'
export default {
  components: {
    MNav,
    MGeo,
  },
}
</script>

<style lang="less">
@import '../../assets/CSS/header/topBar.less';
</style>
