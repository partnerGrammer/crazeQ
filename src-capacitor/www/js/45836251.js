(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["45836251"],{"032d":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("59ca"),s=a.n(n);a("ea7b"),a("e71f"),a("588e"),a("8934");var o={apiKey:"AIzaSyAXJ748gJgKC1O66r1rraIhMHixIBe8VnI",authDomain:"testdiegofirebaseyvuejs.firebaseapp.com",databaseURL:"https://testdiegofirebaseyvuejs.firebaseio.com",projectId:"testdiegofirebaseyvuejs",storageBucket:"testdiegofirebaseyvuejs.appspot.com",messagingSenderId:"902674652341",appId:"1:902674652341:web:9039351a07c8ef552a72fc",measurementId:"G-DZ85B0YF1G"};s.a.initializeApp(o);s.a.auth();var i=s.a.firestore();s.a.storage(),s.a.functions()},"588e":function(e,t,a){"use strict";a.r(t);a("2e66")},"59ca":function(e,t,a){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var s=n(a("c23d"));
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
 */e.exports=s},8934:function(e,t,a){"use strict";a.r(t);a("001a")},dba9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.crearNuevoDocumento}},[a("q-input",{attrs:{type:"text",label:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{type:"text",label:"Url"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),a("div",[a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Registrar",type:"reset",color:"primary"}})],1)],1),a("div",[a("q-list",{attrs:{bordered:""}},e._l(e.usuarios,(function(t){return a("q-item",{key:t},[a("q-item-section",{attrs:{thumbnail:""}},[a("img",{staticClass:"imagenes",attrs:{src:t.url}})]),a("q-item-section",[e._v(e._s(t.name))])],1)})),1)],1)],1)},s=[],o=(a("7f7f"),a("032d")),i=a("8aa5"),r=a.n(i),u=(r.a.firestore(),{name:"modal",data:function(){return{name:"",url:"",urlS:"",usuarios:[]}},mounted:function(){var e=this;o["a"].collection("Craze").onSnapshot((function(t){e.usuarios=[],t.forEach((function(t){e.usuarios.push(t.data())}))}))},methods:{onSubmit:function(){console.log("entrado a summit");var e={name:"Los Angeles2",url:"CA"};o["a"].collection("Craze").doc("imagen3").set(e)},onReset:function(){},crearNuevoDocumento:function(){o["a"].collection("Craze").add({name:this.name,url:this.url}).then((function(e){console.log("Added document with ID: ",e.id)}))}}}),c=u,l=a("2877"),m=a("fe09"),f=Object(l["a"])(c,n,s,!1,null,null,null);t["default"]=f.exports;f.options.components=Object.assign({QForm:m["j"],QInput:m["m"],QBtn:m["c"],QList:m["r"],QItem:m["n"],QItemSection:m["p"]},f.options.components||{})},e71f:function(e,t,a){"use strict";a.r(t);a("e89a")},ea7b:function(e,t,a){"use strict";a.r(t);a("b7aa")}}]);