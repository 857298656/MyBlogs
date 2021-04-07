import Vue from 'vue'
import Vuex from 'vuex'
import * as loginApi from '../api/loginApi';
import * as articleApi from '../api/articleApi';
import * as commentApi from '../api/Comment'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Articid: 0,
        commid: 0,
        data: null,
        isLoading: false,
        adminDatas: null,
        articleDatas: null,
        articleIdData: null,
        commentDatas: null
    },
    getters: {
        getData (state) {
            return state.data
        },
        getAdminData (state) {
            return state.adminDatas
        },
        getArticlData (state) {
            return state.articleDatas
        },
        getArticId (state) {
            return state.Articid
        },
        getCommentDatas (state) {
            return state.commentDatas
        },
        getCommId (state) {
            return state.commid
        }
    },
    mutations: {
        setData (state, payload) {
            state.data = payload;
        },
        setIsLoading (state, payload) {
            state.isLoading = payload;
        },
        setAdminDatas (state, payload) {
            state.adminDatas = payload;
        },
        setArticleDatas (state, payload) {
            state.articleDatas = payload
        },
        setArticleIdData (state, payload) {
            state.articleIdData = payload
        },
        setArticId (state, payload) {
            state.Articid = payload
        },
        setCommId (state, payload) {
            state.commid = payload
        },
        setCommentDatas (state, payload) {
            state.commentDatas = payload
        }
    },
    actions: {
        async login ({ commit }, { loginId, loginPwd }) {
            commit("setIsLoading", true);
            const resp = await loginApi.login(loginId, loginPwd);
            commit("setData", resp.data);
            commit("setIsLoading", false);
            return resp.data;
        },
        loginOut ({ commit }) {
            commit("setData", null);
            loginApi.loginOut();
        },
        async SignedIn ({ commit }) {
            commit("setIsLoading", true);
            try {
                const resp = await loginApi.SignedIn();
                commit("setData", resp.data);
            }
            catch {
                commit("setData", null);
            }
            commit("setIsLoading", false);
        },
        async getArIdData ({ commit }, id) {
            const resp = await articleApi.getArticleId(id);
            commit("setArticleIdData", resp.data);
            return resp.data
        },
        async getAdminDatas ({ commit }) {
            const resp = await loginApi.getLogins();
            commit("setAdminDatas", resp.data);
            return resp.data;
        },
        async getArticle ({ commit }) {
            const resp = await articleApi.getArticles();
            commit("setArticleDatas", resp.data.datas);
            return resp.data;
        },
        async getComment ({ commit }) {
            const resp = await commentApi.getComments();
            commit('setCommentDatas', resp.data.datas);
            return resp.data.datas
        }
    },
    modules: {
    }
})
