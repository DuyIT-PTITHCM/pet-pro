import{s as m,g as f,h as g,Q as u,k as h,w as c}from"../chunks/scheduler.5fdedf92.js";import{S as v,i as _,d as p,v as $,a as b,e as w}from"../chunks/index.75554cec.js";import{t as r,d}from"../chunks/meta.408e720c.js";const x="src/routes/(app)/blog/+page.svelte";function l(s){let t,i="blog";const o={c:function(){t=f("h1"),t.textContent=i,this.h()},l:function(e){t=g(e,"H1",{"data-svelte-h":!0}),u(t)!=="svelte-cvg234"&&(t.textContent=i),this.h()},h:function(){h(t,x,5,0,151)},m:function(e,a){b(e,t,a)},p:c,i:c,o:c,d:function(e){e&&w(t)}};return p("SvelteRegisterBlock",{block:o,id:l.name,type:"component",source:"",ctx:s}),o}function C(s,t,i){let{$$slots:o={},$$scope:n}=t;$("Page",o,[]),r.set("blog page"),d.set("blog page description");const e=[];return Object.keys(t).forEach(a=>{!~e.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)}),s.$capture_state=()=>({title:r,description:d}),[]}class y extends v{constructor(t){super(t),_(this,t,C,l,m,{}),p("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:l.name})}}export{y as component};
