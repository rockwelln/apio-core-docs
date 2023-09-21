"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[6342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},s="Custom routes",l={unversionedId:"triggers/custom_routes",id:"triggers/custom_routes",title:"Custom routes",description:"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls.",source:"@site/docs/triggers/custom_routes.md",sourceDirName:"triggers",slug:"/triggers/custom_routes",permalink:"/apio-core-docs/docs/triggers/custom_routes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Triggers",permalink:"/apio-core-docs/docs/category/triggers"},next:{title:"Scheduled jobs",permalink:"/apio-core-docs/docs/triggers/scheduled_jobs"}},i={},u=[{value:"Definition",id:"definition",level:3},{value:"Synchronous vs Asynchronous routes",id:"synchronous-vs-asynchronous-routes",level:2},{value:"Error handler",id:"error-handler",level:2},{value:"Asynchronous response sample",id:"asynchronous-response-sample",level:3},{value:"Synchronous response",id:"synchronous-response",level:3},{value:"Samples Response",id:"samples-response",level:4},{value:"Authenticated routes",id:"authenticated-routes",level:2},{value:"Public routes",id:"public-routes",level:2},{value:"Proxied routes",id:"proxied-routes",level:2},{value:"API documentation",id:"api-documentation",level:3},{value:"Documentation",id:"documentation",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-routes"},"Custom routes"),(0,a.kt)("p",null,"APIO core supports custom HTTP routes. You can use them to expose your workflows to create your own API calls."),(0,a.kt)("p",null,"Page: ",(0,a.kt)("inlineCode",{parentName:"p"},"/transactions/config/startup_events")),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Custom route definition",src:n(89052).Z,width:"603",height:"1360"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Route"),(0,a.kt)("td",{parentName:"tr",align:null},"The path of the route.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"The HTTP method of the route.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group"),(0,a.kt)("td",{parentName:"tr",align:null},"The group of the route.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JSON Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"The request body can be validated with a JSON schema before launching the workflow.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output JSON Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"The response body can be described for the OpenAPI generator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error handler"),(0,a.kt)("td",{parentName:"tr",align:null},"The workflow to launch when a blocking error occurs (see ",(0,a.kt)("a",{parentName:"td",href:"#error-handler"},"here"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"The route is enabled.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"The route is synchronous (see ",(0,a.kt)("a",{parentName:"td",href:"#synchronous-vs-asynchronous-routes"},"here"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Public"),(0,a.kt)("td",{parentName:"tr",align:null},"The route does not require authentication.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Support bulk"),(0,a.kt)("td",{parentName:"tr",align:null},"The route supports bulk requests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bulk options"),(0,a.kt)("td",{parentName:"tr",align:null},"The options of the bulk requests.")))),(0,a.kt)("h2",{id:"synchronous-vs-asynchronous-routes"},"Synchronous vs Asynchronous routes"),(0,a.kt)("p",null,"The custom routes can be synchronous or asynchronous. The synchronous routes are executed in the same thread as the HTTP request. The asynchronous routes are executed in a separate thread."),(0,a.kt)("p",null,"The synchronous routes are useful when the workflow is fast. The asynchronous routes are useful when the workflow is slow or long-running. In this case, the workflow can be launched in a separate thread and the HTTP request can be closed. The workflow can continue to run in the background."),(0,a.kt)("p",null,"When the route is asynchronous, the response is sent immediately. The response contains the ID and the GUID of the transaction. The transaction can be used to track the status of the workflow. (via the API ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/v01/transactions/{id}")," or via the UI ",(0,a.kt)("inlineCode",{parentName:"p"},"/transactions/{id}"),")"),(0,a.kt)("h2",{id:"error-handler"},"Error handler"),(0,a.kt)("p",null,"The error handler is a workflow that is executed when a blocking error occurs. You can see that as a try/catch mechanism."),(0,a.kt)("p",null,"It receives a ",(0,a.kt)("inlineCode",{parentName:"p"},"{request}")," containing the following attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"instance"),(0,a.kt)("td",{parentName:"tr",align:null},"the top parent instance")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"context"),(0,a.kt)("td",{parentName:"tr",align:null},"the top parent context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"request"),(0,a.kt)("td",{parentName:"tr",align:null},"the initial request received by the custom route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"errors"),(0,a.kt)("td",{parentName:"tr",align:null},"the list of errors attached to the top parent instance")))),(0,a.kt)("p",null,"In case of a synchronous route, the error handler is executed before sending the response. So the response can be customized based on the error. When the error workflow completes succesfully, the context keys ",(0,a.kt)("inlineCode",{parentName:"p"},"*response*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"*cb_response*")," are moved from the error handler instance to the top parent instance, and then used to build the response."),(0,a.kt)("p",null,"In case of an asynchronous route, the error handler can be used to send a notification or a callback to the user or to the administrator."),(0,a.kt)("h3",{id:"asynchronous-response-sample"},"Asynchronous response sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "guid": "70195486-8934-4a31-a504-a97a72c7f322"\n}\n')),(0,a.kt)("h3",{id:"synchronous-response"},"Synchronous response"),(0,a.kt)("p",null,"When the route is synchronous, the response is sent when the workflow reach an ",(0,a.kt)("a",{parentName:"p",href:"../workflows/nodes#end"},"end")," node. The response is evaluated based on the context key ",(0,a.kt)("inlineCode",{parentName:"p"},"*response*")," (set with a ",(0,a.kt)("a",{parentName:"p",href:"../workflows/nodes#context-setter"},"context setter")," node for instance)."),(0,a.kt)("p",null,"The value has to be a JSON object with the following attributes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"The HTTP status code of the response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"body"),(0,a.kt)("td",{parentName:"tr",align:null},"The body of the response. It can be a string or a JSON object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"headers"),(0,a.kt)("td",{parentName:"tr",align:null},"A JSON object with the headers to be added in the response.")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Because there is a match in the structure of the output of ",(0,a.kt)("a",{parentName:"p",href:"../workflows/nodes#http-call"},"http call nodes")," and the structure of the response of the custom routes, the http call nodes can output directly in the ",(0,a.kt)("inlineCode",{parentName:"p"},"*response*")," context key without further processing.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"*response*")," value is not a valid JSON object, the workflow can be closed succesfully but the response will have a status 500 (Internal Server Error).")),(0,a.kt)("h4",{id:"samples-response"},"Samples Response"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Description ")," ",(0,a.kt)("th",null," Value of *response* key ")," ",(0,a.kt)("th",null," Response "))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON response"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "body": {\n    "message": "hello, world"\n  }\n}\n'))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  "message": "hello, world"\n}\n')))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Plain response"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "body": "hello, world"\n}\n'))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nContent-Type: text/plain\n\nhello, world\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"File attachment response"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 200,\n  "body": "hello, world",\n  "headers": {\n      "content-disposition": "attachment; filename=\\"hello.txt\\"",\n      "content-type": "text/plain"\n  }\n}\n'))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},'HTTP/1.1 200 OK\nContent-Type: text/plain\nContent-Disposition: attachment; filename="hello.txt"\n\nhello, world\n')))))),(0,a.kt)("h2",{id:"authenticated-routes"},"Authenticated routes"),(0,a.kt)("p",null,"By default, all custom routes are authenticated. The authentication is done using the JWT token. The JWT token is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header (Bearer ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"authentication scheme"),") of the HTTP requests."),(0,a.kt)("p",null,"Such routes are exposed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/custom")," path. For example, the route ",(0,a.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/custom/my-route"),"."),(0,a.kt)("h2",{id:"public-routes"},"Public routes"),(0,a.kt)("p",null,"The custom routes can be public. In this case, they do not require authentication. Such routes are exposed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/public")," path. For example, the route ",(0,a.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com/public/my-route"),"."),(0,a.kt)("p",null,"Public routes are useful when you want to expose your workflows to external systems in a secure environment. (e.g. a private network or health check)"),(0,a.kt)("h2",{id:"proxied-routes"},"Proxied routes"),(0,a.kt)("p",null,"APIO core can be deployed with one or several proxies to intercept and/or forward some traffic to a Broadsoft gateway (Netaxis product). In this case, the proxy process will use the custom routes to ",(0,a.kt)("em",{parentName:"p"},"overload")," or ",(0,a.kt)("em",{parentName:"p"},"extend")," the Broadsoft gateway API calls."),(0,a.kt)("p",null,"Proxied routes are usually exposed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/p{id}")," path. For example, the route ",(0,a.kt)("inlineCode",{parentName:"p"},"/my-route")," is exposed as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/p1/my-route"),"."),(0,a.kt)("p",null,"All proxied routes require the user to be authenticated."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Proxied routes (not overloaded by custom routes) are executed with different user sessions depending of the originating user:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The user is a Broadsoft user, the route is executed with the user session."),(0,a.kt)("li",{parentName:"ul"},"The user is an APIO user, the user profile is used to allow or deny the execution of the route. If the user profile is allowed to execute the route, the route is executed with the system level session.")),(0,a.kt)("p",{parentName:"admonition"},"There is no risk of impersonation because the user session is always used for Broadsoft users.")),(0,a.kt)("p",null,"Some nodes are especially usefull in the context of the proxied routes, e.g. ",(0,a.kt)("a",{parentName:"p",href:"../workflows/nodes/#broadsoft-proxy-session-call"},"Proxy user session")," node, to use the user session to make calls to the Broadsoft gateway."),(0,a.kt)("h3",{id:"api-documentation"},"API documentation"),(0,a.kt)("p",null,"The Broadsoft gateway API is described ",(0,a.kt)("a",{parentName:"p",href:"https://apio-docs.bxl.netaxis.be/"},"here"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The documentation mention paths with a prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1")," but ther are exposed under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/p{id}")," path on the proxy."),(0,a.kt)("p",{parentName:"admonition"},"e.g ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/tenants/")," is exposed at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/p{id}/tenants/"),".")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"The custom routes are documented in the OpenAPI generated specification. The specification is available at the ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v01/custom_routes.swagger.yml")," path. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com/api/v01/custom_routes.swagger.yml"),"."))}c.isMDXComponent=!0},89052:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/new-custom-route-69aa8eb156cf13cbe4585886b1c0b0eb.png"}}]);