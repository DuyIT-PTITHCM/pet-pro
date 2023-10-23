import{$ as Pt,s as At,y as He,o as Ne,x as ce,z as We,L as me,c as Qe,e as ge,d as Ze,f as Ct,g as $e,h as et,i as tt,k as nt,w as Ot,n as Rt,u as kt,p as St,q as Lt,Y as Tt}from"./scheduler.e174163e.js";import{S as _t,i as Bt,d as re,v as Dt,a as ne,b as le,h as Mt,t as he,c as Ft,e as J,j as Ht,k as Nt,m as Wt,l as Vt,g as Ve}from"./index.4ef71c6a.js";import{b as Ie,g as It,a as jt}from"./Indicator.svelte_svelte_type_style_lang.6f1e06b8.js";import{F as ot}from"./CloseButton.e6267c57.js";const it=["top","right","bottom","left"],je=["start","end"],ze=it.reduce((e,t)=>e.concat(t,t+"-"+je[0],t+"-"+je[1]),[]),I=Math.min,_=Math.max,pe=Math.round,de=Math.floor,K=e=>({x:e,y:e}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},Yt={start:"end",end:"start"};function Ee(e,t,n){return _(e,I(t,n))}function j(e,t){return typeof e=="function"?e(t):e}function H(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function ke(e){return e==="x"?"y":"x"}function Se(e){return e==="y"?"height":"width"}function ee(e){return["top","bottom"].includes(H(e))?"y":"x"}function Le(e){return ke(ee(e))}function rt(e,t,n){n===void 0&&(n=!1);const i=V(e),r=Le(e),o=Se(r);let s=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=we(s)),[s,we(s)]}function Xt(e){const t=we(e);return[ye(e),t,ye(t)]}function ye(e){return e.replace(/start|end/g,t=>Yt[t])}function qt(e,t,n){const i=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:i:t?i:r;case"left":case"right":return t?o:s;default:return[]}}function Ut(e,t,n,i){const r=V(e);let o=qt(H(e),n==="start",i);return r&&(o=o.map(s=>s+"-"+r),t&&(o=o.concat(o.map(ye)))),o}function we(e){return e.replace(/left|right|bottom|top/g,t=>zt[t])}function Jt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Te(e){return typeof e!="number"?Jt(e):{top:e,right:e,bottom:e,left:e}}function oe(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Ye(e,t,n){let{reference:i,floating:r}=e;const o=ee(t),s=Le(t),f=Se(s),c=H(t),l=o==="y",d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,g=i[f]/2-r[f]/2;let a;switch(c){case"top":a={x:d,y:i.y-r.height};break;case"bottom":a={x:d,y:i.y+i.height};break;case"right":a={x:i.x+i.width,y:u};break;case"left":a={x:i.x-r.width,y:u};break;default:a={x:i.x,y:i.y}}switch(V(t)){case"start":a[s]-=g*(n&&l?-1:1);break;case"end":a[s]+=g*(n&&l?-1:1);break}return a}const Kt=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s}=n,f=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:u}=Ye(l,i,c),g=i,a={},p=0;for(let h=0;h<f.length;h++){const{name:x,fn:v}=f[h],{x:b,y,data:E,reset:w}=await v({x:d,y:u,initialPlacement:i,placement:g,strategy:r,middlewareData:a,rects:l,platform:s,elements:{reference:e,floating:t}});if(d=b??d,u=y??u,a={...a,[x]:{...a[x],...E}},w&&p<=50){p++,typeof w=="object"&&(w.placement&&(g=w.placement),w.rects&&(l=w.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):w.rects),{x:d,y:u}=Ye(l,g,c)),h=-1;continue}}return{x:d,y:u,placement:g,strategy:r,middlewareData:a}};async function Z(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:s,elements:f,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:a=0}=j(t,e),p=Te(a),x=f[g?u==="floating"?"reference":"floating":u],v=oe(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(x)))==null||n?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(f.floating)),boundary:l,rootBoundary:d,strategy:c})),b=u==="floating"?{...s.floating,x:i,y:r}:s.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(f.floating)),E=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},w=oe(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:y,strategy:c}):b);return{top:(v.top-w.top+p.top)/E.y,bottom:(w.bottom-v.bottom+p.bottom)/E.y,left:(v.left-w.left+p.left)/E.x,right:(w.right-v.right+p.right)/E.x}}const st=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:r,rects:o,platform:s,elements:f}=t,{element:c,padding:l=0}=j(e,t)||{};if(c==null)return{};const d=Te(l),u={x:n,y:i},g=Le(r),a=Se(g),p=await s.getDimensions(c),h=g==="y",x=h?"top":"left",v=h?"bottom":"right",b=h?"clientHeight":"clientWidth",y=o.reference[a]+o.reference[g]-u[g]-o.floating[a],E=u[g]-o.reference[g],w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let P=w?w[b]:0;(!P||!await(s.isElement==null?void 0:s.isElement(w)))&&(P=f.floating[b]||o.floating[a]);const C=y/2-E/2,L=P/2-p[a]/2-1,T=I(d[x],L),A=I(d[v],L),R=T,D=P-p[a]-A,O=P/2-p[a]/2+C,k=Ee(R,O,D),B=V(r)!=null&&O!=k&&o.reference[a]/2-(O<R?T:A)-p[a]/2<0?O<R?R-O:D-O:0;return{[g]:u[g]-B,data:{[g]:k,centerOffset:O-k+B}}}});function Gt(e,t,n){return(e?[...n.filter(r=>V(r)===e),...n.filter(r=>V(r)!==e)]:n.filter(r=>H(r)===r)).filter(r=>e?V(r)===e||(t?ye(r)!==r:!1):!0)}const Qt=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var n,i,r;const{rects:o,middlewareData:s,placement:f,platform:c,elements:l}=t,{crossAxis:d=!1,alignment:u,allowedPlacements:g=ze,autoAlignment:a=!0,...p}=j(e,t),h=u!==void 0||g===ze?Gt(u||null,a,g):g,x=await Z(t,p),v=((n=s.autoPlacement)==null?void 0:n.index)||0,b=h[v];if(b==null)return{};const y=rt(b,o,await(c.isRTL==null?void 0:c.isRTL(l.floating)));if(f!==b)return{reset:{placement:h[0]}};const E=[x[H(b)],x[y[0]],x[y[1]]],w=[...((i=s.autoPlacement)==null?void 0:i.overflows)||[],{placement:b,overflows:E}],P=h[v+1];if(P)return{data:{index:v+1,overflows:w},reset:{placement:P}};const C=w.map(A=>{const R=V(A.placement);return[A.placement,R&&d?A.overflows.slice(0,2).reduce((D,O)=>D+O,0):A.overflows[0],A.overflows]}).sort((A,R)=>A[1]-R[1]),T=((r=C.filter(A=>A[2].slice(0,V(A[0])?2:3).every(R=>R<=0))[0])==null?void 0:r[0])||C[0][0];return T!==f?{data:{index:v+1,overflows:w},reset:{placement:T}}:{}}}},ct=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:i,middlewareData:r,rects:o,initialPlacement:s,platform:f,elements:c}=t,{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:a="none",flipAlignment:p=!0,...h}=j(e,t),x=H(i),v=H(s)===s,b=await(f.isRTL==null?void 0:f.isRTL(c.floating)),y=u||(v||!p?[we(s)]:Xt(s));!u&&a!=="none"&&y.push(...Ut(s,p,a,b));const E=[s,...y],w=await Z(t,h),P=[];let C=((n=r.flip)==null?void 0:n.overflows)||[];if(l&&P.push(w[x]),d){const R=rt(i,o,b);P.push(w[R[0]],w[R[1]])}if(C=[...C,{placement:i,overflows:P}],!P.every(R=>R<=0)){var L,T;const R=(((L=r.flip)==null?void 0:L.index)||0)+1,D=E[R];if(D)return{data:{index:R,overflows:C},reset:{placement:D}};let O=(T=C.filter(k=>k.overflows[0]<=0).sort((k,S)=>k.overflows[1]-S.overflows[1])[0])==null?void 0:T.placement;if(!O)switch(g){case"bestFit":{var A;const k=(A=C.map(S=>[S.placement,S.overflows.filter(B=>B>0).reduce((B,U)=>B+U,0)]).sort((S,B)=>S[1]-B[1])[0])==null?void 0:A[0];k&&(O=k);break}case"initialPlacement":O=s;break}if(i!==O)return{reset:{placement:O}}}return{}}}};function Xe(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function qe(e){return it.some(t=>e[t]>=0)}const Zt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:i="referenceHidden",...r}=j(e,t);switch(i){case"referenceHidden":{const o=await Z(t,{...r,elementContext:"reference"}),s=Xe(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:qe(s)}}}case"escaped":{const o=await Z(t,{...r,altBoundary:!0}),s=Xe(o,n.floating);return{data:{escapedOffsets:s,escaped:qe(s)}}}default:return{}}}}};function lt(e){const t=I(...e.map(o=>o.left)),n=I(...e.map(o=>o.top)),i=_(...e.map(o=>o.right)),r=_(...e.map(o=>o.bottom));return{x:t,y:n,width:i-t,height:r-n}}function $t(e){const t=e.slice().sort((r,o)=>r.y-o.y),n=[];let i=null;for(let r=0;r<t.length;r++){const o=t[r];!i||o.y-i.y>i.height/2?n.push([o]):n[n.length-1].push(o),i=o}return n.map(r=>oe(lt(r)))}const en=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:n,elements:i,rects:r,platform:o,strategy:s}=t,{padding:f=2,x:c,y:l}=j(e,t),d=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(i.reference))||[]),u=$t(d),g=oe(lt(d)),a=Te(f);function p(){if(u.length===2&&u[0].left>u[1].right&&c!=null&&l!=null)return u.find(x=>c>x.left-a.left&&c<x.right+a.right&&l>x.top-a.top&&l<x.bottom+a.bottom)||g;if(u.length>=2){if(ee(n)==="y"){const A=u[0],R=u[u.length-1],D=H(n)==="top",O=A.top,k=R.bottom,S=D?A.left:R.left,B=D?A.right:R.right,U=B-S,se=k-O;return{top:O,bottom:k,left:S,right:B,width:U,height:se,x:S,y:O}}const x=H(n)==="left",v=_(...u.map(A=>A.right)),b=I(...u.map(A=>A.left)),y=u.filter(A=>x?A.left===b:A.right===v),E=y[0].top,w=y[y.length-1].bottom,P=b,C=v,L=C-P,T=w-E;return{top:E,bottom:w,left:P,right:C,width:L,height:T,x:P,y:E}}return g}const h=await o.getElementRects({reference:{getBoundingClientRect:p},floating:i.floating,strategy:s});return r.reference.x!==h.reference.x||r.reference.y!==h.reference.y||r.reference.width!==h.reference.width||r.reference.height!==h.reference.height?{reset:{rects:h}}:{}}}};async function tn(e,t){const{placement:n,platform:i,elements:r}=e,o=await(i.isRTL==null?void 0:i.isRTL(r.floating)),s=H(n),f=V(n),c=ee(n)==="y",l=["left","top"].includes(s)?-1:1,d=o&&c?-1:1,u=j(t,e);let{mainAxis:g,crossAxis:a,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return f&&typeof p=="number"&&(a=f==="end"?p*-1:p),c?{x:a*d,y:g*l}:{x:g*l,y:a*d}}const ft=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:i}=t,r=await tn(t,e);return{x:n+r.x,y:i+r.y,data:r}}}},at=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:r}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:f={fn:x=>{let{x:v,y:b}=x;return{x:v,y:b}}},...c}=j(e,t),l={x:n,y:i},d=await Z(t,c),u=ee(H(r)),g=ke(u);let a=l[g],p=l[u];if(o){const x=g==="y"?"top":"left",v=g==="y"?"bottom":"right",b=a+d[x],y=a-d[v];a=Ee(b,a,y)}if(s){const x=u==="y"?"top":"left",v=u==="y"?"bottom":"right",b=p+d[x],y=p-d[v];p=Ee(b,p,y)}const h=f.fn({...t,[g]:a,[u]:p});return{...h,data:{x:h.x-n,y:h.y-i}}}}},nn=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:i,placement:r,rects:o,middlewareData:s}=t,{offset:f=0,mainAxis:c=!0,crossAxis:l=!0}=j(e,t),d={x:n,y:i},u=ee(r),g=ke(u);let a=d[g],p=d[u];const h=j(f,t),x=typeof h=="number"?{mainAxis:h,crossAxis:0}:{mainAxis:0,crossAxis:0,...h};if(c){const y=g==="y"?"height":"width",E=o.reference[g]-o.floating[y]+x.mainAxis,w=o.reference[g]+o.reference[y]-x.mainAxis;a<E?a=E:a>w&&(a=w)}if(l){var v,b;const y=g==="y"?"width":"height",E=["top","left"].includes(H(r)),w=o.reference[u]-o.floating[y]+(E&&((v=s.offset)==null?void 0:v[u])||0)+(E?0:x.crossAxis),P=o.reference[u]+o.reference[y]+(E?0:((b=s.offset)==null?void 0:b[u])||0)-(E?x.crossAxis:0);p<w?p=w:p>P&&(p=P)}return{[g]:a,[u]:p}}}},on=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:i,platform:r,elements:o}=t,{apply:s=()=>{},...f}=j(e,t),c=await Z(t,f),l=H(n),d=V(n),u=ee(n)==="y",{width:g,height:a}=i.floating;let p,h;l==="top"||l==="bottom"?(p=l,h=d===(await(r.isRTL==null?void 0:r.isRTL(o.floating))?"start":"end")?"left":"right"):(h=l,p=d==="end"?"top":"bottom");const x=a-c[p],v=g-c[h],b=!t.middlewareData.shift;let y=x,E=v;if(u){const P=g-c.left-c.right;E=d||b?I(v,P):P}else{const P=a-c.top-c.bottom;y=d||b?I(x,P):P}if(b&&!d){const P=_(c.left,0),C=_(c.right,0),L=_(c.top,0),T=_(c.bottom,0);u?E=g-2*(P!==0||C!==0?P+C:_(c.left,c.right)):y=a-2*(L!==0||T!==0?L+T:_(c.top,c.bottom))}await s({...t,availableWidth:E,availableHeight:y});const w=await r.getDimensions(o.floating);return g!==w.width||a!==w.height?{reset:{rects:!0}}:{}}}};function G(e){return ut(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function q(e){var t;return(t=(ut(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ut(e){return e instanceof Node||e instanceof F(e).Node}function X(e){return e instanceof Element||e instanceof F(e).Element}function z(e){return e instanceof HTMLElement||e instanceof F(e).HTMLElement}function Ue(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof F(e).ShadowRoot}function ae(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=N(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(r)}function rn(e){return["table","td","th"].includes(G(e))}function _e(e){const t=Be(),n=N(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function sn(e){let t=ie(e);for(;z(t)&&!be(t);){if(_e(t))return t;t=ie(t)}return null}function Be(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function be(e){return["html","body","#document"].includes(G(e))}function N(e){return F(e).getComputedStyle(e)}function ve(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ie(e){if(G(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ue(e)&&e.host||q(e);return Ue(t)?t.host:t}function mt(e){const t=ie(e);return be(t)?e.ownerDocument?e.ownerDocument.body:e.body:z(t)&&ae(t)?t:mt(t)}function fe(e,t){var n;t===void 0&&(t=[]);const i=mt(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),o=F(i);return r?t.concat(o,o.visualViewport||[],ae(i)?i:[]):t.concat(i,fe(i))}function dt(e){const t=N(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=z(e),o=r?e.offsetWidth:n,s=r?e.offsetHeight:i,f=pe(n)!==o||pe(i)!==s;return f&&(n=o,i=s),{width:n,height:i,$:f}}function De(e){return X(e)?e:e.contextElement}function te(e){const t=De(e);if(!z(t))return K(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=dt(t);let s=(o?pe(n.width):n.width)/i,f=(o?pe(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const cn=K(0);function gt(e){const t=F(e);return!Be()||!t.visualViewport?cn:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ln(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==F(e)?!1:t}function $(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=De(e);let s=K(1);t&&(i?X(i)&&(s=te(i)):s=te(e));const f=ln(o,n,i)?gt(o):K(0);let c=(r.left+f.x)/s.x,l=(r.top+f.y)/s.y,d=r.width/s.x,u=r.height/s.y;if(o){const g=F(o),a=i&&X(i)?F(i):i;let p=g.frameElement;for(;p&&i&&a!==g;){const h=te(p),x=p.getBoundingClientRect(),v=N(p),b=x.left+(p.clientLeft+parseFloat(v.paddingLeft))*h.x,y=x.top+(p.clientTop+parseFloat(v.paddingTop))*h.y;c*=h.x,l*=h.y,d*=h.x,u*=h.y,c+=b,l+=y,p=F(p).frameElement}}return oe({width:d,height:u,x:c,y:l})}function fn(e){let{rect:t,offsetParent:n,strategy:i}=e;const r=z(n),o=q(n);if(n===o)return t;let s={scrollLeft:0,scrollTop:0},f=K(1);const c=K(0);if((r||!r&&i!=="fixed")&&((G(n)!=="body"||ae(o))&&(s=ve(n)),z(n))){const l=$(n);f=te(n),c.x=l.x+n.clientLeft,c.y=l.y+n.clientTop}return{width:t.width*f.x,height:t.height*f.y,x:t.x*f.x-s.scrollLeft*f.x+c.x,y:t.y*f.y-s.scrollTop*f.y+c.y}}function an(e){return Array.from(e.getClientRects())}function ht(e){return $(q(e)).left+ve(e).scrollLeft}function un(e){const t=q(e),n=ve(e),i=e.ownerDocument.body,r=_(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=_(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-n.scrollLeft+ht(e);const f=-n.scrollTop;return N(i).direction==="rtl"&&(s+=_(t.clientWidth,i.clientWidth)-r),{width:r,height:o,x:s,y:f}}function mn(e,t){const n=F(e),i=q(e),r=n.visualViewport;let o=i.clientWidth,s=i.clientHeight,f=0,c=0;if(r){o=r.width,s=r.height;const l=Be();(!l||l&&t==="fixed")&&(f=r.offsetLeft,c=r.offsetTop)}return{width:o,height:s,x:f,y:c}}function dn(e,t){const n=$(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=z(e)?te(e):K(1),s=e.clientWidth*o.x,f=e.clientHeight*o.y,c=r*o.x,l=i*o.y;return{width:s,height:f,x:c,y:l}}function Je(e,t,n){let i;if(t==="viewport")i=mn(e,n);else if(t==="document")i=un(q(e));else if(X(t))i=dn(t,n);else{const r=gt(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return oe(i)}function pt(e,t){const n=ie(e);return n===t||!X(n)||be(n)?!1:N(n).position==="fixed"||pt(n,t)}function gn(e,t){const n=t.get(e);if(n)return n;let i=fe(e).filter(f=>X(f)&&G(f)!=="body"),r=null;const o=N(e).position==="fixed";let s=o?ie(e):e;for(;X(s)&&!be(s);){const f=N(s),c=_e(s);!c&&f.position==="fixed"&&(r=null),(o?!c&&!r:!c&&f.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ae(s)&&!c&&pt(e,s))?i=i.filter(d=>d!==s):r=f,s=ie(s)}return t.set(e,i),i}function hn(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const s=[...n==="clippingAncestors"?gn(t,this._c):[].concat(n),i],f=s[0],c=s.reduce((l,d)=>{const u=Je(t,d,r);return l.top=_(u.top,l.top),l.right=I(u.right,l.right),l.bottom=I(u.bottom,l.bottom),l.left=_(u.left,l.left),l},Je(t,f,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function pn(e){return dt(e)}function yn(e,t,n){const i=z(t),r=q(t),o=n==="fixed",s=$(e,!0,o,t);let f={scrollLeft:0,scrollTop:0};const c=K(0);if(i||!i&&!o)if((G(t)!=="body"||ae(r))&&(f=ve(t)),i){const l=$(t,!0,o,t);c.x=l.x+t.clientLeft,c.y=l.y+t.clientTop}else r&&(c.x=ht(r));return{x:s.left+f.scrollLeft-c.x,y:s.top+f.scrollTop-c.y,width:s.width,height:s.height}}function Ke(e,t){return!z(e)||N(e).position==="fixed"?null:t?t(e):e.offsetParent}function yt(e,t){const n=F(e);if(!z(e))return n;let i=Ke(e,t);for(;i&&rn(i)&&N(i).position==="static";)i=Ke(i,t);return i&&(G(i)==="html"||G(i)==="body"&&N(i).position==="static"&&!_e(i))?n:i||sn(e)||n}const wn=async function(e){let{reference:t,floating:n,strategy:i}=e;const r=this.getOffsetParent||yt,o=this.getDimensions;return{reference:yn(t,await r(n),i),floating:{x:0,y:0,...await o(n)}}};function bn(e){return N(e).direction==="rtl"}const wt={convertOffsetParentRelativeRectToViewportRelativeRect:fn,getDocumentElement:q,getClippingRect:hn,getOffsetParent:yt,getElementRects:wn,getClientRects:an,getDimensions:pn,getScale:te,isElement:X,isRTL:bn};function vn(e,t){let n=null,i;const r=q(e);function o(){clearTimeout(i),n&&n.disconnect(),n=null}function s(f,c){f===void 0&&(f=!1),c===void 0&&(c=1),o();const{left:l,top:d,width:u,height:g}=e.getBoundingClientRect();if(f||t(),!u||!g)return;const a=de(d),p=de(r.clientWidth-(l+u)),h=de(r.clientHeight-(d+g)),x=de(l),b={rootMargin:-a+"px "+-p+"px "+-h+"px "+-x+"px",threshold:_(0,I(1,c))||1};let y=!0;function E(w){const P=w[0].intersectionRatio;if(P!==c){if(!y)return s();P?s(!1,P):i=setTimeout(()=>{s(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(E,{...b,root:r.ownerDocument})}catch{n=new IntersectionObserver(E,b)}n.observe(e)}return s(!0),o}function Pe(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:f=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=De(e),d=r||o?[...l?fe(l):[],...fe(t)]:[];d.forEach(v=>{r&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const u=l&&f?vn(l,n):null;let g=-1,a=null;s&&(a=new ResizeObserver(v=>{let[b]=v;b&&b.target===l&&a&&(a.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{a&&a.observe(t)})),n()}),l&&!c&&a.observe(l),a.observe(t));let p,h=c?$(e):null;c&&x();function x(){const v=$(e);h&&(v.x!==h.x||v.y!==h.y||v.width!==h.width||v.height!==h.height)&&n(),h=v,p=requestAnimationFrame(x)}return n(),()=>{d.forEach(v=>{r&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),u&&u(),a&&a.disconnect(),a=null,c&&cancelAnimationFrame(p)}}const bt=(e,t,n)=>{const i=new Map,r={platform:wt,...n},o={...r.platform,_c:i};return Kt(e,t,{...r,platform:o})},xn=Object.freeze(Object.defineProperty({__proto__:null,arrow:st,autoPlacement:Qt,autoUpdate:Pe,computePosition:bt,detectOverflow:Z,flip:ct,getOverflowAncestors:fe,hide:Zt,inline:en,limitShift:nn,offset:ft,platform:wt,shift:at,size:on},Symbol.toStringTag,{value:"Module"}));function Ge(){const e=Pt();return(t,n,i)=>{const r=e.$$.callbacks[t];if(r){const o=new CustomEvent(t,{detail:i});n.dispatchEvent(o),r.slice().forEach(s=>{s.call(e,o)})}}}const vt="node_modules/flowbite-svelte/dist/utils/Popper.svelte";function Ae(e){let t;const n={c:function(){t=$e("div"),this.h()},l:function(r){t=et(r,"DIV",{}),tt(t).forEach(J),this.h()},h:function(){nt(t,vt,155,2,5565)},m:function(r,o){ne(r,t,o),e[22](t)},p:Ot,d:function(r){r&&J(t),e[22](null)}};return re("SvelteRegisterBlock",{block:n,id:Ae.name,type:"if",source:"(155:0) {#if !referenceEl}",ctx:e}),n}function Ce(e){let t,n;const i=[{use:e[9]},{options:e[3]},{role:"tooltip"},{tabindex:e[1]?-1:void 0},e[11]];let r={$$slots:{default:[xt]},$$scope:{ctx:e}};for(let s=0;s<i.length;s+=1)r=ce(r,i[s]);t=new ot({props:r,$$inline:!0}),t.$on("focusin",function(){me(Y(e[1],e[7]))&&Y(e[1],e[7]).apply(this,arguments)}),t.$on("focusout",function(){me(Y(e[1],e[8]))&&Y(e[1],e[8]).apply(this,arguments)}),t.$on("mouseenter",function(){me(Y(e[1]&&!e[4],e[7]))&&Y(e[1]&&!e[4],e[7]).apply(this,arguments)}),t.$on("mouseleave",function(){me(Y(e[1]&&!e[4],e[8]))&&Y(e[1]&&!e[4],e[8]).apply(this,arguments)});const o={c:function(){Ht(t.$$.fragment)},l:function(f){Nt(t.$$.fragment,f)},m:function(f,c){Wt(t,f,c),n=!0},p:function(f,c){e=f;const l=c[0]&2570?It(i,[c[0]&512&&{use:e[9]},c[0]&8&&{options:e[3]},i[2],c[0]&2&&{tabindex:e[1]?-1:void 0},c[0]&2048&&jt(e[11])]):{};c[0]&8388676&&(l.$$scope={dirty:c,ctx:e}),t.$set(l)},i:function(f){n||(le(t.$$.fragment,f),n=!0)},o:function(f){he(t.$$.fragment,f),n=!1},d:function(f){Vt(t,f)}};return re("SvelteRegisterBlock",{block:o,id:Ce.name,type:"if",source:"(159:0) {#if open && referenceEl}",ctx:e}),o}function Oe(e){let t,n,i;const r={c:function(){t=$e("div"),this.h()},l:function(s){t=et(s,"DIV",{class:!0}),tt(t).forEach(J),this.h()},h:function(){Ve(t,"class",e[6]),nt(t,vt,161,15,6008)},m:function(s,f){ne(s,t,f),n||(i=Tt(e[10].call(null,t)),n=!0)},p:function(s,f){f[0]&64&&Ve(t,"class",s[6])},d:function(s){s&&J(t),n=!1,i()}};return re("SvelteRegisterBlock",{block:r,id:Oe.name,type:"if",source:"(162:4) {#if arrow}",ctx:e}),r}function xt(e){let t,n,i;const r=e[21].default,o=Rt(r,e,e[23],null);let s=e[2]&&Oe(e);const f={c:function(){o&&o.c(),t=Qe(),s&&s.c(),n=ge()},l:function(l){o&&o.l(l),t=Ze(l),s&&s.l(l),n=ge()},m:function(l,d){o&&o.m(l,d),ne(l,t,d),s&&s.m(l,d),ne(l,n,d),i=!0},p:function(l,d){o&&o.p&&(!i||d[0]&8388608)&&kt(o,r,l,l[23],i?Lt(r,l[23],d,null):St(l[23]),null),l[2]?s?s.p(l,d):(s=Oe(l),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:function(l){i||(le(o,l),i=!0)},o:function(l){he(o,l),i=!1},d:function(l){l&&(J(t),J(n)),o&&o.d(l),s&&s.d(l)}};return re("SvelteRegisterBlock",{block:f,id:xt.name,type:"slot",source:'(160:2) <Frame use={init} options={referenceEl} role=\\"tooltip\\" tabindex={activeContent ? -1 : undefined} on:focusin={optional(activeContent, showHandler)} on:focusout={optional(activeContent, hideHandler)} on:mouseenter={optional(activeContent && !clickable, showHandler)} on:mouseleave={optional(activeContent && !clickable, hideHandler)} {...$$restProps}>',ctx:e}),f}function Re(e){let t,n,i,r=!e[3]&&Ae(e),o=e[0]&&e[3]&&Ce(e);const s={c:function(){r&&r.c(),t=Qe(),o&&o.c(),n=ge()},l:function(c){r&&r.l(c),t=Ze(c),o&&o.l(c),n=ge()},m:function(c,l){r&&r.m(c,l),ne(c,t,l),o&&o.m(c,l),ne(c,n,l),i=!0},p:function(c,l){c[3]?r&&(r.d(1),r=null):r?r.p(c,l):(r=Ae(c),r.c(),r.m(t.parentNode,t)),c[0]&&c[3]?o?(o.p(c,l),l[0]&9&&le(o,1)):(o=Ce(c),o.c(),le(o,1),o.m(n.parentNode,n)):o&&(Mt(),he(o,1,1,()=>{o=null}),Ft())},i:function(c){i||(le(o),i=!0)},o:function(c){he(o),i=!1},d:function(c){c&&(J(t),J(n)),r&&r.d(c),o&&o.d(c)}};return re("SvelteRegisterBlock",{block:s,id:Re.name,type:"component",source:"",ctx:e}),s}function Y(e,t){return e?t:()=>{}}function En(e,t,n){const i=["activeContent","arrow","offset","placement","trigger","triggeredBy","reference","strategy","open","yOnly"];let r=He(t,i),{$$slots:o={},$$scope:s}=t;Dt("Popper",o,["default"]);let{activeContent:f=!1}=t,{arrow:c=!0}=t,{offset:l=8}=t,{placement:d="top"}=t,{trigger:u="hover"}=t,{triggeredBy:g=void 0}=t,{reference:a=void 0}=t,{strategy:p="absolute"}=t,{open:h=!1}=t,{yOnly:x=!1}=t;const v=Ge();let b,y,E,w,P,C=[],L=!1;const T=()=>(L=!0,setTimeout(()=>L=!1,250)),A=m=>{y===void 0&&console.error("trigger undefined"),!a&&C.includes(m.target)&&y!==m.target&&(n(3,y=m.target),T()),b&&m.type==="focusin"&&!h&&T(),n(0,h=b&&m.type==="click"&&!L?!h:!0)},R=m=>m.matches(":hover"),D=m=>m.contains(document.activeElement),O=m=>m!=null?`${m}px`:"",k=m=>{f?setTimeout(()=>{const M=[y,E,...C].filter(Boolean);m.type==="mouseleave"&&M.some(R)||m.type==="focusout"&&M.some(D)||n(0,h=!1)},100):n(0,h=!1)};let S;const B={left:"right",right:"left",bottom:"top",top:"bottom"};let U;function se(){bt(y,E,{placement:d,strategy:p,middleware:U}).then(({x:m,y:M,middlewareData:W,placement:Q,strategy:xe})=>{E.style.position=xe,E.style.left=x?"0":O(m),E.style.top=O(M),W.arrow&&w instanceof HTMLDivElement&&(n(19,w.style.left=O(W.arrow.x),w),n(19,w.style.top=O(W.arrow.y),w),n(20,S=B[Q.split("-")[0]]),n(19,w.style[S]=O(-w.offsetWidth/2-(t.border?1:0)),w))})}function Me(m,M){E=m;let W=Pe(M,E,se);return{update(Q){W(),W=Pe(Q,E,se)},destroy(){W()}}}Ne(()=>{const m=[["focusin",A,!0],["focusout",k,!0],["click",A,b],["mouseenter",A,!b],["mouseleave",k,!b]];return g?C=[...document.querySelectorAll(g)]:C=P.previousElementSibling?[P.previousElementSibling]:[],C.length||console.error("No triggers found."),C.forEach(M=>{M.tabIndex<0&&(M.tabIndex=0);for(const[W,Q,xe]of m)xe&&M.addEventListener(W,Q)}),a?(n(3,y=document.querySelector(a)??document.body),y===document.body?console.error(`Popup reference not found: '${a}'`):(y.addEventListener("focusout",k),b||y.addEventListener("mouseleave",k))):n(3,y=C[0]),()=>{C.forEach(M=>{if(M)for(const[W,Q]of m)M.removeEventListener(W,Q)}),y&&(y.addEventListener("focusout",k),y.addEventListener("mouseleave",k))}});let ue;function Fe(m){return n(19,w=m),{destroy(){n(19,w=null)}}}function Et(m){Ct[m?"unshift":"push"](()=>{P=m,n(5,P)})}return e.$$set=m=>{n(35,t=ce(ce({},t),We(m))),n(11,r=He(t,i)),"activeContent"in m&&n(1,f=m.activeContent),"arrow"in m&&n(2,c=m.arrow),"offset"in m&&n(12,l=m.offset),"placement"in m&&n(13,d=m.placement),"trigger"in m&&n(14,u=m.trigger),"triggeredBy"in m&&n(15,g=m.triggeredBy),"reference"in m&&n(16,a=m.reference),"strategy"in m&&n(17,p=m.strategy),"open"in m&&n(0,h=m.open),"yOnly"in m&&n(18,x=m.yOnly),"$$scope"in m&&n(23,s=m.$$scope)},e.$capture_state=()=>({dom:xn,onMount:Ne,twJoin:Ie,Frame:ot,createEventDispatcher:Ge,activeContent:f,arrow:c,offset:l,placement:d,trigger:u,triggeredBy:g,reference:a,strategy:p,open:h,yOnly:x,dispatch:v,clickable:b,referenceEl:y,floatingEl:E,arrowEl:w,contentEl:P,triggerEls:C,_blocked:L,block:T,showHandler:A,hasHover:R,hasFocus:D,px:O,hideHandler:k,arrowSide:S,oppositeSideMap:B,middleware:U,updatePosition:se,init:Me,optional:Y,arrowClass:ue,initArrow:Fe}),e.$inject_state=m=>{n(35,t=ce(ce({},t),m)),"activeContent"in t&&n(1,f=m.activeContent),"arrow"in t&&n(2,c=m.arrow),"offset"in t&&n(12,l=m.offset),"placement"in t&&n(13,d=m.placement),"trigger"in t&&n(14,u=m.trigger),"triggeredBy"in t&&n(15,g=m.triggeredBy),"reference"in t&&n(16,a=m.reference),"strategy"in t&&n(17,p=m.strategy),"open"in t&&n(0,h=m.open),"yOnly"in t&&n(18,x=m.yOnly),"clickable"in t&&n(4,b=m.clickable),"referenceEl"in t&&n(3,y=m.referenceEl),"floatingEl"in t&&(E=m.floatingEl),"arrowEl"in t&&n(19,w=m.arrowEl),"contentEl"in t&&n(5,P=m.contentEl),"triggerEls"in t&&(C=m.triggerEls),"_blocked"in t&&(L=m._blocked),"arrowSide"in t&&n(20,S=m.arrowSide),"middleware"in t&&(U=m.middleware),"arrowClass"in t&&n(6,ue=m.arrowClass)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty[0]&16384&&n(4,b=u==="click"),e.$$.dirty[0]&8200&&d&&(n(3,y),n(13,d)),e.$$.dirty[0]&9&&v("show",y,h),e.$$.dirty[0]&528384&&(U=[ct(),at(),ft(+l),w&&st({element:w,padding:10})]),n(6,ue=Ie("absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit",t.border&&S==="bottom"&&"border-b border-r",t.border&&S==="top"&&"border-t border-l ",t.border&&S==="right"&&"border-t border-r ",t.border&&S==="left"&&"border-b border-l "))},t=We(t),[h,f,c,y,b,P,ue,A,k,Me,Fe,r,l,d,u,g,a,p,x,w,S,o,Et,s]}class Rn extends _t{constructor(t){super(t),Bt(this,t,En,Re,At,{activeContent:1,arrow:2,offset:12,placement:13,trigger:14,triggeredBy:15,reference:16,strategy:17,open:0,yOnly:18},null,[-1,-1]),re("SvelteRegisterComponent",{component:this,tagName:"Popper",options:t,id:Re.name})}get activeContent(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set activeContent(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get arrow(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set arrow(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get offset(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set offset(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get placement(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set placement(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get trigger(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set trigger(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get triggeredBy(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set triggeredBy(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get reference(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set reference(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get strategy(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set strategy(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get open(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set open(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get yOnly(){throw new Error("<Popper>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set yOnly(t){throw new Error("<Popper>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Rn as P};
