(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["21b73815"],{"032d":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("59ca"),s=a.n(n);a("ea7b"),a("e71f"),a("588e"),a("8934");var o={apiKey:"AIzaSyAXJ748gJgKC1O66r1rraIhMHixIBe8VnI",authDomain:"testdiegofirebaseyvuejs.firebaseapp.com",databaseURL:"https://testdiegofirebaseyvuejs.firebaseio.com",projectId:"testdiegofirebaseyvuejs",storageBucket:"testdiegofirebaseyvuejs.appspot.com",messagingSenderId:"902674652341",appId:"1:902674652341:web:9039351a07c8ef552a72fc",measurementId:"G-DZ85B0YF1G"};s.a.initializeApp(o);s.a.auth();var i=s.a.firestore();s.a.storage(),s.a.functions(),s.a.database()},1178:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit,reset:e.crearNuevoDocumento}},[a("q-input",{attrs:{type:"text",label:"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("q-input",{attrs:{type:"text",label:"Url"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),a("div",[a("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Registrar",type:"reset",color:"primary"}})],1)],1),a("div",[a("q-list",{attrs:{bordered:""}},e._l(e.usuarios,(function(t){return a("q-item",{key:t},[a("q-item-section",{attrs:{thumbnail:""}},[a("img",{staticClass:"imagenes",attrs:{src:t.url}})]),a("q-item-section",[e._v(e._s(t.name))])],1)})),1)],1)],1)},s=[],o=(a("7f7f"),a("032d")),i=a("8aa5"),r=a.n(i),u=(r.a.firestore(),{name:"modal",data:function(){return{name:"",url:"",urlS:"",usuarios:[]}},mounted:function(){var e=this;o["a"].collection("tabla:Productos").onSnapshot((function(t){e.usuarios=[],t.forEach((function(t){e.usuarios.push(t.data())}))}))},methods:{onSubmit:function(){console.log("entrado a summit");var e={name:"Los Angeles2",url:"CA"};o["a"].collection("Craze").doc("imagen3").set(e)},onReset:function(){},crearNuevoDocumento:function(){o["a"].collection("tabla:Productos").add({name:this.name,url:this.url}).then((function(e){console.log("Added document with ID: ",e.id)}))}}}),c=u,l=a("42e1"),m=a("eebe"),d=a.n(m),f=a("0378"),p=a("27f9"),b=a("9c40"),v=a("1c1c"),g=a("66e5"),h=a("4074"),I=Object(l["a"])(c,n,s,!1,null,null,null);t["default"]=I.exports;d()(I,"components",{QForm:f["a"],QInput:p["a"],QBtn:b["a"],QList:v["a"],QItem:g["a"],QItemSection:h["a"]})}}]);