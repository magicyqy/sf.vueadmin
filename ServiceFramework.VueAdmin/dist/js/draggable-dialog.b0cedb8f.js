(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["draggable-dialog"],{b2242:function(a,e,l){"use strict";l.r(e);var t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"components-container"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dialogTableVisible=!0}}},[a._v(" Open a Draggable Dialog ")]),l("el-dialog",{directives:[{name:"el-draggable-dialog",rawName:"v-el-draggable-dialog"}],attrs:{visible:a.dialogTableVisible,title:"Shipping address"},on:{"update:visible":function(e){a.dialogTableVisible=e},onDialogDrag:a.handleDialogDrag}},[l("el-select",{ref:"select",attrs:{placeholder:"Please select"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}},a._l(a.options,(function(a){return l("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1),l("el-table",{attrs:{data:a.gridData}},[l("el-table-column",{attrs:{property:"date",label:"Date",width:"150"}}),l("el-table-column",{attrs:{property:"name",label:"Name",width:"200"}}),l("el-table-column",{attrs:{property:"address",label:"Address"}})],1)],1)],1)},i=[],n=l("d4ec"),o=l("bee2"),r=l("2caf"),s=l("262e"),d=l("9ab4"),u=l("60a3"),c=function(a){Object(s["a"])(l,a);var e=Object(r["a"])(l);function l(){var a;return Object(n["a"])(this,l),a=e.apply(this,arguments),a.dialogTableVisible=!1,a.options=[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"}],a.value="",a.gridData=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],a}return Object(o["a"])(l,[{key:"handleDialogDrag",value:function(){this.$refs.select.blur()}}]),l}(u["c"]);c=Object(d["a"])([Object(u["a"])({name:"DraggableDialogDemo"})],c);var b=c,g=b,p=l("2877"),v=Object(p["a"])(g,t,i,!1,null,null,null);e["default"]=v.exports}}]);