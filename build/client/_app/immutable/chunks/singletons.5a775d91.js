import{w as u}from"./index.0eb19cf3.js";var h;const y=((h=globalThis.__sveltekit_ljyvzx)==null?void 0:h.base)??"";var b;(b=globalThis.__sveltekit_ljyvzx)==null||b.assets;const R="sveltekit:snapshot",I="sveltekit:scroll",O="sveltekit:index",c={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}const d=new WeakSet,p={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function f(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return E(e,t,n),n}function E(e,t,n){n!==null&&!d.has(e)&&!p[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${p[t].map(s=>JSON.stringify(s)).join(", ")}`,e),d.add(e))}const _={...c,"":c.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function L(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!s||x(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:s,download:r}}function j(e){let t=null,n=null,s=null,a=null,r=null,l=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=f(o,"preload-code")),a===null&&(a=f(o,"preload-data")),t===null&&(t=f(o,"keepfocus")),n===null&&(n=f(o,"noscroll")),r===null&&(r=f(o,"reload")),l===null&&(l=f(o,"replacestate")),o=v(o);function i(w){switch(w){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:_[s??"off"],preload_data:_[a??"off"],keep_focus:i(t),noscroll:i(n),reload:i(r),replace_state:i(l)}}function g(e){const t=u(e);let n=!0;function s(){n=!0,t.update(l=>l)}function a(l){n=!1,t.set(l)}function r(l){let o;return t.subscribe(i=>{(o===void 0||n&&i!==o)&&l(o=i)})}return{notify:s,set:a,subscribe:r}}function S(){const{set:e,subscribe:t}=u(!1);return{subscribe:t,check:async()=>!1}}function x(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let k;function P(e){k=e.client}function V(e){return(...t)=>k[e](...t)}const Y={url:g({}),page:g({}),navigating:u(null),updated:S()};export{O as I,c as P,I as S,R as a,L as b,j as c,Y as d,y as e,N as f,T as g,P as h,x as i,k as j,V as k,U as s};
