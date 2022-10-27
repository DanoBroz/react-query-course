var U=Object.defineProperty,B=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var E=(n,e,s)=>e in n?U(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,p=(n,e)=>{for(var s in e||(e={}))J.call(e,s)&&E(n,s,e[s]);if(O)for(var s of O(e))H.call(e,s)&&E(n,s,e[s]);return n},y=(n,e)=>B(n,G(e));import{u as v,j as w,a as b,G as A,b as F,L as j,c as V,F as K,r as f,d as C,e as M,f as W,g as z,h as X,i as Y,k as Z,R as _,l as N,Q as ee,w as te,m as se,n as ne,o as ae,B as re,p as ie}from"./vendor.779d820e.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};oe();function $(n){const e=Math.round((+new Date-new Date(n))/1e3),s=60,a=s*60,o=a*24;return e<30?"just now":e<s?e+" seconds ago":e<2*s?"a minute ago":e<a?Math.floor(e/s)+" minutes ago":Math.floor(e/a)==1?"1 hour ago":e<o?Math.floor(e/a)+" hours ago":e<o*2?"yesterday":e+" days ago"}const S=n=>v(["users",n],({signal:s})=>fetch(`api/users/${n}`,{signal:s}).then(a=>a.json()),{staleTime:1e3*60*5}),ce=[{id:"1",name:"bug",color:"red"},{id:"2",name:"feature",color:"blue"},{id:"3",name:"enhancement",color:"cyan"}],I=()=>v(["labels"],({signal:e})=>fetch("/api/labels",{signal:e}).then(s=>s.json()),{staleTime:1e3*60*60,placeholderData:ce}),t=w.exports.jsx,c=w.exports.jsxs,L=w.exports.Fragment;function le({label:n}){const e=I();if(e.isLoading)return null;const s=e.data.find(a=>a.id===n);return s?t("span",{className:`label ${s.color}`,children:s.name},n):null}async function P(n,e){const s=await fetch(n,e);if(s.status===200){const a=await s.json();if(a.error)throw new Error(a.error);return a}throw new Error(`Error ${s.status}: ${s.statusText}`)}function T({title:n,number:e,assignee:s,commentCount:a,createdBy:o,createdDate:r,labels:u,status:h}){const l=S(s),d=S(o),i=b();return c("li",{onMouseEnter:()=>{i.prefetchQuery(["issues",e.toString()],()=>P(`/api/issues/${e}`)),i.prefetchInfiniteQuery(["issues",e.toString(),"comments"],()=>P(`/api/issues/${e}/comments?page=1`))},children:[t("div",{children:h==="done"||h==="cancelled"?t(A,{style:{color:"red"}}):t(F,{style:{color:"green"}})}),c("div",{className:"issue-content",children:[c("span",{children:[t(j,{to:`/issue/${e}`,children:n}),u.map(m=>t(le,{label:m},m))]}),c("small",{children:["#",e," opened ",$(r)," ",d.isSuccess?`by ${d.data.name}`:""]})]}),s?t("img",{src:l.isSuccess?l.data.profilePictureUrl:"",className:"assigned-to",alt:`assigned-to ${l.isSuccess?l.data.name:""}`}):null,t("span",{className:"comment-count",children:a>0?c(L,{children:[t(V,{}),a]}):null})]})}function k(){return t(K,{className:"loader"})}function de({labels:n,status:e,pageNum:s,setPageNum:a}){var d;const o=b(),r=v(["issues",{labels:n,status:e,pageNum:s}],async({signal:i})=>{const m=e?`&status=${e}`:"",g=n.map(D=>`labels[]=${D}`).join("&"),x=s?`&page=${s}`:"",Q=await P(`/api/issues?${g}${m}${x}`,{signal:i});return Q.forEach(D=>{o.setQueryData(["issues",D.number.toString()],D)}),Q},{keepPreviousData:!0}),[u,h]=f.exports.useState(""),l=v(["issues","search",u],({signal:i})=>fetch(`/api/search/issues?q=${u}`,{signal:i}).then(m=>m.json()),{enabled:!!u});return c("div",{children:[c("form",{onSubmit:i=>{i.preventDefault(),h(i.target.elements.search.value)},children:[t("label",{htmlFor:"search",children:"Search Issues"}),t("input",{type:"search",placeholder:"Search",name:"search",id:"search",onChange:i=>{i.target.value.length===0&&h("")}})]}),c("h2",{children:["Issues List ",r.isFetching?t(k,{}):null]}),r.isLoading?t("p",{children:"Loading..."}):r.isError?t("p",{children:r.error.message}):l.fetchStatus==="idle"&&l.isLoading?c(L,{children:[t("ul",{className:"issues-list",children:r.data.map(i=>t(T,{title:i.title,number:i.number,assignee:i.assignee,commentCount:i.comments.length,createdBy:i.createdBy,createdDate:i.createdDate,labels:i.labels,status:i.status},i.id))}),c("div",{className:"pagination",children:[t("button",{onClick:()=>s-1>0?a(s-1):a(1),disabled:s===1,children:"Previous"}),c("p",{children:["Page ",s," ",r.isFetching?"...":""]}),t("button",{disabled:((d=r.data)==null?void 0:d.length)===0||r.isPreviousData,onClick:()=>{var i;((i=r.data)==null?void 0:i.length)!==0&&a(s+1)},children:"Next"})]})]}):t(L,{children:l.isLoading?t("p",{children:"Loading..."}):c(L,{children:[c("p",{children:[l.data.count," Results"]}),t("ul",{className:"issues-list",children:l.data.items.map(i=>t(T,{title:i.title,number:i.number,assignee:i.assignee,commentCount:i.comments.length,createdBy:i.createdBy,createdDate:i.createdDate,labels:i.labels,status:i.status},i.id))})]})})]})}function ue({selected:n,toggle:e}){const s=I();return c("div",{className:"labels",children:[t("h3",{children:"Labels"}),s.isLoading?t("p",{children:"Loading..."}):t("ul",{children:s.data.map(a=>t("li",{children:t("button",{onClick:()=>e(a.id),className:`label ${n.includes(a.id)?"selected":""} ${a.color}`,children:a.name})},a.id))})]})}const R=[{id:"backlog",label:"Backlog"},{id:"todo",label:"To-do"},{id:"inProgress",label:"In Progress"},{id:"done",label:"Done"},{id:"canceled",label:"Cancelled"}];function q({value:n,onChange:e,noEmptyOption:s=!1}){return c("select",{value:n,onChange:e,className:"status-select",children:[s?null:t("option",{value:"",children:"Select status to filter"}),R.map(a=>t("option",{value:a.id,children:a.label},a.id))]})}function he(){const[n,e]=f.exports.useState([]),[s,a]=f.exports.useState(""),[o,r]=f.exports.useState(1);return t("div",{children:c("main",{children:[c("section",{children:[t("h1",{children:"Issues"}),t(de,{labels:n,status:s,pageNum:o,setPageNum:r})]}),c("aside",{children:[t(ue,{selected:n,toggle:u=>{e(h=>h.includes(u)?h.filter(l=>l!==u):h.concat(u)),r(1)}}),t("h3",{children:"Status"}),t(q,{value:s,onChange:u=>{a(u.target.value),r(1)}}),t("hr",{}),t(j,{className:"button",to:"/add",children:"Add Issue"})]})]})})}function me(n,e,s=0){const a=f.exports.useRef(e);f.exports.useEffect(()=>{a.current=e},[e]),f.exports.useEffect(()=>{if(!n)return;const o=()=>{let r=n===document?document.scrollingElement:n;r.scrollTop+r.clientHeight>=r.scrollHeight-s&&a.current()};return n.addEventListener("scroll",o),()=>{n.removeEventListener("scroll",o)}},[n,s])}function pe({assignee:n,issueNumber:e}){var l;const s=S(n),a=b(),[o,r]=f.exports.useState(!1),u=v(["users"],async()=>await fetch("/api/users").then(d=>d.json())),h=C(async d=>await(await fetch(`/api/issues/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({assignee:d})})).json(),{onMutate:d=>{const i=a.getQueryData(["issues",e]).assignee;return a.setQueryData(["issues",e],m=>y(p({},m),{assignee:d})),function(){a.setQueryData(["issues",e],g=>y(p({},g),{assignee:i}))}},onError:(d,i,m)=>{m()},onSettled:()=>{a.invalidateQueries(["issues",e],{exact:!0})}});return c("div",{className:"issue-options",children:[c("div",{children:[t("span",{children:"Assignment"}),s.isSuccess&&c("div",{children:[t("img",{src:s.data.profilePictureUrl}),s.data.name]})]}),t(M,{onClick:()=>!u.isLoading&&r(d=>!d)}),o&&t("div",{className:"picker-menu",children:(l=u.data)==null?void 0:l.map(d=>c("div",{onClick:()=>h.mutate(d.id),children:[t("img",{src:d.profilePictureUrl,alt:"users profile picture"}),d.name]},d.id))})]})}const fe=({title:n,number:e,status:s="todo",createdBy:a,createdDate:o,comments:r})=>{var l;const u=R.find(d=>d.id===s),h=S(a);return c("header",{children:[c("h2",{children:[n," ",c("span",{children:["#",e]})]}),c("div",{children:[c("span",{className:s==="done"||s==="cancelled"?"closed":"open",children:[s==="done"||s==="cancelled"?t(A,{}):t(F,{}),u.label]}),t("span",{className:"created-by",children:h.isLoading?"...":(l=h.data)==null?void 0:l.name})," ","opened this issue ",$(o)," - ",r.length," ","comments"]})]})};function ge({labels:n,issueNumber:e}){var h;const s=I(),[a,o]=f.exports.useState(!1),r=b(),u=C(l=>{const d=n.includes(l)?n.filter(i=>i!==l):[...n,l];return fetch(`/api/issues/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({labels:d})}).then(i=>i.json())},{onMutate:l=>{const d=r.getQueryData(["issues",e]).labels,i=d.includes(l)?d.filter(m=>m!==l):[...d,l];return r.setQueryData(["issues",e],m=>y(p({},m),{labels:i})),function(){r.setQueryData(["issues",e],g=>{const x=d.includes(l)?[...g.labels,l]:g.labels.filter(Q=>Q!==l);return y(p({},g),{labels:x})})}},onError:(l,d,i)=>{i()},onSettled:l=>{r.invalidateQueries(["issues",e],{exact:!0})}});return c("div",{className:"issue-options",children:[c("div",{children:[t("span",{children:"Labels"}),s.isLoading?null:n.map(l=>{const d=s.data.find(i=>i.id===l);return d?t("span",{className:`label ${d.color}`,children:d.name},l):null})]}),t(M,{onClick:()=>!s.isLoading&&o(l=>!l)}),a&&t("div",{className:"picker-menu labels",children:(h=s.data)==null?void 0:h.map(l=>{const d=n.includes(l.id);return c("div",{className:d?"selected":"",onClick:()=>u.mutate(l.id),children:[t("span",{className:"label-dot",style:{backgroundColor:l.color}}),l.name]},l.id)})})]})}function ye({status:n,issueNumber:e}){const s=b(),a=C(async o=>await(await fetch(`/api/issues/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({status:o})})).json(),{onMutate:o=>{const r=s.getQueryData(["issues",e]).status;return s.setQueryData(["issues",e],u=>y(p({},u),{status:o})),function(){s.setQueryData(["issues",e],h=>y(p({},h),{status:r}))}},onError:(o,r,u)=>{u()},onSettled:()=>{s.invalidateQueries(["issues",e],{exact:!0})}});return t("div",{className:"issue-options",children:c("div",{children:[t("span",{children:"Status"}),t(q,{noEmptyOption:!0,value:n,onChange:o=>a.mutate(o.target.value)})]})})}function ve(n){return v(["issues",n],async({signal:e})=>await(await fetch(`/api/issues/${n.toString()}`,{signal:e})).json())}function be(n){return z(["issues",n,"comments"],async({signal:e,pageParam:s=1})=>await(await fetch(`/api/issues/${n.toString()}/comments?page=${s}`,{signal:e})).json(),{getNextPageParam:(e,s)=>{if(e.length!==0)return s.length+1}})}function Se({comment:n,createdBy:e,createdDate:s}){var o,r;const a=S(e);return a.isLoading?t("div",{className:"comment",children:t("div",{children:t("div",{className:"comment-header",children:"Loading..."})})}):c("div",{className:"comment",children:[t("img",{src:(o=a.data)==null?void 0:o.profilePictureUrl,alt:"Commenter Avatar"}),c("div",{children:[c("div",{className:"comment-header",children:[t("span",{children:(r=a.data)==null?void 0:r.name})," commented"," ",t("span",{children:$(s)})]}),t("div",{className:"comment-body",children:n})]})]})}function Le(){var a;const{number:n}=W(),e=ve(n),s=be(n);return me(document,s.fetchNextPage,100),t("div",{className:"issue-details",children:e.isLoading?t("p",{children:"Loading issue..."}):c(L,{children:[t(fe,p({},e.data)),c("main",{children:[c("section",{children:[s.isLoading?t("p",{children:"Loading..."}):(a=s.data)==null?void 0:a.pages.map(o=>o.map(r=>t(Se,p({},r),r.id))),s.isFetchingNextPage&&t(k,{})]}),c("aside",{children:[t(ye,{status:e.data.status,issueNumber:e.data.number.toString()}),t(pe,{assignee:e.data.assignee,issueNumber:e.data.number.toString()}),t(ge,{labels:e.data.labels,issueNumber:e.data.number.toString()})]})]})]})})}function Qe(){return t(Le,{})}function De(){const n=b(),e=X(),s=C(async a=>await(await fetch("/api/issues",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)})).json(),{onSuccess:a=>{n.invalidateQueries(["issues"],{exact:!0}),n.setQueryData(["issues",a.number.toString()],a),e(`/issue/${a.number}`)}});return c("div",{className:"add-issue",children:[t("h2",{children:"Add Issue"}),c("form",{onSubmit:a=>{a.preventDefault(),!s.isLoading&&s.mutate({comment:a.target.comment.value,title:a.target.title.value})},children:[t("label",{htmlFor:"title",children:"Title"}),t("input",{type:"text",id:"title",placeholder:"Title",name:"title"}),t("label",{htmlFor:"comment",children:"Comment"}),t("textarea",{name:"comment",placeholder:"Comment",id:"comment"}),t("button",{type:"submit",disabled:s.isLoading,children:s.isLoading?"Adding issue...":"Add Issue"})]})]})}function Ce(){return Y()?t("div",{className:"fetching-indicator",children:t(k,{})}):null}function xe(){const n=Z({path:"/",end:!0});return c("div",{className:"App",children:[n?t("span",{children:"\xA0"}):t(j,{to:"/",children:"Back to Issues List"}),t("h1",{children:"Issue Tracker"}),c(_,{children:[t(N,{path:"/",element:t(he,{})}),t(N,{path:"/add",element:t(De,{})}),t(N,{path:"/issue/:number",element:t(Qe,{})})]}),t(Ce,{})]})}const we=new ee({defaultOptions:{queries:{staleTime:1e3*60}}});new Promise(n=>setTimeout(n,100)).then(()=>te.start({quiet:!0,onUnhandledRequest:"bypass"})).then(()=>{se.render(t(ne.StrictMode,{children:c(ae,{client:we,children:[t(re,{children:t("div",{className:"container",children:t(xe,{})})}),t(ie,{})]})}),document.getElementById("root"))});
