(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54810152"],{"09fd":function(t,e,s){"use strict";var a=s("8272"),n=s.n(a);n.a},"1d80":function(t,e,s){},8272:function(t,e,s){},b1f5:function(t,e,s){"use strict";var a=s("1d80"),n=s.n(a);n.a},e960:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apitest"},[s("b-container",{staticClass:"bv-example-row"},[s("b-row",{staticClass:"mt-5"},[s("b-col",{attrs:{cols:"18",md:"12"}},[s("SearchBar",{ref:"SearchBar",attrs:{msg:t.serarch_Content},model:{value:t.serarch_Content,callback:function(e){t.serarch_Content=e},expression:"serarch_Content"}})],1)],1),s("b-row",{directives:[{name:"show",rawName:"v-show",value:t.isVisable,expression:"isVisable"}],staticClass:"mt-5"},[s("b-col",{attrs:{cols:"18",md:"12"}},[s("div",{staticClass:"text-center"},[s("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"dark",type:"grow",label:"Text Centered"}})],1)])],1),t._l(t.detailsList,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isVisable,expression:"!isVisable"}],key:e.detailId},[s("SearchResultItem",{staticClass:"resItemStyle",attrs:{item:e}})],1)}),s("b-row",{staticClass:"mt-2"},[s("b-col",{attrs:{cols:"18",md:"12"}},[s("div",{staticClass:"mr-0"},[s("b-pagination-nav",{attrs:{"number-of-pages":t.pageInfo.pages,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last",align:"center","use-router":"","link-gen":t.linkGen},on:{input:function(e){return t.onChange(e)}}})],1)])],1)],2)],1)},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchBar"},[s("b-input-group",{staticClass:"mt-5"},[s("b-dropdown",{attrs:{slot:"prepend",text:t.chosen_text,variant:"dark"},slot:"prepend"},t._l(t.cate_list,function(e){return s("b-dropdown-item",{key:e.id,on:{click:function(s){return t.choose_item(e.name)}}},[t._v(t._s(e.name))])}),1),s("b-form-input",{attrs:{placeholder:"请输入要搜索的内容"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchResult(e)}},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"outline-dark"},on:{click:t.searchResult}},[t._v("搜索")])],1)],1)],1)},r=[],c={name:"searchBar",data:function(){return{chosen_text:"全部",searchContent:""==this.msg?"":this.msg,cate_list:[{id:1,name:"抗菌剂"},{id:2,name:"柔软剂"},{id:3,name:"阻燃剂"},{id:4,name:"抗皱整理剂"},{id:5,name:"抗紫外线剂"},{id:6,name:"抗静电剂"},{id:7,name:"防水防油剂"},{id:8,name:"全部"}]}},props:{msg:String},methods:{choose_item:function(t){"全部"!=t?(this.chosen_text=t,this.searchContent=t):(this.chosen_text=t,this.searchContent="")},searchResult:function(){""!=this.searchContent&&null!=this.searchContent?this.$router.push({path:"/search/".concat(this.searchContent)}):alert("输入不能为空!")}}},o=c,l=s("2877"),h=Object(l["a"])(o,i,r,!1,null,null,null),d=h.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchResultItem"},[s("b-row",{staticClass:"mt-5"},[s("b-col",{attrs:{cols:"18",md:"12"}},[s("ul",{staticClass:"list-unstyled"},[s("b-media",{staticClass:"li_style",attrs:{tag:"li","right-align":"","vertical-align":"center"}},[s("div",{staticClass:"mt-0 mb-1",on:{click:t.toDeatilsPage}},[s("label",{staticClass:"title"},[t._v(t._s(t.item.cnName))])]),s("div",[s("b-badge",{staticClass:"mr-2",attrs:{pill:"",variant:"success"}},[t._v(t._s(t.item.reagent.reagentType))]),s("b-badge",{staticClass:"mr-2",attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t.item.aliasesName))]),s("b-badge",{staticClass:"mr-2",attrs:{pill:"",variant:"warning"}},[t._v(t._s(t.item.company))])],1),s("div",{staticClass:"mt-2 mb-1 performance font_style"},[s("span",{staticClass:"tag_style"},[t._v("【性能】")]),t._v(t._s(t.item.performance)+"\n            ")]),s("div",{staticClass:"mt-2 mb-1 purpose font_style"},[s("span",{staticClass:"tag_style"},[t._v("【用途】")]),t._v(t._s(t.item.purpose)+"\n            ")])])],1)])],1)],1)},m=[],p={name:"searchResultItem",props:{item:Object},methods:{toDeatilsPage:function(){this.$router.push({name:"details",params:{type:this.item.reagent.reagentType,id:this.item.detailId}})}}},f=p,b=(s("b1f5"),Object(l["a"])(f,u,m,!1,null,"8e5e8e1c",null)),_=b.exports,v={name:"apitest",data:function(){return{detailsList:"",search_id:"",serarch_Content:this.$route.params.searchContent,isVisable:!0,pageInfo:{}}},mounted:function(){var t=this;switch(this.$route.params.searchContent){case"抗静电剂":this.search_id=1;break;case"阻燃剂":this.search_id=2;break;default:this.search_id=null}var e="https://www.domyown.top/ssm/details/".concat(this.search_id);this.axios.get(e,{params:{pn:1}}).then(function(e){t.isVisable=!1,t.detailsList=e.data.extend.pageInfo.list,t.pageInfo=e.data.extend.pageInfo}).catch(function(t){return console.log(t)})},beforeRouteUpdate:function(t,e,s){this.isVisable=!0,s(),this.doSearch()},methods:{doSearch:function(){var t=this;switch(this.$route.params.searchContent){case"抗静电剂":this.search_id=1;break;case"阻燃剂":this.search_id=2;break;default:this.search_id=null}var e="https://www.domyown.top/ssm/details/".concat(this.search_id);this.axios.get(e,{params:{pn:1}}).then(function(e){t.isVisable=!1,t.detailsList=e.data.extend.pageInfo.list,t.pageInfo=e.data.extend.pageInfo}).catch(function(t){return console.log(t)})},onChange:function(t){var e=this;null===t&&(t=1);var s="https://www.domyown.top/ssm/details/".concat(this.search_id);this.axios.get(s,{params:{pn:t}}).then(function(t){e.isVisable=!1,e.detailsList=t.data.extend.pageInfo.list,e.pageInfo=t.data.extend.pageInfo}).catch(function(t){return console.log(t)})},linkGen:function(t){return 1===t?"":"?pn=".concat(t)}},components:{SearchBar:d,SearchResultItem:_}},g=v,C=(s("09fd"),Object(l["a"])(g,a,n,!1,null,"02c5c393",null));e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-54810152.5e5c5c1a.js.map