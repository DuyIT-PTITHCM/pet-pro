import{s as f,w as g}from"../chunks/scheduler.12c735be.js";import{S as p,i as _,d as u,v as w,j as P,k as j,m as y,b as h,t as v,l as b}from"../chunks/index.c6264268.js";import{C as m}from"../chunks/CreateProduct.5a500530.js";function s(o){let t,i;t=new m({props:{mode:o[0],products:o[2],title:o[1]},$$inline:!0});const r={c:function(){P(t.$$.fragment)},l:function(e){j(t.$$.fragment,e)},m:function(e,c){y(t,e,c),i=!0},p:g,i:function(e){i||(h(t.$$.fragment,e),i=!0)},o:function(e){v(t.$$.fragment,e),i=!1},d:function(e){b(t,e)}};return u("SvelteRegisterBlock",{block:r,id:s.name,type:"component",source:"",ctx:o}),r}function C(o,t,i){let{$$slots:r={},$$scope:a}=t;w("Page",r,[]);let e="create",c="products.createProduct",l={productName:null,description:null,price:null,originalPrice:null,stockQuantity:null,origin:null,notes:null,type:null,status:null,discount:null,slug:null,createdBy:1,editedBy:1,categoryId:null,images:"",expirationDate:null};const d=[];return Object.keys(t).forEach(n=>{!~d.indexOf(n)&&n.slice(0,2)!=="$$"&&n!=="slot"&&console.warn(`<Page> was created with unknown prop '${n}'`)}),o.$capture_state=()=>({CreateProduct:m,mode:e,title:c,products:l}),o.$inject_state=n=>{"mode"in n&&i(0,e=n.mode),"title"in n&&i(1,c=n.title),"products"in n&&i(2,l=n.products)},t&&"$$inject"in t&&o.$inject_state(t.$$inject),[e,c,l]}class D extends p{constructor(t){super(t),_(this,t,C,s,f,{}),u("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:s.name})}}export{D as component};