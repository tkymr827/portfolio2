(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",c.name="ChunkLoadError",c.type=r,c.request=n,a[1](c)}o[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/portfolio2/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04be":function(t,e,a){t.exports=a.p+"img/traindelaystatus.png"},"05b3":function(t,e,a){t.exports=a.p+"img/untilgraduation.png"},"14e6":function(t,e,a){t.exports=a.p+"img/numgame.png"},1636:function(t,e,a){t.exports=a.p+"img/relaxsounds.png"},2785:function(t,e,a){t.exports=a.p+"img/weathernow.png"},"303e":function(t,e,a){"use strict";var r=a("6a94"),o=a.n(r);o.a},3356:function(t,e,a){t.exports=a.p+"img/searchfortwitterpicture.png"},"3a19":function(t,e,a){t.exports=a.p+"img/profile.jpg"},"3e70":function(t,e,a){"use strict";var r=a("6cd8"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("index")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("main",[a("div",{staticClass:"top"},[a("h1",[t._v("Portfilio")]),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".profile",duration:1500},expression:"{ el: '.profile', duration: 1500 }"}],staticClass:"top__button"},[t._v(" Who's ME? ")])])]),a("div",{staticClass:"container"},[a("nav",[a("ul",[a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".profile",duration:1500},expression:"{ el: '.profile', duration: 1500 }"}]},[t._v("Profile")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".skill",duration:1500},expression:"{ el: '.skill', duration: 1500 }"}]},[t._v("Skill")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".works",duration:1500},expression:"{ el: '.works', duration: 1500 }"}]},[t._v("Works")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".contact",duration:1500},expression:"{ el: '.contact', duration: 1500 }"}]},[t._v("Contact")])]),a("div",{staticClass:"navlink"},[a("a",{staticClass:"navgithub",attrs:{href:"https://github.com/tkymr827",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),a("a",{staticClass:"navtwitter",attrs:{href:"https://twitter.com/ijafiwpwa"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)])]),a("div",{staticClass:"content"},[a("div",{staticClass:"profile"},[a("h1",{staticClass:"title"},[a("font-awesome-icon",{attrs:{icon:"user"}}),t._v(" Profile")],1),a("div",{staticClass:"profile__section"},[t._m(0),a("div",{staticClass:"profile__section--text"},[a("ul",[a("li",[t._v("名前: Ryoya Takayama")]),a("li",[t._v("出身: 東京")]),a("li",[t._v("趣味: ゲーム(FPS,RTS)")]),a("li",[t._v(" リンク: "),a("a",{attrs:{href:"https://github.com/tkymr827",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v("Github")],1),a("a",{attrs:{href:"https://twitter.com/ijafiwpwa"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}}),t._v("Twitter")],1)]),a("li",[t._v(" 今後してみたいこと：今勉強しているフロントエンドの言語をもっと深く理解し、自信を持って得意と言えるような言語を習得したい。 将来的にはAIの分野にも手を出してみたい。 ")])])])])]),a("div",{staticClass:"skill"},[a("h1",{staticClass:"title"},[a("font-awesome-icon",{attrs:{icon:"broom"}}),t._v(" Skill")],1),t._m(1)]),a("div",{staticClass:"works"},[a("h1",{staticClass:"title"},[a("font-awesome-icon",{attrs:{icon:"list-ul"}}),t._v(" Works")],1),a("div",{staticClass:"works__list"},[a("carousel",{attrs:{"navigation-enabled":!0,"navigation-prev-label":"<span style='font-size:30px'>◀︎</span>","navigation-next-label":"<span style='font-size:30px'>▶︎</span>",speed:2e3,loop:!0,perPage:2}},t._l(t.slides,(function(e,r){return a("slide",{key:r},[a("div",{staticClass:"slidecontent"},[a("img",{attrs:{src:e.image}}),a("h2",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.text))]),a("span",[t._v("製作期間:"+t._s(e.pp))]),a("div",{staticClass:"links"},[a("a",{staticClass:"make",attrs:{href:e.link,target:"_blank"}},[t._v("リンク")]),e.github?a("a",{staticClass:"github",attrs:{href:e.github,target:"_blank"}},[t._v("Github")]):t._e()])])])})),1)],1)]),a("div",{staticClass:"contact"},[a("h1",{staticClass:"title"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"envelope"}}),t._v(" Contact ")],1),a("h2",[t._v("ご連絡はこちらまで")]),a("p",[t._v("メールアドレス:takayamar827@gmail.com")])])])]),a("footer",[a("nav",[a("ul",[a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".profile",duration:1500},expression:"{ el: '.profile', duration: 1500 }"}]},[t._v("Profile")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".skill",duration:1500},expression:"{ el: '.skill', duration: 1500 }"}]},[t._v("Skill")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".works",duration:1500},expression:"{ el: '.works', duration: 1500 }"}]},[t._v("Works")]),a("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:".contact",duration:1500},expression:"{ el: '.contact', duration: 1500 }"}]},[t._v("Contact")])])]),a("small",[t._v("Copyright © Ryoya Takayama. All Rights Reserved.")])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile__section--thumbnail"},[r("img",{attrs:{src:a("3a19"),alt:"profile"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill__cards"},[a("div",{staticClass:"htmlcss card"},[a("div",{staticClass:"card--inner"},[a("h2",[t._v("HTML CSS Sass")]),a("p",[t._v(" 簡単なページ作成やレスポンシブデザインが可能。"),a("br"),t._v("Sassはネストを使ったコーディングか可能です。 ")])])]),a("div",{staticClass:"javascript card"},[a("div",{staticClass:"card--inner"},[a("h2",[t._v("Javascript")]),a("h3",[t._v("フレームワーク:Vue.js")]),a("p",[t._v(" 生のJavascriptは勉強中。"),a("br"),t._v("VueはComponentsやVueRouter、Axiosなどの基礎的なコーディングが可能です。 ")])])]),a("div",{staticClass:"php card"},[a("div",{staticClass:"card--inner"},[a("h2",[t._v("PHP")]),a("h3",[t._v("フレームワーク:Laravel")]),a("p",[t._v(" 簡単なWordPressのCMSが可能です。"),a("br"),t._v("LaravelはAPIの扱いやデータの受け渡し、Vueとの連携したコーディングが可能です。 ")])])]),a("div",{staticClass:"python card"},[a("div",{staticClass:"card--inner"},[a("h2",[t._v("Python")]),a("p",[t._v(" 基本的なコーディングとBeautifulSoupを使用したスクレイピングをしたことがあります。 ")])])])])}],l={data:function(){return{slides:[{image:a("1636"),title:"Relax Sounds",text:"項目をクリックするとBGMが流れるサイトです。\n初めてVueを使用し、ディテクレィブなどの基本的な使い方の勉強になりました。",pp:"３日ほど",link:"https://tkymr827.github.io/relax-sounds/",github:"https://github.com/tkymr827/relax-sounds"},{image:a("2785"),title:"Weather Now",text:"各地の天気を見ることができます。\nSPAを使ったページの作成とaxiosを使ってAPIの取得の勉強になりました。\n",pp:"５日ほど",link:"https://tkymr827.github.io/weathernow/#/",github:"https://github.com/tkymr827/weathernow"},{image:a("14e6"),title:"Number Game",text:"1から9までのランダムに配置された数字を早くクリックしていくゲームです。\naxiosを使いGoogle Firebaseのサーバーとやり取りしランキング機能もつけました。",pp:"５日ほど",link:"https://tkymr827.github.io/num-game/",github:"https://github.com/tkymr827/num-game"},{image:a("05b3"),title:"Until Graduation",text:"学校卒業までのカウントダウンです。\n頼まれたので作ってみました。",pp:"３時間ほど",link:"https://tkymr827.github.io/until-graduation/",github:"https://github.com/tkymr827/until-graduation"},{image:a("04be"),title:"Train Delay Status",text:"Yahoo遅延情報のページをPHPでスクレイピングして表示させるサイトです。\n初めてLaravelを使用しControllerからのデータの受け渡しの勉強になりました。",pp:"１週間ほど",link:"https://quiet-lake-70522.herokuapp.com/"},{image:a("3356"),title:"Search for Twitter Picture",text:"Twitterの画像検索ができるサイトです。\nLaravelでTWitterAPIを使用し画像を取得、取得した画像をVueに渡して表示する弁ょうになりました。",pp:"１週間ほど",link:"https://guarded-castle-18622.herokuapp.com/"}]}}},c=l,u=(a("3e70"),a("2877")),v=Object(u["a"])(c,i,s,!1,null,"52495ece",null),p=v.exports,h={components:{index:p}},f=h,m=(a("5c0b"),Object(u["a"])(f,o,n,!1,null,null,null)),d=m.exports,_=(a("d3b7"),a("8c4f")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],x={name:"HelloWorld",props:{msg:String}},C=x,y=(a("303e"),Object(u["a"])(C,k,w,!1,null,"ead786b0",null)),j=y.exports,P={name:"Home",components:{HelloWorld:j}},S=P,E=Object(u["a"])(S,g,b,!1,null,null,null),O=E.exports;r["a"].use(_["a"]);var T=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],N=new _["a"]({routes:T}),W=N,$=a("2f62");r["a"].use($["a"]);var A=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=a("f13c"),H=a.n(L),M=a("0a63"),V=a.n(M),R=a("ecee"),G=a("ad3d"),I=a("c074"),F=a("f2d1"),J=a("b702");r["a"].use(H.a),r["a"].use(V.a),R["c"].add(I["a"],J["a"],F["a"]),r["a"].component("font-awesome-icon",G["a"]),r["a"].config.productionTip=!1,new r["a"]({router:W,store:A,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),o=a.n(r);o.a},"6a94":function(t,e,a){},"6cd8":function(t,e,a){},"9c0c":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.png"}});