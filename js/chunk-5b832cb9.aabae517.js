(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b832cb9"],{"9f52":function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"details"},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",{staticClass:"mt-3"},[a("b-col",{staticClass:"mt-5",attrs:{cols:"18",md:"12"}},[a("div",[a("b-card",[a("b-media",{attrs:{"no-body":""}},[(null!=s.details?s.flag=!0:s.falg=!1)?a("b-media-body",{directives:[{name:"show",rawName:"v-show",value:s.flag,expression:"flag"}],staticClass:"ml-3"},[a("span",{staticClass:"toPre",on:{click:s.toPrePage}},[s._v("返回")]),a("div",{staticClass:"cnName"},[a("h4",{staticClass:"mt-3 detailsName"},[s._v(s._s(s.details.cnName))])]),a("div",{staticClass:"details_container mt-1"},[a("h5",{staticClass:"details_span"},[s._v("类型")]),a("p",[s._v(s._s(s.type))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("别名")]),a("p",[s._v(s._s(s.details.aliasesName))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("生产厂商")]),a("p",[s._v(s._s(s.details.company))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("性能")]),a("p",[s._v(s._s(s.details.performance))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("用途")]),a("p",[s._v(s._s(s.details.purpose))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("组成结构")]),a("p",[s._v(s._s(s.details.structure))])]),a("div",{staticClass:"details_container"},[a("h5",{staticClass:"details_span"},[s._v("简要制法")]),a("p",[s._v(s._s(s.details.method))])]),a("div",{staticClass:"details_container mb-0"},[a("h5",{staticClass:"details_span"},[s._v("染整工艺")]),a("p",[s._v(s._s(s.details.technology))])])]):s._e()],1)],1)],1)])],1),a("b-row",{directives:[{name:"show",rawName:"v-show",value:s.isVisable,expression:"isVisable"}],staticClass:"mt-5"},[a("b-col",{attrs:{cols:"18",md:"12"}},[a("div",{staticClass:"text-center"},[a("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"dark",type:"grow",label:"Text Centered"}})],1)])],1)],1)],1)},i=[],l={name:"apitest",data:function(){return{isVisable:!0,d_id:this.$route.params.id,type:this.$route.params.type,details:null,flag:!1,current_page:1}},mounted:function(){var s=this,t="https://www.domyown.top/ssm/getDetail/".concat(this.d_id);this.axios.get(t).then(function(t){s.isVisable=!1,s.details=t.data.extend.detailsInfo}).catch(function(s){return console.log(s)})},methods:{toPrePage:function(){this.$router.push({name:"searchResult",params:{searchContent:this.type}})}},beforeRouteLeave:function(s,t,a){s.meta.keepAlive=!0,a()},components:{}},n=l,c=(a("f9a7"),a("2877")),d=Object(c["a"])(n,e,i,!1,null,"5a358294",null);t["default"]=d.exports},d6e6:function(s,t,a){},f9a7:function(s,t,a){"use strict";var e=a("d6e6"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-5b832cb9.aabae517.js.map