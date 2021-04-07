<template>
  <div>
    <template v-if="datas">
      <div class="m-container" v-for="e in datas.slice(0, 2)" :key="e.id">
        <div class="m-content">
          <p class="m-title">{{ e.title }}</p>
          <span class="m-item">发布于：{{ e.createdAt | handleDate }}</span>
          <span class="m-item">作者：{{ e.author }}</span>
          <!-- <span class="m-item">{{ e.collection }}点赞</span> -->
          <p class="m-text">{{ e.content }}</p>
          <img :src="e.imgurl" alt="" />
          <div class="m-foot" @click="getDetail(e.id)">
            <router-link :to="{ name: 'details' }" :key="e.id"
              >阅读全文>></router-link
            >
          </div>
        </div>
        <div class="m-time">
          <div>
            <span> {{ e.createdAt | handleDate('MM月') }} </span>
            <span class="m-em">
              {{ e.createdAt | handleDate('DD') }}
            </span>
          </div>
        </div>
        <div class="m-bookmark">
          <span>书签</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  methods: {
    getDetail(id) {
      this.$store.commit('setArticId', id)
      if (this.data) {
        this.$store.commit('setArticId', id)
      } else {
        if (confirm('请登录')) {
          this.$router.push('/login')
        }
      }
    },
  },
  computed: {
    ...mapState(['data']),
    ...mapGetters({
      datas: 'getArticlData',
      id: 'getArticId',
    }),
  },
  watch: {
    $route: ['datas'],
  },
}
</script>
