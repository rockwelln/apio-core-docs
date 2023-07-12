"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[1299],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99936:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={sidebar_position:7},i="Migrations",s={unversionedId:"migrations",id:"migrations",title:"Migrations",description:"Some versions need some changes to the server configuration or the database.",source:"@site/docs/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/apio-core-docs/docs/migrations",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Webhooks",permalink:"/apio-core-docs/docs/administration/webhooks"}},p={},l=[{value:"&lt; 2.10.0 to &gt;= 2.11.0",id:"-2100-to--2110",level:2},{value:"&lt; 0.23.2 to &gt;= 2.10.x",id:"-0232-to--210x",level:2},{value:"In 2 steps",id:"in-2-steps",level:3},{value:"Supervisord",id:"supervisord",level:3},{value:"Docker",id:"docker",level:3}],c={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrations"},"Migrations"),(0,r.kt)("p",null,"Some versions need some changes to the server configuration or the database."),(0,r.kt)("h2",{id:"-2100-to--2110"},"<"," 2.10.0 to ",">","= 2.11.0"),(0,r.kt)("p",null,"The encryption 'Fernet32' is not supported anymore. So the internal key ",(0,r.kt)("inlineCode",{parentName:"p"},"document-storage")," is not valid anymore.\nYou can force the migration to the new encryption by running the following command directly on the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE keys SET label = 'document-storage-old' WHERE label = 'document-storage';\n")),(0,r.kt)("h2",{id:"-0232-to--210x"},"<"," 0.23.2 to ",">","= 2.10.x"),(0,r.kt)("p",null,"Because the engine was entirely rewritten, the database schema has changed. The last version of the database structure in the 0.x branch is required before upgrading to 2.x versions."),(0,r.kt)("p",null,"Also, there is no configuration file anymore. The configuration is stored in the database."),(0,r.kt)("h3",{id:"in-2-steps"},"In 2 steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upgrade to the last version of the 0.x branch (0.23.2)"),(0,r.kt)("li",{parentName:"ol"},"Upgrade to the 2.x version")),(0,r.kt)("h3",{id:"supervisord"},"Supervisord"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If possible (no customer specific limitation), it's recommended to move to Docker.")),(0,r.kt)("p",null,"The environment and the command changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},'[program:api_server]\n\n; was:\nenvironment=APIO_CONFIG_FILE=/etc/apio.yml,APIO_OPENID_AUTH=n\ncommand=/opt/apio/bin/python -m broadsoft_apio_api.server\n\n; now:\n\n; note the uppercase for the variables is !important!\nenvironment=DB=postgresql://apio:secret@postgres/apio\ncommand=/usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -cleanup\n\n;...\n\n[program:proxy_server]\n\n; was:\nenvironment=APIO_CONFIG_FILE=/etc/apio_p1.yml,APIO_OPENID_AUTH=n\ncommand=/opt/broadsoft_apio/bin/python -m broadsoft_apio_api.server_proxy\n\n; now:\n\nenvironment=DB=postgresql://apio:secret@postgres/apio\n; note the "proxy" mapping, the "bwks needs to match the target gateway name in the APIO core configuration in the database!\ncommand=/usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -proxy=/api/v01/p1:bwks -runMigration=false\n')),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# ...\nservices:\n  # ...\n  # was:\n  apiocore:\n    command: python3 -m broadsoft_apio_api.server\n    environment:\n      - host=0.0.0.0\n      - db=postgresql://apio:secret@postgres/apio\n      - proxy_login_url=default=https://1.2.3.4:8443/api/v1/login/,p1=https://10.0.2.3/api/v1/login/\n\n  # now:\n  apiocore:\n    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -cleanup\n    environment:\n      # note the uppercase for the variables is !important!\n      - DB=postgresql://apio:secret@postgres/apio\n\n  # ...\n  # was:\n  px1n:\n    command: python3 -m broadsoft_apio_api.server_proxy\n    environment:\n      - host=0.0.0.0\n      - port=5001\n      - db=postgresql://apio:secret@postgres/apio\n      - proxy_url=https://10.0.1.2/api/v1/\n      - proxy_username=username\n      - proxy_password=secret\n      - proxy_prefix=/api/v01/p1\n      - proxy_name=p1\n\n  # now:\n  px1:\n    # note the "proxy" mapping, the "bwks needs to match the target gateway name in the APIO core configuration in the database!\n    command: /usr/local/go/server -workflows -port=5000 -host=0.0.0.0 -proxy=/api/v01/p1:bwks -runMigration=false\n\n    environment:\n      # note the uppercase for the variables is !important!\n      - DB=postgresql://apio:secret@postgres/apio\n# ...\n')))}u.isMDXComponent=!0}}]);