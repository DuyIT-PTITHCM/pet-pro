import{g as a}from"./cookieUtils.9487ed92.js";import{a as n}from"./axios.82afda87.js";const e=n.create({baseURL:"http://103.142.26.42/api/v1.0/",headers:{"content-type":"application/json",Authorization:"Bearer "+a("access_token")}}),p="auth",c={post(t){return e.post(`${p}/register`,t)}},i="categories",u={async get(){return await e.get(`${i}`)}},o="user-management",y={async get(t){return await e.get(`${o}`,{params:t})},async getUser(t){return e.get(`${o}/${t}`)},async put(t,r){return await e.put(`${o}/${t}`,r)},async delete(t){return e.delete(`${o}/${t}`)}},s="products",$={async get(t){return await e.get(`${s}`,{params:t})},async getUser(t){return e.get(`${s}/${t}`)},async put(t,r){return await e.put(`${s}/${t}`,r)},async delete(t){return e.delete(`${s}/${t}`)},async post(t){return e.post(`${s}`,t)}},g={authRepository:c,userRepository:y,categoryRepository:u,productRepository:$},m={get:t=>g[t]};export{m as R};
