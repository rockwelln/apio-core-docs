"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},o="HTTP clients (a.k.a Gateways)",l={unversionedId:"configuration/gateways",id:"configuration/gateways",title:"HTTP clients (a.k.a Gateways)",description:"APIO core engine can keep client sessions with multiple servers. Each client is identified by a unique name. The session_holder name is used to identify the client in the HTTP calls nodes (e.g HTTP call node).",source:"@site/docs/configuration/gateways.md",sourceDirName:"configuration",slug:"/configuration/gateways",permalink:"/apio-core-docs/docs/configuration/gateways",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/apio-core-docs/docs/category/configuration"},next:{title:"TCP",permalink:"/apio-core-docs/docs/configuration/tcp"}},s={},c=[{value:"Health checks",id:"health-checks",level:2},{value:"Authentication methods",id:"authentication-methods",level:2},{value:"OAuth1",id:"oauth1",level:3},{value:"OAuth2",id:"oauth2",level:3},{value:"Basic",id:"basic",level:3},{value:"Bearer",id:"bearer",level:3},{value:"Hawk",id:"hawk",level:3},{value:"mTLS",id:"mtls",level:3},{value:"Failover",id:"failover",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-clients-aka-gateways"},"HTTP clients (a.k.a Gateways)"),(0,i.kt)("p",null,"APIO core engine can keep client sessions with multiple servers. Each client is identified by a unique name. The ",(0,i.kt)("inlineCode",{parentName:"p"},"session_holder")," name is used to identify the client in the HTTP calls nodes (e.g ",(0,i.kt)("a",{parentName:"p",href:"../workflows/nodes#http-call"},"HTTP call node"),")."),(0,i.kt)("p",null,"This is useful to keep the client configuration in one place and reuse it in multiple places. And efficient because it allows to reuse the same client session / connections for multiple calls across workflows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"HTTP client",src:n(34718).Z,width:"907",height:"1527"})),(0,i.kt)("h2",{id:"health-checks"},"Health checks"),(0,i.kt)("p",null,"If enabled, the health check is executed periodically. The health check is a simple HTTP call to the ",(0,i.kt)("inlineCode",{parentName:"p"},"health_check_url"),". If the call fails, the client is marked as unhealthy (on the dashboard and gateways page) and backup url's may be used as failover."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unhealthy clients are still used in the HTTP calls nodes.")),(0,i.kt)("h2",{id:"authentication-methods"},"Authentication methods"),(0,i.kt)("h3",{id:"oauth1"},"OAuth1"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/core/1.0a/"},"OAuth1")," is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords."),(0,i.kt)("h3",{id:"oauth2"},"OAuth2"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2")," is an authorization framework that enables a third-party application to obtain access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf."),(0,i.kt)("p",null,"Set the token URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"login url")," attribute. The ",(0,i.kt)("inlineCode",{parentName:"p"},"client id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client secret")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),") attributes are used to authenticate the client to the token URL."),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("p",null,"For basic authentication, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," attributes."),(0,i.kt)("h3",{id:"bearer"},"Bearer"),(0,i.kt)("p",null,"For fixed bearer token, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," attribute to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header. "),(0,i.kt)("h3",{id:"hawk"},"Hawk"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.mozilla.org/services/2015/02/05/whats-hawk-and-how-to-use-it/"},"Hawk")," is a HTTP authentication scheme using a message authentication code (MAC) algorithm to provide partial HTTP request cryptographic verification."),(0,i.kt)("h3",{id:"mtls"},"mTLS"),(0,i.kt)("p",null,"Mutual TLS authentication is a two-way SSL authentication that uses client certificates to authenticate the client to the server and the server to the client."),(0,i.kt)("p",null,"If the client ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"https://"),", the client can use mTLS authentication using the ",(0,i.kt)("inlineCode",{parentName:"p"},"TLS client certificate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TLS client key")," attributes (both in PEM format)."),(0,i.kt)("h2",{id:"failover"},"Failover"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"backup urls")," is set, the client will try to connect to the backup URLs if the main URL is not available."),(0,i.kt)("p",null,"Those url's are used in the order they are defined. If the first one is not available, the second one is used, and so on."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The backup URLs are used only if the main URL is not available. If the main URL is available but returns an error, the backup URLs are not used.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If an error occurs during the connection to the current URL, the client will not try to fallback to the next backup URLs for the same call. It will try to fallback to the next backup URLs only for the next calls.")))}h.isMDXComponent=!0},34718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-gateway-b561c2f3815c57fa4684e7424543b335.png"}}]);