(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{3198:function(e,r,t){},"7bbb":function(e,r,t){"use strict";t("3198")},b0c0:function(e,r,t){var s=t("83ab"),a=t("9bf2").f,l=Function.prototype,n=l.toString,o=/^\s*function ([^ (]*)/,u="name";s&&!(u in l)&&a(l,u,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(e){return""}}})},be63:function(e,r,t){"use strict";var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"m-share-body"},[t("div",{staticClass:"m-share-tit"},[e._v(" "+e._s(e.share)+" ")])])},a=[],l={props:["share"]},n=l,o=t("2877"),u=Object(o["a"])(n,s,a,!1,null,null,null);r["a"]=u.exports},fcf4:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"m-register-body"},[t("my-share",{attrs:{share:"注册"}}),t("div",{staticClass:"m-register-form"},[t("el-form",{ref:"regRule",staticClass:"demo-ruleForm",attrs:{model:e.regRule,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"帐号：",prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入帐号"},model:{value:e.regRule.name,callback:function(r){e.$set(e.regRule,"name",e._n(r))},expression:"regRule.name"}})],1),t("el-form-item",{attrs:{label:"密码：",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"new-password",placeholder:"请输入密码"},model:{value:e.regRule.password,callback:function(r){e.$set(e.regRule,"password",r)},expression:"regRule.password"}})],1),t("el-form-item",{attrs:{label:"确认密码：",prop:"password2"}},[t("el-input",{attrs:{type:"password",autocomplete:"new-password",placeholder:"请确认密码"},model:{value:e.regRule.password2,callback:function(r){e.$set(e.regRule,"password2",r)},expression:"regRule.password2"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("regRule")}}},[e._v("注册")])],1)],1)],1)],1)},a=[],l=(t("4de4"),t("b0c0"),t("5530")),n=t("2f62"),o=t("a276"),u=t("be63"),i={components:{MyShare:u["a"]},data:function(){var e=this,r=function(r,t,s){e.regIdKey&&e.regIdKey.length>0?s(new Error("帐号已存在")):s()},t=function(r,t,s){t!==e.regRule.password?s(new Error("两次输入密码不一致!")):s()};return{regRule:{name:"",password:"",password2:""},rules:{name:[{required:!0,message:"帐号不能为空",trigger:"change"},{min:2,max:16,message:"长度在 2 到 16 个字符",trigger:"blur"},{validator:r,trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}],password2:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16个字符",trigger:"blur"},{validator:t,trigger:"blur"}]}}},watch:{$route:"datas"},methods:{submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;o["d"](r.regRule.name,r.regRule.password),r.$router.push("/login")}))}},computed:Object(l["a"])(Object(l["a"])({},Object(n["b"])({datas:"getAdminData"})),{},{regIdKey:function(){var e=this;return this.datas.filter((function(r,t){return e.regRule.name===r.loginId}))}})},c=i,m=(t("7bbb"),t("2877")),d=Object(m["a"])(c,s,a,!1,null,null,null);r["default"]=d.exports}}]);
//# sourceMappingURL=register.1d0196a5.js.map