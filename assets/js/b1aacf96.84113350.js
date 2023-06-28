"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[6342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(r),h=o,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},s="Custom routes",u={unversionedId:"triggers/custom_routes",id:"triggers/custom_routes",title:"Custom routes",description:"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls.",source:"@site/docs/triggers/custom_routes.md",sourceDirName:"triggers",slug:"/triggers/custom_routes",permalink:"/apio-core-docs/docs/triggers/custom_routes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Triggers",permalink:"/apio-core-docs/docs/category/triggers"},next:{title:"Scheduled jobs",permalink:"/apio-core-docs/docs/triggers/scheduled_jobs"}},i={},l=[{value:"Definition",id:"definition",level:3},{value:"Synchronous vs Asynchronous routes",id:"synchronous-vs-asynchronous-routes",level:2},{value:"Authenticated routes",id:"authenticated-routes",level:2},{value:"Public routes",id:"public-routes",level:2},{value:"Proxied routes",id:"proxied-routes",level:2},{value:"Documentation",id:"documentation",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-routes"},"Custom routes"),(0,o.kt)("p",null,"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls."),(0,o.kt)("p",null,"Page: ",(0,o.kt)("inlineCode",{parentName:"p"},"/transactions/config/startup_events")),(0,o.kt)("h3",{id:"definition"},"Definition"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom route definition",src:r(9052).Z,width:"603",height:"1360"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Route"),(0,o.kt)("td",{parentName:"tr",align:null},"The path of the route.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Method"),(0,o.kt)("td",{parentName:"tr",align:null},"The HTTP method of the route.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group"),(0,o.kt)("td",{parentName:"tr",align:null},"The group of the route.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"JSON Schema"),(0,o.kt)("td",{parentName:"tr",align:null},"The request body can be validated with a JSON schema before launching the workflow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Output JSON Schema"),(0,o.kt)("td",{parentName:"tr",align:null},"The response body can be described for the OpenAPI generator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Error handler"),(0,o.kt)("td",{parentName:"tr",align:null},"The workflow to launch when an error occurs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"The route is enabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sync"),(0,o.kt)("td",{parentName:"tr",align:null},"The route is synchronous.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public"),(0,o.kt)("td",{parentName:"tr",align:null},"The route does not require authentication.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Support bulk"),(0,o.kt)("td",{parentName:"tr",align:null},"The route supports bulk requests.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bulk options"),(0,o.kt)("td",{parentName:"tr",align:null},"The options of the bulk requests.")))),(0,o.kt)("h2",{id:"synchronous-vs-asynchronous-routes"},"Synchronous vs Asynchronous routes"),(0,o.kt)("p",null,"The custom routes can be synchronous or asynchronous. The synchronous routes are executed in the same thread as the HTTP request. The asynchronous routes are executed in a separate thread."),(0,o.kt)("p",null,"The synchronous routes are useful when the workflow is fast. The asynchronous routes are useful when the workflow is slow. The asynchronous routes are also useful when the workflow is long-running. In this case, the workflow can be launched in a separate thread and the HTTP request can be closed. The workflow can continue to run in the background."),(0,o.kt)("p",null,"When the route is asynchronous, the response is sent immediately. The response contains the ID of the transaction. The transaction can be used to track the status of the workflow. (via the API ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v01/transactions/{id}")," or via the UI ",(0,o.kt)("inlineCode",{parentName:"p"},"/transactions/{id}"),")"),(0,o.kt)("h2",{id:"authenticated-routes"},"Authenticated routes"),(0,o.kt)("p",null,"By default, all custom routes are authenticated. The authentication is done using the JWT token. The JWT token is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header (Bearer ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"authentication scheme"),") of the HTTP requests."),(0,o.kt)("p",null,"Such routes are exposed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v01/custom")," path. For example, the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/custom/my-route"),"."),(0,o.kt)("h2",{id:"public-routes"},"Public routes"),(0,o.kt)("p",null,"The custom routes can be public. In this case, they do not require authentication. Such routes are exposed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v01/public")," path. For example, the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.example.com/public/my-route"),"."),(0,o.kt)("p",null,"Public routes are useful when you want to expose your workflows to external systems in a secure environment. (e.g. a private network or health check)"),(0,o.kt)("h2",{id:"proxied-routes"},"Proxied routes"),(0,o.kt)("p",null,"APIO core can be deployed with one or several proxies to intercept and/or forward some traffic to a Broadsoft gateway. In this case, the proxy process will use the custom routes to ",(0,o.kt)("em",{parentName:"p"},"overload")," or ",(0,o.kt)("em",{parentName:"p"},"extend")," the Broadsoft gateway API calls."),(0,o.kt)("p",null,"Proxied routes are usually exposed under the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v01/p{id}")," path. For example, the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/p1/my-route"),"."),(0,o.kt)("p",null,"All proxied routes require the user to be authenticated."),(0,o.kt)("p",null,"Some nodes are especially usefull in the context of the proxied routes, e.g. ",(0,o.kt)("a",{parentName:"p",href:"../workflows/nodes/#broadsoft-proxy-session-call"},"Proxy user session")," node, to use the user session to make calls to the Broadsoft gateway."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The custom routes are documented in the OpenAPI generated specification. The specification is available at the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v01/custom_routes.swagger.yml")," path. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/custom_routes.swagger.yml"),"."))}d.isMDXComponent=!0},9052:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/new-custom-route-69aa8eb156cf13cbe4585886b1c0b0eb.png"}}]);