(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["33e5566d"],{"032d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a("59ca"),n=a.n(s);a("ea7b"),a("e71f"),a("588e"),a("8934");var o={apiKey:"AIzaSyAXJ748gJgKC1O66r1rraIhMHixIBe8VnI",authDomain:"testdiegofirebaseyvuejs.firebaseapp.com",databaseURL:"https://testdiegofirebaseyvuejs.firebaseio.com",projectId:"testdiegofirebaseyvuejs",storageBucket:"testdiegofirebaseyvuejs.appspot.com",messagingSenderId:"902674652341",appId:"1:902674652341:web:9039351a07c8ef552a72fc",measurementId:"G-DZ85B0YF1G"};n.a.initializeApp(o);n.a.auth();var i=n.a.firestore();n.a.storage(),n.a.functions()},5524:function(t,e,a){"use strict";var s=a("f5d0"),n=a.n(s);n.a},"588e":function(t,e,a){"use strict";a.r(e);a("2e66")},"59ca":function(t,e,a){"use strict";function s(t){return t&&"object"===typeof t&&"default"in t?t["default"]:t}var n=s(a("c23d"));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */t.exports=n},8934:function(t,e,a){"use strict";a.r(e);a("001a")},e71f:function(t,e,a){"use strict";a.r(e);a("e89a")},ea7b:function(t,e,a){"use strict";a.r(e);a("b7aa")},f5d0:function(t,e,a){},fa65:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%",width:"100%",position:"absolute"}},[a("q-btn",{staticStyle:{float:"right",left:"-5%",top:"3%"},attrs:{color:"white","text-color":"black",label:"<",to:"/slider"}}),a("div",{staticClass:"text-h5",staticStyle:{"margin-top":"5%","margin-left":"5%"}},[t._v("Prendas que te gustan")]),a("hr",{staticStyle:{"margin-top":"5%"}}),a("div",{staticClass:"row q-col-gutter-x-xs q-col-gutter-y-lg",staticStyle:{"margin-bottom":"15%"}},t._l(t.posts,(function(e){return a("q-btn",{key:e,staticClass:"contenedor",attrs:{flat:"",to:"/details"}},[a("q-img",{staticClass:"rounded-borders imagencloseth animated rotateInDownLeft delay-5s",attrs:{src:e.url,"spinner-color":"white",to:"/details"}},[a("div",{staticClass:"text",staticStyle:{width:"100%","text-align":"center"}},[t._v("Descripcion")])])],1)})),1)],1)},n=[],o=a("032d"),i=a("8aa5"),r=a.n(i),c=(r.a.firestore(),{name:"PageIndex",data:function(){return{posts:[],post:""}},methods:{myFunction:function(){}},created:function(){},mounted:function(){var t=this;o["a"].collection("Craze").onSnapshot((function(e){t.posts=[],e.forEach((function(e){t.posts.push(e.data()),console.log(t.posts)}))}))}}),u=c,l=(a("5524"),a("2877")),f=a("fe09"),d=Object(l["a"])(u,s,n,!1,null,null,null);e["default"]=d.exports;d.options.components=Object.assign({QBtn:f["c"],QImg:f["l"]},d.options.components||{})}}]);