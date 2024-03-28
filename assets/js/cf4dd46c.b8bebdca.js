"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[175],{27181:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=s(85893),i=s(11151);const r={sidebar_position:9},o="SSO",d={id:"configuration/sso",title:"SSO",description:"APIO core supports SSO (Single Sign-On) via a bunch of protocols.",source:"@site/docs/configuration/sso.md",sourceDirName:"configuration",slug:"/configuration/sso",permalink:"/apio-core-docs/docs/configuration/sso",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Password",permalink:"/apio-core-docs/docs/configuration/password"},next:{title:"Alarms",permalink:"/apio-core-docs/docs/configuration/alarms"}},a={},c=[{value:"Login page",id:"login-page",level:2},{value:"Extra rules",id:"extra-rules",level:2},{value:"User creation rules",id:"user-creation-rules",level:2},{value:"Protocols",id:"protocols",level:2},{value:"OpenID Connect",id:"openid-connect",level:3},{value:"SAML",id:"saml",level:3},{value:"Webseal",id:"webseal",level:3},{value:"Soap Token",id:"soap-token",level:3},{value:"Broadsoft",id:"broadsoft",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sso",children:"SSO"}),"\n",(0,n.jsx)(t.p,{children:"APIO core supports SSO (Single Sign-On) via a bunch of protocols."}),"\n",(0,n.jsx)(t.p,{children:"Single sign-on (SSO) is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems. True single sign-on allows the user to log in once and access services without re-entering authentication factors."}),"\n",(0,n.jsx)(t.p,{children:"It allows users to authenticate themselves on one platform and then use the same credentials to access other platforms within the same organization. So they don't need to be provisioned or authenticated on each platform."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SSO common",src:s(44874).Z+"",width:"906",height:"569"})}),"\n",(0,n.jsx)(t.h2,{id:"login-page",children:"Login page"}),"\n",(0,n.jsx)(t.p,{children:"The login page may display an SSO button to allow users to login via SSO if the provider entry is configured."}),"\n",(0,n.jsxs)(t.p,{children:["The button label is ",(0,n.jsx)(t.code,{children:"Login with "})," followed by the name of the provider entry."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SSO login page",src:s(29929).Z+"",width:"546",height:"459"})}),"\n",(0,n.jsx)(t.h2,{id:"extra-rules",children:"Extra rules"}),"\n",(0,n.jsx)(t.p,{children:"Even if the IdP accept the authentication, APIO core may reject it if the user doesn't match some extra rules. (e.g. the user is not in the correct group / organization)"}),"\n",(0,n.jsxs)(t.p,{children:["The rules are simple expression based on the element of the token IdP decoded. (e.g ",(0,n.jsx)(t.code,{children:"hd == 'mycompany.com'"}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"user-creation-rules",children:"User creation rules"}),"\n",(0,n.jsx)(t.p,{children:"When a user is authenticated via SSO, APIO core may create the user if it doesn't exist."}),"\n",(0,n.jsx)(t.p,{children:"The rules are a mapping between the elements of the token IdP decoded and user profiles definitions."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"If no rules exists or no rule match, the user is not created. And the authentication is rejected."})}),"\n",(0,n.jsx)(t.h2,{id:"protocols",children:"Protocols"}),"\n",(0,n.jsx)(t.h3,{id:"openid-connect",children:"OpenID Connect"}),"\n",(0,n.jsx)(t.p,{children:"OpenID Connect (OIDC) is an authentication protocol built on top of OAuth 2.0 that can be used to securely sign users in to web applications."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SSO oidc",src:s(71056).Z+"",width:"1816",height:"852"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Auth. endpoint"}),(0,n.jsx)(t.td,{children:"The URL of the authentication endpoint."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Scope"}),(0,n.jsx)(t.td,{children:"The scope of the authentication."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Token endpoint"}),(0,n.jsx)(t.td,{children:"The URL of the token endpoint."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Client ID"}),(0,n.jsx)(t.td,{children:"The client ID."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Client secret"}),(0,n.jsx)(t.td,{children:"The client secret."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Redirect URI"}),(0,n.jsx)(t.td,{children:"The redirect URI."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Token issuer"}),(0,n.jsx)(t.td,{children:"The issuer of the token."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Provider"}),(0,n.jsx)(t.td,{children:"Some specifics for certain implementation."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"saml",children:"SAML"}),"\n",(0,n.jsx)(t.p,{children:"Security Assertion Markup Language (SAML) is an open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SSO saml",src:s(18814).Z+"",width:"1788",height:"2336"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IdP Metadata"}),(0,n.jsxs)(t.td,{children:['The metadata describing the IdP. (e.g <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0',":metadata",'" xmlns',":ds",'="',(0,n.jsx)(t.a,{href:"http://www.w3.org/2000/09/xmldsig#",children:"http://www.w3.org/2000/09/xmldsig#"}),'" xmlns',":shibmd",'="urn:mace:shibboleth:metadata:1.0" entityID="',(0,n.jsx)(t.a,{href:"https://idp.clearlogin.co.uk%22&gt;...&lt;/EntityDescriptor",children:'https://idp.clearlogin.co.uk"&gt;...&lt;/EntityDescriptor'}),">)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SP Entity ID"}),(0,n.jsx)(t.td,{children:"The entity ID of the SP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SP Assertion Consumer Service URL"}),(0,n.jsx)(t.td,{children:"The URL of the SP assertion consumer service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SP x509 certificate"}),(0,n.jsx)(t.td,{children:"The x509 certificate of the SP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SP private key"}),(0,n.jsx)(t.td,{children:"The private key of the SP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"SP valid redirects"}),(0,n.jsx)(t.td,{children:"The list of valid redirects."})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Most the details from here are available in the IdP configuration page dedicated to the application entry."})}),"\n",(0,n.jsx)(t.h3,{id:"webseal",children:"Webseal"}),"\n",(0,n.jsx)(t.p,{children:"WebSeal is a reverse proxy server that provides authentication and authorization services for a web application."}),"\n",(0,n.jsxs)(t.p,{children:["This proxy adds HTTP headers in the client traffic with the user information. (e.g. ",(0,n.jsx)(t.code,{children:"iv-user"}),")"]}),"\n",(0,n.jsx)(t.p,{children:"APIO core trusts these headers only if the Webseal proxy IP appears in the list of trusted source IPs."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"HTTP header with client IP"}),(0,n.jsx)(t.td,{children:"Used to fetch the (webseal) client IP address when the instance is behind some reverse proxy. (e.g X-Real-IP)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Trusted source IPs"}),(0,n.jsx)(t.td,{children:"List of trusted source IPs."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"soap-token",children:"Soap Token"}),"\n",(0,n.jsx)(t.p,{children:"Proprietary protocol used by custom company implementation of IdP."}),"\n",(0,n.jsx)(t.h3,{id:"broadsoft",children:"Broadsoft"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SSO broadsoft",src:s(27210).Z+"",width:"2508",height:"924"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Proxies"}),(0,n.jsx)(t.td,{children:"Map the proxies allowed to authenticate via this provider. And to which gateway they need to go."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Authorisation handler"}),(0,n.jsxs)(t.td,{children:["The authorisation handler to use. When set to ",(0,n.jsx)(t.code,{children:"map to broadsoft user"}),", the ",(0,n.jsx)(t.code,{children:"Username mapping template"})," can be used to transform the SSO username into Broadsoft username and attributes from Broadsoft bound to the APIO core user."]})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The system level flag in the ",(0,n.jsx)(t.a,{href:"#user-creation-rules",children:"User creation rules"})," are not available for Broadsoft users auto-provisioning.",(0,n.jsx)("br",{}),"\nBroadsoft users can still be created (and manually granted with the system flag) but cannot manage the platform at system level automatically.",(0,n.jsx)("br",{}),"\nPast experience shows that the risk is too high to allow this."]})})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},29929:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/login-with-sso-cddaac24dfcbf6b0882273cc2bc29b85.png"},27210:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/new-sso-broadsoft-f51f780ab796b066ff4e2175092289d3.png"},44874:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/new-sso-common-60972e443be07a78f4d96149cab5a889.png"},71056:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/new-sso-oidc-bdd5c78e186427173f81040f1ae73922.png"},18814:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/new-sso-saml-1fe82363c8a4a156e68951c4e59b2395.png"},11151:(e,t,s)=>{s.d(t,{a:()=>o});var n=s(67294);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);