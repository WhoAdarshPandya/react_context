(this.webpackJsonpreact_context=this.webpackJsonpreact_context||[]).push([[0],{65:function(e,t,n){e.exports=n(75)},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=n(34),i=n(15),u=n(61),m=n(104),d=n(116),p=n(109),E=n(118),b=Object(a.createContext)();function f(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],l=n[1];return r.a.createElement(b.Provider,{value:[c,l]},e.children)}var s=Object(u.a)({palette:{primary:{main:"#1976d2"}}});function v(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useContext)(b),u=Object(i.a)(l,2),f=(u[0],u[1]),v=function(){if(""!==n){var e={title:n,id:Object(E.a)(),completed:!1};f((function(t){return[].concat(Object(o.a)(t),[e])})),c("")}};return r.a.createElement(m.a,{theme:s},r.a.createElement("div",{style:{width:"50%",margin:"auto",textAlign:"center"}},r.a.createElement(d.a,{style:{width:"100%"},color:"primary",label:"Enter Todo",value:n,onKeyPress:function(e){!function(e){"Enter"===e.key&&v()}(e)},onChange:function(e){!function(e){c(e.target.value)}(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{style:{textAlign:"center"},variant:"contained",color:"primary",onClick:function(){v()}},"SUBMIT")))}var y=n(110),g=n(107),j=n(111),O=n(112),h=n(117),x=n(114),k=n(115),C=n(113),T=n(60),w=n.n(T);function S(e){var t=e.todo,n=Object(a.useContext)(b),c=Object(i.a)(n,2),l=(c[0],c[1]);return r.a.createElement(y.a,{direction:"right",in:!0},r.a.createElement(g.a,null,r.a.createElement(j.a,{button:!0,style:t.completed?{marginTop:"10px",background:"#dcdde1"}:{marginTop:"10px"}},r.a.createElement(O.a,null,r.a.createElement(h.a,{color:"primary",onChange:function(){var e,n;e=t.id,n=t.completed,l((function(t){return Object(o.a)(t.map((function(t){return t.id===e&&(t.completed=!n),t})))}))},edge:"start",checked:t.completed})),r.a.createElement(x.a,{style:t.completed?{color:"gray"}:{},primary:t.title}),r.a.createElement(k.a,null,r.a.createElement(C.a,{edge:"end",onClick:function(){var e;e=t.id,l((function(t){return Object(o.a)(t.filter((function(t){return t.id!==e})))}))}},r.a.createElement(w.a,null))))))}var A=n(108);function B(){var e=Object(a.useContext)(b),t=Object(i.a)(e,2),n=t[0];t[1];return r.a.createElement(A.a,{style:{width:"50%",margin:"auto",marginTop:"15px"}},n.map((function(e){return r.a.createElement(S,{key:e.id,todo:e})})))}var I=n(44),J=Object(u.a)({palette:{primary:{main:"#1976d2"}}});function P(){return r.a.createElement(f,null,r.a.createElement(m.a,{theme:J},r.a.createElement("div",null,r.a.createElement(I.a,{variant:"h2",color:"primary",align:"center"},"To Do List"),r.a.createElement(v,null),r.a.createElement(B,null))))}l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ed706004.chunk.js.map