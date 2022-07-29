"use strict";(self.webpackChunkmentalspace_docs=self.webpackChunkmentalspace_docs||[]).push([[587],{90668:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return h}});var i=a(83117),s=a(80102),p=(a(67294),a(3905)),r=a(74933),o=a(24310),n=a(26389),c=(a(63303),a(85162)),l=["components"],m={id:"get-project",sidebar_label:"Get a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_project",parameters:[{in:"path",name:"project_id",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{company_id:{format:"uuid",title:"company_id",type:"string"},id:{format:"uuid",title:"id",type:"string"},status:{enum:["UNKNOWN","PROCESSING","COMPLETED","FAILED"],title:"status",type:"string"},timestamp:{format:"date-time",title:"timestamp",type:"string"}},required:["company_id","id","status","timestamp"],type:"object"}}},description:"Success"},404:{content:{},description:"Not Found"}},tags:["project"],description:"Get a project.",method:"get",path:"/project/{project_id}",servers:[{url:"https://api.mentalspace.ai"}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get a project.",description:{type:"text/plain"},url:{path:["project",":project_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},d=void 0,u={unversionedId:"mentalspace/get-project",id:"mentalspace/get-project",title:"get-project",description:"Get a project.",source:"@site/docs/mentalspace/get-project.api.mdx",sourceDirName:"mentalspace",slug:"/mentalspace/get-project",permalink:"/docs/mentalspace/get-project",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mentalspace/get-project.api.mdx",tags:[],version:"current",frontMatter:{id:"get-project",sidebar_label:"Get a project.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_project",parameters:[{in:"path",name:"project_id",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{company_id:{format:"uuid",title:"company_id",type:"string"},id:{format:"uuid",title:"id",type:"string"},status:{enum:["UNKNOWN","PROCESSING","COMPLETED","FAILED"],title:"status",type:"string"},timestamp:{format:"date-time",title:"timestamp",type:"string"}},required:["company_id","id","status","timestamp"],type:"object"}}},description:"Success"},404:{content:{},description:"Not Found"}},tags:["project"],description:"Get a project.",method:"get",path:"/project/{project_id}",servers:[{url:"https://api.mentalspace.ai"}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get a project.",description:{type:"text/plain"},url:{path:["project",":project_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"project_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},sidebar:"openApiSidebar",previous:{title:"Create (or update) a batch of media files for a company project.",permalink:"/docs/mentalspace/create-company-project-media-batch"},next:{title:"Create (or update) a project.",permalink:"/docs/mentalspace/create-project"}},y={},h=[{value:"Get a project.",id:"get-a-project",level:2}],j={toc:h};function g(e){var t=e.components,a=(0,s.Z)(e,l);return(0,p.kt)("wrapper",(0,i.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"get-a-project"},"Get a project."),(0,p.kt)("p",null,"Get a project."),(0,p.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{}},(0,p.kt)("strong",null,"Path Parameters")),(0,p.kt)("div",null,(0,p.kt)("ul",null,(0,p.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"project_id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,p.kt)("div",null,(0,p.kt)(n.Z,{mdxType:"ApiTabs"},(0,p.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,p.kt)("div",null,(0,p.kt)("p",null,"Success")),(0,p.kt)("div",null,(0,p.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,p.kt)("summary",{style:{textAlign:"left"}},(0,p.kt)("strong",null,"Schema")),(0,p.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,p.kt)("ul",{style:{marginLeft:"1rem"}},(0,p.kt)(o.Z,{collapsible:!1,name:"company_id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaDescription:void 0,schemaName:"status",qualifierMessage:"**Possible values:** [`UNKNOWN`, `PROCESSING`, `COMPLETED`, `FAILED`]",mdxType:"SchemaItem"}),(0,p.kt)(o.Z,{collapsible:!1,name:"timestamp",required:!0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,mdxType:"SchemaItem"}))))),(0,p.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,p.kt)("div",null,(0,p.kt)("p",null,"Not Found")),(0,p.kt)("div",null)))))}g.isMDXComponent=!0}}]);