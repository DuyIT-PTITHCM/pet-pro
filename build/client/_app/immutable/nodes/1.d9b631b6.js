import{s as O,v as R,r as q,g as b,l as g,c as B,h as E,i as $,m as w,d as D,k as S,w as k}from"../chunks/scheduler.b4686469.js";import{S as H,i as N,d as C,v as P,e as d,a as m,n as j,s as x}from"../chunks/index.07c1f1fe.js";import{d as z}from"../chunks/singletons.139eb870.js";const A=()=>{const t=z;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},_={subscribe(t){return A().page.subscribe(t)}},y="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(t){var h;let e,i=t[0].status+"",o,l,n,c=((h=t[0].error)==null?void 0:h.message)+"",a;const v={c:function(){e=b("h1"),o=g(i),l=B(),n=b("p"),a=g(c),this.h()},l:function(s){e=E(s,"H1",{});var r=$(e);o=w(r,i),r.forEach(d),l=D(s),n=E(s,"P",{});var p=$(n);a=w(p,c),p.forEach(d),this.h()},h:function(){S(e,y,4,0,57),S(n,y,5,0,81)},m:function(s,r){m(s,e,r),j(e,o),m(s,l,r),m(s,n,r),j(n,a)},p:function(s,[r]){var p;r&1&&i!==(i=s[0].status+"")&&x(o,i),r&1&&c!==(c=((p=s[0].error)==null?void 0:p.message)+"")&&x(a,c)},i:k,o:k,d:function(s){s&&(d(e),d(l),d(n))}};return C("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:t}),v}function F(t,e,i){let o;R(_,"page"),q(t,_,a=>i(0,o=a));let{$$slots:l={},$$scope:n}=e;P("Error",l,[]);const c=[];return Object.keys(e).forEach(a=>{!~c.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Error> was created with unknown prop '${a}'`)}),t.$capture_state=()=>({page:_,$page:o}),[o]}let K=class extends H{constructor(e){super(e),N(this,e,F,f,O,{}),C("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}};export{K as component};