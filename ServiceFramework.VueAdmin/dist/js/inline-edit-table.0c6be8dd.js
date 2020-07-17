(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["inline-edit-table"],{"793c":function(t,e,n){},"7bfc":function(t,e,n){"use strict";var a=n("793c"),i=n.n(a);i.a},9968:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),n("el-table-column",{attrs:{width:"180px",align:"center",label:"Date"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("parseTime")(e.row.timestamp)))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Author",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.author))])]}}])}),n("el-table-column",{attrs:{width:"105px",label:"Importance"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(+e.row.importance,(function(t){return n("svg-icon",{key:t,staticClass:"meta-item__icon",attrs:{name:"star"}})}))}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"Status",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-tag",{attrs:{type:t._f("articleStatusFilter")(a.status)}},[t._v(" "+t._s(a.status)+" ")])]}}])}),n("el-table-column",{attrs:{"min-width":"250px",label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?[n("el-input",{staticClass:"edit-input",attrs:{size:"small"},model:{value:a.title,callback:function(e){t.$set(a,"title",e)},expression:"row.title"}}),n("el-button",{staticClass:"cancel-btn",attrs:{size:"small",icon:"el-icon-refresh",type:"warning"},on:{click:function(e){return t.cancelEdit(a)}}},[t._v(" cancel ")])]:n("span",[t._v(t._s(a.title))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[a.edit?n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-check-outline"},on:{click:function(e){return t.confirmEdit(a)}}},[t._v(" Ok ")]):n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(t){a.edit=!a.edit}}},[t._v(" Edit ")])]}}])})],1)],1)},i=[],r=(n("d81d"),n("96cf"),n("1da1")),l=n("d4ec"),s=n("bee2"),c=n("2caf"),o=n("262e"),u=n("9ab4"),d=n("60a3"),f=n("9d25"),p=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.apply(this,arguments),t.list=[],t.listLoading=!0,t.listQuery={page:1,limit:10},t}return Object(s["a"])(n,[{key:"created",value:function(){this.getList()}},{key:"getList",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(f["d"])(this.listQuery);case 3:e=t.sent,n=e.data,a=n.items,this.list=a.map((function(t){return i.$set(t,"edit",!1),t.originalTitle=t.title,t})),setTimeout((function(){i.listLoading=!1}),500);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"cancelEdit",value:function(t){t.title=t.originalTitle,t.edit=!1,this.$message({message:"The title has been restored to the original value",type:"warning"})}},{key:"confirmEdit",value:function(t){t.edit=!1,t.originalTitle=t.title,this.$message({message:"The title has been edited",type:"success"})}}]),n}(d["c"]);p=Object(u["a"])([Object(d["a"])({name:"InlineEditTable"})],p);var m=p,b=m,h=(n("7bfc"),n("2877")),g=Object(h["a"])(b,a,i,!1,null,"3b3c6145",null);e["default"]=g.exports},"9d25":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return o}));var a=n("b32d"),i={id:0,status:"draft",title:"",fullContent:"",abstractContent:"",sourceURL:"",imageURL:"",timestamp:"",platforms:["a-platform"],disableComment:!1,importance:0,author:"",reviewer:"",type:"",pageviews:0},r=function(t){return Object(a["a"])({url:"/articles",method:"get",params:t})},l=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"get",params:e})},s=function(t){return Object(a["a"])({url:"/articles",method:"post",data:t})},c=function(t,e){return Object(a["a"])({url:"/articles/".concat(t),method:"put",data:e})},o=function(t){return Object(a["a"])({url:"/pageviews",method:"get",params:t})}}}]);