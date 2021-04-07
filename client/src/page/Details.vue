<template>
  <div class="m-details-body">
    <el-col :span="14">
      <info-details />
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="9">
      <infor-mation />
    </el-col>
  </div>
</template>

<script>
import InforMation from '../components/index/information'
import InfoDetails from '../components/page/infoDetails'
export default {
  components: {
    InforMation,
    InfoDetails,
  },
}
</script>

<style lang="less">
@import '../assets/CSS/public/index.less';
@import '../assets/CSS/page/Details.less';
</style>
