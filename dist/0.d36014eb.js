(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,n,s){},27:function(t,n,s){"use strict";var e=s(16);s.n(e).a},49:function(t,n,s){"use strict";s.r(n);var e={data:function(){return{btnList:[{text:"to demo list page",name:"list"},{text:"to jsl-vue-h5 npm site",location:"https://www.npmjs.com/package/jsl-vue-h5"},{text:"to Jason Liao github",location:"https://github.com/8bulbs"},{text:"to Jason Liao blog",location:"https://8bulbs.github.io"}]}},methods:{handleClick:function(t){this.btnList[t].name?this.$router.push({name:this.btnList[t].name}):window.location=this.btnList[t].location}}},o=(s(27),s(5)),i=Object(o.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"home-root"},[s("div",{staticClass:"avatar"}),s("p",{staticClass:"welcome title"},[t._v("\n    welcome to jsl-vue-h5\n  ")]),s("p",{staticClass:"welcome"},[t._v("\n    a vue.js plugins library for h5 devlopment\n  ")]),t._l(t.btnList,function(n,e){return s("jsl-button",{key:e+"home-btn",staticClass:"home-btn",attrs:{text:n.text},nativeOn:{click:function(n){t.handleClick(e)}}})})],2)},[],!1,null,"9ff877d2",null);i.options.__file="home.vue";n.default=i.exports}}]);