(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["avatar-upload"],{7913:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"components-container"},[e._m(0),t("pan-thumb",{attrs:{image:e.image}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-upload",tyle:"position: absolute;bottom: 15px;margin-left: 40px;"},on:{click:e.toggleShow}},[e._v(" Change Avatar ")]),t("avatar-upload",{attrs:{field:"avatar",width:300,height:300,params:e.params,headers:e.headers,url:"https://httpbin.org/post"},on:{close:e.onClose,"crop-upload-success":e.onCropUploadSuccess},model:{value:e.showImageUpload,callback:function(a){e.showImageUpload=a},expression:"showImageUpload"}})],1)},c=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("aside",[e._v(" This is based on "),t("a",{staticClass:"link-type",attrs:{href:"//github.com/dai-siki/vue-image-crop-upload"}},[e._v(" vue-image-crop-upload ")])])}],s=t("d4ec"),i=t("bee2"),r=t("2caf"),n=t("262e"),l=t("9ab4"),u=t("60a3"),p=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("image-crop-upload",{attrs:{field:e.field,url:e.url,width:e.width,height:e.height,params:e.params,headers:e.headers,"lang-type":e.language,"with-credentials":!0,"img-format":"png"},on:{"src-file-set":e.srcFileSet,"crop-success":e.cropSuccess,"crop-upload-success":e.cropUploadSuccess,"crop-upload-fail":e.cropUploadFail},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}})},d=[],h=t("0b4d"),b=t("ac1a"),m=function(e){Object(n["a"])(t,e);var a=Object(r["a"])(t);function t(){var e;return Object(s["a"])(this,t),e=a.apply(this,arguments),e.languageTypeList={en:"en",zh:"zh",es:"es-MX",ja:"ja",ko:"ko"},e}return Object(i["a"])(t,[{key:"srcFileSet",value:function(e,a,t){this.$emit("src-file-set",e,a,t)}},{key:"cropSuccess",value:function(e,a){this.$emit("crop-success",e,a)}},{key:"cropUploadSuccess",value:function(e,a){this.$emit("crop-upload-success",e,a)}},{key:"cropUploadFail",value:function(e,a){this.$emit("crop-upload-fail",e,a)}},{key:"show",get:function(){return this.value},set:function(e){this.$emit("input",e)}},{key:"language",get:function(){return this.languageTypeList[b["a"].language]}}]),t}(u["c"]);Object(l["a"])([Object(u["b"])({required:!0})],m.prototype,"value",void 0),Object(l["a"])([Object(u["b"])({required:!0})],m.prototype,"url",void 0),Object(l["a"])([Object(u["b"])({required:!0})],m.prototype,"field",void 0),Object(l["a"])([Object(u["b"])({default:300})],m.prototype,"width",void 0),Object(l["a"])([Object(u["b"])({default:300})],m.prototype,"height",void 0),Object(l["a"])([Object(u["b"])({default:function(){return null}})],m.prototype,"params",void 0),Object(l["a"])([Object(u["b"])({default:function(){return null}})],m.prototype,"headers",void 0),m=Object(l["a"])([Object(u["a"])({name:"AvatarUpload",components:{ImageCropUpload:h["a"]}})],m);var f=m,g=f,v=t("2877"),j=Object(v["a"])(g,p,d,!1,null,null,null),O=j.exports,w=t("3cbc"),y=function(e){Object(n["a"])(t,e);var a=Object(r["a"])(t);function t(){var e;return Object(s["a"])(this,t),e=a.apply(this,arguments),e.showImageUpload=!1,e.image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191",e.params={someParams:"your_params_goes_here"},e.headers={smail:"*_~"},e}return Object(i["a"])(t,[{key:"toggleShow",value:function(){this.showImageUpload=!this.showImageUpload}},{key:"onCropUploadSuccess",value:function(e,a){this.showImageUpload=!1,this.image=e.files[a]}},{key:"onClose",value:function(){this.showImageUpload=!1}}]),t}(u["c"]);y=Object(l["a"])([Object(u["a"])({name:"AvatarUploadDemo",components:{AvatarUpload:O,PanThumb:w["a"]}})],y);var k=y,U=k,_=(t("94d0"),Object(v["a"])(U,o,c,!1,null,"7fb491a8",null));a["default"]=_.exports},"94d0":function(e,a,t){"use strict";var o=t("ca12"),c=t.n(o);c.a},ca12:function(e,a,t){}}]);