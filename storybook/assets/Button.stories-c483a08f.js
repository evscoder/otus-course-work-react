import{j as t}from"./jsx-runtime-94f6e698.js";import{D as _}from"./app-74eb2f46.js";import{c as b}from"./clsx.m-1229b3e0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const g="_button_k7gq8_1",r={button:g,"button--secondary":"_button--secondary_k7gq8_17","button--purple":"_button--purple_k7gq8_20","button--pink":"_button--pink_k7gq8_23","button--blue":"_button--blue_k7gq8_26","button--green":"_button--green_k7gq8_29","button--yellow":"_button--yellow_k7gq8_33","button--white":"_button--white_k7gq8_37"},e=({id:o,type:l,title:c,disabled:d,onClick:p,children:m,color:u})=>t.jsx("button",{id:o,"data-testid":o,className:b(r.button,l&&r[`button--${l}`],u&&r[`button--${u}`]),title:c,disabled:d,onClick:p,children:m});try{e.displayName="Button",e.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"secondary"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"Colors"}}}}}catch{}const y=({color:o})=>t.jsxs(t.Fragment,{children:[t.jsx(e,{color:o&&"purple",children:"Purple Button"})," ",t.jsx(e,{color:"pink",children:"Pink Button"})," ",t.jsx(e,{color:"blue",children:"Blue Button"})," ",t.jsx(e,{color:"green",children:"Green Button"})," ",t.jsx(e,{color:"yellow",children:"Yellow Button"})," ",t.jsx(e,{color:"white",children:"White Button"})]}),h={title:"Example/Button",component:y,decorators:[_],tags:["autodocs"],parameters:{},argTypes:{}},n={args:{color:"Purple"}};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    color: 'Purple'
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const j=["ButtonCollection"];export{n as ButtonCollection,j as __namedExportsOrder,h as default};
//# sourceMappingURL=Button.stories-c483a08f.js.map