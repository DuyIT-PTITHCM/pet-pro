import{s as W,y as j,Z as E,x as p,z as R,e as y,n as D,c as X,d as Y,u as J,p as M,q as Z}from"./scheduler.aa61743c.js";import{S as $,i as ee,d as f,v as re,a as h,b as g,h as A,t as b,c as G,e as _,j as H,k as I,m as K,l as L}from"./index.8779bb2d.js";import{t as z,b as te,g as oe,a as ne}from"./Indicator.svelte_svelte_type_style_lang.ea3d09bf.js";import{C as O,F as Q}from"./CloseButton.95ab74e8.js";import{f as F}from"./index.0afdc78d.js";const ae=i=>({}),N=i=>({close:i[5]});function v(i){let e,a;const o=[i[6],{class:i[4]}];let s={$$slots:{default:[U]},$$scope:{ctx:i}};for(let r=0;r<o.length;r+=1)s=p(s,o[r]);e=new Q({props:s,$$inline:!0});const n={c:function(){H(e.$$.fragment)},l:function(t){I(e.$$.fragment,t)},m:function(t,c){K(e,t,c),a=!0},p:function(t,c){const l=c&80?oe(o,[c&64&&ne(t[6]),c&16&&{class:t[4]}]):{};c&263&&(l.$$scope={dirty:c,ctx:t}),e.$set(l)},i:function(t){a||(g(e.$$.fragment,t),a=!0)},o:function(t){b(e.$$.fragment,t),a=!1},d:function(t){L(e,t)}};return f("SvelteRegisterBlock",{block:n,id:v.name,type:"if",source:"(75:0) {#if open}",ctx:i}),n}function x(i){let e;const a=i[7]["close-button"],o=D(a,i,i[8],N),s=o||T(i),n={c:function(){s&&s.c()},l:function(t){s&&s.l(t)},m:function(t,c){s&&s.m(t,c),e=!0},p:function(t,c){o?o.p&&(!e||c&256)&&J(o,a,t,t[8],e?Z(a,t[8],c,ae):M(t[8]),N):s&&s.p&&(!e||c&3)&&s.p(t,e?c:-1)},i:function(t){e||(g(s,t),e=!0)},o:function(t){b(s,t),e=!1},d:function(t){s&&s.d(t)}};return f("SvelteRegisterBlock",{block:n,id:x.name,type:"if",source:"(78:4) {#if dismissable}",ctx:i}),n}function T(i){let e,a;e=new O({props:{color:i[0],size:i[1]?"sm":"xs",name:"Remove badge",class:"ml-1.5 -mr-1.5"},$$inline:!0}),e.$on("click",i[5]);const o={c:function(){H(e.$$.fragment)},l:function(n){I(e.$$.fragment,n)},m:function(n,r){K(e,n,r),a=!0},p:function(n,r){const t={};r&1&&(t.color=n[0]),r&2&&(t.size=n[1]?"sm":"xs"),e.$set(t)},i:function(n){a||(g(e.$$.fragment,n),a=!0)},o:function(n){b(e.$$.fragment,n),a=!1},d:function(n){L(e,n)}};return f("SvelteRegisterBlock",{block:o,id:T.name,type:"fallback",source:"(79:40)          ",ctx:i}),o}function U(i){let e,a,o;const s=i[7].default,n=D(s,i,i[8],null);let r=i[2]&&x(i);const t={c:function(){n&&n.c(),e=X(),r&&r.c(),a=y()},l:function(l){n&&n.l(l),e=Y(l),r&&r.l(l),a=y()},m:function(l,u){n&&n.m(l,u),h(l,e,u),r&&r.m(l,u),h(l,a,u),o=!0},p:function(l,u){n&&n.p&&(!o||u&256)&&J(n,s,l,l[8],o?Z(s,l[8],u,null):M(l[8]),null),l[2]?r?(r.p(l,u),u&4&&g(r,1)):(r=x(l),r.c(),g(r,1),r.m(a.parentNode,a)):r&&(A(),b(r,1,1,()=>{r=null}),G())},i:function(l){o||(g(n,l),g(r),o=!0)},o:function(l){b(n,l),b(r),o=!1},d:function(l){l&&(_(e),_(a)),n&&n.d(l),r&&r.d(l)}};return f("SvelteRegisterBlock",{block:t,id:U.name,type:"slot",source:"(76:2) <Frame {...$$restProps} class={badgeClass}>",ctx:i}),t}function w(i){let e,a,o=i[3]&&v(i);const s={c:function(){o&&o.c(),e=y()},l:function(r){o&&o.l(r),e=y()},m:function(r,t){o&&o.m(r,t),h(r,e,t),a=!0},p:function(r,[t]){r[3]?o?(o.p(r,t),t&8&&g(o,1)):(o=v(r),o.c(),g(o,1),o.m(e.parentNode,e)):o&&(A(),b(o,1,1,()=>{o=null}),G())},i:function(r){a||(g(o),a=!0)},o:function(r){b(o),a=!1},d:function(r){r&&_(e),o&&o.d(r)}};return f("SvelteRegisterBlock",{block:s,id:w.name,type:"component",source:"",ctx:i}),s}const q="font-medium inline-flex items-center justify-center px-2.5 py-0.5";function se(i,e,a){const o=["color","large","dismissable"];let s=j(e,o),{$$slots:n={},$$scope:r}=e;re("Badge",n,["default","close-button"]);let{color:t="primary"}=e,{large:c=!1}=e,{dismissable:l=!1}=e;const u={primary:"bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",blue:"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",dark:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",gray:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",red:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",green:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",yellow:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",indigo:"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",purple:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",pink:"bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",none:""},B={primary:"bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",blue:"bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",dark:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500",red:"bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",green:"bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",yellow:"bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",indigo:"bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",purple:"bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",pink:"bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",none:""},C={primary:"hover:bg-primary-200",blue:"hover:bg-blue-200",dark:"hover:bg-gray-200",red:"hover:bg-red-200",green:"hover:bg-green-200",yellow:"hover:bg-yellow-200",indigo:"hover:bg-indigo-200",purple:"hover:bg-purple-200",pink:"hover:bg-pink-200",none:""};let k;const V={primary:"text-primary-400 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-300",blue:"text-blue-400 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300",dark:"text-gray-400 hover:text-gray-400 hover:bg-gray-600 dark:hover:text-gray-300",red:"text-red-400 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300",green:"text-green-400 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300",yellow:"text-yellow-400 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",indigo:"text-indigo-400 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",purple:"text-purple-400 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300",pink:"text-pink-400 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300",none:""};let m=!0;const P=E(),S=d=>{d.stopPropagation(),a(3,m=!1)};return i.$$set=d=>{a(14,e=p(p({},e),R(d))),a(6,s=j(e,o)),"color"in d&&a(0,t=d.color),"large"in d&&a(1,c=d.large),"dismissable"in d&&a(2,l=d.dismissable),"$$scope"in d&&a(8,r=d.$$scope)},i.$capture_state=()=>({createEventDispatcher:E,twMerge:z,twJoin:te,CloseButton:O,fade:F,Frame:Q,color:t,large:c,dismissable:l,colors:u,borderedColors:B,hoverColors:C,baseClass:q,badgeClass:k,closeBtnColors:V,open:m,dispatch:P,close:S}),i.$inject_state=d=>{a(14,e=p(p({},e),d)),"color"in e&&a(0,t=d.color),"large"in e&&a(1,c=d.large),"dismissable"in e&&a(2,l=d.dismissable),"badgeClass"in e&&a(4,k=d.badgeClass),"open"in e&&a(3,m=d.open)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),i.$$.update=()=>{l&&a(6,s.transition=s.transition??F,s),a(4,k=z(q,c?"text-sm":"text-xs",s.border?`border ${B[t]}`:u[t],s.href&&C[t],s.rounded?"rounded-full":"rounded",e.class)),i.$$.dirty&8&&P(m?"open":"close")},e=R(e),[t,c,l,m,k,S,s,n,r]}class ge extends ${constructor(e){super(e),ee(this,e,se,w,W,{color:0,large:1,dismissable:2}),f("SvelteRegisterComponent",{component:this,tagName:"Badge",options:e,id:w.name})}get color(){throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color(e){throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get large(){throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set large(e){throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get dismissable(){throw new Error("<Badge>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set dismissable(e){throw new Error("<Badge>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ge as B};
