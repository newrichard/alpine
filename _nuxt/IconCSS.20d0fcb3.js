import{d as m,ax as d,x,I as o,b as S,c as f,a2 as I,M as a,k as z}from"./entry.17c5c292.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;d(n=>({"5ab802bf":a(p)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const s=_,l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(S(),f("span",{style:I({width:a(c),height:a(c)})},null,4))}});const b=z(y,[["__scopeId","data-v-57510234"]]);export{b as default};
