<template>
  <div class="m-register-body">
    <my-share share="注册" />
    <div class="m-register-form">
      <el-form
        :model="regRule"
        :rules="rules"
        ref="regRule"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="帐号：" prop="name">
          <el-input
            v-model.number="regRule.name"
            placeholder="请输入帐号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="regRule.password"
            autocomplete="new-password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="password2">
          <el-input
            type="password"
            v-model="regRule.password2"
            autocomplete="new-password"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('regRule')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as logApi from '../api/loginApi'
import MyShare from '../components/page/share'
export default {
  components: {
    MyShare,
  },
  data() {
    var validateRegKey = (rule, value, callback) => {
      if (this.regIdKey && this.regIdKey.length > 0) {
        callback(new Error('帐号已存在'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.regRule.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      regRule: {
        name: '',
        password: '',
        password2: '',
      },
      rules: {
        name: [
          { required: true, message: '帐号不能为空', trigger: 'change' },
          {
            min: 2,
            max: 16,
            message: '长度在 2 到 16 个字符',
            trigger: 'blur',
          },
          { validator: validateRegKey, trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            min: 6,
            max: 16,
            message: '长度在 6 到 16 个字符',
            trigger: 'blur',
          },
        ],
        password2: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16个字符', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' },
        ],
      },
    }
  },
  watch: {
    $route: 'datas',
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          logApi.loginAdd(this.regRule.name, this.regRule.password)
          this.$router.push('/login')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  computed: {
    ...mapGetters({
      datas: 'getAdminData',
    }),
    regIdKey() {
      return this.datas.filter((item, index) => {
        return this.regRule.name === item.loginId
      })
    },
  },
}
</script>

<style lang="less">
@import '../assets/CSS/page/share.less';
@import '../assets/CSS/page/register.less';
</style>
