(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},s={app:0},n={app:0},r=[];function i(t){return l.p+"js/"+({about:"about",inicio:"inicio"}[t]||t)+"."+{about:"874639cb",inicio:"5aaa2aaf"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,inicio:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var o="css/"+({about:"about",inicio:"inicio"}[t]||t)+"."+{about:"3bcb1b90",inicio:"045daa68"}[t]+".css",n=l.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var c=r[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===n))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===o||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete s[t],m.parentNode.removeChild(m),a(r)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var o=n[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=n[t];if(0!==a){if(a){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,a[1](d)}n[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"35ca":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return r}));var o=a("4878"),s="/api/usuarios/",n=function(t){return o["a"].get("".concat(s,"email/").concat(t))},r=function(t){return o["a"].get("".concat(s,"id/").concat(t))},i=function(t){return o["a"].post(s,t)}},4878:function(t,e,a){"use strict";var o=a("bc3a"),s=a.n(o),n=s.a.create({baseURL:"https://honeypet-dc.herokuapp.com",timeout:3e3,headers:{"Content-Type":"application/json"}});e["a"]=n},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.login()}}},[a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login_email,expression:"login_email"}],staticClass:"form-control",attrs:{type:"email",id:"floatingMail",placeholder:"name@example.com",required:""},domProps:{value:t.login_email},on:{input:function(e){e.target.composing||(t.login_email=e.target.value)}}}),a("label",{attrs:{for:"floatingMail"}},[t._v("*Correo Electronico")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login_pw,expression:"login_pw"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPw",placeholder:"Password",minlength:"6",required:""},domProps:{value:t.login_pw},on:{input:function(e){e.target.composing||(t.login_pw=e.target.value)}}}),a("label",{attrs:{for:"floatingPw"}},[t._v("*Contraseña")])]),a("p",[t._v("*Campos obligatorios")]),t.loginSuccess?a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.success_msg)+" ")]):t._e(),t.loginError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.error_msg)+" ")]):t._e(),t._m(1)])]),a("div",{staticClass:"tab-pane fade",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.signup()}}},[a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_user.user_name,expression:"new_user.user_name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingName",placeholder:"nombre completo",required:""},domProps:{value:t.new_user.user_name},on:{input:function(e){e.target.composing||t.$set(t.new_user,"user_name",e.target.value)}}}),a("label",{attrs:{for:"floatingName"}},[t._v("*Nombre Completo")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_user.user_phone,expression:"new_user.user_phone"}],staticClass:"form-control",attrs:{type:"number",id:"floatingTel",placeholder:"numero telefonico"},domProps:{value:t.new_user.user_phone},on:{input:function(e){e.target.composing||t.$set(t.new_user,"user_phone",e.target.value)}}}),a("label",{attrs:{for:"floatingTel"}},[t._v("Numero Telefonico")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_user.user_email,expression:"new_user.user_email"}],staticClass:"form-control",attrs:{type:"email",id:"floatingEmail",placeholder:"name@example.com",required:""},domProps:{value:t.new_user.user_email},on:{input:function(e){e.target.composing||t.$set(t.new_user,"user_email",e.target.value)}}}),a("label",{attrs:{for:"floatingEmail"}},[t._v("*Correo Electronico")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.new_user.user_password,expression:"new_user.user_password"}],staticClass:"form-control",attrs:{type:"password",id:"floatingPassword",placeholder:"Password",minlength:"6",required:""},domProps:{value:t.new_user.user_password},on:{input:function(e){e.target.composing||t.$set(t.new_user,"user_password",e.target.value)}}}),a("label",{attrs:{for:"floatingPassword"}},[t._v("*Contraseña")])]),a("p",[t._v("*Campos obligatorios")]),t.signupSuccess?a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.success_msg)+" ")]):t._e(),t.signupError?a("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.error_msg)+" ")]):t._e(),t._m(2)])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"welcomeModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(3),t._m(4),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Seguir Aquí")]),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"button"},on:{click:function(e){return t.welcomePerfil()}}},[t._v("Ir a mi Perfil")])])])])]),a("nav",{staticClass:"navbar navbar-dark bg-primary navbar-expand-md fixed-top bgc-toscuro shadow",attrs:{id:"nav"}},[a("div",{staticClass:"container-fluid"},[t._m(5),t._m(6),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"}),t._v(" Inicio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/mascotas"}},[a("i",{staticClass:"fas fa-cat"}),t._v(" Mascotas")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/adoptar"}},[a("i",{staticClass:"fas fa-paw"}),t._v(" Adoptar")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/alianzas"}},[a("i",{staticClass:"fas fa-handshake"}),t._v(" Alianzas")])],1),this.unlogin?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link btn btn-sm bgc-tneutro tc-tprofundo opaco-5",on:{click:function(e){return t.showLoginModal()}}},[a("i",{staticClass:"fas fa-lock"}),t._v(" Publicar")])]):a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link btn btn-sm bgc-tneutro tc-tprofundo opaco-5",attrs:{to:"/publicar"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Publicar")])],1),this.unlogin?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{role:"button"},on:{click:function(e){return t.showLoginModal()}}},[a("i",{staticClass:"fas fa-user-astronaut"}),t._v(" Ingresar")])]):a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/perfil",role:"button"}},[a("i",{staticClass:"far fa-address-card"}),t._v(" Perfil")])],1)])])])]),a("router-view"),t._m(7)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("button",{staticClass:"nav-link active",attrs:{id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Iniciar Sesion")])]),a("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[a("button",{staticClass:"nav-link",attrs:{id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Crear Cuenta")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn bgc-tclaro opaco-8",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Cancelar")]),a("button",{staticClass:"nav-link btn btn-sm btn bgc-tintenso tc-toscuro opaco-8"},[t._v("Iniciar Sesion")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn bgc-tclaro opaco-8",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Cancelar")]),a("button",{staticClass:"btn bgc-tintenso opaco-8",attrs:{type:"submit"}},[t._v("Crear Cuenta")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Bienvenido a HoneyPet DC")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body"},[a("p",[t._v("Puede cerrar sesión, administrar sus publicaciones o ver el estado de sus solicitudes de adopcción desde su página de Perfil.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{staticClass:"navbar-brand ms-3",attrs:{href:"#"}},[o("img",{attrs:{src:a("ea34"),alt:"HoneyPet DC"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bgc-toscuro tc-tneutro"},[a("p",{staticClass:"text-center opaco-8"},[t._v("©2021 - TODOS LOS DERECHOS RESERVADOS HONEYPET DC - DEVELOP BY MTIC:UTP_G2-47")])])}],r=a("35ca"),i={data:function(){return{user_data:[],loginError:!1,loginSuccess:!1,signupError:!1,signupSuccess:!1,error_msg:"Error",success_msg:"Logrado",login_email:"",login_pw:"",unlogin:!0,new_user:{user_name:"",user_email:"",user_password:"",user_phone:0},loginModal:null,welcomeModal:null}},mounted:function(){localStorage.getItem("localUserData")?(this.unlogin=!1,this.welcomeModal=new bootstrap.Modal(document.getElementById("welcomeModal"),{}),this.welcomeModal.show()):this.unlogin=!0,o["a"].prototype.$islogin=this.unlogin},methods:{showLoginModal:function(){this.loginModal=new bootstrap.Modal(document.getElementById("exampleModal"),{}),this.loginModal.show()},login:function(){var t=this;Object(r["b"])(this.login_email).then((function(e){e.data.user_email&&(e.data.user_password===t.login_pw?(t.user_data=e.data,t.loginSuccess=!0,t.success_msg="Operación Exitosa!",localStorage.setItem("localUserData",JSON.stringify(e.data)),t.unlogin=!1,t.loginModal.hide(),t.welcomeModal=new bootstrap.Modal(document.getElementById("welcomeModal"),{}),t.welcomeModal.show()):(t.loginError=!1,t.error_msg="La contraseña no coincide!",t.loginError=!0))})).catch((function(e){console.error(e),t.loginError=!1,t.error_msg="El email que ingreso no tiene un usuario asociado",t.loginError=!0}))},signup:function(){var t=this;console.log(this.new_user.user_email),Object(r["b"])(this.new_user.user_email).then((function(e){e.data.user_email?e.data.user_password===t.new_user.user_password?(t.user_data=e.data,t.signupSuccess=!1,t.success_msg="Operación Exitosa!, redireccionando...",t.signupSuccess=!0,t.unlogin=!1,localStorage.setItem("localUserData",JSON.stringify(e.data)),t.loginModal.hide(),t.welcomeModal=new bootstrap.Modal(document.getElementById("welcomeModal"),{}),t.welcomeModal.show()):(t.signupError=!1,t.error_msg="El email que ingresó ya tiene un usuario asociado, pero el pasword no coincide, use el formulario 'Iniciar Sesión' con el password correcto.",t.signupError=!0):Object(r["a"])(t.new_user).then((function(e){localStorage.setItem("localUserData",JSON.stringify(e.data)),t.unlogin=!1,t.loginModal.hide(),t.welcomeModal=new bootstrap.Modal(document.getElementById("welcomeModal"),{}),t.welcomeModal.show()})).catch((function(e){console.error(e),t.signupError=!1,t.error_msg="Error, No se creó el usuario",t.signupError=!0}))})).catch((function(){Object(r["a"])(t.new_user).then((function(e){localStorage.setItem("localUserData",JSON.stringify(e.data)),t.unlogin=!1,t.loginModal.hide(),t.welcomeModal=new bootstrap.Modal(document.getElementById("welcomeModal"),{}),t.welcomeModal.show()})).catch((function(e){console.error(e),t.signupError=!1,t.error_msg="Error, No se creó el usuario",t.signupError=!0}))}))},welcomePerfil:function(){this.welcomeModal.hide(),this.$router.push("/perfil")}}},l=i,c=(a("034f"),a("2877")),u=Object(c["a"])(l,s,n,!1,null,null,null),d=u.exports,m=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f"));o["a"].use(m["a"]);var p=[{path:"/",name:"Inicio",component:function(){return a.e("inicio").then(a.bind(null,"b53f"))}},{path:"/mascotas",name:"Mascotas",component:function(){return a.e("about").then(a.bind(null,"f08b"))}},{path:"/adoptar",name:"Adoptar",component:function(){return a.e("about").then(a.bind(null,"ff9e"))}},{path:"/alianzas",name:"Alianzas",component:function(){return a.e("about").then(a.bind(null,"df34"))}},{path:"/publicar",name:"Publicar",component:function(){return a.e("about").then(a.bind(null,"6278"))}},{path:"/perfil",name:"Perfil",component:function(){return a.e("about").then(a.bind(null,"68f9"))}}],f=new m["a"]({mode:"history",base:"/",routes:p}),b=f,g=a("2f62");o["a"].use(g["a"]);var v=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("7b17"),a("ab8b"),a("b547"),a("f95d");window.bootstrap=a("7b17"),o["a"].config.productionTip=!1,new o["a"]({router:b,store:v,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){},ea34:function(t,e,a){t.exports=a.p+"img/logotxt-HoneyPetDC.30254b97.svg"},f95d:function(t,e,a){}});
//# sourceMappingURL=app.d60fbc2b.js.map