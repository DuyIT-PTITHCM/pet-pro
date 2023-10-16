<<<<<<<< HEAD:build/client/_app/immutable/chunks/LanguageSelect.408ff747.js
import{s as V,v as q,r as z,o as A,g as N,h as P,i as R,K as I,k as B,U as F,w as v,Q as K,J as Q,V as W,l as Y,m as G,T as X}from"./scheduler.12c735be.js";import{S as Z,i as x,d as k,w as D,v as ee,e as b,g as te,a as J,o as O,n as ae}from"./index.c6264268.js";import{p as ne}from"./parse.bee59afc.js";import{j as oe}from"./singletons.55e30d00.js";import{i as se}from"./navigation.beee5d6b.js";import{g as y,s as $,r as M}from"./cookieUtils.9487ed92.js";import{w as re}from"./index.9d0d763a.js";import{l as j}from"./index.039cfffe.js";function ie(t){return oe.apply_action(t)}function ce(t){const e=JSON.parse(t);return e.data&&(e.data=ne(e.data)),e}function p(t,e,l){console.warn(`\`${t}\` has been deprecated in favor of \`${e}\`. \`${t}\` will be removed in a future version. (Called from ${l})`)}function g(t){return HTMLElement.prototype.cloneNode.call(t)}function le(t,e=()=>{}){if(g(t).method!=="post")throw new Error('use:enhance can only be used on <form> fields with method="POST"');const l=async({action:s,result:n,reset:r})=>{n.type==="success"&&(r!==!1&&HTMLFormElement.prototype.reset.call(t),await se()),(location.origin+location.pathname===s.origin+s.pathname||n.type==="redirect"||n.type==="error")&&ie(n)};async function c(s){var L,S,T,C;if(((L=s.submitter)!=null&&L.hasAttribute("formmethod")?s.submitter.formMethod:g(t).method)!=="post")return;s.preventDefault();const r=new URL((S=s.submitter)!=null&&S.hasAttribute("formaction")?s.submitter.formAction:g(t).action),o=new FormData(t);if(g(t).enctype!=="multipart/form-data"){for(const f of o.values())if(f instanceof File){console.warn('Your form contains <input type="file"> fields, but is missing the `enctype="multipart/form-data"` attribute. This will lead to inconsistent behavior between enhanced and native forms. For more details, see https://github.com/sveltejs/kit/issues/9819. This will be upgraded to an error in v2.0.');break}}const i=(T=s.submitter)==null?void 0:T.getAttribute("name");i&&o.append(i,((C=s.submitter)==null?void 0:C.getAttribute("value"))??"");const u=new AbortController;let a=!1;const _=await e({action:r,cancel:()=>a=!0,controller:u,get data(){return p("data","formData","use:enhance submit function"),o},formData:o,get form(){return p("form","formElement","use:enhance submit function"),t},formElement:t,submitter:s.submitter})??l;if(a)return;let d;try{const f=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:o,signal:u.signal});d=ce(await f.text()),d.type==="error"&&(d.status=f.status)}catch(f){if((f==null?void 0:f.name)==="AbortError")return;d={type:"error",error:f}}_({action:r,get data(){return p("data","formData","callback returned from use:enhance submit function"),o},formData:o,get form(){return p("form","formElement","callback returned from use:enhance submit function"),t},formElement:t,update:f=>l({action:r,result:d,reset:f==null?void 0:f.reset}),result:d})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",c),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",c)}}}const m=re(y("lang")??"en");const U="src/lib/components/LanguageSelect.svelte";function H(t,e,l){const c=t.slice();return c[4]=e[l],c}function w(t){let e,l=t[4].name+"",c;const s={c:function(){e=N("option"),c=Y(l),this.h()},l:function(r){e=P(r,"OPTION",{});var o=R(e);c=G(o,l),o.forEach(b),this.h()},h:function(){e.__value=t[4].id,X(e,e.__value),B(e,U,39,6,1185)},m:function(r,o){J(r,e,o),ae(e,c)},p:v,d:function(r){r&&b(e)}};return k("SvelteRegisterBlock",{block:s,id:w.name,type:"each",source:"(33:4) {#each languages as language}",ctx:t}),s}function E(t){let e,l,c,s=D(t[1]),n=[];for(let o=0;o<s.length;o+=1)n[o]=w(H(t,s,o));const r={c:function(){e=N("select");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l:function(i){e=P(i,"SELECT",{class:!0});var u=R(e);for(let a=0;a<n.length;a+=1)n[a].l(u);u.forEach(b),this.h()},h:function(){te(e,"class","dark:bg-slate-800 s-stFEWcntJTPy"),t[0]===void 0&&I(()=>t[3].call(e)),B(e,U,37,0,1054)},m:function(i,u){J(i,e,u);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);F(e,t[0],!0),l||(c=[O(e,"change",t[3]),O(e,"change",t[2],!1,!1,!1,!1)],l=!0)},p:function(i,[u]){if(u&2){s=D(i[1]);let a;for(a=0;a<s.length;a+=1){const h=H(i,s,a);n[a]?n[a].p(h,u):(n[a]=w(h),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}u&3&&F(e,i[0])},i:v,o:v,d:function(i){i&&b(e),K(n,i),l=!1,Q(c)}};return k("SvelteRegisterBlock",{block:r,id:E.name,type:"component",source:"",ctx:t}),r}function ue(t,e,l){let c;q(m,"selectedLanguage"),z(t,m,a=>l(0,c=a));let{$$slots:s={},$$scope:n}=e;ee("LanguageSelect",s,[]);const r=[{id:"en",name:"English"},{id:"vi",name:"Tiếng Việt"}];m.set(y("lang"));async function o(a){M("lang"),$("lang",a.target.value)}A(()=>m.subscribe(async h=>{const{pathname:_}=window.location;await j(h,_)}));const i=[];Object.keys(e).forEach(a=>{!~i.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<LanguageSelect> was created with unknown prop '${a}'`)});function u(){c=W(this),m.set(c),l(1,r)}return t.$capture_state=()=>({enhance:le,onMount:A,selectedLanguage:m,loadTranslations:j,setCookie:$,removeCookie:M,getCookie:y,languages:r,handleChange:o,$selectedLanguage:c}),[c,r,o,u]}class ve extends Z{constructor(e){super(e),x(this,e,ue,E,V,{}),k("SvelteRegisterComponent",{component:this,tagName:"LanguageSelect",options:e,id:E.name})}}export{ve as L};
========
import{s as V,v as q,r as z,o as A,g as N,h as P,i as R,K as I,k as B,U as F,w as v,Q as K,J as Q,V as W,l as Y,m as G,T as X}from"./scheduler.12c735be.js";import{S as Z,i as x,d as k,w as D,v as ee,e as b,g as te,a as J,o as O,n as ae}from"./index.c6264268.js";import{p as ne}from"./parse.bee59afc.js";import{j as oe}from"./singletons.74ef1fb6.js";import{i as se}from"./navigation.ac097ade.js";import{g as y,s as $,r as M}from"./cookieUtils.9487ed92.js";import{w as re}from"./index.9d0d763a.js";import{l as j}from"./index.039cfffe.js";function ie(t){return oe.apply_action(t)}function ce(t){const e=JSON.parse(t);return e.data&&(e.data=ne(e.data)),e}function p(t,e,l){console.warn(`\`${t}\` has been deprecated in favor of \`${e}\`. \`${t}\` will be removed in a future version. (Called from ${l})`)}function g(t){return HTMLElement.prototype.cloneNode.call(t)}function le(t,e=()=>{}){if(g(t).method!=="post")throw new Error('use:enhance can only be used on <form> fields with method="POST"');const l=async({action:s,result:n,reset:r})=>{n.type==="success"&&(r!==!1&&HTMLFormElement.prototype.reset.call(t),await se()),(location.origin+location.pathname===s.origin+s.pathname||n.type==="redirect"||n.type==="error")&&ie(n)};async function c(s){var L,S,T,C;if(((L=s.submitter)!=null&&L.hasAttribute("formmethod")?s.submitter.formMethod:g(t).method)!=="post")return;s.preventDefault();const r=new URL((S=s.submitter)!=null&&S.hasAttribute("formaction")?s.submitter.formAction:g(t).action),o=new FormData(t);if(g(t).enctype!=="multipart/form-data"){for(const f of o.values())if(f instanceof File){console.warn('Your form contains <input type="file"> fields, but is missing the `enctype="multipart/form-data"` attribute. This will lead to inconsistent behavior between enhanced and native forms. For more details, see https://github.com/sveltejs/kit/issues/9819. This will be upgraded to an error in v2.0.');break}}const i=(T=s.submitter)==null?void 0:T.getAttribute("name");i&&o.append(i,((C=s.submitter)==null?void 0:C.getAttribute("value"))??"");const u=new AbortController;let a=!1;const _=await e({action:r,cancel:()=>a=!0,controller:u,get data(){return p("data","formData","use:enhance submit function"),o},formData:o,get form(){return p("form","formElement","use:enhance submit function"),t},formElement:t,submitter:s.submitter})??l;if(a)return;let d;try{const f=await fetch(r,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:o,signal:u.signal});d=ce(await f.text()),d.type==="error"&&(d.status=f.status)}catch(f){if((f==null?void 0:f.name)==="AbortError")return;d={type:"error",error:f}}_({action:r,get data(){return p("data","formData","callback returned from use:enhance submit function"),o},formData:o,get form(){return p("form","formElement","callback returned from use:enhance submit function"),t},formElement:t,update:f=>l({action:r,result:d,reset:f==null?void 0:f.reset}),result:d})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",c),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",c)}}}const m=re(y("lang")??"en");const U="src/lib/components/LanguageSelect.svelte";function H(t,e,l){const c=t.slice();return c[4]=e[l],c}function w(t){let e,l=t[4].name+"",c;const s={c:function(){e=N("option"),c=Y(l),this.h()},l:function(r){e=P(r,"OPTION",{});var o=R(e);c=G(o,l),o.forEach(b),this.h()},h:function(){e.__value=t[4].id,X(e,e.__value),B(e,U,39,6,1185)},m:function(r,o){J(r,e,o),ae(e,c)},p:v,d:function(r){r&&b(e)}};return k("SvelteRegisterBlock",{block:s,id:w.name,type:"each",source:"(33:4) {#each languages as language}",ctx:t}),s}function E(t){let e,l,c,s=D(t[1]),n=[];for(let o=0;o<s.length;o+=1)n[o]=w(H(t,s,o));const r={c:function(){e=N("select");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l:function(i){e=P(i,"SELECT",{class:!0});var u=R(e);for(let a=0;a<n.length;a+=1)n[a].l(u);u.forEach(b),this.h()},h:function(){te(e,"class","dark:bg-slate-800 s-stFEWcntJTPy"),t[0]===void 0&&I(()=>t[3].call(e)),B(e,U,37,0,1054)},m:function(i,u){J(i,e,u);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null);F(e,t[0],!0),l||(c=[O(e,"change",t[3]),O(e,"change",t[2],!1,!1,!1,!1)],l=!0)},p:function(i,[u]){if(u&2){s=D(i[1]);let a;for(a=0;a<s.length;a+=1){const h=H(i,s,a);n[a]?n[a].p(h,u):(n[a]=w(h),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}u&3&&F(e,i[0])},i:v,o:v,d:function(i){i&&b(e),K(n,i),l=!1,Q(c)}};return k("SvelteRegisterBlock",{block:r,id:E.name,type:"component",source:"",ctx:t}),r}function ue(t,e,l){let c;q(m,"selectedLanguage"),z(t,m,a=>l(0,c=a));let{$$slots:s={},$$scope:n}=e;ee("LanguageSelect",s,[]);const r=[{id:"en",name:"English"},{id:"vi",name:"Tiếng Việt"}];m.set(y("lang"));async function o(a){M("lang"),$("lang",a.target.value)}A(()=>m.subscribe(async h=>{const{pathname:_}=window.location;await j(h,_)}));const i=[];Object.keys(e).forEach(a=>{!~i.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<LanguageSelect> was created with unknown prop '${a}'`)});function u(){c=W(this),m.set(c),l(1,r)}return t.$capture_state=()=>({enhance:le,onMount:A,selectedLanguage:m,loadTranslations:j,setCookie:$,removeCookie:M,getCookie:y,languages:r,handleChange:o,$selectedLanguage:c}),[c,r,o,u]}class ve extends Z{constructor(e){super(e),x(this,e,ue,E,V,{}),k("SvelteRegisterComponent",{component:this,tagName:"LanguageSelect",options:e,id:E.name})}}export{ve as L};
>>>>>>>> 4e512380c25ccaaecb8d1c47daadca4149bee5a4:build/client/_app/immutable/chunks/LanguageSelect.d551085e.js
