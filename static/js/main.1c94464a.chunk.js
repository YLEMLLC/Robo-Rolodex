(this.webpackJsonprobo_rolodex=this.webpackJsonprobo_rolodex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),s=n(3),a=n.n(s),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),d=(n(14),n(15),function(e){return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("img",{src:"https://robohash.org/".concat(e.robo.id,"?set=set1"),alt:""}),Object(c.jsx)("h2",{children:e.robo.name}),Object(c.jsx)("p",{children:e.robo.company.catchPhrase})]})}),b=function(e){return Object(c.jsx)("div",{className:"card-list",children:e.robos.map((function(e){return Object(c.jsx)(d,{robo:e},e.id)}))})},j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(c.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={robos:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json().then((function(t){return e.setState({robos:t})}))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robos,o=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"ROBO ROLODEX"}),Object(c.jsx)(j,{placeholder:"ROBO SEARCH",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(c.jsx)(b,{robos:r})]})}}]),n}(o.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.1c94464a.chunk.js.map