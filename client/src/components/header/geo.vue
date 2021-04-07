<template>
  <div class="h-login">
    <ul v-if="!data">
      <li class="l-item">
        <router-link :to="{ name: 'login' }">登录</router-link>
      </li>
      <li>|</li>
      <li class="l-item">
        <router-link :to="{ name: 'register' }">注册</router-link>
      </li>
    </ul>
    <ul v-if="data">
      <li class="l-item">
        <a>{{ data.loginId }}</a>
      </li>
      <li>|</li>
      <li class="l-item">
        <a @click="loginOut">退出</a>
      </li>
    </ul>
    <router-link to="/release" class="l-release">发布</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['data']),
  },
  methods: {
    loginOut() {
      this.$store.dispatch('loginOut')
      if (this.$route.path !== '/index') {
        this.$router.push('/')
      }
    },
  },
}
</script>
