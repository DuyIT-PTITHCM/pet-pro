import{s as p,g as h,h as _,S as g,k as v,w as r}from"../chunks/scheduler.afe1bd6b.js";import{g as w}from"../chunks/globals.7f7f1b26.js";import{S as x,i as y,d as m,v as S,a as b,e as j}from"../chunks/index.c182d738.js";import{R as u}from"../chunks/RepositoryFactory.cf23236c.js";const{console:C}=w,R="src/routes/(dasboard)/admin/products/[id]/+page.svelte";function l(n){let t,i="alo";const c={c:function(){t=h("h1"),t.textContent=i,this.h()},l:function(e){t=_(e,"H1",{"data-svelte-h":!0}),g(t)!=="svelte-crvoeg"&&(t.textContent=i),this.h()},h:function(){v(t,R,12,0,329)},m:function(e,a){b(e,t,a)},p:r,i:r,o:r,d:function(e){e&&j(t)}};return m("SvelteRegisterBlock",{block:c,id:l.name,type:"component",source:"",ctx:n}),c}function P(n,t,i){let{$$slots:c={},$$scope:s}=t;S("Page",c,[]);const e=u.get("productRepository");let a;async function d(){a=await e.show(12),console.log(a)}d();const f=[];return Object.keys(t).forEach(o=>{!~f.indexOf(o)&&o.slice(0,2)!=="$$"&&o!=="slot"&&C.warn(`<Page> was created with unknown prop '${o}'`)}),n.$capture_state=()=>({RepositoryFactory:u,productService:e,product:a,productDetail:d}),n.$inject_state=o=>{"product"in o&&(a=o.product)},t&&"$$inject"in t&&n.$inject_state(t.$$inject),[]}class q extends x{constructor(t){super(t),y(this,t,P,l,p,{}),m("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:l.name})}}export{q as component};