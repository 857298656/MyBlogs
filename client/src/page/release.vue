<template>
  <div class="b-release">
    <my-share share="发布" />
    <div class="b-release-body">
      <div class="b-item">
        <label for="b-title" class="b-label">标题：</label>
        <input
          type="text"
          name="title"
          id="b-title"
          v-model="title"
          @change="TitleText"
        />
        <span class="status" v-show="titleErr">标题不能为空</span>
        <span class="status" v-show="titleCharErr">标题不能超过50个字符</span>
      </div>
      <div class="b-item">
        <label for="b-author" class="b-label">名字：</label>
        <input
          type="text"
          name="author"
          id="b-author"
          v-model="author"
          @change="AuthorText"
        />
        <span class="status" v-show="authorErr">名字不能为空</span>
        <span class="status" v-show="authorCharErr">名字不能超过20个字符</span>
      </div>
      <div class="b-flie">
        <span class="b-filename">文件上传：</span>
        <input type="file" name="img" @change="upload" accept="image/*" />
        <span class="file-status" v-show="fileErr">文件内容不能大于2M</span>
        <span class="file-status" v-show="fileTErr">文件不能为空</span>
      </div>
      <p class="b-text-content">内容：</p>
      <textarea
        cols="80"
        rows="10"
        id="b-content-area"
        v-model="content"
        @change="ContentText"
      />
      <span class="conte-status" v-show="contentErr">内容不能为空</span>
    </div>
    <div class="b-btn">
      <button class="b-release-btn" @click="Release">发布</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as articleApi from '../api/articleApi'
import axios from 'axios'
import MyShare from '../components/page/share'
export default {
  components: {
    MyShare,
  },
  data() {
    return {
      title: '',
      author: '',
      content: '',
      imgStr: '',
      titleErr: null,
      titleCharErr: null,
      authorErr: null,
      authorCharErr: null,
      fileErr: null,
      fileTErr: null,
      contentErr: null,
      flag: null,
    }
  },
  methods: {
    upload(e) {
      const token = localStorage.getItem('token')
      const formData = new FormData()
      formData.append(e.target.name, e.target.files[0])
      axios({
        method: 'POST',
        url: '/api/upload',
        data: formData,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          authorization: token,
        },
      })
        .then((resp) => resp.data)
        .then((resp) => {
          if (resp.code) {
            this.fileErr = true
          } else {
            this.imgStr = resp.data
            e.target.value = ''
            this.fileErr = false
          }
        })
    },
    ContentText(e) {
      if (e.target.value == '') {
        this.flag = false
        this.contentErr = true
      } else {
        this.flag = true
        this.contentErr = false
      }
    },
    TitleText(e) {
      if (e.target.value == '') {
        this.flag = false
        this.titleErr = true
      } else if (e.target.value.length > 50) {
        this.flag = false
        this.titleErr = false
        this.titleCharErr = true
      } else {
        this.flag = true
        this.titleErr = false
        this.titleCharErr = false
      }
    },
    AuthorText(e) {
      if (e.target.value == '') {
        this.flag = false
        this.authorErr = true
      } else if (e.target.value.length > 20) {
        this.flag = false
        this.authorErr = false
        this.authorCharErr = true
      } else {
        this.flag = true
        this.authorErr = false
        this.authorCharErr = false
      }
    },
    Release() {
      if (this.imgStr && this.title && this.author && this.content) {
        this.fileTErr = false
        this.titleErr = false
        this.authorErr = false
        this.contentErr = false
        if (
          !this.titleErr &&
          !this.titleCharErr &&
          !this.authorErr &&
          !this.authorCharErr &&
          !this.fileErr &&
          !this.fileTErr &&
          !this.contentErr &&
          this.flag &&
          this.title &&
          this.author &&
          this.content
        ) {
          articleApi.ArticleAdd(
            this.title,
            this.content,
            this.imgStr,
            this.author,
            this.data.id
          )
          this.$router.push('/')
          this.$router.go(0)
        }
      } else if (this.title) {
        this.titleErr = false
      } else if (this.author) {
        this.author = false
      } else if (this.content) {
        this.content = false
      } else if (this.imgStr) {
        this.fileTErr = false
      } else {
        this.fileTErr = true
        this.titleErr = true
        this.authorErr = true
        this.contentErr = true
      }
    },
  },
  computed: {
    ...mapState(['data']),
  },
}
</script>

<style lang="less">
@import '../assets/CSS/page/share.less';
@import '../assets/CSS/page/Release.less';
</style>
