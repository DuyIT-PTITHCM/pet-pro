import{s as h,f as d,N as g}from"../chunks/scheduler.55b91a48.js";import{S as y,i as q,d as b,u as p,v,j as w,k as j,m as k,b as C,t as S,l as N}from"../chunks/index.7e3b7554.js";import{C as P}from"../chunks/CreateArticle.36aff394.js";function _(a){let t,i,o,s;function r(n){a[2](n)}function c(n){a[3](n)}let l={};a[0]!==void 0&&(l.article=a[0]),a[1]!==void 0&&(l.queryParams=a[1]),t=new P({props:l,$$inline:!0}),d.push(()=>p(t,"article",r)),d.push(()=>p(t,"queryParams",c));const u={c:function(){w(t.$$.fragment)},l:function(e){j(t.$$.fragment,e)},m:function(e,m){k(t,e,m),s=!0},p:function(e,[m]){const f={};!i&&m&1&&(i=!0,f.article=e[0],g(()=>i=!1)),!o&&m&2&&(o=!0,f.queryParams=e[1],g(()=>o=!1)),t.$set(f)},i:function(e){s||(C(t.$$.fragment,e),s=!0)},o:function(e){S(t.$$.fragment,e),s=!1},d:function(e){N(t,e)}};return b("SvelteRegisterBlock",{block:u,id:_.name,type:"component",source:"",ctx:a}),u}function O(a,t,i){let{$$slots:o={},$$scope:s}=t;v("Page",o,[]);let r={id:null,title:"",content:"",description:"",author:"",published_at:null,views:0,slug:null,categoryId:null,imageUrl:""},c={type:"blog"};const l=[];Object.keys(t).forEach(e=>{!~l.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)});function u(e){r=e,i(0,r)}function n(e){c=e,i(1,c)}return a.$capture_state=()=>({CreateArticle:P,article:r,queryParams:c}),a.$inject_state=e=>{"article"in e&&i(0,r=e.article),"queryParams"in e&&i(1,c=e.queryParams)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[r,c,u,n]}class D extends y{constructor(t){super(t),q(this,t,O,_,h,{}),b("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:_.name})}}export{D as component};