"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[2098],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5137:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:3},i="Webhooks",s={unversionedId:"administration/webhooks",id:"administration/webhooks",title:"Webhooks",description:"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu.",source:"@site/docs/administration/webhooks.md",sourceDirName:"administration",slug:"/administration/webhooks",permalink:"/apio-core-docs/docs/administration/webhooks",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Server configuration",permalink:"/apio-core-docs/docs/administration/server_configuration"},next:{title:"Migrations",permalink:"/apio-core-docs/docs/migrations"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Events",id:"events",level:2},{value:"Payload",id:"payload",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"webhooks"},"Webhooks"),(0,r.kt)("p",null,"Some requests processed by APIO core can trigger webhooks. A webhook is a HTTP request sent to a specific URL. The URL is configured in the Webhooks section of the settings menu."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Webhooks require an extra process to be started. This process is called ",(0,r.kt)("inlineCode",{parentName:"p"},"webhooks"),". It is not started by default. You must add it manually.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The webhook configuration is composed of the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active"),": If the webhook is active or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": The name of the webhook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target"),": The URL of the webhook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secret"),": An optional secret used to be included in the webhook payload. This secret can be used to authenticate the webhook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom header"),": An optional custom header to be included in the webhook payload."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom header value"),": The value of the custom header."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic auth. username"),": An optional username to be used for basic authentication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic auth. password"),": An optional password to be used for basic authentication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Events"),": The events that trigger the webhook.")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"Any custom route call can trigger a webhook. The webhook is triggered when the custom route call is completed and successful."),(0,r.kt)("p",null,"A webhook event is configured with the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": The name of the event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method"),": The HTTP method of the custom route call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"URL"),": A regular expression matching the URL of the custom route call.")),(0,r.kt)("h2",{id:"payload"},"Payload"),(0,r.kt)("p",null,"The webhook payload is a JSON object containing the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"event"),": The webhook event definition with its id and label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id"),": A unique id for the webhook call visible in the webhook history."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"request"),": The request received by the custom route call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"response"),": The response sent by the custom route call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"secret"),": The secret configured in the webhook definition (if any).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event": {"id": 1, "label": "event-1"},\n    "id": "70195486-8934-4a31-a504-a97a72c7f322",\n    "request": {\n        "tag": "tag-1",\n        "method": "post",\n        "url": "/api/v01/some/url/path",\n        "body": {"foo": "bar"}\n    },\n    "response": {"status": 200, "body": {}},\n    "secret": "secret-1"\n}\n')))}d.isMDXComponent=!0}}]);