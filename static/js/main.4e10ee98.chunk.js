(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.todoId,s=e.setTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()("",{"has-background-info-light":c===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c===e.id?s(0):s(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far fa-eye",{"far fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.filter,c=e.setCurentFilter,s=e.query,a=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:""!==s&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){a("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.selectedUserId,c=e.selectUser,s=e.todos.find((function(e){return e.id===t})),a=Object(l.useState)(null),i=Object(n.a)(a,2),d=i[0],r=i[1];return Object(l.useEffect)((function(){var e;s&&(e=s.userId,b("/users/".concat(e))).then((function(e){r(e)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),d?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",d&&Object(o.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(o.jsx)(u,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],v=Object(l.useState)(""),N=Object(n.a)(v,2),y=N[0],g=N[1],k=Object(l.useState)(0),C=Object(n.a)(k,2),w=C[0],I=C[1];Object(l.useEffect)((function(){b("/todos").then((function(e){s(e),m(!0)}))}),[]);var S=c.filter((function(e){switch(f){case"completed":return e.completed;case"active":return!e.completed;default:return e}})),T=S.filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{todos:c,filter:f,setCurentFilter:p,query:y,setQuery:g})}),Object(o.jsx)("div",{className:"block",children:d?Object(o.jsx)(r,{todos:""===y?S:T,todoId:w,setTodoId:function(e){return I(e)}}):Object(o.jsx)(u,{})})]})})}),0!==w&&Object(o.jsx)(h,{todos:""===y?S:T,selectedUserId:w,selectUser:function(e){I(e)}})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4e10ee98.chunk.js.map