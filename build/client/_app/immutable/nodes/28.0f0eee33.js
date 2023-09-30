import{s as Ze,f as ye,g as _,c as y,l as oe,h as v,i as L,d as x,m as ie,O as qe,k as b,P as Ne,N as xe,R as ct,w as ut}from"../chunks/scheduler.77cc2719.js";import{S as Ke,i as Qe,d as Z,u as Ee,v as Ue,j,k as D,e as m,g as u,a as H,m as M,n as l,b as R,t as B,l as O}from"../chunks/index.817f31c9.js";import{B as We}from"../chunks/Button.6ead5fa1.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.83fc92f7.js";import{D as Xe}from"../chunks/DarkMode.89ccaad0.js";import{L as Pe,C as Ye}from"../chunks/Checkbox.6e62268e.js";import{I as Ie}from"../chunks/Input.111a38c9.js";import{H as Se,c as ze}from"../chunks/axiosServer.70259e01.js";import{B as Fe}from"../chunks/Const.4ee2e7e1.js";import{s as Ge}from"../chunks/cookieUtils.9487ed92.js";import{t as me}from"../chunks/toastError.16628244.js";import{l as fe}from"../chunks/loading.533478ce.js";import{m as He}from"../chunks/userManagement.1543f6be.js";import{T as et}from"../chunks/ToastError.4e25c4ed.js";const w="src/lib/components/admin/login/Login.svelte";function tt(n){let e;const r={c:function(){e=oe("Email")},l:function(t){e=ie(t,"Email")},m:function(t,a){H(t,e,a)},d:function(t){t&&m(e)}};return Z("SvelteRegisterBlock",{block:r,id:tt.name,type:"slot",source:'(102:20) <Label for=\\"email\\" class=\\"block mb-2\\">',ctx:n}),r}function nt(n){let e;const r={c:function(){e=oe("Password")},l:function(t){e=ie(t,"Password")},m:function(t,a){H(t,e,a)},d:function(t){t&&m(e)}};return Z("SvelteRegisterBlock",{block:r,id:nt.name,type:"slot",source:'(111:20) <Label                         for=\\"password\\"                         class=\\"block mb-2\\"                         title=\\"Password should be at least 8 characters long and contain at least one digit and one special character\\"                         >',ctx:n}),r}function at(n){let e;const r={c:function(){e=oe("Remember me")},l:function(t){e=ie(t,"Remember me")},m:function(t,a){H(t,e,a)},d:function(t){t&&m(e)}};return Z("SvelteRegisterBlock",{block:r,id:at.name,type:"slot",source:"(125:20) <Checkbox bind:checked={user.rememberMe}                         >",ctx:n}),r}function st(n){let e;const r={c:function(){e=oe("Log In")},l:function(t){e=ie(t,"Log In")},m:function(t,a){H(t,e,a)},d:function(t){t&&m(e)}};return Z("SvelteRegisterBlock",{block:r,id:st.name,type:"slot",source:'(134:16) <Button                     on:click={handleSubmitLogin}                     type=\\"submit\\"                     class=\\"w-full\\">',ctx:n}),r}function Ce(n){let e,r,i,t,a,f,p,o,g,le,ne,c,d,k,S,Y,I,ae,h,V,de,C,T,$e,A,pe,ge,K,he,q,N,_e,ve,z,je="Forgot password ?",be,F,we,G,De="Sign up for Pet One",ke,Q,J,Me,ce;r=new Xe({$$inline:!0}),S=new Pe({props:{for:"email",class:"block mb-2",$$slots:{default:[tt]},$$scope:{ctx:n}},$$inline:!0});function ot(E){n[2](E)}let Re={type:"email",placeholder:"Enter your email"};n[0].email!==void 0&&(Re.value=n[0].email),I=new Ie({props:Re,$$inline:!0}),ye.push(()=>Ee(I,"value",ot)),V=new Se({props:{class:"mt-2"},$$inline:!0}),T=new Pe({props:{for:"password",class:"block mb-2",title:"Password should be at least 8 characters long and contain at least one digit and one special character",$$slots:{default:[nt]},$$scope:{ctx:n}},$$inline:!0});function it(E){n[3](E)}let Be={type:"password",placeholder:"Enter your password"};n[0].password!==void 0&&(Be.value=n[0].password),A=new Ie({props:Be,$$inline:!0}),ye.push(()=>Ee(A,"value",it)),K=new Se({props:{class:"mt-2"},$$inline:!0});function lt(E){n[4](E)}let Oe={$$slots:{default:[at]},$$scope:{ctx:n}};n[0].rememberMe!==void 0&&(Oe.checked=n[0].rememberMe),N=new Ye({props:Oe,$$inline:!0}),ye.push(()=>Ee(N,"checked",lt)),F=new We({props:{type:"submit",class:"w-full",$$slots:{default:[st]},$$scope:{ctx:n}},$$inline:!0}),F.$on("click",n[1]);const Ve={c:function(){e=_("div"),j(r.$$.fragment),i=y(),t=_("div"),a=_("div"),f=_("div"),p=_("div"),o=_("a"),g=_("img"),ne=oe(`
                    PetOne`),c=y(),d=_("form"),k=_("div"),j(S.$$.fragment),Y=y(),j(I.$$.fragment),h=y(),j(V.$$.fragment),de=y(),C=_("div"),j(T.$$.fragment),$e=y(),j(A.$$.fragment),ge=y(),j(K.$$.fragment),he=y(),q=_("div"),j(N.$$.fragment),ve=y(),z=_("a"),z.textContent=je,be=y(),j(F.$$.fragment),we=y(),G=_("a"),G.textContent=De,ke=y(),Q=_("div"),J=_("img"),this.h()},l:function(s){e=v(s,"DIV",{class:!0});var $=L(e);D(r.$$.fragment,$),$.forEach(m),i=x(s),t=v(s,"DIV",{class:!0});var U=L(t);a=v(U,"DIV",{class:!0});var se=L(a);f=v(se,"DIV",{class:!0});var W=L(f);p=v(W,"DIV",{class:!0});var re=L(p);o=v(re,"A",{href:!0,class:!0});var X=L(o);g=v(X,"IMG",{class:!0,src:!0,alt:!0}),ne=ie(X,`
                    PetOne`),X.forEach(m),re.forEach(m),c=x(W),d=v(W,"FORM",{class:!0});var P=L(d);k=v(P,"DIV",{class:!0});var ee=L(k);D(S.$$.fragment,ee),Y=x(ee),D(I.$$.fragment,ee),h=x(ee),D(V.$$.fragment,ee),ee.forEach(m),de=x(P),C=v(P,"DIV",{class:!0});var te=L(C);D(T.$$.fragment,te),$e=x(te),D(A.$$.fragment,te),ge=x(te),D(K.$$.fragment,te),te.forEach(m),he=x(P),q=v(P,"DIV",{class:!0});var ue=L(q);D(N.$$.fragment,ue),ve=x(ue),z=v(ue,"A",{href:!0,class:!0,"data-svelte-h":!0}),qe(z)!=="svelte-1fkfff4"&&(z.textContent=je),ue.forEach(m),be=x(P),D(F.$$.fragment,P),we=x(P),G=v(P,"A",{href:!0,class:!0,"data-svelte-h":!0}),qe(G)!=="svelte-1kfjhtd"&&(G.textContent=De),P.forEach(m),W.forEach(m),se.forEach(m),ke=x(U),Q=v(U,"DIV",{class:!0});var Ae=L(Q);J=v(Ae,"IMG",{class:!0,src:!0,alt:!0}),Ae.forEach(m),U.forEach(m),this.h()},h:function(){u(e,"class","darkmode fixed top-2 right-2 rounded-lg z-50 bg-slate-200 dark:bg-slate-900"),b(e,w,81,0,1866),u(g,"class","w-10 h-10 mr-2 rounded-full"),Ne(g.src,le="https://static.vecteezy.com/system/resources/previews/009/551/676/original/shy-dog-logo-illustration-depicting-shy-dog-suitable-for-pet-company-free-vector.jpg")||u(g,"src",le),u(g,"alt","logo"),b(g,w,98,20,2539),u(o,"href","/"),u(o,"class","flex items-center text-3xl font-semibold text-gray-900 dark:text-white"),b(o,w,94,16,2370),u(p,"class","w-full flex justify-center my-5"),b(p,w,93,12,2308),u(k,"class","mb-6"),b(k,w,107,16,2985),u(C,"class","mb-6"),b(C,w,116,16,3349),u(z,"href","/"),u(z,"class","text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm"),b(z,w,134,20,4142),u(q,"class","flex justify-between"),b(q,w,130,16,3957),u(G,"href","/signup"),u(G,"class","text-primary-600 dark+:text-primary-500 hover:underline font-bold text-sm text-right w-full block"),b(G,w,145,16,4566),u(d,"class","space-y-4 md:space-y-6"),b(d,w,106,12,2931),u(f,"class","p-6 space-y-4 md:space-y-6 sm:p-8"),b(f,w,92,8,2248),u(a,"class","w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 z-10"),b(a,w,89,4,2094),u(J,"class","w-full h-full object-cover"),Ne(J.src,Me="/images/loginbg.jpg")||u(J,"src",Me),u(J,"alt",""),b(J,w,154,8,4921),u(Q,"class","absolute w-full h-full dark:brightness-50 transition-all"),b(Q,w,153,4,4842),u(t,"class","relative flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0"),b(t,w,86,0,1985)},m:function(s,$){H(s,e,$),M(r,e,null),H(s,i,$),H(s,t,$),l(t,a),l(a,f),l(f,p),l(p,o),l(o,g),l(o,ne),l(f,c),l(f,d),l(d,k),M(S,k,null),l(k,Y),M(I,k,null),l(k,h),M(V,k,null),l(d,de),l(d,C),M(T,C,null),l(C,$e),M(A,C,null),l(C,ge),M(K,C,null),l(d,he),l(d,q),M(N,q,null),l(q,ve),l(q,z),l(d,be),M(F,d,null),l(d,we),l(d,G),l(t,ke),l(t,Q),l(Q,J),ce=!0},p:function(s,[$]){const U={};$&64&&(U.$$scope={dirty:$,ctx:s}),S.$set(U);const se={};!ae&&$&1&&(ae=!0,se.value=s[0].email,xe(()=>ae=!1)),I.$set(se);const W={};$&64&&(W.$$scope={dirty:$,ctx:s}),T.$set(W);const re={};!pe&&$&1&&(pe=!0,re.value=s[0].password,xe(()=>pe=!1)),A.$set(re);const X={};$&64&&(X.$$scope={dirty:$,ctx:s}),!_e&&$&1&&(_e=!0,X.checked=s[0].rememberMe,xe(()=>_e=!1)),N.$set(X);const P={};$&64&&(P.$$scope={dirty:$,ctx:s}),F.$set(P)},i:function(s){ce||(R(r.$$.fragment,s),R(S.$$.fragment,s),R(I.$$.fragment,s),R(V.$$.fragment,s),R(T.$$.fragment,s),R(A.$$.fragment,s),R(K.$$.fragment,s),R(N.$$.fragment,s),R(F.$$.fragment,s),ce=!0)},o:function(s){B(r.$$.fragment,s),B(S.$$.fragment,s),B(I.$$.fragment,s),B(V.$$.fragment,s),B(T.$$.fragment,s),B(A.$$.fragment,s),B(K.$$.fragment,s),B(N.$$.fragment,s),B(F.$$.fragment,s),ce=!1},d:function(s){s&&(m(e),m(i),m(t)),O(r),O(S),O(I),O(V),O(T),O(A),O(K),O(N),O(F)}};return Z("SvelteRegisterBlock",{block:Ve,id:Ce.name,type:"component",source:"",ctx:n}),Ve}function Te(n=""){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}function Je(n=""){return/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(n)}function mt(n,e,r){let{$$slots:i={},$$scope:t}=e;Ue("Login",i,[]);let a={email:"",password:"",rememberMe:!1};async function f(){Te(a.email)?Je(a.password)?p():me.set([{message:"Password is not valid",type:"error"}]):me.set([{message:"Email is not valid",type:"error"}])}async function p(){var c,d,k,S,Y,I;try{fe.set(!0);const h=await ze().post(`${Fe}/auth/login`,a),V=a.rememberMe?30:1;Ge("access_token",(d=(c=h==null?void 0:h.data)==null?void 0:c.data)==null?void 0:d.token,{expires:V}),localStorage.setItem("me",JSON.stringify((k=h==null?void 0:h.data)==null?void 0:k.data)),He.set((S=h==null?void 0:h.data)==null?void 0:S.data),fe.set(!1),window.location.href="/"+((I=(Y=h==null?void 0:h.data)==null?void 0:Y.data)==null?void 0:I.role)}catch{fe.set(!1),me.set([{message:"Login fail! Email or password incorrect",type:"error"}])}}const o=[];Object.keys(e).forEach(c=>{!~o.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<Login> was created with unknown prop '${c}'`)});function g(c){n.$$.not_equal(a.email,c)&&(a.email=c,r(0,a))}function le(c){n.$$.not_equal(a.password,c)&&(a.password=c,r(0,a))}function ne(c){n.$$.not_equal(a.rememberMe,c)&&(a.rememberMe=c,r(0,a))}return n.$capture_state=()=>({Button:We,Checkbox:Ye,DarkMode:Xe,Label:Pe,Input:Ie,Helper:Se,createAxiosClient:ze,BASE_API:Fe,setCookie:Ge,toastErr:me,loadingState:fe,me:He,user:a,validateEmail:Te,validatePassword:Je,handleSubmitLogin:f,userLogin:p}),n.$inject_state=c=>{"user"in c&&r(0,a=c.user)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),[a,f,g,le,ne]}class rt extends Ke{constructor(e){super(e),Qe(this,e,mt,Ce,Ze,{}),Z("SvelteRegisterComponent",{component:this,tagName:"Login",options:e,id:Ce.name})}}function Le(n){let e,r,i,t,a;r=new rt({$$inline:!0}),t=new et({$$inline:!0});const f={c:function(){e=y(),j(r.$$.fragment),i=y(),j(t.$$.fragment),this.h()},l:function(o){ct("svelte-xyf4ii",document.head).forEach(m),e=x(o),D(r.$$.fragment,o),i=x(o),D(t.$$.fragment,o),this.h()},h:function(){document.title=`
        Đăng Nhập
    `},m:function(o,g){H(o,e,g),M(r,o,g),H(o,i,g),M(t,o,g),a=!0},p:ut,i:function(o){a||(R(r.$$.fragment,o),R(t.$$.fragment,o),a=!0)},o:function(o){B(r.$$.fragment,o),B(t.$$.fragment,o),a=!1},d:function(o){o&&(m(e),m(i)),O(r,o),O(t,o)}};return Z("SvelteRegisterBlock",{block:f,id:Le.name,type:"component",source:"",ctx:n}),f}function ft(n,e,r){let{$$slots:i={},$$scope:t}=e;Ue("Page",i,[]);const a=[];return Object.keys(e).forEach(f=>{!~a.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<Page> was created with unknown prop '${f}'`)}),n.$capture_state=()=>({Login:rt,ToastError:et}),[]}class It extends Ke{constructor(e){super(e),Qe(this,e,ft,Le,Ze,{}),Z("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Le.name})}}export{It as component};
