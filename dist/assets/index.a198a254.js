import{u as f,j as l,G as g,a as I,L as p,b as L,c as b,d as v,R as j,e as u,Q as x,w as D,f as w,g as N,h as R,B as M}from"./vendor.89a08642.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};B();function A(n){const t=Math.round((+new Date-new Date(n))/1e3),o=60,a=o*60,s=a*24;return t<30?"just now":t<o?t+" seconds ago":t<2*o?"a minute ago":t<a?Math.floor(t/o)+" minutes ago":Math.floor(t/a)==1?"1 hour ago":t<s?Math.floor(t/a)+" hours ago":t<s*2?"yesterday":t+" days ago"}const y=n=>f(["users",n],()=>{fetch(`api/users/${n}`).then(o=>o.json())}),e=l.exports.jsx,i=l.exports.jsxs,O=l.exports.Fragment;function P({title:n,number:t,assignee:o,commentCount:a,createdBy:s,createdDate:r,labels:c,status:d}){y(o);const h=y(s);return i("li",{children:[e("div",{children:d==="done"||d==="cancelled"?e(g,{style:{color:"red"}}):e(I,{style:{color:"green"}})}),i("div",{className:"issue-content",children:[i("span",{children:[e(p,{to:`/issue/${t}`,children:n}),c.map(m=>e("span",{className:"label red",children:m},m))]}),i("small",{children:["#",t," opened ",A(r)," ",h.isSuccess?`by ${h.data.name}`:""]})]}),o?e("div",{children:o}):null,e("span",{className:"comment-count",children:a>0?i(O,{children:[e(L,{}),a]}):null})]})}function C(){const n=f(["issues"],()=>fetch("/api/issues").then(t=>t.json()));return console.log(n.data),i("div",{children:[e("h2",{children:"Issues List"}),n.isLoading?e("p",{children:"Loading..."}):e("ul",{className:"issues-list",children:n.data.map(t=>e(P,{title:t.title,number:t.number,assignee:t.assignee,commentCount:t.comments.length,createdBy:t.createdBy,createdDate:t.createdDate,labels:t.labels,status:t.status},t.id))})]})}function Q(){return e("h3",{children:"Labels"})}function k(){return e("div",{children:i("main",{children:[i("section",{children:[e("h1",{children:"Issues"}),e(C,{})]}),e("aside",{children:e(Q,{})})]})})}function q(){const{number:n}=b();return i("h1",{children:["Issue ",n]})}function G(){return e(q,{})}function F(){return e("h2",{children:"Add Issue"})}function S(){const n=v({path:"/",end:!0});return i("div",{className:"App",children:[n?e("span",{children:"\xA0"}):e(p,{to:"/",children:"Back to Issues List"}),e("h1",{children:"Issue Tracker"}),i(j,{children:[e(u,{path:"/",element:e(k,{})}),e(u,{path:"/add",element:e(F,{})}),e(u,{path:"/issue/:number",element:e(G,{})})]})]})}const U=new x;new Promise(n=>setTimeout(n,100)).then(()=>D.start({quiet:!0,onUnhandledRequest:"bypass"})).then(()=>{w.render(e(N.StrictMode,{children:e(R,{client:U,children:e(M,{children:e("div",{className:"container",children:e(S,{})})})})}),document.getElementById("root"))});