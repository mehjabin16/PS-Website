(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{160:function(e,t,a){e.exports=a.p+"static/media/Photo1.ab5d4476.jpg"},166:function(e,t,a){e.exports=a.p+"static/media/Photo6.44412e66.jpg"},167:function(e,t,a){e.exports=a.p+"static/media/Photo2.ec59735f.jpg"},168:function(e,t,a){e.exports=a.p+"static/media/Photo5.55e7b30d.jpg"},169:function(e,t,a){e.exports=a.p+"static/media/Photo4.cbdfdc05.jpg"},184:function(e,t,a){e.exports=a.p+"static/media/img15.7f2379b8.jpg"},214:function(e,t,a){e.exports=a.p+"static/media/Pronoia.1c452a31.jpg"},283:function(e,t,a){e.exports=a.p+"static/media/BTCX.52e67a7f.jpg"},284:function(e,t,a){e.exports=a.p+"static/media/Farewell17.1335fb4d.jpg"},289:function(e,t,a){e.exports=a.p+"static/media/img1.96edfe65.jpg"},290:function(e,t,a){e.exports=a.p+"static/media/Photo3.9207f0f6.jpg"},291:function(e,t,a){e.exports=a.p+"static/media/img11.d5b86f2e.jpg"},292:function(e,t,a){e.exports=a.p+"static/media/img22.5160a3f0.jpg"},293:function(e,t,a){e.exports=a.p+"static/media/img9.e27fdd75.jpg"},294:function(e,t,a){e.exports=a.p+"static/media/img7.7003df51.jpg"},295:function(e,t,a){e.exports=a.p+"static/media/img8.0881d738.jpg"},296:function(e,t,a){e.exports=a.p+"static/media/img6.d4f45389.jpg"},297:function(e,t,a){e.exports=a.p+"static/media/ShootatIUT.09111798.jpg"},298:function(e,t,a){e.exports=a.p+"static/media/imgx.20fdb241.jpg"},314:function(e,t,a){e.exports=a(439)},324:function(e,t,a){e.exports=a.p+"static/media/logo.40c0bbf2.svg"},431:function(e,t,a){e.exports=a.p+"static/media/team.2b062874.jpg"},432:function(e,t,a){e.exports=a.p+"static/media/Team2.29f2542d.jpg"},433:function(e,t,a){e.exports=a.p+"static/media/team3.413ea522.jpg"},434:function(e,t,a){},435:function(e,t,a){},439:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(39),r=a.n(l),s=a(48),o=a(58),c=a(97),m=a(33),d=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(c.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},u=a(12),p=a(6),h=a.n(p),g=a(219),f=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),l=Object(u.a)(a,2),r=l[0],s=l[1],o=Object(i.useState)([]),c=Object(u.a)(o,2),m=c[0],d=c[1],p=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!p())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(p()||(window.addEventListener("scroll",b),window.addEventListener("resize",E)),h())}),[m]);var f=function(){p()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",E))},b=Object(g.throttle)((function(){f(),h()}),30),E=Object(g.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),h()}),[r]),n.a.createElement(n.a.Fragment,null,e.children())}));f.propTypes={children:h.a.func.isRequired};var b=a(188),E=a(29),y=a.n(E),v=function(e){var t=e.className,a=e.src,l=e.width,r=e.height,s=e.alt,o=Object(m.a)(e,["className","src","width","height","alt"]),c=Object(i.useState)(!1),d=Object(u.a)(c,2),p=d[0],h=d[1],g=Object(i.useRef)(null);Object(i.useEffect)((function(){f(g.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");p||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:g,className:t,src:a,width:l,height:r,alt:s,onLoad:function(){h(!0)}}))};v.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var x=v,w=function(e){var t=e.className,i=Object(m.a)(e,["className"]),l=y()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:l}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(s.b,{to:"/PS-Website"},n.a.createElement(x,{src:a(324),alt:"Open",width:32,height:32}))))},j=function(e){var t=e.className,a=e.navPosition,l=e.hideNav,r=(e.hideSignin,e.bottomOuterDivider),o=e.bottomDivider,c=Object(m.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),d=Object(i.useState)(!1),p=Object(u.a)(d,2),h=p[0],g=p[1],f=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){return h&&E(),document.addEventListener("keydown",x),document.addEventListener("click",j),function(){document.removeEventListener("keydown",x),document.removeEventListener("click",j),v()}}));var E=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",g(!0)},v=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),g(!1)},x=function(e){h&&27===e.keyCode&&v()},j=function(e){f.current&&h&&!f.current.contains(e.target)&&e.target!==b.current&&v()},N=y()("site-header",r&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},c,{className:N}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:y()("site-header-inner",o&&"has-bottom-divider")},n.a.createElement(w,null),!l&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:h?v:E},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:f,className:y()("header-nav",h&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:y()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/PS-Website/gallery",onClick:v},"GALLERY")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/PS-Website/simpleblog",onClick:v},"ACTIVITIES")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/PS-Website/about",onClick:v},"ABOUT US")))))))))};j.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var N=j,T=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=y()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"Contact")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"About us")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"FAQ's")),n.a.createElement("li",null,n.a.createElement(s.b,{to:"#0"},"Support"))))},O=function(e){var t=e.className,a=Object(m.a)(e,["className"]),i=y()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://facebook.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Facebook"),n.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://google.com/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("g",null,n.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),n.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),n.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},S=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,l=Object(m.a)(e,["className","topOuterDivider","topDivider"]),r=y()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},l,{className:r}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:y()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(w,null),n.a.createElement(O,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(T,null),n.a.createElement("div",{className:"footer-copyright"},"Made by ",n.a.createElement("a",null,"Nafisa Mehjabin"),". All right reserved")))))};S.defaultProps={topOuterDivider:!1,topDivider:!1};var k=S,A=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(N,null),n.a.createElement("div",{className:"site-content"},t),n.a.createElement(k,null))},P=a(22),L=(a(481),a(248)),q=(a(249),a(252),a(251),a(250));a(179),a(213),a(177);var I=a(478),z=a(479),C=a(25),H=function(e){var t=e.className,a=e.children,i=e.labelHidden,l=e.id,r=Object(m.a)(e,["className","children","labelHidden","id"]),s=y()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},r,{className:s,htmlFor:l}),a)};H.defaultProps={children:null,labelHidden:!1,id:null};var W=H,R=function(e){var t=e.children,a=e.className,i=e.status,l=Object(m.a)(e,["children","className","status"]),r=y()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},l,{className:r}),t)};R.defaultProps={children:null,status:!1};var M=R,D=function(e){var t=e.className,a=e.children,i=e.label,l=e.labelHidden,r=e.type,s=e.name,o=e.status,c=e.disabled,d=e.value,u=e.formGroup,p=e.hasIcon,h=e.size,g=e.placeholder,f=e.rows,b=e.hint,E=Object(m.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),v=y()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),p&&""!==p&&"has-icon-"+p),x=y()("form-input",h&&"form-input-".concat(h),o&&"form-".concat(o),t),w="textarea"===r?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(W,{labelHidden:l,id:E.id},i),n.a.createElement("div",{className:v},n.a.createElement(w,Object.assign({},E,{type:"textarea"!==r?r:null,className:x,name:s,disabled:c,value:d,placeholder:g,rows:"textarea"===r?f:null})),a),b&&n.a.createElement(M,{status:o},b))};D.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var B=a(281),U=a.n(B),G=a(256),V=a(285),F=a.n(V),_=a(214),Y=a.n(_),J=a(283),X=a.n(J),K=a(284),Q=a.n(K);function $(e){Object(P.a)();return n.a.createElement(G.a,{maxWidth:"xl"},n.a.createElement(L.a,{style:{height:"40%",width:"80%",marginLeft:"auto",marginRight:"auto"}},n.a.createElement("div",{class:"my-img",style:{height:"80%"}},n.a.createElement("img",{src:e.item.image,alt:"Logo",style:{width:"80vw",height:"60vh"}}),n.a.createElement("div",{class:"text-on-image",style:{width:"30%"}},n.a.createElement(q.a,{color:"#86b349",component:"div",variant:"h6"},e.item.name),n.a.createElement(q.a,{color:"#fff",display:"block",style:{fontSize:"14px",marginTop:"10px"}},e.item.description)))))}var Z=function(){var e=[{name:"Pronoia 2023",description:"Islamic University of Technology Photographic Society (IUTPS) is proud to present the Intra IUT Photography Exhibition of the year 2023. Pronoia is back on campus after 3 long years. PRONOIA Exhibition Schedule - 13 march to 14 march,2023.                          Exhibition Venue - IUTPS Exhibition Corner.",image:Y.a},{name:"Throwback to BTCX",description:"Well, let's take a moment to look upon the last year's BTCX. Get ready once again to showcase your photography skills and let your creativity shine! Grab your cameras and stay tuned with us. We are ready to welcome you to witness an unforgettable experience of a lifetime. Hope to see all at BTC-XI.",image:X.a},{name:"Farewell",description:"Dear 17, It's been an honor to have you all within us and getting indulged into all the fun and 'adda's' just like old times. A big thank you for giving us time for this one last time. Perhaps your journey with IUT has ended. However, the bonding with IUTPS will never end. The million blessings of IUTPS will always be there for you in your future endeavours of excellence and compassion. Tribute to PS'17 farewell...",image:Q.a}];return n.a.createElement(U.a,{IndicatorIcon:n.a.createElement(F.a,{style:{fontSize:"15px"}}),fullHeightHover:!1,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:0}},navButtonsWrapperProps:{style:{bottom:"0",top:"unset"}},NextIcon:"next",PrevIcon:"prev"},e.map((function(e,t){return n.a.createElement($,{key:t,item:e})})))},ee=function(){var e=Object(i.useRef)();var t=function(){var e=Object(i.useState)([0,0]),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(i.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),l=Object(u.a)(t,2);l[0],l[1];return n.a.createElement("div",{style:{width:"100%",height:"100%",background:"#253237"}},n.a.createElement(C.a,{ref:e,pages:3},n.a.createElement(C.b,{offset:0,speed:.2,style:{opacity:1,zIndex:5}},n.a.createElement(N,{style:{background:"#00000095"}})),n.a.createElement(C.b,{offset:0,speed:.2,style:{opacity:1}},n.a.createElement("img",{src:a(166),style:{display:"block",width:"28%",marginLeft:"77%"}})),n.a.createElement(C.b,{offset:.25,speed:.5,style:{opacity:1}},n.a.createElement("img",{src:a(167),style:{display:"block",width:"35%",marginLeft:"57%"}})),n.a.createElement(C.b,{offset:.5,speed:.8,style:{opacity:1}},n.a.createElement("img",{src:a(168),style:{display:"block",width:"35%",marginLeft:"23%"}})),n.a.createElement(C.b,{offset:.6,speed:.8,style:{opacity:1}},n.a.createElement("img",{src:a(169),style:{display:"block",width:"17%"}})),n.a.createElement(C.b,{offset:.4,speed:.3,style:{opacity:1}},n.a.createElement("img",{src:a(166),style:{display:"block",width:"24%",marginLeft:"15%"}})),n.a.createElement(C.b,{offset:.5,speed:.45,style:{opacity:1}},n.a.createElement("img",{src:a(160),style:{display:"block",width:"17%",marginLeft:-185}})),n.a.createElement(C.b,{offset:.24,speed:-.1,style:{opacity:1}},n.a.createElement("h2",{"data-reveal-delay":"500",style:{marginLeft:"15%"}}," ","WELCOME TO")),n.a.createElement(C.b,{offset:.34,speed:.2,style:{opacity:1}},n.a.createElement("h2",{"data-reveal-delay":"500",style:{marginLeft:"15%",color:"#86b349"}},n.a.createElement("span",null,"IUT PHOTOGRAPHIC SOCIETY"))),n.a.createElement(C.b,{offset:1.2,speed:.3,style:{opacity:1}},n.a.createElement(Z,null)),n.a.createElement(C.b,{offset:2.6,speed:.2,style:{opacity:1}},n.a.createElement(k,null))))},te=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),a=(t[0],t[1],Object(I.a)({palette:{type:"dark"}}));return n.a.createElement(z.a,{theme:a},n.a.createElement(ee,null))},ae=a(91),ie=function(e){"rgba(0,0,0,".concat(null==e.opacity&&"0",")");return n.a.createElement(ae.ParallaxBanner,{layers:[{image:e.imgsrc,amount:e.offset}],style:{height:e.height,width:e.width,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom}},n.a.createElement("div",null,e.children))},ne=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Test routing"))},le=a(286),re=a(287),se=a(187),oe=a(168),ce=a.n(oe),me=a(289),de=a.n(me),ue=a(290),pe=a.n(ue),he=a(291),ge=a.n(he),fe=a(292),be=a.n(fe),Ee=a(293),ye=a.n(Ee),ve=a(184),xe=a.n(ve),we=a(294),je=a.n(we),Ne=a(295),Te=a.n(Ne),Oe=a(167),Se=a.n(Oe),ke=a(296),Ae=a.n(ke),Pe=a(166),Le=a.n(Pe),qe=a(297),Ie=a.n(qe),ze=a(298),Ce=a.n(ze),He=a(169),We=a.n(He),Re=function(){var e=Object(i.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(i.useState)(!1),s=Object(u.a)(r,2),o=s[0],c=s[1],m=Object(i.useCallback)((function(e,t){t.photo;var a=t.index;l(a),c(!0)}),[]),d=[{src:ce.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:de.a,width:1,height:1,title:"A long bliss by Nafisa Mehjabin"},{src:pe.a,width:3,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:ge.a,width:3,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:be.a,width:4,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:ye.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:xe.a,width:3,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:je.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:Te.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:Se.a,width:3,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:Ae.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:Le.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:Ie.a,width:4,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:xe.a,width:4,height:4,title:"A long bliss by Nafisa Mehjabin"},{src:Ce.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"},{src:We.a,width:4,height:3,title:"A long bliss by Nafisa Mehjabin"}];return n.a.createElement("div",null,n.a.createElement("div",{className:"header-space",style:{height:"80px"}}),n.a.createElement(re.a,{photos:d,onClick:m}),n.a.createElement(se.b,null,o?n.a.createElement(se.a,{onClose:function(){l(0),c(!1)}},n.a.createElement(se.c,{currentIndex:a,views:d.map((function(e){return Object(le.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null))},Me=a(170),De=a(120),Be=a.n(De),Ue=function(){var e=Object(i.useRef)();return n.a.createElement("div",{style:{width:"100%",height:"100%",background:"#253237"}},n.a.createElement(C.a,{ref:e,pages:5},n.a.createElement(C.b,{offset:0,speed:0,style:{opacity:1,zIndex:5}},n.a.createElement(N,{style:{background:"#00000095"}})),n.a.createElement(C.b,{offset:.095,speed:0,style:{opacity:1}},n.a.createElement("img",{src:a(214),style:{display:"block",width:"100%"}})),n.a.createElement(C.b,{offset:1.9,speed:0,style:{opacity:1}},n.a.createElement("div",{style:{width:"100%"}},n.a.createElement("img",{src:a(167),style:{display:"block"}}))),n.a.createElement(C.b,{offset:1.35,speed:0,style:{opacity:1}},n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:20}},n.a.createElement("div",{style:{padding:"24",marginLeft:"30px",marginTop:"10px"}},n.a.createElement("span",{style:{fontSize:"16px",letterSpacing:"3.5px"}},"SEPTEMBER 1, 2015 / PORTRAIT"),n.a.createElement("h1",{style:{marginTop:5,display:"block"}},"Fullscreen options"),n.a.createElement("hr",{style:{height:3,width:"50%",marginLeft:0}}),n.a.createElement("span",{style:{fontWeight:"400",fontStyle:"italic",paddingTop:"30px",display:"block"}},"A gray cat slinks past a wooden house. There's something a little intimidating attempting to describe")),n.a.createElement("div",{style:{padding:"24px",marginRight:"30px"}},n.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.")),n.a.createElement("div",{style:{padding:"24px",marginRight:"30px"}},n.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.")))),n.a.createElement(C.b,{offset:3.35,speed:.2,style:{opacity:1}},n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:20}},n.a.createElement("div",{style:{padding:"24px",marginLeft:"30px"}},n.a.createElement("h3",{style:{marginTop:0,display:"block"}},"Photographer"),n.a.createElement("hr",{style:{height:3,width:"50%",marginLeft:0}}),n.a.createElement("h4",{style:{fontWeight:"400",display:"block"}},"Jane Doe")))),n.a.createElement(C.b,{offset:3.8,speed:0,style:{opacity:1}},n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:20}},n.a.createElement("div",{style:{padding:"24px",marginLeft:"30px"}},n.a.createElement(Me.a,{icon:"quote-left",size:"lg",color:"white"}),n.a.createElement("h2",{style:{fontWeight:"500",fontSize:"26px",textAlign:"center",display:"block"}},"Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.")),n.a.createElement("div",{style:{padding:"24px",marginRight:"30px"}},n.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.")),n.a.createElement("div",{style:{padding:"24px",marginRight:"30px"}},n.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi."))),n.a.createElement("hr",{style:{height:2,width:"95%"}})),n.a.createElement(C.b,{offset:4.3,speed:0,style:{opacity:1}},n.a.createElement("div",{style:{marginLeft:"46%"}},n.a.createElement(Be.a,{image:a(160),roundedSize:"0",imageWidth:"110",imageHeight:"110"})),n.a.createElement("h3",{style:{fontSize:"26px",letterSpacing:"2px",display:"block",textAlign:"center"}},"Author"),n.a.createElement("h3",{style:{fontSize:"36px",letterSpacing:"2px",display:"block",textAlign:"center"}},"Sam Doe"),n.a.createElement("hr",{style:{height:2,width:"95%"}})),n.a.createElement(C.b,{offset:4.6,speed:.2,style:{opacity:1}},n.a.createElement("h3",{style:{fontSize:"36px",letterSpacing:"2px",display:"block",textAlign:"center"}},"You might also like"),n.a.createElement("hr",{style:{height:3,width:"10%"}})),n.a.createElement(C.b,{offset:4.8,speed:0,style:{opacity:1}},n.a.createElement(k,null))))},Ge=function(){return n.a.createElement("div",{style:{width:"100%",height:"100%"}},n.a.createElement(ae.ParallaxProvider,null,n.a.createElement(ie,{imgsrc:a(168),marginTop:"7%",height:"600px",opacity:"1",offset:"0.6"}),n.a.createElement("div",{style:{display:"block"}},n.a.createElement("div",{style:{padding:"24",marginTop:"35px",textAlign:"center"}},n.a.createElement("span",{style:{fontSize:"16px",letterSpacing:"3.5px"}},"JANUARY 3, 2023 / STREET PHOTOGRPHY"),n.a.createElement("h1",{style:{marginTop:5}},"Image Processing"),n.a.createElement("hr",{style:{height:3,width:"70%"}})),n.a.createElement("div",{style:{padding:"24px"}},n.a.createElement("div",{style:{padding:"24px",marginTop:"10px"}},n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},"Is a good photograph defined by just clicking the shutter at the very right moment? No, The real deal is to make it just as vivid as you remember. That's when you need to know basics of post processing techniques, from exposure to lens correction, give photographers the tools to hone their craft in Photoshop and Lightroom.")),n.a.createElement("blockquote",{style:{textAlign:"center",fontWeight:"600",fontSize:"28px",fontStyle:"italic",display:"block"}},'A visual image in the hand of an artist is merely a tool to trigger a mental image." - Roy H Williams'),n.a.createElement("div",{style:{padding:"24px",marginTop:"20px"}},n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},"IUTPS is bringing the most essential session, to guide you step by step of digital post processing. This session is about knowing the right way to process your image, to give them extra pop, the much needed depth to make your end result captivating. What's more, you'll learn tweaking your camera settings to create images with optimal data, size and the right format. So get ready to make your capture a perfect one, even if it's not.")))),n.a.createElement(ie,{imgsrc:a(169),height:"500px",opacity:"1",offset:"0.4"}),n.a.createElement("div",{style:{padding:"24px"}},n.a.createElement("div",{style:{padding:"24px",marginTop:"10px"}},n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},n.a.createElement("h3",null,"Lumina Week: 06")),n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},n.a.createElement("h6",null,"Topic: Digital Post Processing")),n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}}),n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},n.a.createElement("p",null,"Mentors: Mashiat, Rubayat, Tamzid"),n.a.createElement("p",null," Date: Wednesday, January 3, 2023 "),n.a.createElement("p",null," Time: 4:30 PM "),n.a.createElement("p",null," Room No: 203 NAB ")))),n.a.createElement("hr",{style:{height:2,width:"95%"}}),n.a.createElement("div",{style:{marginLeft:"45%"}},n.a.createElement(Be.a,{image:a(160),roundedSize:"0",imageWidth:"110",imageHeight:"110"})),n.a.createElement("span",{style:{fontSize:"20px",paddingTop:"20px",display:"block",textAlign:"center"}},"Author "),n.a.createElement("span",{style:{fontWeight:"500",fontSize:"28px",display:"block",textAlign:"center"}},"Nafisa"),n.a.createElement("hr",{style:{height:2,width:"95%"}}),n.a.createElement("h3",{style:{fontSize:"36px",letterSpacing:"2px",display:"block",textAlign:"center"}},"You might also like similar events"),n.a.createElement("hr",{style:{height:3,width:"10%"}})))},Ve=function(){return n.a.createElement("div",{style:{width:"100%",height:"100%"}},n.a.createElement(ae.ParallaxProvider,null,n.a.createElement("img",{src:a(431),style:{display:"block",width:"100%",marginTop:"10%"}}),n.a.createElement("div",{style:{display:"block"}},n.a.createElement("div",{style:{padding:"24",marginTop:"35px",textAlign:"center"}},n.a.createElement("span",{style:{fontSize:"16px",letterSpacing:"3.5px"}}),n.a.createElement("h1",{style:{marginTop:5}},"Meet The Team"),n.a.createElement("hr",{style:{height:3,width:"70%"}})),n.a.createElement("div",{style:{padding:"24px"}},n.a.createElement("div",{style:{padding:"24px",marginTop:"10px"}},n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},n.a.createElement("p",null," The ones who made the magic possible. Presenting the New Executive Committee of IUT Photographic Society (IUTPS) for the Academic Year (2021-2022) "))),n.a.createElement("img",{src:a(432),style:{display:"block",width:"100%"}}))),n.a.createElement("div",{style:{padding:"24px"}},n.a.createElement("img",{src:a(433),style:{display:"block",width:"100%",marginTop:"10%"}}),n.a.createElement("div",{style:{padding:"24px",marginTop:"20px"}},n.a.createElement("span",{style:{marginTop:"20%",textAlign:"justify"}},n.a.createElement("h2",null," The PS Corner"),"A place for getting indulged into all the fun and 'adda's'. The corner for PS members."))),n.a.createElement("hr",{style:{height:2,width:"95%"}}),n.a.createElement("div",{style:{marginLeft:"45%"}},n.a.createElement(Be.a,{image:a(160),roundedSize:"0",imageWidth:"110",imageHeight:"110"}))))};b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/PS-Website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Fe=function(){return n.a.createElement(c.c,null,n.a.createElement(d,{exact:!0,path:"/PS-Website",component:te}),n.a.createElement(d,{exact:!0,path:"/carousel",component:Z}),n.a.createElement(d,{exact:!0,path:"/test",component:ne,layout:A}),n.a.createElement(d,{exact:!0,path:"/PS-Website/gallery",component:Re,layout:A}),n.a.createElement(d,{exact:!0,path:"/PS-Website/blog",component:Ue}),n.a.createElement(d,{exact:!0,path:"/PS-Website/simpleblog",component:Ge,layout:A}),n.a.createElement(d,{exact:!0,path:"/PS-Website/about",component:Ve,layout:A}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(434),a(435);var _e=Object(o.a)();r.a.render(n.a.createElement(s.a,{history:_e},n.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[314,1,2]]]);
//# sourceMappingURL=main.e8dc218c.chunk.js.map