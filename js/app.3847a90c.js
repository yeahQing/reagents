(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5b832cb9":"c24695b3","chunk-69f93ff7":"1e7fa7c0","chunk-8948a1e4":"3c323f62"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5b832cb9":1,"chunk-69f93ff7":1,"chunk-8948a1e4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5b832cb9":"f01a9096","chunk-69f93ff7":"5d07ea6a","chunk-8948a1e4":"b8936385"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/reagents/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cbe":function(e,t,n){"use strict";var r=n("7275"),a=n.n(r);a.a},"0f3d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("myheader"),n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"myheader"},[n("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[n("b-navbar-brand",{staticStyle:{cursor:"pointer"},on:{click:e.toHome}},[e._v("SearchReagents")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{on:{click:e.toHome}},[e._v("首页")]),n("b-nav-item",{on:{click:e.toPage}},[e._v("MarkDown")]),n("b-nav-item",{on:{click:e.toHome}},[e._v("功能剂种类")])],1)],1)],1)],1)},u=[],i={name:"myheader",methods:{toHome:function(){this.$router.push("/")},toPage:function(){this.$router.push("/detailPage")}}},l=i,s=(n("93df"),n("2877")),f=Object(s["a"])(l,c,u,!1,null,"a3d94850",null),d=f.exports,h={name:"app",components:{myheader:d}},p=h,m=(n("7c55"),Object(s["a"])(p,a,o,!1,null,null,null)),v=m.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"Mycontainer"},[n("b-card",{attrs:{overlay:"","img-src":"https://picsum.photos/id/192/1500/681","img-alt":"Card Image"}},[n("b-card-text",[n("p",{staticStyle:{"font-size":"2.5rem"}},[n("label",{staticStyle:{color:"#989898"}},[e._v("Functional")]),e._v(" \n            "),n("label",{staticStyle:{color:"#989898"}},[e._v("Reagents")]),e._v(" \n          ")]),n("label",{staticStyle:{color:"#989898"}},[e._v("快速搜索各种功能剂")])]),n("b-form-input",{staticClass:"input-group mt-5",attrs:{size:"lg",placeholder:"抗静电剂,阻燃剂..."},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchResult(t)}},model:{value:e.searchContent,callback:function(t){e.searchContent=t},expression:"searchContent"}}),n("footer",{staticClass:"Myfooter"},[e._v("©2019 Designed by YeahQing.")])],1)],1)])},y=[],k={name:"home",data:function(){return{searchContent:""}},methods:{searchResult:function(){""!=this.searchContent&&null!=this.searchContent?this.$router.push({path:"/search/".concat(this.searchContent)}):alert("输入不能为空!")}}},_=k,C=(n("0cbe"),Object(s["a"])(_,g,y,!1,null,"09cf7006",null)),w=C.exports;r["default"].use(b["a"]);var S=new b["a"]({base:"/reagents/",mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/apitest",name:"apitest",component:function(){return n.e("chunk-8948a1e4").then(n.bind(null,"f118"))},meta:{keepAlive:!0}},{path:"/search/:searchContent",name:"searchResult",component:function(){return n.e("chunk-8948a1e4").then(n.bind(null,"f118"))}},{path:"/details/:type/:id",name:"details",component:function(){return n.e("chunk-5b832cb9").then(n.bind(null,"9f52"))},meta:{keepAlive:!0}},{path:"/detailPage",name:"detailPage",component:function(){return n.e("chunk-69f93ff7").then(n.bind(null,"ce1b"))}}]}),O=n("9f7b"),P=n.n(O),j=(n("f9e3"),n("2dd8"),n("bc3a")),x=n.n(j),E=n("a7fe"),A=n.n(E),$=n("b2d8"),T=n.n($);n("64e1");r["default"].use(P.a),r["default"].use(A.a,x.a),r["default"].use(T.a),r["default"].config.productionTip=!1,new r["default"]({router:S,render:function(e){return e(v)}}).$mount("#app")},"5c48":function(e,t,n){},7275:function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},"93df":function(e,t,n){"use strict";var r=n("0f3d"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3847a90c.js.map