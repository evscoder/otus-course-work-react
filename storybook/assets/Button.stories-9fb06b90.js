import{j as e}from"./jsx-runtime-94f6e698.js";import{L as g,D as w}from"./app-1c194ffc.js";import{r as x}from"./index-8db94870.js";import{c as h}from"./clsx.m-1229b3e0.js";import"./_commonjsHelpers-042e6b4d.js";const B="_button_10w54_1",a={button:B,"button--secondary":"_button--secondary_10w54_24","button--purple":"_button--purple_10w54_27","button--pink":"_button--pink_10w54_30","button--blue":"_button--blue_10w54_33","button--green":"_button--green_10w54_36","button--yellow":"_button--yellow_10w54_40","button--white":"_button--white_10w54_44"},t=x.forwardRef(({link:n,size:s,id:r,type:u,children:i,color:c,classNames:f,...l},b)=>{const d=h(a.button,u&&a[`button--${u}`],c&&a[`button--${c}`],f);return(()=>{if(n){const y=l.href;return e.jsx(g,{...l,"data-testid":r,to:y,className:d,children:i})}return e.jsx("button",{...l,ref:b,id:r,"data-testid":r,className:d,"data-size":s&&s,children:i})})()});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"Colors"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"string"}}}}}catch{}const j=({color:n})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:n&&"purple",children:"Purple Button"})," ",e.jsx(t,{color:"pink",children:"Pink Button"})," ",e.jsx(t,{color:"blue",children:"Blue Button"})," ",e.jsx(t,{color:"green",children:"Green Button"})," ",e.jsx(t,{color:"yellow",children:"Yellow Button"})," ",e.jsx(t,{color:"white",children:"White Button"})]}),P={title:"Example/Button",component:j,decorators:[w],tags:["autodocs"],parameters:{},argTypes:{}},o={args:{color:"Purple"}};var p,m,_;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: 'Purple'
  }
}`,...(_=(m=o.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const v=["ButtonCollection"];export{o as ButtonCollection,v as __namedExportsOrder,P as default};
//# sourceMappingURL=Button.stories-9fb06b90.js.map
