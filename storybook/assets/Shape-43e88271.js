import{j as l}from"./jsx-runtime-94f6e698.js";import{r as e}from"./index-8db94870.js";import{c as p}from"./clsx.m-1229b3e0.js";const u="_shape_9oh1u_2",r={shape:u,"is-circle":"_is-circle_9oh1u_15","is-triangle":"_is-triangle_9oh1u_18","is-dead":"_is-dead_9oh1u_21","is-active":"_is-active_9oh1u_24"},c=({id:s,isActive:a})=>{const[t,i]=e.useState(!1),o=e.useRef(null);e.useEffect(()=>{i(a)},[a]);const n=()=>{i(!t)};return l.jsx("td",{ref:o,id:s,className:p(r.shape,t&&r["is-active"]),onClick:n})};try{c.displayName="Shape",c.__docgenInfo={description:"",displayName:"Shape",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}}}catch{}export{c as S};
//# sourceMappingURL=Shape-43e88271.js.map
