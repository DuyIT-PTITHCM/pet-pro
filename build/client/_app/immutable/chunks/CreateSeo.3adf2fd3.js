import{s as ot,g as o,c as _,h as i,i as D,S as G,d as k,k as c,O as T,J as it,T as Ye,P as ct}from"./scheduler.f07b0b6c.js";import{S as ut,i as dt,d as je,v as pt,j as et,e as y,k as tt,g as e,a as at,n as t,m as rt,o as ee,b as de,h as ft,t as De,c as mt,l as nt}from"./index.9d8dfa58.js";import{g as gt}from"./globals.7f7f1b26.js";import{R as Ne}from"./RepositoryFactory.b097c8c0.js";import{B as ht}from"./Const.9014b5a8.js";import{l as Pe}from"./loading.aad9f80f.js";import{t as Ce}from"./toastError.c18f270d.js";import{I as st}from"./Indicator.svelte_svelte_type_style_lang.f13b9a5c.js";import{a as bt}from"./axios.82afda87.js";import{F as lt}from"./Fileupload.00e9277f.js";const{console:Ze}=gt,u="src/lib/components/admin/seo/CreateSeo.svelte";function Ue(n){let r,l,I,J,d,a,g,w,B,b;g=new st({props:{icon:"iwwa:delete",width:"30"},$$inline:!0});const N={c:function(){r=o("div"),l=o("div"),I=o("img"),d=_(),a=o("div"),et(g.$$.fragment),this.h()},l:function(m){r=i(m,"DIV",{class:!0});var S=D(r);l=i(S,"DIV",{class:!0});var P=D(l);I=i(P,"IMG",{class:!0,src:!0,alt:!0}),d=k(P),a=i(P,"DIV",{class:!0});var C=D(a);tt(g.$$.fragment,C),C.forEach(y),P.forEach(y),S.forEach(y),this.h()},h:function(){e(I,"class","object-cover w-full h-[300px] rounded"),Ye(I.src,J=n[1])||e(I,"src",J),e(I,"alt","avatar"),c(I,u,276,20,8739),e(a,"class","absolute top-0 right-0 cursor-pointer bg-white rounded text-red-500"),c(a,u,281,20,8929),e(l,"class","relative"),c(l,u,275,16,8696),e(r,"class","grid grid-cols-1 xl:grid-cols-4 gap-[10px] py-[20px]"),c(r,u,274,12,8613)},m:function(m,S){at(m,r,S),t(r,l),t(l,I),t(l,d),t(l,a),rt(g,a,null),w=!0,B||(b=ee(a,"click",function(){ct(n[4](n[1]))&&n[4](n[1]).apply(this,arguments)},!1,!1,!1,!1),B=!0)},p:function(m,S){n=m,(!w||S&2&&!Ye(I.src,J=n[1]))&&e(I,"src",J)},i:function(m){w||(de(g.$$.fragment,m),w=!0)},o:function(m){De(g.$$.fragment,m),w=!1},d:function(m){m&&y(r),nt(g),B=!1,b()}};return je("SvelteRegisterBlock",{block:N,id:Ue.name,type:"if",source:"(265:8) {#if file}",ctx:n}),N}function Me(n){let r,l,I="seo edit",J,d,a,g,w="Meta Title",B,b,N,h,m,S="Meta Description",P,C,oe,U,M,j,pe="Keywords",ce,E,ue,q,s,V="Canonical Url",z,x,ae,A,H,K,qe="Robot MetaTags",Ie,F,Ee,Q,W,Re="Open GraphTags",Te,O,Se,re,X,Y,Ge="Sitemap Frequency",Ve,L,Ae,R,Z,Je="Images",Fe,te,Oe,Le,ne,se,$,ze="Submit",fe,Be,He;te=new lt({props:{class:"w-24 py-[10px] bg-white"},$$inline:!0}),te.$on("change",n[3]);let v=n[1]&&Ue(n);const Ke={c:function(){r=o("div"),l=o("h1"),l.textContent=I,J=_(),d=o("div"),a=o("div"),g=o("label"),g.textContent=w,B=_(),b=o("input"),N=_(),h=o("div"),m=o("label"),m.textContent=S,P=_(),C=o("input"),oe=_(),U=o("div"),M=o("div"),j=o("label"),j.textContent=pe,ce=_(),E=o("input"),ue=_(),q=o("div"),s=o("label"),s.textContent=V,z=_(),x=o("input"),ae=_(),A=o("div"),H=o("div"),K=o("label"),K.textContent=qe,Ie=_(),F=o("input"),Ee=_(),Q=o("div"),W=o("label"),W.textContent=Re,Te=_(),O=o("input"),Se=_(),re=o("div"),X=o("div"),Y=o("label"),Y.textContent=Ge,Ve=_(),L=o("input"),Ae=_(),R=o("div"),Z=o("label"),Z.textContent=Je,Fe=_(),et(te.$$.fragment),Oe=_(),v&&v.c(),Le=_(),ne=o("div"),se=o("div"),$=o("button"),$.textContent=ze,this.h()},l:function(p){r=i(p,"DIV",{class:!0});var f=D(r);l=i(f,"H1",{class:!0,"data-svelte-h":!0}),G(l)!=="svelte-pm1pk"&&(l.textContent=I),J=k(f),d=i(f,"DIV",{class:!0});var me=D(d);a=i(me,"DIV",{class:!0});var ge=D(a);g=i(ge,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(g)!=="svelte-58elpm"&&(g.textContent=w),B=k(ge),b=i(ge,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ge.forEach(y),N=k(me),h=i(me,"DIV",{class:!0});var he=D(h);m=i(he,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(m)!=="svelte-17tjas6"&&(m.textContent=S),P=k(he),C=i(he,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),he.forEach(y),me.forEach(y),oe=k(f),U=i(f,"DIV",{class:!0});var be=D(U);M=i(be,"DIV",{class:!0});var ve=D(M);j=i(ve,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(j)!=="svelte-36069z"&&(j.textContent=pe),ce=k(ve),E=i(ve,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ve.forEach(y),ue=k(be),q=i(be,"DIV",{class:!0});var ye=D(q);s=i(ye,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(s)!=="svelte-gfbbjw"&&(s.textContent=V),z=k(ye),x=i(ye,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ye.forEach(y),be.forEach(y),ae=k(f),A=i(f,"DIV",{class:!0});var xe=D(A);H=i(xe,"DIV",{class:!0});var _e=D(H);K=i(_e,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(K)!=="svelte-1bgqrnr"&&(K.textContent=qe),Ie=k(_e),F=i(_e,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),_e.forEach(y),Ee=k(xe),Q=i(xe,"DIV",{class:!0});var ke=D(Q);W=i(ke,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(W)!=="svelte-10p5mek"&&(W.textContent=Re),Te=k(ke),O=i(ke,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ke.forEach(y),xe.forEach(y),Se=k(f),re=i(f,"DIV",{class:!0});var Qe=D(re);X=i(Qe,"DIV",{class:!0});var we=D(X);Y=i(we,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(Y)!=="svelte-fa596"&&(Y.textContent=Ge),Ve=k(we),L=i(we,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),we.forEach(y),Qe.forEach(y),Ae=k(f),R=i(f,"DIV",{});var ie=D(R);Z=i(ie,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),G(Z)!=="svelte-1ynutco"&&(Z.textContent=Je),Fe=k(ie),tt(te.$$.fragment,ie),Oe=k(ie),v&&v.l(ie),ie.forEach(y),Le=k(f),ne=i(f,"DIV",{class:!0});var We=D(ne);se=i(We,"DIV",{class:!0});var Xe=D(se);$=i(Xe,"BUTTON",{class:!0,"data-svelte-h":!0}),G($)!=="svelte-4qjpvv"&&($.textContent=ze),Xe.forEach(y),We.forEach(y),f.forEach(y),this.h()},h:function(){e(l,"class","text-[34px] py-[10px] uppercase text-center font-bold"),c(l,u,146,4,3501),e(g,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(g,"for","grid-first-name"),c(g,u,151,12,3693),e(b,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"),e(b,"id","grid-first-name"),e(b,"type","text"),e(b,"placeholder","Input Meta Description"),c(b,u,157,12,3928),e(a,"class","md:w-1/2 px-3 mb-6 md:mb-0"),c(a,u,150,8,3640),e(m,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(m,"for","grid-last-name"),c(m,u,166,12,4318),e(C,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"),e(C,"id","grid-last-name"),e(C,"type","text"),e(C,"placeholder","Meta Description "),c(C,u,172,12,4558),e(h,"class","md:w-1/2 px-3"),c(h,u,165,8,4278),e(d,"class","-mx-3 md:flex mb-6"),c(d,u,149,4,3599),e(j,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(j,"for","grid-first-name"),c(j,u,183,12,5013),e(E,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"),e(E,"id","grid-first-name"),e(E,"type","text"),e(E,"placeholder","Input Meta keywords"),c(E,u,189,12,5246),e(M,"class","md:w-1/2 px-3 mb-6 md:mb-0"),c(M,u,182,8,4960),e(s,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(s,"for","grid-last-name"),c(s,u,198,12,5632),e(x,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"),e(x,"id","grid-last-name"),e(x,"type","text"),e(x,"placeholder","Innput Canonical Url "),c(x,u,204,12,5869),e(q,"class","md:w-1/2 px-3"),c(q,u,197,8,5592),e(U,"class","-mx-3 md:flex mb-6"),c(U,u,181,4,4919),e(K,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(K,"for","grid-first-name"),c(K,u,215,12,6325),e(F,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"),e(F,"id","grid-first-name"),e(F,"type","text"),e(F,"placeholder","Input Meta Robot MetaTags"),c(F,u,221,12,6564),e(H,"class","md:w-1/2 px-3 mb-6 md:mb-0"),c(H,u,214,8,6272),e(W,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(W,"for","grid-last-name"),c(W,u,230,12,6961),e(O,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"),e(O,"id","grid-last-name"),e(O,"type","text"),e(O,"placeholder","Innput Open GraphTags "),c(O,u,236,12,7199),e(Q,"class","md:w-1/2 px-3"),c(Q,u,229,8,6921),e(A,"class","-mx-3 md:flex mb-6"),c(A,u,213,4,6231),e(Y,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(Y,"for","grid-last-name"),c(Y,u,247,12,7644),e(L,"class","appearance-none dark:bg-gray-700 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"),e(L,"id","grid-last-name"),e(L,"type","text"),e(L,"placeholder","Innput Sitemap Frequency "),c(L,u,253,12,7885),e(X,"class","md:w-1/2 px-3"),c(X,u,246,8,7604),e(re,"class","-mx-3 md:flex mb-6"),c(re,u,245,4,7563),e(Z,"class","block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-[14px] py-[10px]"),e(Z,"for","grid-zip"),c(Z,u,263,8,8269),c(R,u,262,4,8255),e($,"class","bg-black text-white border border-black-500 hover:border-transparent rounded px-[80px] py-[10px]"),c($,u,293,12,9391),e(se,"class","btn-signup w-fit"),c(se,u,292,8,9348),e(ne,"class","flex justify-center items-center relative bottom-0"),c(ne,u,291,4,9275),e(r,"class","bg-white dark:bg-slate-800 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 h-full"),c(r,u,143,0,3371)},m:function(p,f){at(p,r,f),t(r,l),t(r,J),t(r,d),t(d,a),t(a,g),t(a,B),t(a,b),T(b,n[0].metaTitle),t(d,N),t(d,h),t(h,m),t(h,P),t(h,C),T(C,n[0].metaDescription),t(r,oe),t(r,U),t(U,M),t(M,j),t(M,ce),t(M,E),T(E,n[0].keywords),t(U,ue),t(U,q),t(q,s),t(q,z),t(q,x),T(x,n[0].canonicalUrl),t(r,ae),t(r,A),t(A,H),t(H,K),t(H,Ie),t(H,F),T(F,n[0].robotMetaTags),t(A,Ee),t(A,Q),t(Q,W),t(Q,Te),t(Q,O),T(O,n[0].openGraphTags),t(r,Se),t(r,re),t(re,X),t(X,Y),t(X,Ve),t(X,L),T(L,n[0].sitemapFrequency),t(r,Ae),t(r,R),t(R,Z),t(R,Fe),rt(te,R,null),t(R,Oe),v&&v.m(R,null),t(r,Le),t(r,ne),t(ne,se),t(se,$),fe=!0,Be||(He=[ee(b,"input",n[6]),ee(C,"input",n[7]),ee(E,"input",n[8]),ee(x,"input",n[9]),ee(F,"input",n[10]),ee(O,"input",n[11]),ee(L,"input",n[12]),ee($,"click",n[2],!1,!1,!1,!1)],Be=!0)},p:function(p,[f]){f&1&&b.value!==p[0].metaTitle&&T(b,p[0].metaTitle),f&1&&C.value!==p[0].metaDescription&&T(C,p[0].metaDescription),f&1&&E.value!==p[0].keywords&&T(E,p[0].keywords),f&1&&x.value!==p[0].canonicalUrl&&T(x,p[0].canonicalUrl),f&1&&F.value!==p[0].robotMetaTags&&T(F,p[0].robotMetaTags),f&1&&O.value!==p[0].openGraphTags&&T(O,p[0].openGraphTags),f&1&&L.value!==p[0].sitemapFrequency&&T(L,p[0].sitemapFrequency),p[1]?v?(v.p(p,f),f&2&&de(v,1)):(v=Ue(p),v.c(),de(v,1),v.m(R,null)):v&&(ft(),De(v,1,1,()=>{v=null}),mt())},i:function(p){fe||(de(te.$$.fragment,p),de(v),fe=!0)},o:function(p){De(te.$$.fragment,p),De(v),fe=!1},d:function(p){p&&y(r),nt(te),v&&v.d(),Be=!1,it(He)}};return je("SvelteRegisterBlock",{block:Ke,id:Me.name,type:"component",source:"",ctx:n}),Ke}function $e(n){return n?JSON.parse(n):[]}function vt(n,r,l){let{$$slots:I={},$$scope:J}=r;pt("CreateSeo",I,[]);let{seoData:d}=r,a=d.seo,g="http://103.142.26.42",w;w=a.image;const B=Ne.get("uploadRepository");let b=$e(d.images),N=b?b[0]:"";const h=Ne.get("seoRepository");async function m(){let s={"@context":`${g}`,"@type":"sản phẩm ",name:`${d.name}`,description:`${a.metaDescription}`,image:`${N}`,brand:{"@type":"Thương Hiệu",name:"Pet One"},offers:{"@type":"Offer",price:`${d.price}`,priceCurrency:"VNĐ",availability:"http://103.142.26.42",seller:{"@type":"Organization",name:"Pet One"}}};l(0,a.image=w,a),l(0,a.structuredData=JSON.stringify(s),a);const V=await h.post(a);return l(0,a=V.data.data),l(5,d.seoId=a.id,d),l(5,d.seo=a,d),V}async function S(){let s={"@context":`${g}`,"@type":"sản phẩm ",name:`${d.productName}`,description:`${a.metaDescription}`,image:`${N}`,brand:{"@type":"Thương Hiệu",name:"Pet One"},offers:{"@type":"Offer",price:`${d.price}`,priceCurrency:"VNĐ",availability:"http://103.142.26.42",seller:{"@type":"Organization",name:"Pet One"}}};return l(0,a.structuredData=JSON.stringify(s),a),h.put(a.id,a)}async function P(){var V,z;if(Pe.set(!0),a.id)try{const x=await S()}catch(x){console.log(x)}else try{await m()}catch(x){const ae=(z=(V=x==null?void 0:x.response)==null?void 0:V.data)==null?void 0:z.errors;var s=ae==null?void 0:ae.map(A=>({message:A.path+"-"+A.msg,type:"error"}));Ce.set(s)}Pe.set(!1)}async function C(s){l(1,w=await s.target.files[0]);let V=new FormData;V.append("file",w);try{const z=await B.uploadFile(V);l(1,w=z.data.data.path)}catch{Ce.set([{message:"File upload failed",type:"error"}])}}async function oe(s){try{await B.deleteFile({path:s}),l(1,w="")}catch{Ce.set([{message:"File deleting failed",type:"error"}])}}n.$$.on_mount.push(function(){d===void 0&&!("seoData"in r||n.$$.bound[n.$$.props.seoData])&&Ze.warn("<CreateSeo> was created without expected prop 'seoData'")});const U=["seoData"];Object.keys(r).forEach(s=>{!~U.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&Ze.warn(`<CreateSeo> was created with unknown prop '${s}'`)});function M(){a.metaTitle=this.value,l(0,a)}function j(){a.metaDescription=this.value,l(0,a)}function pe(){a.keywords=this.value,l(0,a)}function ce(){a.canonicalUrl=this.value,l(0,a)}function E(){a.robotMetaTags=this.value,l(0,a)}function ue(){a.openGraphTags=this.value,l(0,a)}function q(){a.sitemapFrequency=this.value,l(0,a)}return n.$$set=s=>{"seoData"in s&&l(5,d=s.seoData)},n.$capture_state=()=>({RepositoryFactory:Ne,BASE_API:ht,loadingState:Pe,toastErr:Ce,Icon:st,axios:bt,Fileupload:lt,seoData:d,seo:a,host:g,file:w,uploadFileService:B,convertImageJsonToArray:$e,images:b,image:N,seoService:h,handleSubmitCreateSeo:m,handleSubmitUpdateSeo:S,handleSubmit:P,handleFileInputChange:C,handleDeleteFile:oe}),n.$inject_state=s=>{"seoData"in s&&l(5,d=s.seoData),"seo"in s&&l(0,a=s.seo),"host"in s&&(g=s.host),"file"in s&&l(1,w=s.file),"images"in s&&(b=s.images),"image"in s&&(N=s.image)},r&&"$$inject"in r&&n.$inject_state(r.$$inject),[a,w,P,C,oe,d,M,j,pe,ce,E,ue,q]}class St extends ut{constructor(r){super(r),dt(this,r,vt,Me,ot,{seoData:5}),je("SvelteRegisterComponent",{component:this,tagName:"CreateSeo",options:r,id:Me.name})}get seoData(){throw new Error("<CreateSeo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set seoData(r){throw new Error("<CreateSeo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{St as C};
