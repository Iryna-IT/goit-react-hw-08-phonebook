(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{93:function(e,a,n){e.exports={container:"Views_container__3gTXq",form:"Views_form__DZFNQ",label:"Views_label__1rD_o",headline:"Views_headline__-coJr",input:"Views_input__3Zu7C",btn:"Views_btn__F6V0f"}},99:function(e,a,n){"use strict";n.r(a);var t=n(3),s=n(16),i=n(17),l=n(19),c=n(18),o=n(0),r=n(9),h=n(7),b=n(93),p=n.n(b),u=n(1),m=function(e){Object(l.a)(n,e);var a=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleChange=function(a){var n=a.target,s=n.name,i=n.value;e.setState(Object(t.a)({},s,i))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,a=e.email,n=e.password;return Object(u.jsxs)("div",{className:p.a.container,children:[Object(u.jsx)("h1",{children:"Login page"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,autoComplete:"off",children:[Object(u.jsxs)("label",{className:p.a.label,children:[Object(u.jsx)("span",{className:p.a.headline,children:" email"}),Object(u.jsx)("input",{className:p.a.input,type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(u.jsxs)("label",{className:p.a.label,children:[Object(u.jsx)("span",{className:p.a.headline,children:" login"}),Object(u.jsx)("input",{className:p.a.input,type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(u.jsx)("button",{type:"submit",className:p.a.btn,children:"Enter"})]})]})}}]),n}(o.Component),j={onLogin:h.a.logIn};a.default=Object(r.b)(null,j)(m)}}]);
//# sourceMappingURL=5.b650d4eb.chunk.js.map