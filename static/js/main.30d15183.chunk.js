(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),l=a.n(c),r=(a(11),a(12),a(3),a(5)),s=a(1);a(13);var i=function(){var e=this,t=["todo-wrapper-color-a","todo-wrapper-color-b","todo-wrapper-color-c","todo-wrapper-color-d"],a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)([]),u=Object(s.a)(m,2),p=u[0],d=u[1],f=function(e){var t=Object.assign([],p);t.splice(e,1),d(t)};return o.a.createElement("div",null,o.a.createElement("h2",{className:"App"},"Todos"),o.a.createElement("div",{className:"offset-lg-4 col-lg-4 offset-md-4 col-md-4 offset-sm-3 col-sm-6"},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"search",onChange:function(e){i(e.currentTarget.value)},id:"txtToDo",value:l,placeholder:"Enter todo here...",className:"form-control"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-success",onClick:function(){""!=l&&(d([].concat(Object(r.a)(p),[{value:l,color:t[Math.floor(p.length%t.length)]}])),i(""))},type:"button"},"Submit")))),o.a.createElement("div",{className:"offset-md-4 col-md-4 offset-sm-3 col-sm-6 text-align-default"},p.map((function(t,a){return o.a.createElement("div",{key:a},o.a.createElement("br",null),o.a.createElement("div",{className:"d-flex justify-content-between todo-wrapper "+t.color},o.a.createElement("div",{className:"p-2 align-self-center"},o.a.createElement("span",{className:"pull-left font-weight-bold"},a+1,") ",t.value)),o.a.createElement("div",{className:"p-2"},o.a.createElement("input",{type:"button",value:"x",className:"btn font-weight-bolder text-danger",onClick:f.bind(e,a)}))))}))))};var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(i,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.30d15183.chunk.js.map