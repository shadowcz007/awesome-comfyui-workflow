import{u as M,f as se,g as te,h as U,i as ae,P as le,t as re,j as ue,k as b,l as k,m as ie,n as Y,p as t,q as oe,R as O,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as Ee,D as me,E as ge,F as Ae,G as T,H as $,I as fe,J as C,K as Be}from"./app-DUqFqV2o.js";const He=["/","/posts/mission.html","/posts/discovery/AI%E5%A6%82%E4%BD%95%E6%94%B9%E5%8F%98%E4%BA%A7%E5%93%81%E7%BB%8F%E7%90%86%E7%9A%84%E5%B7%A5%E4%BD%9C.html","/posts/discovery/comfyui%20mixlab%20nodes%20%E6%8F%92%E4%BB%B6%20%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%94%9F%E6%88%90APP%20%E9%80%8F%E6%98%8Epng%E5%9B%BE%E5%83%8F%20%E5%A4%9A%E7%A7%8D%E5%8A%9F%E8%83%BD.html","/posts/discovery/Comfyui%20Realtime%20LCM%20with%20Photoshop.html","/posts/discovery/%E8%81%8A%E8%81%8AMixlab%20Node%EF%BC%9AAI%E6%97%B6%E4%BB%A3%E5%A6%82%E4%BD%95%E9%87%8D%E5%A1%91%E5%86%85%E5%AE%B9%E5%88%9B%E4%BD%9C%E4%BA%A7%E5%93%81%E4%B8%8E%E7%A4%BE%E5%8C%BA%E7%94%9F%E6%80%81.html","/posts/insight/","/posts/mixlab_nodes/","/posts/task/","/posts/tutorial/advanced/","/posts/tutorial/core_nodes/","/posts/tutorial/custom_nodes/","/posts/tutorial/interface/","/posts/tutorial/start/","/posts/tutorial/for_testing/","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",m=M(Re,[]),ke=()=>{const{queryHistoryCount:a}=C,l=a>0;return{enabled:l,queryHistory:m,addQueryHistory:r=>{l&&(m.value=Array.from(new Set([r,...m.value.slice(0,a-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},L=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),Ce="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:j}=C,g=M(Ce,[]),xe=()=>{const a=j>0;return{enabled:a,resultHistory:g,addResultHistory:l=>{if(a){const r={link:L(l),display:l.display};"header"in l&&(r.header=l.header),g.value=[r,...g.value.slice(0,j-1)]}},removeResultHistory:l=>{g.value=[...g.value.slice(0,l),...g.value.slice(l+1)]}}},De=a=>{const l=pe(),r=U(),x=de(),i=b(0),B=k(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:D}=Ee(),A=fe(c=>{const f=c.join(" "),{searchFilter:w=d=>d,splitWord:Q,suggestionsFilter:P,...E}=l.value;f?(i.value+=1,y(c.join(" "),r.value,E).then(d=>w(d,f,r.value,x.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},C.searchDelay-C.suggestDelay);Y([a,r],([c])=>A(c),{immediate:!0}),me(()=>{D()})}),{isSearching:B,results:h}};var Qe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),x=U(),i=ae(le),{enabled:B,addQueryHistory:h,queryHistory:y,removeQueryHistory:D}=ke(),{enabled:A,resultHistory:c,addResultHistory:f,removeResultHistory:w}=xe(),Q=B||A,P=re(a,"queries"),{results:E,isSearching:d}=De(P),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),_=k(()=>Q&&(y.value.length>0||c.value.length>0)),F=k(()=>E.value.length>0),q=k(()=>E.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:E.value.length-1,p.value=q.value.contents.length-1},K=()=>{v.value=v.value<E.value.length-1?v.value+1:0,p.value=0},N=()=>{p.value<q.value.contents.length-1?p.value+=1:K()},V=()=>{p.value>0?p.value-=1:J()},S=e=>e.map(s=>Be(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ge[e.index]||"$content",[o,R=""]=Ae(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",S([o,...n,R])))}return e.display.map(s=>t("div",S(s)))},H=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>B?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(s)}})]))])):null,Z=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(O,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{H()}},()=>[t(T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>S(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:$,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(F.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=q.value.contents[p.value];h(a.queries.join(" ")),f(s),r.push(L(s)),H()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),H())}}}}),Y([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!F.value:!_.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):F.value?t("ul",{class:"search-pro-result-list"},E.value.map(({title:e,contents:s},o)=>{const R=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const I=R&&p.value===ee;return t(O,{to:L(n),class:["search-pro-result-item",{active:I,"aria-selected":I}],onClick:()=>{h(a.queries.join(" ")),f(n),H()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:Q?_.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Qe as default};
