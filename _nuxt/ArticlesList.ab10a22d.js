import v from"./ArticlesListItem.43a59f8c.js";import w from"./ProseA.b8b6421e.js";import g from"./ProseCodeInline.93fce56f.js";import{u as k}from"./asyncData.bf62e749.js";import{d as A,L as I,M as L,I as c,b as a,c as r,e as o,g as i,F as S,N as b,D as e,w as d,p as C,j as B,s as N,O as V,K as D,l as F}from"./entry.1d7d27d2.js";import"./date.824a539b.js";const P=t=>(C("data-v-8d31ba38"),t=t(),B(),t),T={key:0,class:"articles-list"},j={class:"featured"},q={class:"layout"},E={key:1,class:"tour"},K=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),M=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,_;const u=t,{data:m}=([s,_]=I(async()=>k("articles",async()=>await N(V(u.path)).sort({date:-1}).find())),s=await s,_(),s),n=L(()=>m.value||[]);return(O,Y)=>{var p;const l=v,f=w,h=g;return(p=c(n))!=null&&p.length?(a(),r("div",T,[o("div",j,[i(l,{article:c(n)[0],featured:!0},null,8,["article"])]),o("div",q,[(a(!0),r(S,null,b(c(n).slice(1),(y,x)=>(a(),D(l,{key:x,article:y},null,8,["article"]))),128))])])):(a(),r("div",E,[K,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}});const U=F(M,[["__scopeId","data-v-8d31ba38"]]);export{U as default};
