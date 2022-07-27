"use strict";(self.webpackChunkmentalspace_docs=self.webpackChunkmentalspace_docs||[]).push([[4850],{5166:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return l},default:function(){return j},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var i=a(83117),o=a(80102),r=(a(67294),a(3905)),p=a(74933),n=a(24310),s=a(26389),m=(a(63303),a(85162)),c=["components"],d={id:"get-company-project-media",sidebar_label:"Get media for a project.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["project","media"],operationId:"get_company_project_media",parameters:[{name:"project_id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Success",content:{"application/json":{schema:{required:["company_id","id","name","timestamp"],type:"object",properties:{company_id:{title:"company_id",type:"string",format:"uuid"},name:{title:"name",type:"string"},id:{title:"id",type:"string",format:"uuid"},timestamp:{title:"timestamp",type:"string",format:"date-time"}}}}}},404:{description:"Not Found",content:{}}},description:"Get media for a project.",method:"get",path:"/project/{project_id}/media",servers:[{url:"https://lz52tkrx47.execute-api.us-west-2.amazonaws.com/{basePath}",variables:{basePath:{default:"api"}}}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get media for a project.",description:{type:"text/plain"},url:{path:["project",":project_id","media"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},l=void 0,u={unversionedId:"mentalspace/get-company-project-media",id:"mentalspace/get-company-project-media",title:"get-company-project-media",description:"Get media for a project.",source:"@site/docs/mentalspace/get-company-project-media.api.mdx",sourceDirName:"mentalspace",slug:"/mentalspace/get-company-project-media",permalink:"/api/docs/mentalspace/get-company-project-media",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mentalspace/get-company-project-media.api.mdx",tags:[],version:"current",frontMatter:{id:"get-company-project-media",sidebar_label:"Get media for a project.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["project","media"],operationId:"get_company_project_media",parameters:[{name:"project_id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Success",content:{"application/json":{schema:{required:["company_id","id","name","timestamp"],type:"object",properties:{company_id:{title:"company_id",type:"string",format:"uuid"},name:{title:"name",type:"string"},id:{title:"id",type:"string",format:"uuid"},timestamp:{title:"timestamp",type:"string",format:"date-time"}}}}}},404:{description:"Not Found",content:{}}},description:"Get media for a project.",method:"get",path:"/project/{project_id}/media",servers:[{url:"https://lz52tkrx47.execute-api.us-west-2.amazonaws.com/{basePath}",variables:{basePath:{default:"api"}}}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get media for a project.",description:{type:"text/plain"},url:{path:["project",":project_id","media"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},sidebar:"openApiSidebar",previous:{title:"Create (or update) a project.",permalink:"/api/docs/mentalspace/create-project"},next:{title:"Create (or update) a batch of media.",permalink:"/api/docs/mentalspace/create-media-batch"}},y={},h=[{value:"Get media for a project.",id:"get-media-for-a-project",level:2}],f={toc:h};function j(e){var t=e.components,a=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-media-for-a-project"},"Get media for a project."),(0,r.kt)("p",null,"Get media for a project."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(p.Z,{className:"paramsItem",param:{name:"project_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success")),(0,r.kt)("div",null,(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(n.Z,{collapsible:!1,name:"company_id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"name",required:!0,schemaDescription:void 0,schemaName:"name",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,r.kt)(n.Z,{collapsible:!1,name:"timestamp",required:!0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Not Found")),(0,r.kt)("div",null)))))}j.isMDXComponent=!0}}]);