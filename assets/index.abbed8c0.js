var e=Object.assign;import{r as t,o as s,c as o,a as r,b as a,t as n,p as l,d as i,w as u,v as d,e as c,f as g,g as h,h as m,i as f,j as w}from"./vendor.bf9145e1.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const o=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,a)=>{const n=new URL(e,o);if(self[t].moduleMap[n])return s(self[t].moduleMap[n]);const l=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){a(new Error(`Failed to import: ${e}`)),r(i)},onload(){s(self[t].moduleMap[n]),r(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const p={};p.render=function(e,a){const n=t("router-view");return s(),o("div",null,[r(n)])};const y={name:"Blank",components:{},data:()=>({hover:!1,icolor_class:"w-full h-full flex justify-center items-center  text-gray-100 text-6xl material-icons"}),props:{typename:{type:String,default:"shutdown"}},created(){},mounted(){},watch:{hover(e){e?(this.$refs.ticon.classList.add("bg-mygray-purple"),this.icolor_class="w-full h-full flex justify-center items-center  text-gray-900 text-6xl material-icons",this.$refs.text.classList.remove("text-gray-100"),this.$refs.text.classList.add("text-gray-900"),this.$refs.text.classList.add("bg-mygray-purple")):(this.$refs.ticon.classList.remove("bg-mygray-purple"),this.icolor_class="w-full h-full flex justify-center items-center  text-gray-100 text-6xl material-icons",this.$refs.text.classList.add("text-gray-100"),this.$refs.text.classList.remove("text-gray-900"),this.$refs.text.classList.remove("bg-mygray-purple"))}},computed:{},methods:{}},_={class:"flex flex-col items-center"},b={key:0,class:"w-20 h-20  rounded-full flex justify-center items-center bg-mygray-deeldark border-2 border-gray-600"},x=r("i",{class:"w-full h-full flex justify-center items-center  text-6xl  text-gray-100 material-icons"},"power",-1),k={key:1,class:"mt-4 bg-mygray-deeldark border-2 border-gray-600 rounded-lg px-2 py-0.5",style:{"text-align":"center"}},v={ref:"ticon",class:"w-20 h-20  rounded-full flex justify-center items-center"},L=r("div",{class:"h-4 w-20"},null,-1);y.render=function(e,t,l,i,u,d){return s(),o("div",_,["shutdown"==l.typename?(s(),o("div",b,[x])):a("",!0),"shutdown"==l.typename?(s(),o("div",k," Shut down ")):a("",!0),"shutdown"!=l.typename?(s(),o("div",{key:2,onMouseover:t[1]||(t[1]=e=>u.hover=!0),onMouseleave:t[2]||(t[2]=e=>u.hover=!1)},[r("div",v,["sleep"==l.typename?(s(),o("i",{key:0,class:u.icolor_class},"nightlight_round",2)):a("",!0),"restart"==l.typename?(s(),o("i",{key:1,class:u.icolor_class},"autorenew",2)):a("",!0)],512),L,r("div",{ref:"text",class:"rounded-lg px-2 py-0.5 text-gray-100",style:{"text-align":"center"}},n("sleep"==l.typename?"Sleep":"Restart"),513)],32)):a("",!0)])};const S=new Array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"),T={name:"LoginPage",components:{RestartButton:y},data:()=>({avatar:"./assets/avatar.28b06729.jpg",login_locked:!1,show_keyboard:!1,show_middle:!0,date_hour:0,date_minute:0,date_year:1970,date_month:1,date_date:1,date_weekday:0,user_name:"Guest",password:"123456",password_answer:"123456",relay:!1,show_loading_bar:!1,button_shaking:!1,timer:null,timer2:null}),created(){this.refresh_time(),window.setInterval((()=>{this.refresh_time()}),1e3)},mounted(){this.$refs.password_input_bar,this.timer=window.setInterval((()=>{this.relay=!1,this.$refs.infinite_bar&&(this.$refs.infinite_bar.style.width="0px"),this.timer2=window.setTimeout((()=>{this.relay=!0,this.$refs.infinite_bar&&(this.$refs.infinite_bar.style.width="264px")}),200)}),800)},watch:{},computed:{date_weekday_display(){return S[this.date_weekday]},user(){let t=window.utools&&window.utools.getUser();return e({avatar:this.avatar,nickname:this.user_name,type:"user"},t)}},methods:{PrefixZero:(e,t)=>(Array(t).join(0)+e).slice(-t),login_clicked(){if(this.password===this.password_answer)return this.login_locked=!1,this.show_loading_bar=!1,clearInterval(this.timer),clearTimeout(this.timer2),void(window.utools&&window.utools.ubrowser.goto("http://static-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec.bspapp.com/utools/#/?utools="+btoa(JSON.stringify(this.user))).run({width:1200,height:900}));if(""===this.password){this.login_locked=!0;for(let e=0;e<this.password_answer.length;e++)window.setTimeout((()=>{this.password+=this.password_answer[e],e===this.password_answer.length-1&&this.login_clicked()}),100*e)}else this.show_loading_bar=!0,window.setTimeout((()=>{this.show_loading_bar=!1,this.button_shaking=!0}),3e3),window.setTimeout((()=>{this.button_shaking=!1}),3800)},vkey_pressed(e,t){if(this.login_locked)return;if(this.$refs.password_input_bar.focus(),"QT"===e)e="'";else if("DH"===e)e=",";else if("JH"===e)e=".";else if("SPACE"===e)e=" ";else{if("BAK"===e){let e=this.$refs.password_input_bar.selectionStart;return void(this.password=this.password.substr(0,Math.max(0,e-1))+this.password.substr(e,this.password.length-e))}if("LEFT"===e){let e=this.$refs.password_input_bar.selectionStart;return void(this.$refs.password_input_bar.selectionStart=this.$refs.password_input_bar.selectionEnd=Math.max(e-1,0))}if("RIGHT"===e){let e=this.$refs.password_input_bar.selectionStart;return void(this.$refs.password_input_bar.selectionStart=this.$refs.password_input_bar.selectionEnd=Math.min(e+1,this.password.length))}if("ENTER"===e)return void this.login_clicked()}let s=1==e.length?e:t?e.toUpperCase():e.toLowerCase();if(!this.login_locked&&1===s.length){let e=this.$refs.password_input_bar.selectionStart;this.password=this.password.substr(0,e)+s+this.password.substr(e,this.password.length-e)}},show_keyboard_clicked(){window.utools&&window.utools.ubrowser.goto("https://www.jixiaokang.com").run()},show_middle_clicked(){this.show_middle=!this.show_middle,this.show_middle?this.login_locked=!1:this.login_locked=!0},blanker(){this.show_middle||this.show_middle_clicked()},refresh_time(){let e=new Date;this.date_year=e.getFullYear(),this.date_month=e.getMonth()+1,this.date_date=e.getDate(),this.date_weekday=e.getDay()-1,this.date_hour=e.getHours(),this.date_minute=e.getMinutes()},bgloaded(){let e=(new Date).getTime(),t=Math.max(e-this.$store.state.start_load_time,0);(isNaN(t)||null==t)&&(t=0);let s=Math.max(1800-t,0);window.setTimeout((()=>{this.$store.commit("hide_interlude")}),s)},restart_clicked(){location.reload()},halt_clicked(){let e=this;document.body.style.cursor="progress",window.setTimeout((()=>{document.body.style.cursor="default",e.timer=null,clearInterval(e.timer),e.$router.push({path:"/down"})}),800)}}},C=g("data-v-ddc0a71a");l("data-v-ddc0a71a");const E={class:"w-screen h-screen main-background select-none overflow-hidden"},K={key:0,ref:"background_image",class:"absolute w-full h-full flex flex-col justify-center items-center"},$=r("div",{style:{height:"60vh"}},null,-1),j={ref:"content",class:"flex flex-col w-full h-full"},O={ref:"background_image",class:"absolute w-full h-full flex flex-row justify-center items-center"},A=r("div",{class:"w-140"},null,-1),R={ref:"header",class:"\n          w-full\n          h-32\n          flex-none flex flex-col\n          items-center\n          justify-center\n          z-10\n        "},M={class:"text-4xl tracking-wider light font-sans"},F={class:"mt-1.5 text-sm"},G={ref:"middle",class:"\n          w-full\n          h-20\n          flex-grow flex flex-col\n          justify-center\n          items-center\n          z-10\n        ",style:{"min-height":"300px"}},N={key:0,class:"w-72 h-40 rounded-xl flex flex-col flex-nowrap",style:{"background-color":"rgba(81, 90, 156)"}},U={class:"h-8 flex justify-center items-end"},D={class:"h-full",style:{width:"25%"}},P={class:"ratio-container"},Y={class:"\n              h-full\n              flex\n              justify-center\n              items-center\n              text-2xl\n              tracking-wide\n              pt-4\n            "},B=r("div",{class:"absolute w-72 h-40",style:{"pointer-events":"none"}},null,-1),I={class:"h-full flex justify-center items-center py-3 px-3"},H=r("i",{class:"text-gray-100 material-icons"},"arrow_forward",-1),W={ref:"footer",class:"w-full h-32 flex-none flex z-10 flex-wrap"},J=r("div",{class:"w-76 h-full flex-none flex justify-center items-center",style:{"min-width":"300px"}},[r("img",{src:"./assets/deepin_text_1.6e753df3.png",alt:"",class:"w-32"}),r("div",{class:"flex-none flex flex-col-reverse pl-3"},[r("div",{class:"h-3"}),r("div",{class:"absolute text-gray-400"},"20.2 Community Edition")])],-1),z=r("div",{class:"h-full flex-grow"},null,-1),q={class:"h-full flex-none w-76 flex justify-center items-center pr-2",style:{"min-width":"300px"}},Z=r("i",{class:"text-gray-100 material-icons"},"home",-1),Q=r("i",{class:"text-gray-100 material-icons"},"power",-1);i();const V=C(((e,l,i,g,h,m)=>{const f=t("RestartButton");return s(),o("div",E,[h.show_keyboard?(s(),o("div",K,[$],512)):a("",!0),r("div",j,[r("div",O,[A,r("img",{src:"./assets/deepin_3.eb7b8aa0.png",alt:"",class:"w-160",style:{opacity:"0.03","min-width":"600px"},onLoad:l[1]||(l[1]=(...e)=>m.bgloaded&&m.bgloaded(...e))},null,32)],512),r("div",R,[r("div",M,n(m.PrefixZero(h.date_hour,2))+":"+n(m.PrefixZero(h.date_minute,2)),1),r("div",F,n(h.date_year)+"/"+n(h.date_month)+"/"+n(h.date_date)+" "+n(m.date_weekday_display),1)],512),r("div",G,[h.show_middle?(s(),o("div",N,[r("div",U,[r("div",D,[r("div",P,[r("div",{class:"ratio-content rounded-lg bg-center bg-cover",style:{backgroundImage:"url("+(m.user.avatar||h.avatar)+")"}},null,4)])])]),r("div",Y,n(m.user.nickname||h.user_name),1),B,r("div",I,[u(r("input",{ref:"password_input_bar","onUpdate:modelValue":l[2]||(l[2]=e=>h.password=e),onKeyup:l[3]||(l[3]=c(((...e)=>m.login_clicked&&m.login_clicked(...e)),["enter"])),type:"password",placeholder:"Enter your password","auto-focus":"",autocomplete:"",class:"w-full h-full rounded-lg",style:{"background-color":"rgba(180, 190, 220, 0.35)","outline-color":"rgba(0, 119, 230)","text-align":"center"}},null,544),[[d,h.password]])])])):a("",!0),h.show_middle?(s(),o("button",{key:1,class:["\n            rounded-full\n            w-12\n            h-12\n            mt-2\n            bg-blue-600\n            flex\n            items-center\n            justify-center\n            hover:bg-blue-700\n            outline-none\n            animate__animated\n          ",{animate__shakeX:h.button_shaking}],onClick:l[4]||(l[4]=(...e)=>m.login_clicked&&m.login_clicked(...e))},[H],2)):a("",!0),h.show_middle?a("",!0):(s(),o("div",{key:2,class:"\n            h-full\n            w-full\n            flex flex-row flex-nowrap\n            justify-evenly\n            items-center\n          ",style:{"max-width":"650px","min-width":"300px"},onClick:l[5]||(l[5]=(...e)=>m.blanker&&m.blanker(...e))},[r(f,{typename:"shutdown",onClick:m.halt_clicked},null,8,["onClick"]),r(f,{typename:"restart",onClick:m.restart_clicked},null,8,["onClick"]),r(f,{typename:"sleep",onClick:m.halt_clicked},null,8,["onClick"])]))],512),r("div",W,[J,z,r("div",q,[r("button",{class:"\n              rounded-full\n              w-12\n              h-12\n              bg-mygray-light\n              hover:bg-mygray-dark\n              active:bg-mygray-darker\n              flex\n              justify-center\n              items-center\n              outline-none\n            ",onClick:l[6]||(l[6]=e=>m.show_keyboard_clicked())},[Z]),r("button",{class:"\n              rounded-full\n              w-12\n              h-12\n              bg-mygray-light\n              hover:bg-mygray-dark\n              active:bg-mygray-darker\n              ml-8\n              flex\n              justify-center\n              items-center\n              outline-none\n            ",onClick:l[7]||(l[7]=(...e)=>m.show_middle_clicked&&m.show_middle_clicked(...e))},[Q])])],512)],512)])}));T.render=V,T.__scopeId="data-v-ddc0a71a";const X={name:"Blank",components:{},data:()=>({}),created(){let e=this;document.onkeydown=function(t){e.$router.push({path:"/"})}},mounted(){},watch:{},computed:{},methods:{exitfullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}}},ee=g("data-v-79d6ba98");l("data-v-79d6ba98");const te={class:"fixed top-0 left-0 w-screen h-screen overflow-hidden",style:{"background-color":"rgba(16, 16, 16)"}},se=r("span",{class:"text-white"},"按任意键继续_",-1),oe=r("span",{class:"cursor-blink"},"_",-1);i();const re=ee(((e,t,r,a,n,l)=>(s(),o("div",te,[se,oe]))));X.render=re,X.__scopeId="data-v-79d6ba98";let ae=[{path:"",component:T,meta:{title:"Home"}},{path:"/",component:T,meta:{title:"Home"}},{path:"/down",component:X,meta:{title:"Down"}},{path:"/:path(.*)",component:T}];var ne=ne||chrome;const le=e=>{if(e.status>=200&&e.status<300)return e;const t=new Error(e.statusText);throw t.response=e,t},ie=e=>(e&&e.url||console.log("option need object type or object.url key not pass"),new Promise(((t,s)=>{const{url:o,type:r="text",params:a={}}=e;if(o)return fetch(o,a).then(le).then((e=>{switch(r){case"text":return e.text();case"json":return e.json();case"arrayBuffer":return e.arrayBuffer()}})).then((e=>"arrayBuffer"===r?JSON.stringify(Array.apply(null,new Uint8Array(e))):e)).then((e=>{t(e)})).catch((e=>{s(e)})),!0})).then((t=>"arrayBuffer"===e.type?new Uint8Array(JSON.parse(t)).buffer:t)));ne.windows;const ue=e=>{let t=e.replace(/\[,/g,"[null,");return t=t.replace(/,\]/g,",null]"),t=t.replace(/,{2,}/g,(e=>e.split("").join("null"))),JSON.parse(t)},de=()=>{let e=localStorage.getItem("language")||"en";return"en"===e.slice(0,2)&&(e="en"),e=e.replace(/_/g,"-"),e};const ce="https://translate.google.cn",ge="https://translate.google.com",he=(e,t)=>{let s=`${e.host}/translate_a/single?client=${t?"at":"t"}&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&source=btn&rom=1&srcrom=1&ssel=0&tsel=0&kc=0`;return s+=`&sl=${e.fromLanguage}&tl=${e.toLanguage}&hl=${e.webLanguage}&tk=${e.tk}&q=${encodeURIComponent(e.keyword)}`,s},me=(e,t)=>{let s=`${e.host}/translate_tts?ie=UTF-8&total=1&idx=0&client=${t?"at":"t"}&prev=input`;return s+=`&textlen=${e.keyword.length}&tl=${e.toLanguage}&tk=${e.tk}&q=${encodeURIComponent(e.keyword)}&ttsspeed=${e.speed}`,s};let fe=null,we=e=>()=>e,pe=(e,t)=>{for(var s=0;s<t.length-2;s+=3){var o="a"<=(o=t.charAt(s+2))?o.charCodeAt(0)-87:Number(o);o="+"==t.charAt(s+1)?e>>>o:e<<o;e="+"==t.charAt(s)?e+o&4294967295:e^o}return e};const ye=e=>{let t=(e=>{var t;if(null!==fe)t=fe;else{t=we(String.fromCharCode(84));var s=we(String.fromCharCode(75));(t=[t(),t()])[1]=s(),t=(fe=window[t.join(s())]||"")||""}var o=we(String.fromCharCode(116));s=we(String.fromCharCode(107)),(o=[o(),o()])[1]=s(),s="&"+o.join("")+"=",o=t.split("."),t=Number(o[0])||0;for(var r=[],a=0,n=0;n<e.length;n++){var l=e.charCodeAt(n);128>l?r[a++]=l:(2048>l?r[a++]=l>>6|192:(55296==(64512&l)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(l=65536+((1023&l)<<10)+(1023&e.charCodeAt(++n)),r[a++]=l>>18|240,r[a++]=l>>12&63|128):r[a++]=l>>12|224,r[a++]=l>>6&63|128),r[a++]=63&l|128)}for(e=t,a=0;a<r.length;a++)e+=r[a],e=pe(e,"+-a^+6");return e=pe(e,"+-3^+b+-f"),0>(e^=Number(o[1])||0)&&(e=2147483648+(2147483647&e)),s+((e%=1e6).toString()+".")+(e^t)})(e);return t=t.replace("&tk=",""),t};console.log("production",88);var _e=h({state:{keyword:"",fromLanguage:"auto",autoFromLanguage:"",toLanguage:localStorage.getItem("language")||de(),languageLists:[],googleHost:ce,googleTKK:"",completeList:[],translateResult:{keyword:"",phonetic:"",translateList:[],definition:[],synonym:[],example:""},isShowMore:!1,tryCount:1,speed:1,userSetting:{webLanguage:localStorage.getItem("language")||de(),doubleClick:!0,stroke:!0,pressKey:!0,pressKeyString:"Control",hover:!1,hoverTime:1,autoSound:!1,audioSource:null,bgColor:"#ffffff"},result:{text:"",from:{language:{didYouMean:!1,iso:""},text:{autoCorrected:!1,value:"",didYouMean:!1}},raw:""}},mutations:{reset(e){e.keyword="",e.tryCount=1,e.translateResult={keyword:"",phonetic:"",translateList:[],definition:[],synonym:[],example:""},e.isShowMore=!1,e.completeList=[]},setKeyword(e,t){e.speed=1,e.isShowMore=!1;const s=t||"";e.keyword=s.trim()},setGoogleTKK(e,t){e.googleTKK=t},setIsShowMore(e,t){e.isShowMore=t},setFromLanguage(e,t){e.fromLanguage=t,browser.storage.local.set({fromLanguage:t})},setToLanguage(e,t){e.toLanguage=t,browser.storage.local.set({toLanguage:t})},setWebLanguage(e,t){e.userSetting.webLanguage=t},setDoubleClick(e,t){e.userSetting.doubleClick=t},setStroke(e,t){e.userSetting.stroke=t},setHover(e,t){e.userSetting.hover=t},setHoverTime(e,t){e.userSetting.hoverTime=t},setPressKey(e,t){e.userSetting.pressKey=t},setPressKeyString(e,t){e.userSetting.pressKeyString=t},setAutoSound(e,t){e.userSetting.autoSound=t},setBgColor(e,t){e.userSetting.bgColor=t},setResult(e,t){e.result=t},stopSound(e){e.audioSource&&e.audioSource.stop()}},actions:{SYNC_USER_SETTING({state:e}){browser.storage.local.get("googleTKK",(({googleTKK:t})=>{t&&t.value&&t.expire>Date.now()&&(e.googleTKK=t.value,window.TKK=t.value)})),browser.storage.local.get("fromLanguage",(({fromLanguage:t})=>{t&&(e.fromLanguage=t)})),browser.storage.local.get("toLanguage",(({toLanguage:t})=>{t&&(e.toLanguage=t)})),browser.storage.local.get("userSetting",(({userSetting:t})=>{t&&(e.userSetting=Object.assign(e.userSetting,t))}))},CHOOSE_LANGUAGE({commit:e},{type:t,value:s}){"from"===t?e("setFromLanguage",s):"to"===t?e("setToLanguage",s):"web"===t&&e("setWebLanguage",s)},GET_GOOGLE_HTML:()=>Promise.race([ie({url:ce,type:"text"}).then((e=>({html:e,host:ce}))),ie({url:ge,type:"text"}).then((e=>({html:e,host:ge})))]),AUTO_COMPLETE({state:e}){e.keyword&&~["auto","en"].indexOf(e.fromLanguage)&&(console.log(e.keyword,e.fromLanguage,99),(e=>{const t=`https://clients1.google.cn/complete/search?q=${e.keyword}&client=translate-web&ds=translate&hl=en`;return ie({url:t,type:"text"})})({webLanguage:e.userSetting.webLanguage,keyword:e.keyword}).then((t=>{console.log("🐛 ~ file: index.js ~ line 188 ~ AUTO_COMPLETE ~ response",t);try{const s=JSON.parse(t.slice(19,-1))[1];e.completeList=s.map((e=>e[0]))}catch(s){e.completeList=[]}})).catch((()=>{e.completeList=[]})))},WEB_TRANSLATE_KEYWORD:({state:e,commit:t,dispatch:s},o)=>(t("setKeyword",o),e.tryCount=1,s("TRANSLATE_KEYWORD",{fromLanguage:"auto",toLanguage:e.userSetting.webLanguage})),TRANSLATE_KEYWORD:({state:e,commit:t,dispatch:s},{fromLanguage:o,toLanguage:r,stop:a}={})=>e.keyword?new Promise(((n,l)=>{if(e.tryCount<0)return l();e.tryCount--,s("GET_GOOGLE_TK",e.keyword).then((i=>{var u;console.log("888",i),(u={tk:i,host:e.googleHost,fromLanguage:o||e.fromLanguage,toLanguage:r||e.toLanguage,webLanguage:e.userSetting.webLanguage,keyword:e.keyword},Promise.race([ie({url:he(u,!0),type:"text"}),ie({url:he(u),type:"text"})])).then(ue).then((r=>{t("setResult",function(e,t){const s={text:"",from:{language:{didYouMean:!1,iso:""},text:{autoCorrected:!1,value:"",didYouMean:!1}},raw:""};t&&t.raw&&(s.raw=e);const o=e;if(o[0].forEach((function(e){null!==e[0]&&(s.text+=e[0])})),o[2]===o[8][0][0]?s.from.language.iso=o[2]:(s.from.language.didYouMean=!0,s.from.language.iso=o[8][0][0]),o[5]&&o[5][0]&&o[5][0][0]){let e=o[5][0][0];e=e.replace(/<b><i>/g,"["),e=e.replace(/<\/i><\/b>/g,"]"),s.from.text.value=e,1===o[5][0][5]?s.from.text.autoCorrected=!0:s.from.text.didYouMean=!0}return s}(r)),e.tryCount=1;const i={keyword:"",phonetic:"",translateList:[],definition:[],synonym:[],example:""};let u="",d="";if(r[2]){if(o||r[2]!==e.toLanguage){if(!a&&o&&"en"!==r[2]&&r[2]===e.userSetting.webLanguage)return s("TRANSLATE_KEYWORD",{fromLanguage:"auto",toLanguage:"en",stop:!0}).then(n,l)}else{if(r[2]!==e.userSetting.webLanguage)return t("setToLanguage",e.userSetting.webLanguage),s("TRANSLATE_KEYWORD").then(n,l);if(e.autoFromLanguage&&r[2]!==e.autoFromLanguage)return t("setToLanguage",e.autoFromLanguage),s("TRANSLATE_KEYWORD").then(n,l);if("en"!==r[2])return t("setToLanguage","en"),s("TRANSLATE_KEYWORD").then(n,l)}e.autoFromLanguage=r[2]}if(e.userSetting.autoSound&&s("GOOGLE_SOUND"),r[0]){for(let e=0,t=r[0].length;e<t;e++)e===t-1&&e>0?r[0][e]&&r[0][e][3]&&(i.phonetic=r[0][e][3]):(r[1]?i.translateList=r[1]:r[0][e]&&r[0][e][0]&&(d+=r[0][e][0]),r[0][e]&&r[0][e][1]&&(u+=r[0][e][1]));d&&(d=(e=>{let t=e;return t=t.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;"),t=t.replace(/>/g,"&gt;"),t})(d),d=d.replace(/\n/g,"<br />"),i.translateList=[["",[d]]]),r[12]&&(i.definition=r[12]),r[11]&&(i.synonym=r[11]),r[13]&&(i.example=r[13][0]&&r[13][0][0]&&r[13][0][0][0]),i.keyword=u,e.translateResult=i}n()})).catch((()=>{t("setGoogleTKK",""),s("TRANSLATE_KEYWORD").catch((()=>{}))}))})).catch((()=>{}))})):(t("reset"),Promise.reject()),GOOGLE_SOUND({state:e,commit:t,dispatch:s}){t("stopSound"),s("GET_GOOGLE_TK",e.result.text).then((t=>{var s;(s={tk:t,host:e.googleHost,toLanguage:e.autoFromLanguage||"en",keyword:e.result.text,speed:e.speed},Promise.race([ie({url:me(s,!0),type:"arrayBuffer"}),ie({url:me(s),type:"arrayBuffer"})])).then((t=>{const s=new(window.AudioContext||window.webkitAudioContext);s.decodeAudioData(t).then((t=>{e.audioSource=s.createBufferSource(),e.audioSource.buffer=t,e.audioSource.connect(s.destination),e.audioSource.start(0)}))})),e.speed=1===e.speed?.24:1})).catch((()=>{}))},GET_GOOGLE_TK({state:e,commit:t},s){if(e.googleTKK)return Promise.resolve(ye(s));const o=["435819.1958473774","434674.96463358"];if(window.TKK=o[Math.floor(Math.random()*o.length)],void 0!==window.TKK){t("setGoogleTKK",window.TKK);return ye(s)}}}});let be=m(p),xe=f({history:w(),routes:ae});be.use(xe),be.use(_e),window.utools?window.utools.onPluginReady((()=>{console.log("插件装配完成，已准备好"),be.mount("#app")})):(window.utools=null,be.mount("#app"));
