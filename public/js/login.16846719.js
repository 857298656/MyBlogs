(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"73fb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-login-body"},[a("my-share",{attrs:{share:"登录"}}),a("div",{staticClass:"m-login-form"},[a("form",{attrs:{action:""}},[a("div",{staticClass:"m-login-name"},[a("label",{attrs:{for:"login-username"}},[t._v("帐号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginId,expression:"loginId"}],attrs:{type:"text",name:"username",id:"login-username",value:"",placeholder:"请输入你的帐号",maxlength:"50",autocomplete:"new-password"},domProps:{value:t.loginId},on:{input:function(e){e.target.composing||(t.loginId=e.target.value)}}}),t.nameErr?a("span",{staticClass:"status"},[t._v("帐号错误或不一致")]):t._e()]),a("div",{staticClass:"m-login-pass"},[a("label",{attrs:{for:"login-password"}},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPwd,expression:"loginPwd"}],attrs:{type:"password",name:"password",id:"login-password",placeholder:"请输入你的密码",autocomplete:"new-password"},domProps:{value:t.loginPwd},on:{input:function(e){e.target.composing||(t.loginPwd=e.target.value)}}}),t.passErr?a("span",{staticClass:"status"},[t._v("密码不正确或错误")]):t._e()]),[a("div",[a("a",{on:{click:t.LoginClick}},[t._v("登录")]),a("router-link",{attrs:{to:"/register"}},[t._v("注册")])],1)]],2)])],1)},s=[],r=(a("4de4"),a("5530")),i=(a("96cf"),a("1da1")),o=a("2f62"),l=a("be63"),c={components:{MyShare:l["a"]},data:function(){return{loginId:"",loginPwd:"",nameErr:!1,passErr:!1}},watch:{$route:"datas"},methods:{LoginClick:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("login",{loginId:t.loginId,loginPwd:t.loginPwd});case 2:a=e.sent,a?t.$router.push("/"):(t.nameErr=!0,t.passErr=!0);case 4:case"end":return e.stop()}}),e)})))()}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])({datas:"getAdminData"})),{},{loginkey:function(){var t=this;return this.datas.filter((function(e,a){return t.loginId===e.loginId}))},loginpwdKey:function(){var t=this;return this.datas.filter((function(e,a){return t.loginPwd===e.loginPwd}))}})},d=c,u=(a("bdaa"),a("2877")),p=Object(u["a"])(d,n,s,!1,null,null,null);e["default"]=p.exports},bdaa:function(t,e,a){"use strict";a("fa0c")},be63:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-share-body"},[a("div",{staticClass:"m-share-tit"},[t._v(" "+t._s(t.share)+" ")])])},s=[],r={props:["share"]},i=r,o=a("2877"),l=Object(o["a"])(i,n,s,!1,null,null,null);e["a"]=l.exports},fa0c:function(t,e,a){}}]);
//# sourceMappingURL=login.16846719.js.map