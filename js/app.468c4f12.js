(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/firebase-playground/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",{staticClass:"blue--text text--darken-3"},[e._v("Wongnai")]),a("span",{staticClass:"font-weight-light orange--text"},[e._v(" Firebase Playground")])])],1),a("v-content",[a("FirebaseInitializer")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"d-flex pa-2"},[a("v-card-text",[e.isFirebaseInit?a("div",{staticClass:"green--text"},[e._v("Ready!")]):e._e(),a("v-textarea",{attrs:{name:"firebaseConfig",label:"Firebase Config"},model:{value:e.firebaseConfig,callback:function(t){e.firebaseConfig=t},expression:"firebaseConfig"}}),a("v-btn",{staticClass:"white--text",attrs:{color:"orange"},on:{click:e.setConfig}},[e._v("Initialize Firebase App!")])],1)],1)],1)},s=[],l=(a("ac1f"),a("5319"),a("8aa50")),c=a.n(l),u=a("2f62");n["a"].use(u["a"]);var f=new u["a"].Store({state:{isFirebaseInit:!1},mutations:{setFirebaseStatus:function(e,t){e.isFirebaseInit=t}}}),p=f,b="fbpg.fk",d={name:"FirebaseInitializer",methods:{setConfig:function(){var e=this.firebaseConfig.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g,'"$2": ');localStorage.setItem(b,e),c.a.initializeApp(e),alert("Firebase initialization is successfully!"),p.commit("setFirebaseStatus",!0)}},data:function(){return{firebaseConfig:localStorage.getItem(b)}},computed:{isFirebaseInit:function(){return p.state.isFirebaseInit}}},v=d,g=a("2877"),h=a("6544"),m=a.n(h),y=a("8336"),x=a("b0af"),C=a("99d9"),_=a("a523"),w=a("a844"),F=Object(g["a"])(v,o,s,!1,null,null,null),O=F.exports;m()(F,{VBtn:y["a"],VCard:x["a"],VCardText:C["a"],VContainer:_["a"],VTextarea:w["a"]});var j={name:"App",components:{FirebaseInitializer:O}},I=j,S=a("7496"),V=a("40dc"),P=a("a75b"),k=a("2a7f"),z=Object(g["a"])(I,r,i,!1,null,null,null),T=z.exports;m()(z,{VApp:S["a"],VAppBar:V["a"],VContent:P["a"],VToolbarTitle:k["a"]});var A=a("f309");n["a"].use(A["a"]);var M=new A["a"]({icons:{iconfont:"mdi"}});n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.468c4f12.js.map