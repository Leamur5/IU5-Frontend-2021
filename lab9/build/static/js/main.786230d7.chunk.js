(this.webpackJsonplab9=this.webpackJsonplab9||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(16),r=n.n(s),i=(n(22),n(9)),l=n(7),o=n(2),b=(n(23),n(24),n(1)),u=Object(o.h)((function(e){var t,n=e.onSearch,a=Object(c.useState)(""),s=Object(l.a)(a,2),r=s[0],i=s[1],u=Object(o.f)(),j=("/"===(t=Object(o.g)().url).charAt(t.length-1)&&t.slice(0,-1),function(){0!==r.trim().length&&(n(r),i(""),u.push("/lab9/build/UserInfo"))});return Object(b.jsxs)("div",{className:"user-search-wrapper",children:["\u041f\u043e\u0438\u0441\u043a \u043f\u043e GitHub",Object(b.jsx)("input",{className:"user-search-input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a...",value:r,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"enter"===e.key.toLowerCase()&&j()}}),Object(b.jsx)("button",{className:"user-search-button",type:"button",onClick:j,children:"\u041f\u043e\u0433\u043d\u0430\u043b\u0438"}),Object(b.jsx)("img",{alt:"github",src:"https://www.shareicon.net/data/2016/07/08/116859_github_512x512.png",className:"github-icon"})]})})),j=(n(31),function(e){var t=e.info,n=Object(o.f)();return Object(b.jsxs)("div",{className:"user-info-box",children:[Object(b.jsx)("img",{src:t.avatar_url,alt:t.login,className:"avatar"}),Object(b.jsx)("h1",{className:"login",children:t.login}),Object(b.jsx)("h2",{className:"name",children:t.name}),Object(b.jsxs)("div",{className:"followers",children:[t.followers," followers \ud83e\udd1d ",t.following," following \ud83d\udc40"]}),t.location?Object(b.jsx)("div",{className:"location",children:t.location}):Object(b.jsx)(b.Fragment,{}),t.blog?Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:t.blog,rel:"noreferrer",target:"_blank",id:"blog-info",className:"user-link",children:t.blog})}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("a",{href:t.html_url,rel:"noreferrer",target:"_blank",className:"user-link",children:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 GitHub"}),Object(b.jsx)("button",{type:"button",onClick:function(){n.push("/lab9/build/")},className:"back-button",children:"\u0418\u0449\u0435\u043c \u0434\u0440\u0443\u0433\u043e\u0433\u043e!"})]})}),h=(n(32),Object(o.h)((function(e){var t=e.username,n=Object(c.useState)(!1),a=Object(l.a)(n,2),s=a[0],r=a[1],i=Object(c.useState)({}),u=Object(l.a)(i,2),h=u[0],O=u[1],d=Object(c.useState)(!0),f=Object(l.a)(d,2),g=f[0],x=f[1],m=Object(o.f)();return Object(c.useEffect)((function(){t.trim().length&&fetch("https://api.github.com/users/".concat(t),{method:"GET",headers:{Authorization:"Token ".concat("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")}}).then((function(e){return 404===e.status?(r(!0),{}):e.json()})).then((function(e){O(e),x(!1)}))}),[t]),g?Object(b.jsx)("div",{className:"loading",children:"Loading..."}):s?Object(b.jsxs)("div",{className:"user-not-found",children:[Object(b.jsx)("h1",{children:"\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435\u0442 \ud83d\ude2a"}),Object(b.jsx)("button",{type:"button",onClick:function(){m.push("/lab9/build/")},className:"back-button",children:"\u0418\u0449\u0435\u043c \u0434\u0440\u0443\u0433\u043e\u0433\u043e!"})]}):Object(b.jsx)(j,{info:h})})));var O=Object(o.h)((function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/lab9/build/",children:Object(b.jsx)(u,{onSearch:function(e){return a(e)}})}),Object(b.jsx)(o.a,{path:"/lab9/build/UserInfo",children:Object(b.jsx)(h,{username:n})})]})})})),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(O,{})})}),document.getElementById("root")),d()}},[[33,1,2]]]);
//# sourceMappingURL=main.786230d7.chunk.js.map