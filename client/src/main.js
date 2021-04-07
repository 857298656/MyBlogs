import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/CSS/main.css'


store.dispatch('SignedIn');
store.dispatch('getAdminDatas');
store.dispatch('getArticle');
store.dispatch('getComment');
Vue.use(ElementUI);

Vue.config.productionTip = false

moment.locale('zh-cn')
Vue.filter("handleDate", function (dateStr, pattern = "YYYY年MM月DD日") {
    moment.locale('zh-cn')
    return moment(dateStr).local().format(pattern);
})
Vue.filter('handleCn', function (dataStr, pattern = "YYYY-MM-DD HH:mm") {
    moment.locale('zh-cn');
    let date = moment(dataStr).local().fromNow()
    if (date.includes('天') || date.includes('月') || date.includes('年')) {
        return moment(dataStr).local().format(pattern)
    }
    else {
        return moment(dataStr).local().fromNow();
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
    beforeRouteEnter (to, from, next) {
        console.log('a')
        next()
    },
    beforeRouteUpdate (to, from) {
        console.log(this)
    },
}).$mount('#app')
