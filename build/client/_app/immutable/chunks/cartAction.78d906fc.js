import{H as d}from"./Const.4ee2e7e1.js";import{a as o,c as y}from"./cart.c0b90bce.js";import{t as u}from"./toastError.0df01849.js";import{r as m,s as i,g as c}from"./cookieUtils.9487ed92.js";async function N(t){let s=[],n=await JSON.parse(t.images),r={id:t.id,name:t.productName,origin:t.origin,image:d+n[0],url:t.slug,price:t.price,quantity:1,isSelect:!1};o.subscribe(e=>{e&&(s=JSON.parse(e))});var a=s.find(e=>e.id==r.id);a?a.quantity<20?(a.quantity+=1,s.map(e=>e.id===(a==null?void 0:a.id)?a:e),u.set([{message:"Add to cart success",type:"success"}])):u.set([{message:"Quantity can not over than 20",type:"error"}]):(s.push(r),u.set([{message:"Add to cart success",type:"success"}]));let f=s.reduce(function(e,l){return e+l.quantity},0);const g=JSON.stringify(s);m("cart"),i("cart",g),o.set(c("cart")),i("cartQuantity",f),y.set(c("cartQuantity"))}async function O(t){const s=JSON.stringify(t);m("cart"),i("cart",s),o.set(c("cart"));let n=t.reduce(function(r,a){return r+a.quantity},0);i("cartQuantity",n),y.set(c("cartQuantity"))}export{N as a,O as u};