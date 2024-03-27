"use strict";(self.webpackChunkapio_core=self.webpackChunkapio_core||[]).push([[653],{26461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(85893),i=t(11151);const r={sidebar_position:3},s="Zen",l={id:"workflows/zen",title:"Zen",description:"Keep your workflow clean",source:"@site/docs/workflows/zen.md",sourceDirName:"workflows",slug:"/workflows/zen",permalink:"/apio-core-docs/docs/workflows/zen",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/apio-core-docs/docs/workflows/templates"},next:{title:"Advanced",permalink:"/apio-core-docs/docs/category/advanced"}},a={},d=[{value:"Keep your workflow clean",id:"keep-your-workflow-clean",level:2},{value:"Use the right node for the right job",id:"use-the-right-node-for-the-right-job",level:2},{value:"Be secure",id:"be-secure",level:2},{value:"Be profitient in the template language",id:"be-profitient-in-the-template-language",level:2},{value:"Be part of the community",id:"be-part-of-the-community",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"zen",children:"Zen"}),"\n",(0,o.jsx)(n.h2,{id:"keep-your-workflow-clean",children:"Keep your workflow clean"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use subworkflows when a group of nodes can be reused in multiple workflows."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use the labels and the descriptions to store information about your workflow."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When writing templates, try to keep them as simple as possible. If you need to write a complex template, consider using internal variables."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Bad",type:"danger",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja2",children:"{% for u in (request.body|rest2dict).users|selectattr(email)|list %}{{u|pp_dict}}{% endfor %}\n"})})}),"\n",(0,o.jsx)(n.admonition,{title:"Good",type:"tip",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja2",children:"{% set body = request.body|rest2dict %}\n{% set users_with_mail = body.users|selectattr(email) %}\n\n{% for u in users_with_mail|list %}\n    {{u|pp_dict}}\n{% endfor %}\n"})})}),"\n",(0,o.jsx)(n.h2,{id:"use-the-right-node-for-the-right-job",children:"Use the right node for the right job"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Prefer the node ",(0,o.jsx)(n.a,{href:"nodes/#multiple-context-setter",children:"multiple context setter"})," over the node ",(0,o.jsx)(n.a,{href:"nodes/#context-setter",children:"Context setter"})," when you need to set multiple contexts."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Prefer the ",(0,o.jsx)(n.a,{href:"nodes/#macro",children:"macro"})," when you have only one input to run a subworkflow. It will give you a cleaner workflow than extracting the response from subworkflows by hand."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"be-secure",children:"Be secure"}),"\n",(0,o.jsx)(n.p,{children:"Workflows give you maximum of flexibility but still, you need to be careful about the security of your data. Here are some tips to help you to keep your data safe."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use environment variables to store your credentials."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Careful with the user input. If you need to use user input, make sure to validate it before using it."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Careful with user right, especially when the user is authenticated with SSO mechanisms."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"be-profitient-in-the-template-language",children:"Be profitient in the template language"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The more you will know the template language, the more you will be able to write complex workflows in a simple but efficient way."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Use built-in filters and tests when possible. They are faster than the custom ones. And cleaner than making a lot of ",(0,o.jsx)(n.code,{children:"if"})," statements or loops."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Use the template playground to test your templates before having hard time debugging a complete workflow."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"be-part-of-the-community",children:"Be part of the community"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Join us on Slack to share your workflows, your ideas and to get help from the community."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);