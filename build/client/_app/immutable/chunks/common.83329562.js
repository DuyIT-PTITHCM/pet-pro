import{o as l}from"./scheduler.e174163e.js";const i=function(e){return e?JSON.parse(e):[]};function u(e){const a=new Date(e),s=a.getDate().toString().padStart(2,"0"),o=(a.getMonth()+1).toString().padStart(2,"0"),t=a.getFullYear();return`${s}/${o}/${t}`}async function g(e,a=!1){return l(()=>{const s=document.getElementById("postcontent");s?s.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((t,r)=>{const c=t.tagName.toLowerCase();let n="heading"+r;switch(c){case"h1":t.classList.add("text-3xl");break;case"h2":t.classList.add("text-xl");break;case"h3":t.classList.add("text-lg");break;default:t.classList.add("text-base")}t.setAttribute("id",n),e.push({id:n,value:t.textContent})}):console.log("Can't read heading")}),e}export{i as c,u as f,g};