(this["webpackJsonpzstoo.com"]=this["webpackJsonpzstoo.com"]||[]).push([[0],{34:function(e,t,a){"use strict";a.r(t);var o=a(15),r=a(0),n=a.n(r),c=a(1),i=a(16),s=a(8),l=a(40),m=a(46),u=a.n(m),_=a(14),d=a(41),p=(a(47),function(){var e=Object(r.useContext)(i.a).overlayOpen,t=Object(r.useRef)(),a=Object(r.useRef)();return Object(r.useEffect)((function(){a.current&&a.current[e?"pause":"play"]()}),[e]),Object(r.useEffect)((function(){var o=-1!==navigator.userAgent.indexOf("Firefox");s.a.registerPlugin(l.a);var r=s.a.timeline();r.from(".Home__zak",{duration:.9,ease:"ease.inOut",scale:1.17},.3),r.from(".Home__glow",{duration:1.6,ease:"ease.out",filter:o?"":"blur(150px)",visibility:o?"hidden":""},.3),r.from(".Home__abstract--path",{duration:.8,ease:"ease.in",opacity:0,scale:1.13,skewY:15,transformOrigin:"center",stagger:{each:.02,from:"center"}},"<0.4"),r.from(".Home__headline",{duration:1.3,ease:"power1.out",opacity:0,y:-8},"<0.5"),r.from(".Home__NavLink",{duration:.8,ease:"power1.out",yPercent:-25,filter:"opacity(0)",pointerEvents:"auto",stagger:{each:.1,from:"start"}},"<0.3"),e&&r.progress(1,!1);var n=r.duration(),c=s.a.timeline({delay:n-.9,repeat:-1,yoyo:!0});c.addLabel("start",0),c.to(".Home__abstract",{duration:1.8,ease:"slow.out",y:-7},.1),c.to(".Home__zak",{duration:1.9,ease:"ease.inOut",y:-12},0),c.fromTo(".Home__glow",{filter:"opacity(100%)"},{duration:1.45,ease:"slow.inOut",filter:"opacity(50%)",y:-7},.05),a.current=c;var i=s.a.timeline({scrollTrigger:{trigger:t.current,onUpdate:function(e){return function(e){e.toFixed(3)<.001?a.current.play():e.toFixed(3)>=.001&&a.current.tweenTo("start")}(e.progress)},pin:!0,scrub:.5,pinSpacing:!1}});i.to(".Home__NavLink",{duration:.6,ease:"power2.in",xPercent:100,opacity:0,pointerEvents:"auto",stagger:{each:.1,from:"start"}},0),i.to(".Home__glow",{duration:.6,ease:"power2.inOut",opacity:0,scale:.84},.3),i.to(".Home__abstract--path",{duration:.6,ease:"power3.inOut",strokeDashoffset:239,stagger:{each:.01,from:"edges"}},"<0.1"),i.to(".Home__headline",{duration:1,ease:"power3.inOut",strokeDashoffset:130},"<0.3"),i.to(".Home__zak",{duration:.5,ease:"power2.in",opacity:0,y:70},"<0.8")}),[]),n.a.createElement("div",{className:"Home",ref:t},n.a.createElement("div",{className:"Home__wrapper"},n.a.createElement("div",{className:"Home__art"},n.a.createElement("img",{className:"Home__glow Home__glow--back",src:u.a,alt:"abstract glow art"}),n.a.createElement(_.f,{className:"Home__abstract Home__abstract--back",pathName:"Home__abstract--path"}),n.a.createElement(_.p,{className:"Home__zak"}),n.a.createElement("img",{className:"Home__glow Home__glow--front",src:u.a,alt:"abstract glow art"}),n.a.createElement(_.f,{className:"Home__abstract Home__abstract--front",pathName:"Home__abstract--path"})),n.a.createElement(_.e,{className:"Home__headline"})),n.a.createElement("div",{className:"Home__navigation"},n.a.createElement(d.a,{className:"Home__NavLink Home__NavLink--projects",text:"Projects",lineWidth:30,href:"/projects",color:"#A1A1A1"}),n.a.createElement(d.a,{className:"Home__NavLink Home__NavLink--about",text:"About",lineWidth:50,href:"/about",color:"#A1A1A1"}),n.a.createElement(d.a,{className:"Home__NavLink Home__NavLink--contact",text:"Contact",lineWidth:40,href:"/contact",color:"#A1A1A1"})))}),g=a(43),f=(a(48),function(e){return n.a.createElement("div",{className:"ProjectLink",onClick:function(){return e.projectClick(e.id)}},n.a.createElement("div",{className:"ProjectLink__name"},e.name),n.a.createElement("div",{className:"ProjectLink__shortDesc"},e.desc),n.a.createElement("div",{className:"ProjectLink__wrapper ProjectLink__wrapper--".concat(e.index)},n.a.createElement("div",{className:"ProjectLink__line"}),n.a.createElement(_.l,{className:"ProjectLink__id",projectId:e.id,noGradient:!0})))}),h=function(e){var t={height:"".concat(e.height,"vh")};return n.a.createElement("div",{className:"Spacer",style:t})},k=(a(49),function(e){return Object(r.useEffect)((function(){var e=-1!==navigator.userAgent.indexOf("Firefox");s.a.registerPlugin(l.a);var t=s.a.timeline({scrollTrigger:{trigger:".Projects__art",endTrigger:".Projects",end:"bottom -50%",pin:!0,scrub:1,pinSpacing:!1}});t.fromTo(".Projects__abstract--path",{strokeDashoffset:-745,y:0},{duration:1.5,ease:"power1.inOut",strokeDashoffset:0,y:e?0:250,stagger:{each:.03,from:"start"}},0),t.to(".Projects__abstract--path",{duration:.5,ease:"power1.inOut",strokeDashoffset:745,stagger:{each:.03,from:"end"}},1.5),s.a.utils.toArray(".ProjectLink").forEach((function(e,t){s.a.from(e,{opacity:0,y:20,scale:.97,ease:"power1.out",duration:.6,scrollTrigger:{trigger:e,toggleActions:"play complete complete reverse",start:"top 75%",id:"wrapper"}}),s.a.from(".ProjectLink__wrapper--".concat(t," .ProjectLink__line"),{opacity:0,xPercent:-100,ease:"power2.out",duration:.2,scrollTrigger:{trigger:e,toggleActions:"play complete complete reverse",start:"top 55%",id:"line"}}),s.a.from(".ProjectLink__wrapper--".concat(t," .ProjectLink__id"),{xPercent:-120,ease:"power2.out",duration:.4,scrollTrigger:{trigger:e,toggleActions:"play complete complete reverse",start:"top 50%",id:"id"}})}))}),[]),n.a.createElement("div",{className:"Projects"},n.a.createElement("div",{className:"Projects__art"},n.a.createElement(_.m,{className:"Projects__abstract",pathName:"Projects__abstract--path"})),n.a.createElement(h,{height:140}),n.a.createElement("div",{className:"Projects__wrapper"},g.a.map((function(t,a){return n.a.createElement(f,{index:a,name:t.name,desc:t.shortDesc,id:t.id,key:a,projectClick:e.projectClick})}))))}),b=a(50),w=a.n(b),v=[{title:"Languages & Frameworks",skills:{JavaScript:["TypeScript","Node.js","React","Jest","Enzyme","GSAP"],HTML:[],CSS:["SASS","BEM"],AWS:["DynamoDB"],Firebase:[],PostgreSQL:[],Java:[]}},{title:"Tools",skills:{Git:[],npm:[],Postman:[],Sketch:[]}}],S=(a(51),function(e){var t=Object(r.useRef)(null),a=Object(r.useRef)(null),c=function(){var e=document.querySelector(".About__wrapper"),t=e?e.clientHeight:"25%";return"top ".concat(t)};Object(r.useEffect)((function(){s.a.registerPlugin(l.a),l.a.create({trigger:a.current,endTrigger:t.current,start:c,end:"bottom 0%",pin:!0,pinSpacing:!1,id:"skills-pin"});var e=s.a.timeline({});e.from(".Skills__section--1 .Skills__title",{duration:.8,ease:"power1.inOut",opacity:0,y:-20,skewX:-10},"<"),e.from(".Skills__section--1 .Skills__skill",{duration:.4,ease:"power1.inOut",opacity:0,x:-10,skewX:-20,stagger:{each:.08,from:"start"}},"<0.5"),e.addLabel("showSkills","<"),e.from(".Skills__subSkillsLine--JavaScript",{duration:.9,ease:"power1.inOut",yPercent:-100},"showSkills+=0.1"),e.from(".Skills__subSkillsLine--CSS",{duration:.7,ease:"power1.inOut",yPercent:-100},"showSkills+=0.7"),e.from(".Skills__subSkillsLine--AWS",{duration:.7,ease:"power1.inOut",yPercent:-100},"showSkills+=0.9");var o=s.a.timeline({});o.to(".Skills__section--1",{duration:1.2,ease:"power1.inOut",yPercent:-60},0),o.to(".Skills__section--1",{duration:.7,ease:"power1.inOut",scale:.97,transformOrigin:"center left",opacity:.5},">"),o.to(".Skills__section--2",{duration:.7,ease:"power1.inOut",yPercent:-225},"<");var r=s.a.timeline({});r.from(".Skills__section--2 .Skills__title",{duration:.8,ease:"power1.inOut",opacity:0,y:-20,skewX:-10},">"),r.from(".Skills__section--2 .Skills__skill",{duration:.4,ease:"power1.inOut",opacity:0,x:-10,skewX:-20,stagger:{each:.08,from:"start"}},"<0.5");var n=s.a.timeline({});n.to(".Skills__subSkillsLine",{duration:.9,ease:"power1.inOut",yPercent:-100,scale:.95,opacity:0},.2),n.to(".Skills__skill",{duration:.8,ease:"power1.inOut",x:-10,opacity:0,skewX:-20,stagger:{each:.08,from:"center"}},.5),n.to(".Skills__title",{duration:.8,ease:"power1.inOut",x:-10,opacity:0,skewX:-20,stagger:{each:.08,from:"center"}},1.4);var i=s.a.timeline({scrollTrigger:{trigger:t.current,start:"top 26%",end:"bottom 50%",scrub:1}});i.add(e,">0.5"),i.add(o,">0.7"),i.add(r,">-0.2"),i.add(n,">1")}),[]);var i=v.map((function(e,t){return n.a.createElement("div",{className:"Skills__section Skills__section--".concat(t+1),key:t},n.a.createElement("div",{className:"Skills__title"},e.title),(a=e.skills,Object.entries(a).map((function(e,t){var a=Object(o.a)(e,2),r=a[0],c=a[1];return n.a.createElement("div",{className:"Skills__wrapper",key:t},n.a.createElement("div",{className:"Skills__skill"},r),c.length>0?n.a.createElement("div",{className:"Skills__subSkills"},n.a.createElement("div",{className:"Skills__subSkillsLine Skills__subSkillsLine--".concat(r)}),c.map((function(e,t){return n.a.createElement("div",{className:"Skills__skill Skills__subSkill",key:t},e)}))):null)}))));var a}));return n.a.createElement("div",{className:"Skills",ref:t},n.a.createElement("div",{className:"Skills__pin",ref:a},i),n.a.createElement(h,{height:100}))}),y=a(44),N=(a(52),function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),a=Object(r.useRef)(null),o=Object(r.useRef)(null),c=Object(r.useRef)(null);return Object(r.useEffect)((function(){s.a.registerPlugin(l.a),l.a.create({trigger:t.current,endTrigger:e.current,end:"140% 60%",pin:!0,pinSpacing:!1,id:"pin"});var a=s.a.timeline({scrollTrigger:{trigger:e.current,endTrigger:o.current,start:"-15% 0%",end:"top 35%",scrub:1}});a.from(".About__abstract--path",{duration:1.9,ease:"power2.inOut",strokeDashoffset:1300,stagger:{each:.02,from:"start"}},0),a.from(".About__ZakSakata--path",{duration:1.3,ease:"power1.inOut",strokeDashoffset:-1540,stagger:{each:.02,from:"start"}},.8),a.from(".About__glow",{duration:1,ease:"power2.inOut",opacity:0,scale:.84},1.4),a.from(".About__hideSkim",{duration:.1,opacity:0},1.6);var r=s.a.timeline({scrollTrigger:{trigger:o.current,endTrigger:c.current,start:"bottom 20%",end:"top 20%",scrub:1,id:"skills"}});r.fromTo(".About__glow",{filter:"opacity(100%)"},{duration:.5,ease:"power2.inOut",filter:"opacity(0%)",scale:.84},0),r.fromTo(".About__abstract--path",{strokeDasharray:"1333 1333"},{duration:2,ease:"power1.inOut",xPercent:30,strokeDasharray:"800 800",strokeDashoffset:-100,stagger:{each:.1,from:"end"}},0),r.to(".About__ZakSakata--path",{duration:3,ease:"power1.inOut",strokeDashoffset:1540,stagger:{each:.05,from:"end"}},0),r.to(".About__SkillsTitle--path",{duration:3.1,ease:"power2.inOut",strokeDashoffset:0,stagger:{each:.03,from:"end"}},.5);var n=s.a.timeline({scrollTrigger:{trigger:".Skills",endTrigger:e.current,start:"bottom 70%",end:"140% 60%",scrub:.8,id:"about-out"}});n.to(".About__SkillsTitle--path",{duration:2.8,ease:"power2.inOut",strokeDashoffset:850,stagger:{each:.03,from:"center"}},.2),n.to(".About__abstract--path",{duration:4,ease:"power2.inOut",strokeDasharray:"1333 1333",strokeDashoffset:1333,stagger:{each:.07,from:"edges"}},"<"),n.to(".About__hideSkim",{duration:.5,opacity:0},">")}),[]),n.a.createElement("div",{className:"About",ref:e},n.a.createElement("div",{className:"About__pin",ref:t},n.a.createElement("div",{className:"About__wrapper"},n.a.createElement(_.q,{className:"About__ZakSakata",pathName:"About__ZakSakata--path"}),n.a.createElement(_.n,{className:"About__SkillsTitle",pathName:"About__SkillsTitle--path"}),n.a.createElement("div",{className:"About__SkimCover About__hideSkim"}),n.a.createElement(y.a,{className:"About__Skim About__hideSkim",width:100,height:100})),n.a.createElement("div",{className:"About__art",ref:a},n.a.createElement(_.a,{className:"About__abstract",pathName:"About__abstract--path"}),n.a.createElement("img",{className:"About__glow",src:w.a,alt:"abstract glow art"}))),n.a.createElement(h,{height:50}),n.a.createElement("div",{className:"About__text About__text--about",ref:o},"After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences.",n.a.createElement("br",null),n.a.createElement("br",null),"After discovering coding two years ago, I've been determined to improve my skills every day as both a developer and UI/UX designer. I've had amazing experiences teaching coding to students, competing in hackathons, and collaborating with many other knowledgable individuals. I'm passionate, always ready for a challenge, and open to new experiences."),n.a.createElement(h,{height:100}),n.a.createElement("div",{className:"About__text About__text--skills",ref:c},n.a.createElement(S,null)))}),E=a(38),j=a(9),O=a(53),C=a.n(O),T=(a(54),function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),a=Object(r.useRef)(null),o=Object(r.useRef)(null);return Object(r.useEffect)((function(){s.a.registerPlugin(l.a),l.a.create({trigger:t.current,endTrigger:e.current,pin:!0,pinSpacing:!1,id:"contact-pin"});var r=s.a.timeline({scrollTrigger:{trigger:e.current,endTrigger:a.current,start:"5% 0%",end:"80% 45%",scrub:1,id:"contact"}});r.from(".Contact__abstract--path",{duration:3.5,ease:"power1.out",strokeDashoffset:1122,stagger:{each:.2,from:"start"}},0);var n={duration:0,pointerEvents:"none"},c={duration:.5,ease:"power1.out",y:-5},i={duration:.5,ease:"power1.out",opacity:0,y:5};r.from(".Contact__icon--LinkedIn",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:-265}),"<0.5"),r.fromTo(".Contact__icon-aTag--LinkedIn",Object(E.a)({},n),{pointerEvents:"auto"},"<"),r.from(".Contact__iconText--LinkedIn",Object(E.a)({},i),"<"),r.to(".Contact__icon--LinkedIn",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:265}),">0.5"),r.to(".Contact__iconText--LinkedIn",Object(E.a)({},i),"<"),r.to(".Contact__icon-aTag--LinkedIn",Object(E.a)({},n),">"),r.from(".Contact__icon--GitHub",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:-395}),">"),r.fromTo(".Contact__icon-aTag--GitHub",Object(E.a)({},n),{pointerEvents:"auto"},"<"),r.from(".Contact__iconText--GitHub",Object(E.a)({},i),"<"),r.to(".Contact__icon--GitHub",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:395}),">0.5"),r.to(".Contact__iconText--GitHub",Object(E.a)({},i),"<"),r.to(".Contact__icon-aTag--GitHub",Object(E.a)({},n),">"),r.from(".Contact__icon--Medium",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:-485}),">"),r.fromTo(".Contact__icon-aTag--Medium",Object(E.a)({},n),{pointerEvents:"auto"},"<"),r.from(".Contact__iconText--Medium",Object(E.a)({},i),"<"),r.to(".Contact__icon--Medium",Object(E.a)(Object(E.a)({},c),{},{strokeDashoffset:485}),">0.5"),r.to(".Contact__iconText--Medium",Object(E.a)({},i),"<"),r.to(".Contact__icon-aTag--Medium",Object(E.a)({},n),">");var m=s.a.timeline({scrollTrigger:{trigger:a.current,endTrigger:o.current,start:"top center",end:"bottom 50%",scrub:.5,id:"contact-form"}});m.to(".Contact__art",{duration:2.1,ease:"power1.out",yPercent:0,skewY:10,scale:1.5},0),m.to(".Contact__glow",{duration:1,ease:"power1.out",opacity:1},0),m.from(".Contact__LetsTalk--path",{duration:2,ease:"power2.inOut",strokeDashoffset:100,y:5,skewY:-5,skewX:-5,scale:.9},">-0.1"),m.from(".Contact__contactText",{duration:2,ease:"power2.inOut",opacity:0,y:5,skewY:-5,skewX:-5,scale:.9},"<"),s.a.from(".Contact__ContactButton--path",{duration:.7,ease:"power1.inOut",strokeDashoffset:-195,scrollTrigger:{trigger:o.current,start:"0% 75%",toggleActions:"play complete complete reverse"}})}),[]),n.a.createElement("div",{className:"Contact",ref:e},n.a.createElement("div",{className:"Contact__pin",ref:t},n.a.createElement("div",{className:"Contact__wrapper"},n.a.createElement(_.h,{className:"Contact__icon Contact__icon--LinkedIn",aTagName:"Contact__icon-aTag Contact__icon-aTag--LinkedIn",pathName:"Contact__LinkedIn--path"}),n.a.createElement("div",{className:"Contact__iconText Contact__iconText--LinkedIn"},"View my full",n.a.createElement("br",null),"resume on LinkedIn"),n.a.createElement(_.d,{className:"Contact__icon Contact__icon--GitHub",aTagName:"Contact__icon-aTag Contact__icon-aTag--GitHub",pathName:"Contact__GitHub--path"}),n.a.createElement("div",{className:"Contact__iconText Contact__iconText--GitHub"},"Browse all my",n.a.createElement("br",null),"projects on GitHub"),n.a.createElement(_.i,{className:"Contact__icon Contact__icon--Medium",aTagName:"Contact__icon-aTag Contact__icon-aTag--Medium",pathName:"Contact__Medium--path"}),n.a.createElement("div",{className:"Contact__iconText Contact__iconText--Medium"},"Check out my",n.a.createElement("br",null),"articles on Medium")),n.a.createElement("div",{className:"Contact__info"},n.a.createElement(_.g,{className:"Contact__LetsTalk",pathName:"Contact__LetsTalk--path"}),n.a.createElement("div",{className:"Contact__contactText"},"Ready to start a project or currently looking to hire? Send me an email at sakata.zak@gmail.com or head over to my contact page with the button below"),n.a.createElement(j.b,{to:"/contact"},n.a.createElement(_.c,{className:"Contact__ContactButton",pathName:"Contact__ContactButton--path"}))),n.a.createElement("div",{className:"Contact__art"},n.a.createElement(_.b,{className:"Contact__abstract",pathName:"Contact__abstract--path"}),n.a.createElement("img",{className:"Contact__glow",src:C.a,alt:"abstract glow art"}))),n.a.createElement(h,{height:300})," ",n.a.createElement("span",{className:"Contact__trigger--formStart",ref:a}),n.a.createElement(h,{height:100})," ",n.a.createElement("span",{className:"Contact__trigger--formEnd",ref:o}),n.a.createElement(h,{height:50})," ")});a(55),t.default=function(e){var t=Object(r.useState)(null),a=Object(o.a)(t,2),i=a[0],s=a[1],l=Object(r.useState)(!1),m=Object(o.a)(l,2),u=m[0],_=m[1],d=Object(c.h)(),g=Object(r.useRef)({}),f=function(){var e=document.querySelector(".Main"),t=document.querySelector(".Projects__wrapper"),a=document.querySelector(".About__text--about");if(e&&t&&a){var o=e.getBoundingClientRect(),r=t.getBoundingClientRect(),n=a.getBoundingClientRect(),c=-1*o.top+r.top,i=-1*o.top+n.top-.25*window.innerHeight;g.current={home:0,projects:c,about:i}}_(!0)};window.onresize=function(e){setTimeout((function(){f()}),201)},Object(r.useEffect)((function(){var e=d.pathname;u&&("/home"===e?window.scrollTo(0,g.current.home):"/projects"===e?window.scrollTo(0,g.current.projects):"/about"===e&&window.scrollTo(0,g.current.about))}),[u,d,d.pathname]),Object(r.useEffect)((function(){f(),document.querySelector(".Main").classList.remove("hide")}),[]);return i?n.a.createElement(c.a,{push:!0,from:"/",to:{pathname:"/project/".concat(i),state:{projectId:i}}}):n.a.createElement("div",{className:"Main hide"},n.a.createElement(p,null),n.a.createElement(k,{projectClick:function(e){return s(e)}}),n.a.createElement(N,null),n.a.createElement(T,null))}},41:function(e,t,a){"use strict";var o=a(38),r=a(0),n=a.n(r),c=a(9);a(42);t.a=function(e){var t={gridTemplateColumns:"min-content ".concat(e.lineWidth,"px"),transform:"rotate(".concat(e.rotate,"deg)")},a={color:e.color},r={backgroundColor:e.color},i=Object(o.a)(Object(o.a)({},t),{},{gridTemplateColumns:"".concat(e.lineWidth,"px min-content")}),s=function(t){return e.href?n.a.createElement(c.b,{to:e.href},n.a.createElement("div",{className:"NavLink__text NavLink__text--".concat(t),style:a},e.text)):e.onClick?n.a.createElement("div",{className:"NavLink__text NavLink__text--".concat(t),onClick:e.onClick,style:a},e.text):n.a.createElement("div",{className:"NavLink__text NavLink__text--".concat(t),style:a},e.text)};return e.left?n.a.createElement("div",{className:"NavLink ".concat(e.className),style:i},n.a.createElement("div",{className:"NavLink__line",style:r}),s("left")):n.a.createElement("div",{className:"NavLink ".concat(e.className),style:t},s("right"),n.a.createElement("div",{className:"NavLink__line",style:r}))}},42:function(e,t,a){},43:function(e,t,a){"use strict";t.a=[{id:1,name:"Stockup",shortDesc:"Stock market news web scraper",fullDesc:"Stockup is an application leveraging web scraping and APIs to gather news about stocks from various sources.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",techStack:["React","CSS","Node.js","Heroku"],githubLink:"",imageUrls:["images/projects/Stockup1.png","images/projects/Stockup1.png"],year:2019,role:"Full Stack",colors:{header:"#00D35E",text:"#AFD560",textShadow:"#769434",border:"#49CC59",borderShadow:"#067c14"}},{id:2,name:"Lanakila Meals on Wheels",shortDesc:"Mass medium communication tool",fullDesc:"Stockup is an application leveraging web scraping and APIs to gather news about stocks from various sources.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",techStack:["AWS","HTML","CSS","JS"],githubLink:"",imageUrls:["images/projects/Stockup1.png","images/projects/Stockup1.png"],year:2018,role:"Full Stack",colors:{header:"#15A280",text:"#dd7f26",textShadow:"#a75a13",border:"#06ac85",borderShadow:"#058d6d"}},{id:3,name:"Power Outage Tracker",shortDesc:"Tracks nearby facilities for risk of power outages",fullDesc:"Stockup is an application leveraging web scraping and APIs to gather news about stocks from various sources.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",techStack:["React","D3.js","AWS","CSS"],githubLink:"",imageUrls:["images/projects/Stockup1.png","images/projects/Stockup1.png"],year:2019,role:"Full Stack",colors:{header:"#FF1973",text:"#FFB200",textShadow:"#aa7905",border:"#c20654",borderShadow:"#940641"}},{id:4,name:"Zak Sakata Photos",shortDesc:"My photography website",fullDesc:"Stockup is an application leveraging web scraping and APIs to gather news about stocks from various sources.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",techStack:["AWS","JS","HTML","CSS"],githubLink:"",imageUrls:["images/projects/Stockup1.png","images/projects/Stockup1.png"],year:2018,role:"Full Stack",colors:{header:"#9F45FF",text:"#ff682c",textShadow:"#cc3c02",border:"#7a1af7",borderShadow:"#6b24c7"}},{id:5,name:"Chroma Vibez",shortDesc:"Finds Spotify playlists based off photos",fullDesc:"Stockup is an application leveraging web scraping and APIs to gather news about stocks from various sources.\n\nThe UI is built with React and interacts with a Node.js backend that handles all the parsing of news articles and stock ticker information.",techStack:["Spotify","HTML","CSS","JS"],githubLink:"",imageUrls:["images/projects/Stockup1.png","images/projects/Stockup1.png"],year:2017,role:"Front End",colors:{header:"#16D1E4",text:"#0785fc",textShadow:"#0078bd",border:"#16D1E4",borderShadow:"#0a6974"}}]},44:function(e,t,a){"use strict";var o=a(0),r=a.n(o);a(45);t.a=function(e){var t={width:"".concat(e.width,"%"),height:"".concat(e.height,"%")};return["toRight","toLeft","toTop","project"].includes(e.type)?r.a.createElement("div",{className:"".concat(e.className," Skim--").concat(e.type),style:t}):r.a.createElement("div",{className:"".concat(e.className," Skim"),style:t})}},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/HomeGlow.00a27232.png"},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/AboutGlow.bf120f7d.png"},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/ContactGlow.dbc36e44.png"},54:function(e,t,a){},55:function(e,t,a){}}]);
//# sourceMappingURL=0.c861c12d.chunk.js.map