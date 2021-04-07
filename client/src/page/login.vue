<template>
  <div class="m-login-body">
    <my-share share="登录" />
    <div class="m-login-form">
      <form action="">
        <div class="m-login-name">
          <label for="login-username">帐号：</label>
          <input
            type="text"
            name="username"
            id="login-username"
            value
            placeholder="请输入你的帐号"
            maxlength="50"
            autocomplete="new-password"
            v-model="loginId"
          />
          <span class="status" v-if="nameErr">帐号错误或不一致</span>
        </div>
        <div class="m-login-pass">
          <label for="login-password">密码：</label>
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="请输入你的密码"
            autocomplete="new-password"
            v-model="loginPwd"
          />
          <span class="status" v-if="passErr">密码不正确或错误</span>
        </div>
        <template>
          <div>
            <a @click="LoginClick">登录</a>
            <router-link to="/register">注册</router-link>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyShare from '../components/page/share'
export default {
  components: {
    MyShare,
  },
  data() {
    return {
      loginId: '',
      loginPwd: '',
      nameErr: false,
      passErr: false,
    }
  },
  watch: {
    $route: 'datas',
  },
  methods: {
    async LoginClick() {
      const user = await this.$store.dispatch('login', {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      })
      if (user) {
        this.$router.push('/')
      } else {
        this.nameErr = true
        this.passErr = true
      }
    },
  },
  computed: {
    ...mapGetters({
      datas: 'getAdminData',
    }),
    loginkey() {
      return this.datas.filter((item, index) => {
        return this.loginId === item.loginId
      })
    },
    loginpwdKey() {
      return this.datas.filter((item, index) => {
        return this.loginPwd === item.loginPwd
      })
    },
  },
}
</script>

<style lang="less">
@import '../assets/CSS/page/share.less';
@import '../assets/CSS/page/login.less';
</style>
