(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["6faac188"],{5524:function(t,e,a){"use strict";var s=a("f5d0"),n=a.n(s);n.a},f5d0:function(t,e,a){},fa65:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",position:"absolute"}},[a("q-btn",{staticStyle:{float:"right",left:"-5%",top:"3%"},attrs:{color:"white","text-color":"black",label:"<",to:"/slider"}}),a("div",{staticClass:"text-h5",staticStyle:{"margin-top":"5%","margin-left":"5%"}},[t._v("Prendas que te gustan")]),a("hr",{staticStyle:{"margin-top":"5%"}}),a("div",{staticClass:"row q-col-gutter-x-xs q-col-gutter-y-lg",staticStyle:{"margin-bottom":"15%"}},t._l(t.posts,(function(e){return a("q-btn",{key:e,staticClass:"contenedor",attrs:{flat:"",to:"/details"}},[a("q-img",{staticClass:"rounded-borders imagencloseth",attrs:{src:e.url,"spinner-color":"white",to:"/details"}},[a("div",{staticClass:"text",staticStyle:{width:"100%","text-align":"center"}},[t._v("Descripcion")])])],1)})),1)],1)},n=[],o=a("bc3a"),i=a.n(o),c={name:"PageIndex",data:function(){return{posts:[],post:""}},methods:{myFunction:function(){}},created:function(){var t=this;i.a.get("https://backend-app-laravel.herokuapp.com/api/getGallery").then((function(e){t.posts=e.data,t.post=e.data[0],console.log(e)}))}},l=c,r=(a("5524"),a("2877")),u=a("fe09"),p=Object(r["a"])(l,s,n,!1,null,null,null);e["default"]=p.exports;p.options.components=Object.assign({QBtn:u["c"],QImg:u["l"]},p.options.components||{})}}]);