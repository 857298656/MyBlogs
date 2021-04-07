<template>
  <div class="m-mation">
    <div class="m-personal">
      <div class="m-img">
        <div class="m-head">
          <img src="../../assets/img/akari.jpg" alt="" />
        </div>
        <div v-if="!data">
          <span>请登录</span>
        </div>
        <div v-if="data">
          <span>{{ data.loginId }}</span>
        </div>
      </div>
    </div>
    <div class="m-blank"></div>
    <div class="m-article">
      <div class="m-label">
        <span>文章</span>
      </div>
      <div class="m-content">
        <template v-if="datas">
          <div
            class="m-article-option"
            v-for="e in datas.slice(0, 17)"
            @click="getDetail(e.id)"
            :key="e.id"
          >
            <router-link :to="{ name: 'details' }" :key="e.id">{{
              e.title
            }}</router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  watch: {
    $route: ['datas'],
  },
  methods: {
    getDetail(id) {
      this.$store.commit('setArticId', id)
    },
  },
  computed: {
    ...mapState(['data']),
    ...mapGetters({
      datas: 'getArticlData',
      id: 'getArticId',
    }),
  },
}
</script>
