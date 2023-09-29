import{s as H,v as J,r as K,o as V,g as E,h as $,i as k,k as T,M as Q,c as O,l as X,d as B,m as Y}from"./scheduler.a17acf7c.js";import{S as Z,i as tt,d as C,u as W,v as et,e as v,g as j,a as F,b as x,h as nt,c as st,t as S,j as q,k as z,n as g,m as P,o as ot,s as at,l as U}from"./index.8874627e.js";import{t as y}from"./toastError.c8fd0228.js";import{I}from"./Indicator.svelte_svelte_type_style_lang.caff1904.js";const w="src/lib/components/common/ToastError.svelte";function A(l,t,i){const a=l.slice();return a[5]=t[i],a[7]=i,a}function D(l){let t,i,a,e,d=l[5].message+"",u,r,s,o,n,c,_,b,L;a=new I({props:{class:"text-3xl",icon:l[5].type==="success"?"fluent-emoji:cat-face":"fluent-emoji-flat:crying-cat"},$$inline:!0}),o=new I({props:{icon:"foundation:x"},$$inline:!0});function G(){return l[2](l[5])}const M={c:function(){t=E("div"),i=E("p"),q(a.$$.fragment),e=O(),u=X(d),r=O(),s=E("button"),q(o.$$.fragment),n=O(),this.h()},l:function(f){t=$(f,"DIV",{class:!0});var m=k(t);i=$(m,"P",{class:!0});var p=k(i);z(a.$$.fragment,p),e=B(p),u=Y(p,d),p.forEach(v),r=B(m),s=$(m,"BUTTON",{});var N=k(s);z(o.$$.fragment,N),N.forEach(v),n=B(m),m.forEach(v),this.h()},h:function(){j(i,"class","flex items-center 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-xs text-xs"),T(i,w,32,12,913),T(s,w,43,12,1342),j(t,"class",c="toast text-white p-2 rounded-md flex items-center gap-4 mb-2 "+l[5].type+" s-_lWlOL6y_316"),T(t,w,29,8,792)},m:function(f,m){F(f,t,m),g(t,i),P(a,i,null),g(i,e),g(i,u),g(t,r),g(t,s),P(o,s,null),g(t,n),_=!0,b||(L=ot(s,"click",G,!1,!1,!1,!1),b=!0)},p:function(f,m){l=f;const p={};m&1&&(p.icon=l[5].type==="success"?"fluent-emoji:cat-face":"fluent-emoji-flat:crying-cat"),a.$set(p),(!_||m&1)&&d!==(d=l[5].message+"")&&at(u,d),(!_||m&1&&c!==(c="toast text-white p-2 rounded-md flex items-center gap-4 mb-2 "+l[5].type+" s-_lWlOL6y_316"))&&j(t,"class",c)},i:function(f){_||(x(a.$$.fragment,f),x(o.$$.fragment,f),_=!0)},o:function(f){S(a.$$.fragment,f),S(o.$$.fragment,f),_=!1},d:function(f){f&&v(t),U(a),U(o),b=!1,L()}};return C("SvelteRegisterBlock",{block:M,id:D.name,type:"each",source:"(29:4) {#each toasts as toast , index}",ctx:l}),M}function R(l){let t,i,a=W(l[0]),e=[];for(let r=0;r<a.length;r+=1)e[r]=D(A(l,a,r));const d=r=>S(e[r],1,1,()=>{e[r]=null}),u={c:function(){t=E("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l:function(s){t=$(s,"DIV",{class:!0});var o=k(t);for(let n=0;n<e.length;n+=1)e[n].l(o);o.forEach(v),this.h()},h:function(){j(t,"class","z-50 fixed top-20 right-4 flex flex-col-reverse items-end"),T(t,w,27,0,676)},m:function(s,o){F(s,t,o);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null);i=!0},p:function(s,[o]){if(o&3){a=W(s[0]);let n;for(n=0;n<a.length;n+=1){const c=A(s,a,n);e[n]?(e[n].p(c,o),x(e[n],1)):(e[n]=D(c),e[n].c(),x(e[n],1),e[n].m(t,null))}for(nt(),n=a.length;n<e.length;n+=1)d(n);st()}},i:function(s){if(!i){for(let o=0;o<a.length;o+=1)x(e[o]);i=!0}},o:function(s){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)S(e[o]);i=!1},d:function(s){s&&v(t),Q(e,s)}};return C("SvelteRegisterBlock",{block:u,id:R.name,type:"component",source:"",ctx:l}),u}function rt(l,t,i){let a;J(y,"toastErr"),K(l,y,c=>i(3,a=c));let{$$slots:e={},$$scope:d}=t;et("ToastError",e,[]);let u=a;function r(c){setTimeout(()=>{i(0,u=u.filter(_=>_!==c))},300)}function s(c){setTimeout(()=>{r(c)},4e3)}V(()=>y.subscribe(_=>{i(0,u=_),u.forEach(b=>{s(b)})}));const o=[];Object.keys(t).forEach(c=>{!~o.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<ToastError> was created with unknown prop '${c}'`)});const n=c=>r(c);return l.$capture_state=()=>({toastErr:y,Icon:I,onMount:V,toasts:u,hideToast:r,auto:s,$toastErr:a}),l.$inject_state=c=>{"toasts"in c&&i(0,u=c.toasts)},t&&"$$inject"in t&&l.$inject_state(t.$$inject),[u,r,n]}class ft extends Z{constructor(t){super(t),tt(this,t,rt,R,H,{}),C("SvelteRegisterComponent",{component:this,tagName:"ToastError",options:t,id:R.name})}}export{ft as T};