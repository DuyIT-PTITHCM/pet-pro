import{s as Ge,g as d,H as Le,e as Ne,c as K,l as P,U as Fe,h as m,D as Ve,d as z,i as E,m as T,k as h,w as Y,M as Je,T as Ke}from"../chunks/scheduler.b4686469.js";import{g as ze}from"../chunks/globals.7f7f1b26.js";import{S as Qe,i as We,d as Z,u as Be,v as Xe,e as l,g as s,n as a,a as R}from"../chunks/index.07c1f1fe.js";const{console:Oe}=ze,f="src/routes/(app)/san-pham/[slug]/+page.svelte";function Re(e,t,o){const u=e.slice();return u[5]=t[o],u[7]=o,u}function we(e){let t,o;const u={c:function(){t=d("img"),this.h()},l:function(n){t=m(n,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h:function(){var n;Ke(t.src,o=e[5]?`${e[1]}/`+e[5]:"/images/logo.png")||s(t,"src",o),s(t,"class","rounded-xl "+(e[3].length==1?"h-full w-full object-contain":e[3].length>3?"mb-4 w-full":"h-full w-full object-contain")),s(t,"alt",(n=e[2])==null?void 0:n.name),h(t,f,37,16,1445)},m:function(n,p){R(n,t,p)},p:Y,d:function(n){n&&l(t)}};return Z("SvelteRegisterBlock",{block:u,id:we.name,type:"each",source:"(34:16) {#each images as path, i}",ctx:e}),u}function qe(e){let t=e[2].price+"",o;const u={c:function(){o=P(t)},l:function(n){o=T(n,t)},m:function(n,p){R(n,o,p)},p:Y,d:function(n){n&&l(o)}};return Z("SvelteRegisterBlock",{block:u,id:qe.name,type:"else",source:"(55:24) {:else}",ctx:e}),u}function He(e){let t,o=e[2].price+"",u,g=e[2].price/e[2].discount*100+"",n;const p={c:function(){t=d("del"),u=P(o),n=P(g),this.h()},l:function(_){t=m(_,"DEL",{});var v=E(t);u=T(v,o),v.forEach(l),n=T(_,g),this.h()},h:function(){h(t,f,56,28,2275)},m:function(_,v){R(_,t,v),a(t,u),R(_,n,v)},p:Y,d:function(_){_&&(l(t),l(n))}};return Z("SvelteRegisterBlock",{block:p,id:He.name,type:"if",source:"(53:24) {#if product.discount}",ctx:e}),p}function Ee(e){var Te,je;let t,o,u,g,n,p,b='<script type="application/ld+json">'+((Te=e[2])==null?void 0:Te.seo.structuredData)+"<\/script>",_,v,j,i,M,x,A,be=e[2].productName+"",ne,$,L,q,S,N,ae,V,D,H,le,ke=e[2].productName+"",oe,ie,U,ce,ee,Ue=e[2].description+"",se,C,re,De=e[2].notes+"",ue,de,G,me,Ie=e[2].origin+"",he,fe,F,Q;document.title=t=(je=e[2])==null?void 0:je.seo.metaTitle;let W=Be(e[3]),w=[];for(let I=0;I<W.length;I+=1)w[I]=we(Re(e,W,I));function Ce(I,c){return I[2].discount?He:qe}let X=Ce(e)(e);const Pe={c:function(){o=d("meta"),u=d("meta"),g=d("link"),n=d("meta"),p=new Le(!1),_=Ne(),v=d("meta"),j=d("meta"),i=d("meta"),M=d("meta"),x=K(),A=d("h1"),ne=P(be),$=K(),L=d("div"),q=d("div"),S=d("div"),N=d("div");for(let c=0;c<w.length;c+=1)w[c].c();ae=K(),V=d("div"),D=d("ul"),H=d("li"),le=P("Product name: "),oe=P(ke),ie=K(),U=d("li"),ce=P("Description : "),ee=new Le(!1),se=K(),C=d("li"),re=P("Note: "),ue=P(De),de=K(),G=d("li"),me=P("Origin: "),he=P(Ie),fe=K(),F=d("div"),Q=d("b"),X.c(),this.h()},l:function(c){const r=Fe("svelte-jt5r9x",document.head);o=m(r,"META",{name:!0,content:!0}),u=m(r,"META",{name:!0,content:!0}),g=m(r,"LINK",{rel:!0,href:!0}),n=m(r,"META",{property:!0,content:!0}),p=Ve(r,!1),_=Ne(),v=m(r,"META",{name:!0,content:!0}),j=m(r,"META",{name:!0,content:!0}),i=m(r,"META",{property:!0,content:!0}),M=m(r,"META",{name:!0,content:!0}),r.forEach(l),x=z(c),A=m(c,"H1",{class:!0});var k=E(A);ne=T(k,be),k.forEach(l),$=z(c),L=m(c,"DIV",{class:!0});var y=E(L);q=m(y,"DIV",{class:!0});var B=E(q);S=m(B,"DIV",{class:!0});var J=E(S);N=m(J,"DIV",{class:!0});var Se=E(N);for(let ye=0;ye<w.length;ye+=1)w[ye].l(Se);Se.forEach(l),ae=z(J),V=m(J,"DIV",{});var te=E(V);D=m(te,"UL",{});var O=E(D);H=m(O,"LI",{});var _e=E(H);le=T(_e,"Product name: "),oe=T(_e,ke),_e.forEach(l),ie=z(O),U=m(O,"LI",{});var ge=E(U);ce=T(ge,"Description : "),ee=Ve(ge,!1),ge.forEach(l),se=z(O),C=m(O,"LI",{});var pe=E(C);re=T(pe,"Note: "),ue=T(pe,De),pe.forEach(l),de=z(O),G=m(O,"LI",{});var ve=E(G);me=T(ve,"Origin: "),he=T(ve,Ie),ve.forEach(l),O.forEach(l),fe=z(te),F=m(te,"DIV",{class:!0});var Me=E(F);Q=m(Me,"B",{});var Ae=E(Q);X.l(Ae),Ae.forEach(l),Me.forEach(l),te.forEach(l),J.forEach(l),B.forEach(l),y.forEach(l),this.h()},h:function(){var c,r,k,y,B,J;s(o,"name","description"),s(o,"content",(c=e[2])==null?void 0:c.seo.metaDescription),h(o,f,16,4,332),s(u,"name","keywords"),s(u,"content",(r=e[2])==null?void 0:r.seo.keywords),h(u,f,17,4,403),s(g,"rel","canonical"),s(g,"href",(k=e[2])==null?void 0:k.seo.canonicalUrl),h(g,f,18,4,464),s(n,"property","og:title"),s(n,"content",(y=e[2])==null?void 0:y.seo.openGraphTags),h(n,f,20,4,527),p.a=_,s(v,"name","sitemap_priority"),s(v,"content",(B=e[2])==null?void 0:B.seo.sitemapPriority),h(v,f,25,4,693),s(j,"name","sitemap_frequency"),s(j,"content",(J=e[2])==null?void 0:J.seo.sitemapFrequency),h(j,f,26,4,769),s(i,"property","og:image"),s(i,"content",e[0]),h(i,f,28,4,848),s(M,"name","twitter:image"),s(M,"content",e[0]),h(M,f,29,4,900),s(A,"class","text-3xl font-bold text-center"),h(A,f,31,0,964),s(N,"class","gap-4 "+(e[3].length<=3?"columns-"+e[3].length+" h-[600px] w-fit px-4":"lg:columns-4 md:columns-3 columns-2")),h(N,f,35,12,1250),h(H,f,48,20,1902),ee.a=null,h(U,f,49,20,1967),h(C,f,50,20,2038),h(G,f,51,20,2089),h(D,f,47,16,1877),h(Q,f,54,20,2196),s(F,"class",""),h(F,f,53,16,2161),h(V,f,46,12,1855),s(S,"class","w-full "+(e[3].length<3?"grid md:grid-cols-2 grid-cols-1":"flex justify-center flex-col items-center")),h(S,f,34,8,1116),s(q,"class","sm:m-10 m-1 container"),h(q,f,33,4,1072),s(L,"class","flex justify-center"),h(L,f,32,0,1034)},m:function(c,r){a(document.head,o),a(document.head,u),a(document.head,g),a(document.head,n),p.m(b,document.head),a(document.head,_),a(document.head,v),a(document.head,j),a(document.head,i),a(document.head,M),R(c,x,r),R(c,A,r),a(A,ne),R(c,$,r),R(c,L,r),a(L,q),a(q,S),a(S,N);for(let k=0;k<w.length;k+=1)w[k]&&w[k].m(N,null);a(S,ae),a(S,V),a(V,D),a(D,H),a(H,le),a(H,oe),a(D,ie),a(D,U),a(U,ce),ee.m(Ue,U),a(D,se),a(D,C),a(C,re),a(C,ue),a(D,de),a(D,G),a(G,me),a(G,he),a(V,fe),a(V,F),a(F,Q),X.m(Q,null)},p:function(c,[r]){var k;if(r&4&&t!==(t=(k=c[2])==null?void 0:k.seo.metaTitle)&&(document.title=t),r&1&&s(i,"content",c[0]),r&1&&s(M,"content",c[0]),r&14){W=Be(c[3]);let y;for(y=0;y<W.length;y+=1){const B=Re(c,W,y);w[y]?w[y].p(B,r):(w[y]=we(B),w[y].c(),w[y].m(N,null))}for(;y<w.length;y+=1)w[y].d(1);w.length=W.length}X.p(c,r)},i:Y,o:Y,d:function(c){c&&(p.d(),l(x),l(A),l($),l(L)),l(o),l(u),l(g),l(n),l(_),l(v),l(j),l(i),l(M),Je(w,c),X.d()}};return Z("SvelteRegisterBlock",{block:Pe,id:Ee.name,type:"component",source:"",ctx:e}),Pe}function Ye(e,t,o){let{$$slots:u={},$$scope:g}=t;Xe("Page",u,[]);let{data:n}=t,p="http://103.142.26.42",b=n.data,_=JSON.parse(b==null?void 0:b.images);console.log(_);let v="";_.length>0&&(v=p+_[0]?p+_[0]:""),e.$$.on_mount.push(function(){n===void 0&&!("data"in t||e.$$.bound[e.$$.props.data])&&Oe.warn("<Page> was created without expected prop 'data'")});const j=["data"];return Object.keys(t).forEach(i=>{!~j.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&Oe.warn(`<Page> was created with unknown prop '${i}'`)}),e.$$set=i=>{"data"in i&&o(4,n=i.data)},e.$capture_state=()=>({data:n,host:p,product:b,images:_,imageSeo:v}),e.$inject_state=i=>{"data"in i&&o(4,n=i.data),"host"in i&&o(1,p=i.host),"product"in i&&o(2,b=i.product),"images"in i&&o(3,_=i.images),"imageSeo"in i&&o(0,v=i.imageSeo)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[v,p,b,_,n]}class tt extends Qe{constructor(t){super(t),We(this,t,Ye,Ee,Ge,{data:4}),Z("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:Ee.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{tt as component};