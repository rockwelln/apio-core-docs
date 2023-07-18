"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[2026],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75149:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2},i="Templates",o={unversionedId:"workflows/templates",id:"workflows/templates",title:"Templates",description:"Most fields in the nodes can be evaluated as templates. The template engine is Jinja2 and expose all the buit-in's of the language.",source:"@site/docs/workflows/templates.md",sourceDirName:"workflows",slug:"/workflows/templates",permalink:"/apio-core-docs/docs/workflows/templates",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Nodes",permalink:"/apio-core-docs/docs/workflows/nodes"},next:{title:"Versions",permalink:"/apio-core-docs/docs/workflows/versioning"}},p={},d=[{value:"Filters",id:"filters",level:2},{value:"Tests",id:"tests",level:2},{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2}],u={toc:d},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"templates"},"Templates"),(0,r.kt)("p",null,"Most fields in the nodes can be evaluated as templates. The template engine is ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/"},"Jinja2")," and expose all the ",(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-filters"},"buit-in's")," of the language."),(0,r.kt)("p",null,"To debug easily such fields, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/help/template-playground"},"playground"),"."),(0,r.kt)("p",null,"It is extended with the following elements."),(0,r.kt)("h2",{id:"filters"},"Filters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-filters"},"From Jinja2")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pp_dict"),(0,r.kt)("td",{parentName:"tr",align:null},"turn an object into a pretty-printed JSON string representation"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ {'a': 1, 'b': 2} ","|"," pp_dict }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dict_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"filter a dictionary with a set of keys"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ {'a': 1, 'b': 2, 'c': 3} ","|"," dict_filter(","['a', 'b']",") }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json_query"),(0,r.kt)("td",{parentName:"tr",align:null},"inspect a JSON object with a JMESPath query"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ {'a': 1, 'b': 2, 'c': 3} ","|"," json_query('a') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url_qs"),(0,r.kt)("td",{parentName:"tr",align:null},"parse a URL query string into a dictionary"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'a=1&b=2&c=3' ","|"," url_qs }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url_raw_query"),(0,r.kt)("td",{parentName:"tr",align:null},"parse a URL query string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'a=1&b=2&c=3' ","|"," url_raw_query }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"parse a JSON string into a dictionary"),(0,r.kt)("td",{parentName:"tr",align:null},'{{ \'{"a": 1, "b": 2, "c": 3}\' ',"|"," json }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url_path"),(0,r.kt)("td",{parentName:"tr",align:null},"extract the path from a URL"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'http://localhost:8080/api/v01/public/demo' ","|"," url_path }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"combine"),(0,r.kt)("td",{parentName:"tr",align:null},"merge dictionaries"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ {'a': 1, 'b': 2} ","|"," combine({'c': 3}) }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rest2dict"),(0,r.kt)("td",{parentName:"tr",align:null},"parse a REST call response into a dictionary (note: it automatically parse a ",(0,r.kt)("inlineCode",{parentName:"td"},"body")," property as a JSON string into an object)"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ rest2dict(rest) }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex_replace"),(0,r.kt)("td",{parentName:"tr",align:null},"use a regular expression to replace a string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," regex_replace('hello', 'goodbye') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex_findall"),(0,r.kt)("td",{parentName:"tr",align:null},"use a regular expression to find all matches in a string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," regex_findall('l') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex_search"),(0,r.kt)("td",{parentName:"tr",align:null},"use a regular expression to search a string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," regex_search('l') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique"),(0,r.kt)("td",{parentName:"tr",align:null},"exclude duplicates from a list"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3, 1, 2, 3]"," ","|"," unique }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intersect"),(0,r.kt)("td",{parentName:"tr",align:null},"intersect two lists"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3]"," ","|"," intersect(","[2, 3, 4]",") }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"difference"),(0,r.kt)("td",{parentName:"tr",align:null},"difference between two lists"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3]"," ","|"," difference(","[2, 3, 4]",") }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"union"),(0,r.kt)("td",{parentName:"tr",align:null},"union of two lists"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3]"," ","|"," union(","[2, 3, 4]",") }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"minimum value of a list"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3]"," ","|"," min }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"maximum value of a list"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ ","[1, 2, 3]"," ","|"," max }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b64encode"),(0,r.kt)("td",{parentName:"tr",align:null},"base64 encode a string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," b64encode }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b64decode"),(0,r.kt)("td",{parentName:"tr",align:null},"base64 decode a string"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'aGVsbG8sIHdvcmxk' ","|"," b64decode }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phonenumber_valid"),(0,r.kt)("td",{parentName:"tr",align:null},"check if a phone number is valid"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '+33612345678' ","|"," phonenumber_valid }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phonenumber_e164"),(0,r.kt)("td",{parentName:"tr",align:null},"convert a phone number to E164 format"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '+33612345678' ","|"," phonenumber_e164 }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phonenumber_cc"),(0,r.kt)("td",{parentName:"tr",align:null},"extract the country code from a phone number"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '+33612345678' ","|"," phonenumber_cc }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phonenumber_cca"),(0,r.kt)("td",{parentName:"tr",align:null},"extract the country code from a phone number in alpha-2 format"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '+33612345678' ","|"," phonenumber_cca }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phonenumber_type"),(0,r.kt)("td",{parentName:"tr",align:null},"extract the type of a phone number"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '+33612345678' ","|"," phonenumber_type }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strftime"),(0,r.kt)("td",{parentName:"tr",align:null},"format a date"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '2021-01-01' ","|"," strftime('%Y-%m-%d') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to_datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"convert a string to a datetime object"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ '2021-01-01' ","|"," to_datetime }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"to_bool"),(0,r.kt)("td",{parentName:"tr",align:null},'convert a string to a boolean (evaluate to true: "yes", "on", "1", "true", 1)'),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'true' ","|"," to_bool }}")))),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#list-of-builtin-tests"},"From Jinja2")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startswith"),(0,r.kt)("td",{parentName:"tr",align:null},"check if a string starts with a substring"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," startswith('hello') }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endswith"),(0,r.kt)("td",{parentName:"tr",align:null},"check if a string ends with a substring"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ 'hello, world' ","|"," endswith('world') }}")))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"now"),(0,r.kt)("td",{parentName:"tr",align:null},"compute the current date and time"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ now() }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timedelta"),(0,r.kt)("td",{parentName:"tr",align:null},"apply a delta to a date"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ now() ","|"," timedelta(days=1) }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"utcnow"),(0,r.kt)("td",{parentName:"tr",align:null},"compute the current date and time in UTC"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ utcnow() }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"generate a UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ uuid() }}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"randint"),(0,r.kt)("td",{parentName:"tr",align:null},"generate a random integer"),(0,r.kt)("td",{parentName:"tr",align:null},"{{ randint(1, 10) }}")))),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://jinja.palletsprojects.com/en/3.1.x/templates/#assignments"},"Assignments from Jinja2")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},"the current request object.",(0,r.kt)("br",null)," Use ",(0,r.kt)("code",null,"{{ (request.body ","|"," rest2dict).","<","property",">"," }}")," to access request body triggered by an HTTP custom endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"the current instance object running a workflow with the following attributes: ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"id"),(0,r.kt)("li",null,"guid"),(0,r.kt)("li",null,"callback_task_id"),(0,r.kt)("li",null,"user_id"),(0,r.kt)("li",null,"original_request_id"),(0,r.kt)("li",null,"label")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"a key-value map attached to the current workflow instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"tasks ran until there with their status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sub_instances_responses"),(0,r.kt)("td",{parentName:"tr",align:null},'"callback" responses produced by sub-instances')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parent_instance_context"),(0,r.kt)("td",{parentName:"tr",align:null},"context of the parent instance (only filled in sub-instance)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"settings"),(0,r.kt)("td",{parentName:"tr",align:null},"a dictionary containing the settings of the platform (sensitive content are removed for security reason)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null},"a dictionary containing the environment variables of the platform")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxy_name"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of the proxy (only filled in processes started with proxy binding)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"worker_env"),(0,r.kt)("td",{parentName:"tr",align:null},"a dictionary containing the environment variables of the worker process (note: it allows to attach different values depending on the running location)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"the user object of the current user (only filled when the instance has an owner defined)")))))}s.isMDXComponent=!0}}]);