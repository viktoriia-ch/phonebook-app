"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[921],{3921:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(3815),l=t(9869),i=t(7689),u=t(1413),o=t(158),s={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"enter name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"enter email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"enter password"}},c=t(8685),d={name:"",email:"",password:""},m=t(184),h=function(e){var n=e.onSubmit,t=(0,o.Z)({initialState:d,onSubmit:n}),r=t.state,a=t.handleChange,l=t.handleSubmit;return(0,m.jsxs)("form",{onSubmit:l,children:[(0,m.jsx)(c.Z,(0,u.Z)({value:r.name,handleChange:a},s.name)),(0,m.jsx)(c.Z,(0,u.Z)({value:r.email,handleChange:a},s.email)),(0,m.jsx)(c.Z,(0,u.Z)({value:r.password,handleChange:a},s.password)),(0,m.jsx)("button",{children:"Register"})]})},p=function(){var e=(0,r.I0)();return(0,r.v9)(l.b)?(0,m.jsx)(i.Fg,{to:"/contacts"}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Register page"}),(0,m.jsx)(h,{onSubmit:function(n){e((0,a.I)(n))}})]})}},8685:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(2791),i=t(184),u=["label","handleChange"],o=function(e){var n=e.label,t=e.handleChange,o=a(e,u),s=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:s,children:n}),(0,i.jsx)("input",(0,r.Z)({id:s,onChange:t},o))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),l=t(9439),i=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,i.useState)((0,a.Z)({},n)),o=(0,l.Z)(u,2),s=o[0],c=o[1],d=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,l))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c(n)}}}}}]);
//# sourceMappingURL=921.45e3584f.chunk.js.map