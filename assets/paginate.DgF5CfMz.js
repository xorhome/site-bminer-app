import{r as a,a$ as e,aQ as l,b0 as o,S as u,T as t}from"./index-Cq9VOZ8T.js";function n(n,v=null,i=15){const r=a(1),s=a(i),m=a("more"),d=a(!1),c=a(0);return e((()=>{"nomore"!==m.value&&"function"==typeof n&&n()})),l((()=>{"function"==typeof v?v():n(),setTimeout((()=>{o()}),1e3)})),{page:r,limit:s,loaded:d,loadStatus:m,totalCount:c,resetPaginate:()=>{d.value=!1,r.value=1,m.value="more"},paginate:(a,e=!0,l=null)=>new Promise(((o,n)=>{"nomore"===m.value||"loading"===m.value?o([]):(m.value="loading",e&&u(),a(r.value,s.value).then((a=>{l?l(a):m.value=(null==a?void 0:a.current_page)<(null==a?void 0:a.last_page)?"more":"nomore",r.value++,c.value=+(null==a?void 0:a.count),o(a.data)})).catch((a=>{m.value="nomore",n(a)})).finally((()=>{d.value=!0,e&&t()})))})),setLoadStatus:a=>{m.value=a}}}export{n as u};
