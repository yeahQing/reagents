(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69f93ff7"],{"0c8c":function(t,e,a){},ce1b:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detailPage mt-5"},[a("mavon-editor",{staticClass:"markDwonPart",attrs:{value:t.articleDetail.technology,subfield:t.prop.subfield,defaultOpen:t.prop.defaultOpen,toolbarsFlag:t.prop.toolbarsFlag,editable:t.prop.editable,scrollStyle:t.prop.scrollStyle}})],1)},n=[],o={name:"detailPage",data:function(){return{articleDetail:""}},mounted:function(){var t=this,e="https://www.domyown.top/ssm/getDetail/4";this.axios.get(e).then(function(e){t.articleDetail=e.data.extend.detailsInfo}).catch(function(t){return console.log(t)})},computed:{prop:function(){var t={subfield:!1,defaultOpen:"preview",editable:!1,toolbarsFlag:!1,scrollStyle:!0};return t}}},i=o,r=(a("fa02"),a("2877")),c=Object(r["a"])(i,l,n,!1,null,"44dfedf5",null);e["default"]=c.exports},fa02:function(t,e,a){"use strict";var l=a("0c8c"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-69f93ff7.73be769d.js.map