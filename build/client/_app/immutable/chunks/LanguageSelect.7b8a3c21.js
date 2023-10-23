import{s as te,v as ne,r as ae,o as z,U as G,g as C,c as I,h as S,i as j,d as R,k as L,e as H,Q as oe,l as se,m as le}from"./scheduler.e174163e.js";import{S as ie,i as re,d as N,v as ce,w as J,j as O,k as U,e as v,g,a as P,m as A,o as Z,b as y,t as E,l as D,h as ue,c as fe,n as k}from"./index.4ef71c6a.js";import{g as V,s as K,r as W}from"./cookieUtils.9487ed92.js";import{w as me}from"./index.b73f4ba6.js";import{l as X}from"./index.7afe3c5b.js";import{B as ge}from"./Button.904f7a9b.js";import{I as M}from"./Indicator.svelte_svelte_type_style_lang.6f1e06b8.js";import{P as x}from"./Popover.6916767e.js";const w=me(V("lang")??"en"),B="src/lib/components/LanguageSelect.svelte";function Y(a,t,s){const i=a.slice();return i[8]=t[s],i}function q(a){let t,s,i,n,m,f,r=a[8].name+"",l,o,e,u,h,b;function c(){return a[6](a[8])}m=new M({props:{icon:a[8].icon},$$inline:!0});const $={c:function(){t=C("div"),s=C("input"),i=I(),n=C("label"),O(m.$$.fragment),f=C("span"),l=se(r),e=I(),this.h()},l:function(d){t=S(d,"DIV",{class:!0});var _=j(t);s=S(_,"INPUT",{id:!0,class:!0,type:!0,name:!0}),i=R(_),n=S(_,"LABEL",{for:!0,class:!0});var T=j(n);U(m.$$.fragment,T),f=S(T,"SPAN",{class:!0});var Q=j(f);l=le(Q,r),Q.forEach(v),T.forEach(v),e=R(_),_.forEach(v),this.h()},h:function(){g(s,"id",a[8].id),g(s,"class","hidden"),g(s,"type","radio"),g(s,"name","language"),s.value=a[8].id,L(s,B,56,12,1793),g(f,"class","ml-4 text-base"),L(f,B,57,202,2158),g(n,"for",a[8].id),g(n,"class",o="flex items-center text-xl cursor-pointer p-2 transition-all hover:text-primary-600 "+(a[2]==a[8].icon?"":"opacity-50")),L(n,B,57,12,1968),g(t,"class",""),L(t,B,55,8,1766)},m:function(d,_){P(d,t,_),k(t,s),k(t,i),k(t,n),A(m,n,null),k(n,f),k(f,l),k(t,e),u=!0,h||(b=Z(s,"click",c,!1,!1,!1,!1),h=!0)},p:function(d,_){a=d,(!u||_&4&&o!==(o="flex items-center text-xl cursor-pointer p-2 transition-all hover:text-primary-600 "+(a[2]==a[8].icon?"":"opacity-50")))&&g(n,"class",o)},i:function(d){u||(y(m.$$.fragment,d),u=!0)},o:function(d){E(m.$$.fragment,d),u=!1},d:function(d){d&&v(t),D(m),h=!1,b()}};return N("SvelteRegisterBlock",{block:$,id:q.name,type:"each",source:"(50:4) {#each languages as language}",ctx:a}),$}function ee(a){let t,s,i=J(a[4]),n=[];for(let r=0;r<i.length;r+=1)n[r]=q(Y(a,i,r));const m=r=>E(n[r],1,1,()=>{n[r]=null}),f={c:function(){for(let l=0;l<n.length;l+=1)n[l].c();t=H()},l:function(l){for(let o=0;o<n.length;o+=1)n[o].l(l);t=H()},m:function(l,o){for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(l,o);P(l,t,o),s=!0},p:function(l,o){if(o&28){i=J(l[4]);let e;for(e=0;e<i.length;e+=1){const u=Y(l,i,e);n[e]?(n[e].p(u,o),y(n[e],1)):(n[e]=q(u),n[e].c(),y(n[e],1),n[e].m(t.parentNode,t))}for(ue(),e=i.length;e<n.length;e+=1)m(e);fe()}},i:function(l){if(!s){for(let o=0;o<i.length;o+=1)y(n[o]);s=!0}},o:function(l){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)E(n[o]);s=!1},d:function(l){l&&v(t),oe(n,l)}};return N("SvelteRegisterBlock",{block:f,id:ee.name,type:"slot",source:'(49:0) <Popover triggeredBy=\\"#languge\\" placement={placement} class=\\"transition-all\\" trigger=\\"click\\">',ctx:a}),f}function F(a){let t,s,i,n,m,f,r;s=new M({props:{icon:a[2]},$$inline:!0}),n=new x({props:{triggeredBy:"#languge",placement:a[1],class:"transition-all",trigger:"click",$$slots:{default:[ee]},$$scope:{ctx:a}},$$inline:!0});const l={c:function(){t=C("button"),O(s.$$.fragment),i=I(),O(n.$$.fragment),this.h()},l:function(e){t=S(e,"BUTTON",{id:!0,color:!0,class:!0});var u=j(t);U(s.$$.fragment,u),u.forEach(v),i=R(e),U(n.$$.fragment,e),this.h()},h:function(){g(t,"id","languge"),g(t,"color","none"),g(t,"class",a[0]),L(t,B,46,0,1477)},m:function(e,u){P(e,t,u),A(s,t,null),P(e,i,u),A(n,e,u),m=!0,f||(r=Z(t,"mouseenter",a[5],!1,!1,!1,!1),f=!0)},p:function(e,[u]){const h={};u&4&&(h.icon=e[2]),s.$set(h),(!m||u&1)&&g(t,"class",e[0]);const b={};u&2&&(b.placement=e[1]),u&2060&&(b.$$scope={dirty:u,ctx:e}),n.$set(b)},i:function(e){m||(y(s.$$.fragment,e),y(n.$$.fragment,e),m=!0)},o:function(e){E(s.$$.fragment,e),E(n.$$.fragment,e),m=!1},d:function(e){e&&(v(t),v(i)),D(s),D(n,e),f=!1,r()}};return N("SvelteRegisterBlock",{block:l,id:F.name,type:"component",source:"",ctx:a}),l}function de(a,t,s){let i;ne(w,"selectedLanguage"),ae(a,w,c=>s(3,i=c));let{$$slots:n={},$$scope:m}=t;ce("LanguageSelect",n,[]);let{btnClass:f}=t;const r=[{id:"en",name:"English",icon:"twemoji:flag-united-kingdom"},{id:"vi",name:"Tiếng Việt",icon:"twemoji:flag-vietnam"}];let l,o=r[1].icon;w.set(V("lang"));async function e(c){W("lang"),K("lang",c.target.value)}z(()=>w.subscribe(async $=>{const{pathname:p}=window.location;await X($,p)})),G(w,i="vi",i),a.$$.on_mount.push(function(){f===void 0&&!("btnClass"in t||a.$$.bound[a.$$.props.btnClass])&&console.warn("<LanguageSelect> was created without expected prop 'btnClass'")});const u=["btnClass"];Object.keys(t).forEach(c=>{!~u.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<LanguageSelect> was created with unknown prop '${c}'`)});const h=()=>s(1,l="bottom"),b=c=>{G(w,i=c.id,i),s(2,o=c.icon)};return a.$$set=c=>{"btnClass"in c&&s(0,f=c.btnClass)},a.$capture_state=()=>({onMount:z,selectedLanguage:w,loadTranslations:X,setCookie:K,removeCookie:W,getCookie:V,Button:ge,Popover:x,Icon:M,btnClass:f,languages:r,placement:l,icon:o,handleChange:e,$selectedLanguage:i}),a.$inject_state=c=>{"btnClass"in c&&s(0,f=c.btnClass),"placement"in c&&s(1,l=c.placement),"icon"in c&&s(2,o=c.icon)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[f,l,o,i,r,h,b]}class Ce extends ie{constructor(t){super(t),re(this,t,de,F,te,{btnClass:0}),N("SvelteRegisterComponent",{component:this,tagName:"LanguageSelect",options:t,id:F.name})}get btnClass(){throw new Error("<LanguageSelect>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set btnClass(t){throw new Error("<LanguageSelect>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ce as L};
