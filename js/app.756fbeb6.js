(function(t){function e(e){for(var o,r,u=e[0],i=e[1],d=e[2],s=0,f=[];s<u.length;s++)r=u[s],c[r]&&f.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0340be3e","chunk-142798ff":"e3796c7d","chunk-15edf87e":"90082d14","chunk-1ac4fb4f":"8147bf67","chunk-2564e02c":"79eea5bb","chunk-2b77aa96":"da092f8e","chunk-2d0d2af5":"f6e5ee31","chunk-2d0d5c71":"329ceabf","chunk-2d20e828":"cdc48a5a","chunk-2d217777":"6fe86ad8","chunk-511a50e2":"ddbc8940","chunk-74449190":"dd674137","chunk-7473f403":"bf5fa83e"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1ac4fb4f":1,"chunk-2564e02c":1,"chunk-7473f403":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-142798ff":"31d6cfe0","chunk-15edf87e":"31d6cfe0","chunk-1ac4fb4f":"87b515ef","chunk-2564e02c":"d881d9e0","chunk-2b77aa96":"31d6cfe0","chunk-2d0d2af5":"31d6cfe0","chunk-2d0d5c71":"31d6cfe0","chunk-2d20e828":"31d6cfe0","chunk-2d217777":"31d6cfe0","chunk-511a50e2":"31d6cfe0","chunk-74449190":"31d6cfe0","chunk-7473f403":"87b515ef"}[t]+".css",c=i.p+o,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var d=a[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===c))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],s=d.getAttribute("data-href");if(s===o||s===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],p.parentNode.removeChild(p),n(a)},p.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){r[t]=0}));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=c[t]=[e,n]});e.push(o[2]=a);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t),d=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}c[t]=void 0}};var f=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),i={},d=Object(u["a"])(i,c,a,!1,null,null,null),s=d.exports,f=n("8c4f");o["a"].use(f["a"]);var p=new f["a"]({routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-7473f403").then(n.bind(null,"bb51"))},children:[{path:"/",name:"Carousel",component:function(){return n.e("chunk-74449190").then(n.bind(null,"3693"))}},{path:"orderform",name:"OrderForm",component:function(){return n.e("chunk-15edf87e").then(n.bind(null,"075c"))}},{path:"ordercheckout/:orderId",name:"OrderCheckout",component:function(){return n.e("chunk-2d0d2af5").then(n.bind(null,"5a0c"))}},{path:"PurchaseItem",name:"PurchaseItem",component:function(){return n.e("chunk-2b77aa96").then(n.bind(null,"ea05"))}},{path:"Transport",name:"Transport",component:function(){return n.e("chunk-2d217777").then(n.bind(null,"c79f"))}},{path:"Lottery",name:"Lottery",component:function(){return n.e("chunk-2564e02c").then(n.bind(null,"48dd"))}},{path:"ProductDetails/:id",name:"ProductDetails",component:function(){return n.e("chunk-142798ff").then(n.bind(null,"a635"))}}]},{path:"/admin",name:"Dashboard",component:function(){return n.e("chunk-1ac4fb4f").then(n.bind(null,"7277"))},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-2d0d5c71").then(n.bind(null,"7079"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"Orderlist",component:function(){return n.e("chunk-2d20e828").then(n.bind(null,"b059"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return n.e("chunk-511a50e2").then(n.bind(null,"f43e"))},meta:{requiresAuth:!0}}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),h=n("bc3a"),l=n.n(h),m={namespaced:!0,strict:!0,state:{cart:{},nub:0},mutations:{CART:function(t,e){t.cart=e},NUB:function(t,e){t.nub=e}},actions:{getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/cart");t.commit("LOADING",!0,{root:!0}),l.a.get(e).then(function(e){t.commit("CART",e.data.data),t.commit("NUB",e.data.data.carts.length),t.commit("LOADING",!1,{root:!0})})},removeCartItem:function(t,e){var n=e.id,r=e.title,c=e.qty,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/cart/").concat(n);l.a.delete(a).then(function(){(new o["a"]).$bus.$emit("messsage:push",r+c+"個刪除成功","danger"),t.dispatch("getCart")})},addtoCart:function(t,e){var n=e.id,r=e.qty,c=e.title,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/cart"),u={product_id:n,qty:r};t.commit("LOADING",!0,{root:!0}),l.a.post(a,{data:u}).then(function(e){(new o["a"]).$bus.$emit("messsage:push",c+r+"個已加到購物車中","success"),t.dispatch("getCart"),t.commit("LOADING",!1,{root:!0})})}},getters:{cart:function(t){return t.cart},nub:function(t){return t.nub}}},b=(n("55dd"),{namespaced:!0,strict:!0,state:{products:[],product:[],randomproduct:[]},mutations:{PRODUCTS:function(t,e){t.products=e;for(var n=t.products.length-1;n>=0;n--)t.products[n].num="1"},PRODUCT:function(t,e){t.product=e,t.product.num=0},RANDOMPRODUCT:function(t,e){t.randomproduct=[];for(var n=0;n<=2;n++)t.randomproduct.push(e.shift())}},actions:{getProducts:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/products/all");t.commit("LOADING",!0,{root:!0}),"全部"===e?l.a.get(n).then(function(e){t.commit("PRODUCTS",e.data.products),t.commit("LOADING",!1,{root:!0})}):l.a.get(n).then(function(n){t.commit("PRODUCTS",n.data.products.filter(function(t){if(t.description===e)return!0})),t.commit("LOADING",!1,{root:!0})})},getProduct:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/product/").concat(e);t.commit("LOADING",!0,{root:!0}),l.a.get(n).then(function(e){t.commit("PRODUCT",e.data.product),t.commit("LOADING",!1,{root:!0})})},randomproducts:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("fsyp2018","/products/all");l.a.get(n).then(function(e){var n=e.data.products.sort(function(t){return Math.random()-.5});t.commit("RANDOMPRODUCT",n)})}},getters:{products:function(t){return t.products},product:function(t){return t.product},randomproduct:function(t){return t.randomproduct}}});o["a"].use(r["a"]);var v=new r["a"].Store({strict:!0,state:{isLoading:!1},mutations:{LOADING:function(t,e){t.isLoading=e}},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},getters:{},modules:{cartModules:m,productsModules:b}}),g=n("a7fe"),k=n.n(g),y=(n("4989"),n("9062")),O=n.n(y),D=(n("e40d"),n("a481"),n("c5f6"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var o=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return o}))});o["a"].prototype.$bus=new o["a"];var A=function(t){var e=new Date(1e3*t);return e.toLocaleDateString()},C=n("7bb1"),w=n("427f"),P=n.n(w),L=n("bd0c");o["a"].use(r["a"]),o["a"].config.productionTip=!1,o["a"].use(k.a,l.a),l.a.defaults.withCredentials=!0,o["a"].component("Loading",O.a),o["a"].filter("currency",D),o["a"].filter("date",A),o["a"].use(C["a"]),C["a"].Validator.localize("zh_Th",P.a),o["a"].use(L["a"]),new o["a"]({router:p,store:v,render:function(t){return t(s)}}).$mount("#app"),p.beforeEach(function(t,e,n){if(console.log("to",t,"from",e,"next",n),t.meta.requiresAuth){var o="".concat("https://vue-course-api.hexschool.io","/api/user/check");l.a.post(o).then(function(t){t.data.success?n():n({path:"/"})})}else n()})},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){}});
//# sourceMappingURL=app.756fbeb6.js.map