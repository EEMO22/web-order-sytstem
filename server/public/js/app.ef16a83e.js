(function(e){function t(t){for(var r,c,u=t[0],a=t[1],i=t[2],d=0,p=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27b7":function(e,t,n){},"35c6":function(e,t,n){"use strict";n("ba30")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"app"};function s(e,t,n,s,c,u){var a=Object(r["w"])("app-nav"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])(a),Object(r["g"])(i,{class:"page"})])}var c={id:"nav"},u=Object(r["f"])(" Home "),a=Object(r["f"])(" Login "),i=Object(r["f"])(" signUp ");function l(e,t,n,o,s,l){var d=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",c,[Object(r["g"])(d,{to:"/"},{default:Object(r["C"])((function(){return[u]})),_:1}),Object(r["g"])(d,{to:"/login"},{default:Object(r["C"])((function(){return[a]})),_:1}),Object(r["g"])(d,{to:"/signup"},{default:Object(r["C"])((function(){return[i]})),_:1}),Object(r["e"])("button",{class:"logout",onClick:t[0]||(t[0]=function(){return l.logout&&l.logout.apply(l,arguments)})}," LogOut ")])}var d=n("5530"),p=n("5502"),b=Object(d["a"])({},Object(p["b"])(["loggedIn"])),f={computed:Object(d["a"])({},b),methods:{logout:function(){this.$store.dispatch("logout")}}},O=n("d959"),j=n.n(O);const m=j()(f,[["render",l]]);var v=m,g={components:{AppNav:v}};n("e5fc");const w=j()(g,[["render",s]]);var h=w,_=n("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var y=n("6c02"),x={class:"hello"},z=Object(r["e"])("dt",null,"이메일",-1),k=Object(r["e"])("dt",null,"이름",-1);function C(e,t,n,o,s,c){return Object(r["p"])(),Object(r["d"])("div",x,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(s.users,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{key:e.user_id,class:"user-wrap"},[Object(r["e"])("h2",null,"No. "+Object(r["y"])(t+1),1),Object(r["e"])("dl",null,[z,Object(r["e"])("dd",null,Object(r["y"])(e.user_email),1),k,Object(r["e"])("dd",null,Object(r["y"])(e.user_name),1)])])})),128))])}var M=n("bc3a"),A=n.n(M),S={data:function(){return{users:[]}},created:function(){var e=this;A.a.get("/api/users").then((function(t){e.users=t.data}))},computed:Object(d["a"])({},b)};const V=j()(S,[["render",C]]);var F=V,D={class:"hello"},P={class:"input_row"},T=Object(r["e"])("label",{for:"email"},"이메일",-1),U={class:"input_row"},L=Object(r["e"])("label",{for:"password"},"비밀번호",-1),N=Object(r["e"])("a",{href:"/#/signup"},"가입하기",-1);function I(e,t,n,o,s,c){return Object(r["p"])(),Object(r["d"])("div",D,[Object(r["e"])("form",{class:"form",onSubmit:t[3]||(t[3]=Object(r["E"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"]))},[Object(r["e"])("div",P,[T,Object(r["D"])(Object(r["e"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.user.user_email=e})},null,512),[[r["A"],s.user.user_email]])]),Object(r["e"])("div",U,[L,Object(r["D"])(Object(r["e"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.user.user_password=e})},null,512),[[r["A"],s.user.user_password]])]),Object(r["e"])("button",{onClick:t[2]||(t[2]=function(){return c.login&&c.login.apply(c,arguments)})},"로그인"),N],32)])}var R={data:function(){return{user:{user_email:"",user_password:""}}},methods:{login:function(){var e=this;try{var t={user_email:this.user.user_email,user_password:this.user.user_password};this.$store.dispatch("login",t).then((function(){e.$router.push("/")}))}catch(n){console.log("error on Front: ",n.res)}}}};const $=j()(R,[["render",I]]);var B=$,E=function(e){return Object(r["s"])("data-v-25328cd2"),e=e(),Object(r["q"])(),e},J={class:"container"},q=E((function(){return Object(r["e"])("h2",{class:"title"},"회원 가입",-1)})),H={class:"input-group"},G=E((function(){return Object(r["e"])("label",{for:"email",class:"label"},"이메일",-1)})),K=E((function(){return Object(r["e"])("span",{class:"error-message"},null,-1)})),Q=E((function(){return Object(r["e"])("svg",{class:"icon icon-success hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)})),W=E((function(){return Object(r["e"])("svg",{class:"icon icon-error hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)})),X={class:"input-group"},Y=E((function(){return Object(r["e"])("label",{for:"username",class:"label"},"이름",-1)})),Z=E((function(){return Object(r["e"])("span",{class:"error-message"},null,-1)})),ee=E((function(){return Object(r["e"])("svg",{class:"icon icon-success hidden hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)})),te=E((function(){return Object(r["e"])("svg",{class:"icon icon-error hidden",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)})),ne={class:"input-group"},re=E((function(){return Object(r["e"])("label",{for:"password",class:"label"},"비밀번호",-1)})),oe=E((function(){return Object(r["e"])("span",{class:"error-message"},null,-1)})),se=E((function(){return Object(r["e"])("svg",{class:"icon icon-success hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)})),ce=E((function(){return Object(r["e"])("svg",{class:"icon icon-error hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)})),ue={class:"input-group"},ae=E((function(){return Object(r["e"])("label",{for:"password_confirmation",class:"label"},"비밀번호 확인",-1)})),ie=E((function(){return Object(r["e"])("span",{class:"error-message"},null,-1)})),le=E((function(){return Object(r["e"])("svg",{class:"icon icon-success hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)})),de=E((function(){return Object(r["e"])("svg",{class:"icon icon-error hidden",xmlns:"http://www.w3.org/2000/svg",viewbox:"0 0 20 20",fill:"currentColor"},[Object(r["e"])("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)})),pe=E((function(){return Object(r["e"])("input",{type:"submit",class:"button",value:"회원 가입"},null,-1)}));function be(e,t,n,o,s,c){return Object(r["p"])(),Object(r["d"])("div",J,[q,Object(r["e"])("form",{class:"form",onSubmit:t[4]||(t[4]=Object(r["E"])((function(){return c.submitForm&&c.submitForm.apply(c,arguments)}),["prevent"]))},[Object(r["e"])("div",H,[G,Object(r["D"])(Object(r["e"])("input",{type:"email",id:"email",class:"input",placeholder:"이메일을 입력하세요.","onUpdate:modelValue":t[0]||(t[0]=function(e){return s.user.user_email=e})},null,512),[[r["A"],s.user.user_email]]),K,Q,W]),Object(r["e"])("div",X,[Y,Object(r["D"])(Object(r["e"])("input",{type:"text",id:"username",class:"input",placeholder:"이름을 입력하세요.","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.user.user_name=e})},null,512),[[r["A"],s.user.user_name]]),Z,ee,te]),Object(r["e"])("div",ne,[re,Object(r["D"])(Object(r["e"])("input",{type:"password",id:"password",class:"input","onUpdate:modelValue":t[2]||(t[2]=function(e){return s.user.user_password=e})},null,512),[[r["A"],s.user.user_password]]),oe,se,ce]),Object(r["e"])("div",ue,[ae,Object(r["D"])(Object(r["e"])("input",{type:"password",id:"password_confirmation",class:"input","onUpdate:modelValue":t[3]||(t[3]=function(e){return s.user.user_passwordConfirmation=e})},null,512),[[r["A"],s.user.user_passwordConfirmation]]),ie,le,de]),pe],32)])}var fe={methods:{submitForm:function(){try{var e={user_email:this.user.user_email,user_name:this.user.user_name,user_password:this.user.user_password};console.log("userData on Front: ",e),this.$store.dispatch("signup",e)}catch(t){console.log("error on Front: ",t.res)}}},data:function(){return{user:{user_name:"",user_email:"",user_password:"",user_passwordConfirmation:""}}}};n("35c6");const Oe=j()(fe,[["render",be],["__scopeId","data-v-25328cd2"]]);var je=Oe,me=[{path:"/",name:"index",component:F},{path:"/login",name:"login",component:B},{path:"/signup",name:"signup",component:je}],ve=Object(y["a"])({history:Object(y["b"])(),routes:me}),ge=ve,we=n("1da1"),he=(n("96cf"),{state:{user:null},mutations:{setToken:function(e,t){!0===t.message?e.user=t:e.user=null,localStorage.setItem("user",JSON.stringify(t)),A.a.defaults.headers.common["Authorization"]="Bearer ".concat(t.token)},logout:function(){localStorage.removeItem("user"),location.reload()}},actions:{signup:function(e,t){return Object(we["a"])(regeneratorRuntime.mark((function n(){var r,o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o={headers:{"Content-type":"application/json"}},n.next=4,A.a.post("api/users/signup",t,o);case 4:s=n.sent,c=s.data,console.log("setToken data: ",c),r("setToken",c);case 8:case"end":return n.stop()}}),n)})))()},login:function(e,t){return Object(we["a"])(regeneratorRuntime.mark((function n(){var r,o,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o={headers:{"Content-type":"application/json"}},n.next=4,A.a.post("api/users/login",t,o);case 4:s=n.sent,c=s.data,console.log("setToken data: ",c),r("setToken",c);case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){var t=e.commit;t("logout")}},getters:{loggedIn:function(e){return!!e.user}}}),_e=Object(p["a"])({modules:{user:he}}),ye=Object(r["c"])(h);ye.use(_e).use(ge).mount("#app")},ba30:function(e,t,n){},e5fc:function(e,t,n){"use strict";n("27b7")}});
//# sourceMappingURL=app.ef16a83e.js.map