(function(e){function n(n){for(var r,a,u=n[0],l=n[1],c=n[2],p=0,f=[];p<u.length;p++)a=u[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(n);while(f.length)f.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var l=t[u];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={1:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=l;i.push([2,0]),t()})({2:function(e,n,t){e.exports=t("Vtdi")},"39RD":function(e,n,t){"use strict";var r=t("C284"),o=t.n(r);o.a},C284:function(e,n,t){},Vtdi:function(e,n,t){"use strict";t.r(n);t("yt8O"),t("VRzm");var r=t("Kw5r"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a=(t("ZL7j"),t("KHd+")),u={},l=Object(a["a"])(u,o,i,!1,null,null,null),c=l.exports,s=t("jE9Z"),p=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"home"},[r("img",{attrs:{src:t("zwU1")}}),r("p",[e._v("Filters: ")]),r("input",{attrs:{type:"checkbox",name:"nam",value:"nam"},domProps:{checked:e.regions.indexOf("North America")>-1},on:{click:function(n){e.ToggleRegion("North America")}}}),e._v("North America"),r("br"),r("input",{attrs:{type:"checkbox",name:"sam",value:"sam"},domProps:{checked:e.regions.indexOf("South America")>-1},on:{click:function(n){e.ToggleRegion("South America")}}}),e._v("South America"),r("br"),r("input",{attrs:{type:"checkbox",name:"eu",value:"eu"},domProps:{checked:e.regions.indexOf("Europe")>-1},on:{click:function(n){e.ToggleRegion("Europe")}}}),e._v("Europe\n  "),r("table",{staticClass:"center"},[e._m(0),e._l(e.DeepSort(e.people,"nationality","name"),function(n,t){return r("tbody",{key:t},[e.regions.indexOf(n.region)>-1?r("tr",[r("td",[e._v("\n          "+e._s(n.name)+"\n        ")]),r("td",[e._v("\n          "+e._s(n.nationality)+"\n        ")])]):e._e()])})],2)])},f=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Nationality")])])])}],h={methods:{DeepSort:function(e,n,t,r){r=r||!1;for(var o={},i=0;i<e.length;i++)o[e[i][n]]=[];for(i=0;i<e.length;i++)o[e[i][n]].push(e[i]);var a=[],u=[];for(var l in o)a.push(l);a=this.Sort(a,r);for(var c=0;c<a.length;c++)u.push.apply(u,this.SortByAttribute(o[a[c]],t,r));return u},Sort:function(e,n){n=n||!1;for(var t=1;t<e.length;t++){var r=e[t],o=t-1;if(n)while(o>-1&&e[o]<r)e[o+1]=e[o],o-=1;else while(o>-1&&e[o]>r)e[o+1]=e[o],o-=1;e[o+1]=r}return e},SortByAttribute:function(e,n,t){t=t||!1;for(var r=0;r<e.length;r++){var o=e[r][n],i=r-1;if(t)while(i>-1&&e[i][n]<o)e[i+1][n]=e[i][n],i-=1;else while(i>-1&&e[i][n]>o)e[i+1][n]=e[i][n],i-=1;e[i+1][n]=o}return e}}},m={data:function(){return{people:[{name:"Jane",nationality:"Germany",region:"Europe"},{name:"Helen",nationality:"Brazil",region:"South America"},{name:"Mike",nationality:"USA",region:"North America"},{name:"Anja",nationality:"Netherlands",region:"Europe"},{name:"Franz",nationality:"Germany",region:"Europe"},{name:"Victoria",nationality:"Canada",region:"North America"},{name:"Phoenix",nationality:"USA",region:"North America"},{name:"Jan",nationality:"Netherlands",region:"Europe"},{name:"Chuck",nationality:"Canada",region:"North America"},{name:"Anita",nationality:"Brazil",region:"South America"}],regions:["Europe","North America","South America"]}},mixins:[h],methods:{ToggleRegion:function(e){var n=this.regions.indexOf(e);n>-1?(this.regions.splice(n,1),console.log("splicing "+e+" from regions")):(this.regions.push(e),console.log("pushing "+e+" to regions")),console.log(this.regions)}}},g=m,d=(t("39RD"),Object(a["a"])(g,p,f,!1,null,null,null)),v=d.exports;r["a"].use(s["a"]);var y=new s["a"]({routes:[{path:"/",name:"home",component:v}]}),b=t("L2JU");r["a"].use(b["a"]);var _=new b["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:y,store:_,render:function(e){return e(c)}}).$mount("#app")},ZL7j:function(e,n,t){"use strict";var r=t("slcd"),o=t.n(r);o.a},slcd:function(e,n,t){},zwU1:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c5be0ae4.js.map