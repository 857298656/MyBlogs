<template>
  <div class="m-details" v-if="id">
    <div class="m-details-container">
      <div class="d-content">
        <p class="d-title">{{ datas.title }}</p>
        <span class="d-item">发布于：{{ datas.createdAt | handleDate }}</span>
        <span class="d-item">作者：{{ datas.author }}</span>
        <!-- <span class="m-item">{{ e.collection }}点赞</span> -->
        <p class="d-text">{{ datas.content }}</p>
        <img :src="datas.imgurl" alt="" />
        <div class="d-foot" v-if="!data">
          <router-link to="/">登录后才可以评论>></router-link>
        </div>
      </div>
      <div class="d-time">
        <div>
          <span> {{ datas.createdAt | handleDate('MM月') }} </span>
          <span class="d-em">
            {{ datas.createdAt | handleDate('DD') }}
          </span>
        </div>
      </div>
      <div class="d-bookmark">
        <span>书签</span>
      </div>
    </div>
    <div class="d-comment-list">
      <div class="d-vertical">
        <div class="d-user">
          <a href="/" class="d-user-head">{{ data.loginId }}</a>
        </div>
        <div class="d-area">
          <textarea
            id="d-inp"
            cols="80"
            rows="5"
            placeholder="发表评论"
            v-model="Commenttext"
          ></textarea>
          <button type="submit" class="d-comment" @click="addComment">
            发表评论
          </button>
        </div>
      </div>
      <div v-for="item in comDataKey1" :key="item.id">
        <template v-if="item.ArticleId == id">
          <div class="d-comment-user">
            <a href="/" class="d-comment-user-header">{{ item.commentId }}</a>
          </div>
          <div class="d-com">
            <p class="d-text">
              {{ item.content }}
            </p>
            <div class="d-info">
              <span class="d-comment-time">{{
                item.createdAt | handleCn
              }}</span>
              <span class="d-reply" @click="CommentItem(item.commentId)"
                >回复</span
              >
              <span
                class="d-delete"
                @click="CommentDelete(item.id, item.commentId)"
                >删除</span
              >
            </div>

            <div
              class="d-reply-box"
              v-for="repitem in comDataKey2"
              :key="repitem.id"
            >
              <template v-if="item.commentId == repitem.commentId">
                <div class="d-reply-user">
                  <a href="/" class="d-replyTo-user">{{ repitem.replyId }}</a>
                  <span>回复</span>
                  <a href="/" class="d-replyTo-user">{{
                    repitem.replyWhoId
                  }}</a>
                </div>
                <div class="d-reply-con">
                  <span class="d-reply-text">{{ repitem.content }}</span>
                </div>
                <div class="d-info">
                  <span class="d-comment-time">{{
                    repitem.createdAt | handleCn
                  }}</span>
                  <span
                    class="d-reply"
                    @click="ReplyItem(repitem.replyId, repitem.commentId)"
                    >回复</span
                  >
                  <span
                    class="d-delete"
                    @click="ReplyDelete(repitem.id, repitem.replyId)"
                    >删除</span
                  >
                </div>
              </template>
            </div>
            <div class="d-vertical" v-show="item.commentId == IsShow">
              <div class="d-user">
                <a href="/" class="d-user-head">{{ data.loginId }}</a>
              </div>
              <div class="d-area">
                <textarea
                  id="d-inp"
                  cols="80"
                  rows="5"
                  :placeholder="'回复  ' + ReplyWhoId"
                  v-model="Replytext"
                  :readonly="ReplyOnly"
                ></textarea>
                <button
                  type="submit"
                  class="d-comment"
                  @click="addReply(item.commentId)"
                >
                  发表评论
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import * as CommentApi from '../../api/Comment'
import { mapGetters, mapState } from 'vuex'
export default {
  inject: ['reload'],
  data() {
    return {
      Replytext: '',
      Commenttext: '',
      datas: '',
      ReplyWhoId: '',
      IsShow: '',
      ReplyOnly: false,
    }
  },
  methods: {
    CommentItem(id) {
      this.IsShow = id
      this.ReplyWhoId = id
    },
    ReplyItem(id, show) {
      this.ReplyWhoId = id
      this.IsShow = show
      if (this.ReplyWhoId == this.data.loginId) {
        this.ReplyOnly = true
      } else {
        this.ReplyOnly = false
      }
    },
    addComment() {
      CommentApi.addComment(
        this.data.loginId,
        '',
        '',
        this.Commenttext,
        false,
        this.id
      )
      this.Commenttext = ''
      this.reload()
    },
    addReply(id) {
      CommentApi.addComment(
        id,
        this.data.loginId,
        this.ReplyWhoId,
        this.Replytext,
        true,
        this.id
      )
      this.Replytext = ''
      this.reload()
    },
    ReplyDelete(id, self) {
      if (self == this.data.loginId) {
        CommentApi.DeleteComment(id)
      }
    },
    CommentDelete(id, self) {
      if (self == this.data.loginId) {
        CommentApi.DeleteComment(id)
      }
    },
  },
  computed: {
    ...mapState(['data']),
    ...mapGetters({
      id: 'getArticId',
      comDatas: 'getCommentDatas',
    }),
    comDataKey1() {
      return this.comDatas.filter((item) => {
        return item.flag == false
      })
    },
    comDataKey2() {
      return this.comDatas.filter((item) => {
        return item.flag == true
      })
    },
  },
  created() {
    setTimeout(async () => {
      const ArIdData = await this.$store.dispatch('getArIdData', this.id)
      this.datas = ArIdData
    }, 500)
  },
  watch: {
    $route: ['datas', 'id', 'comDatas'],
    async id(val, oldVal) {
      if (oldVal != val || val) {
        const ArIdData = await this.$store.dispatch('getArIdData', this.id)
        this.datas = ArIdData
      }
    },
  },
}
</script>
