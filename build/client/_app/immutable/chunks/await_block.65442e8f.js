import{$ as o,a0 as p,a1 as a,a2 as m}from"./scheduler.12c735be.js";import{h as v,t as g,c as x,b as w}from"./index.c6264268.js";function $(e,t){const h=t.token={};function c(r,s,d,k){if(t.token!==h)return;t.resolved=k;let u=t.ctx;d!==void 0&&(u=u.slice(),u[d]=k);const l=r&&(t.current=r)(u);let b=!1;t.block&&(t.blocks?t.blocks.forEach((n,_)=>{_!==s&&n&&(v(),g(n,1,1,()=>{t.blocks[_]===n&&(t.blocks[_]=null)}),x())}):t.block.d(1),l.c(),w(l,1),l.m(t.mount(),t.anchor),b=!0),t.block=l,t.blocks&&(t.blocks[s]=l),b&&m()}if(o(e)){const r=p();if(e.then(s=>{a(r),c(t.then,1,t.value,s),a(null)},s=>{if(a(r),c(t.catch,2,t.error,s),a(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function j(e,t,h){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,h)}export{$ as h,j as u};
