import{s as h,f as d,R as g}from"../chunks/scheduler.a17acf7c.js";import{S as y,i as q,d as b,w as p,v,j as w,k as j,m as k,b as C,t as S,l as R}from"../chunks/index.8874627e.js";import{C as P}from"../chunks/CreateArticle.a612f2a5.js";function _(a){let t,i,s,o;function r(n){a[2](n)}function c(n){a[3](n)}let l={};a[0]!==void 0&&(l.article=a[0]),a[1]!==void 0&&(l.queryParams=a[1]),t=new P({props:l,$$inline:!0}),d.push(()=>p(t,"article",r)),d.push(()=>p(t,"queryParams",c));const u={c:function(){w(t.$$.fragment)},l:function(e){j(t.$$.fragment,e)},m:function(e,m){k(t,e,m),o=!0},p:function(e,[m]){const f={};!i&&m&1&&(i=!0,f.article=e[0],g(()=>i=!1)),!s&&m&2&&(s=!0,f.queryParams=e[1],g(()=>s=!1)),t.$set(f)},i:function(e){o||(C(t.$$.fragment,e),o=!0)},o:function(e){S(t.$$.fragment,e),o=!1},d:function(e){R(t,e)}};return b("SvelteRegisterBlock",{block:u,id:_.name,type:"component",source:"",ctx:a}),u}function O(a,t,i){let{$$slots:s={},$$scope:o}=t;v("Page",s,[]);let r={id:null,title:"",content:"",description:"",author:"",published_at:null,views:0,slug:null,categoryId:null,imageUrl:""},c={type:"service"};const l=[];Object.keys(t).forEach(e=>{!~l.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&console.warn(`<Page> was created with unknown prop '${e}'`)});function u(e){r=e,i(0,r)}function n(e){c=e,i(1,c)}return a.$capture_state=()=>({CreateArticle:P,article:r,queryParams:c}),a.$inject_state=e=>{"article"in e&&i(0,r=e.article),"queryParams"in e&&i(1,c=e.queryParams)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[r,c,u,n]}class E extends y{constructor(t){super(t),q(this,t,O,_,h,{}),b("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:_.name})}}export{E as component};