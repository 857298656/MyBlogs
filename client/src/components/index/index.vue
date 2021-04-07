<template>
  <div class="m-body">
    <el-col :span="14">
      <container />
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="9">
      <infor-mation />
    </el-col>
  </div>
</template>

<script>
import Container from './container'
import InforMation from './information'
export default {
  components: {
    Container,
    InforMation,
  },
}
</script>

<style lang="less">
@import '../../assets/CSS/public/index.less';
</style>
