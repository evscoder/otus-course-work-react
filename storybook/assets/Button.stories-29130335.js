import{j as e}from"./jsx-runtime-94f6e698.js";import{D as m}from"./app-74eb2f46.js";import{c as _}from"./clsx.m-1229b3e0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const b="_button_1hhk7_1",r={button:b,"button--secondary":"_button--secondary_1hhk7_20","button--purple":"_button--purple_1hhk7_23","button--pink":"_button--pink_1hhk7_26","button--blue":"_button--blue_1hhk7_29","button--green":"_button--green_1hhk7_32","button--yellow":"_button--yellow_1hhk7_36","button--white":"_button--white_1hhk7_40"},t=({size:n,id:a,type:u,children:p,color:s,...l})=>e.jsx("button",{id:a,"data-testid":a,className:_(r.button,u&&r[`button--${u}`],s&&r[`button--${s}`]),title:l.title,disabled:l.disabled,onClick:l.onClick,"data-size":n&&n,children:p});try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"Colors"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"string"}}}}}catch{}const h=({color:n})=>e.jsxs(e.Fragment,{children:[e.jsx(t,{color:n&&"purple",children:"Purple Button"})," ",e.jsx(t,{color:"pink",children:"Pink Button"})," ",e.jsx(t,{color:"blue",children:"Blue Button"})," ",e.jsx(t,{color:"green",children:"Green Button"})," ",e.jsx(t,{color:"yellow",children:"Yellow Button"})," ",e.jsx(t,{color:"white",children:"White Button"})]}),B={title:"Example/Button",component:h,decorators:[m],tags:["autodocs"],parameters:{},argTypes:{}},o={args:{color:"Purple"}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'Purple'
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["ButtonCollection"];export{o as ButtonCollection,j as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories-29130335.js.map
