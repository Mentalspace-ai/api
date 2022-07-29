"use strict";(self.webpackChunkmentalspace_docs=self.webpackChunkmentalspace_docs||[]).push([[7937],{27352:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return f}});var i=a(83117),s=a(80102),m=(a(67294),a(3905)),d=a(74933),n=a(24310),r=a(26389),l=(a(63303),a(85162)),p=["components"],o={id:"get-media",sidebar_label:"Get a media file.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_media",parameters:[{in:"path",name:"media_id",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{id:{format:"uuid",title:"id",type:"string"},project_id:{format:"uuid",title:"project_id",type:"string"},status:{enum:["UNKNOWN","PROCESSING","COMPLETED","FAILED"],title:"status",type:"string"},timestamp:{format:"date-time",title:"timestamp",type:"string"},url:{title:"url",type:"string"}},required:["id","project_id","status","timestamp","url"],type:"object"}}},description:"Success"},404:{content:{},description:"Not Found"}},tags:["media"],description:"Get a media file.",method:"get",path:"/media/{media_id}",servers:[{url:"https://api.mentalspace.ai"}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get a media file.",description:{type:"text/plain"},url:{path:["media",":media_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"media_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},c=void 0,u={unversionedId:"mentalspace/get-media",id:"mentalspace/get-media",title:"get-media",description:"Get a media file.",source:"@site/docs/mentalspace/get-media.api.mdx",sourceDirName:"mentalspace",slug:"/mentalspace/get-media",permalink:"/docs/mentalspace/get-media",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mentalspace/get-media.api.mdx",tags:[],version:"current",frontMatter:{id:"get-media",sidebar_label:"Get a media file.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"get_media",parameters:[{in:"path",name:"media_id",required:!0,schema:{type:"string"}}],responses:{200:{content:{"application/json":{schema:{properties:{id:{format:"uuid",title:"id",type:"string"},project_id:{format:"uuid",title:"project_id",type:"string"},status:{enum:["UNKNOWN","PROCESSING","COMPLETED","FAILED"],title:"status",type:"string"},timestamp:{format:"date-time",title:"timestamp",type:"string"},url:{title:"url",type:"string"}},required:["id","project_id","status","timestamp","url"],type:"object"}}},description:"Success"},404:{content:{},description:"Not Found"}},tags:["media"],description:"Get a media file.",method:"get",path:"/media/{media_id}",servers:[{url:"https://api.mentalspace.ai"}],info:{title:"mentalspace",version:"1.0"},postman:{name:"Get a media file.",description:{type:"text/plain"},url:{path:["media",":media_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"media_id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/mentalspace/mentalspace"},sidebar:"openApiSidebar",previous:{title:"Create (or update) a batch of media files for a company project.",permalink:"/docs/mentalspace/create-company-project-media-batch"},next:{title:"Get media files for a project.",permalink:"/docs/mentalspace/get-project-media"}},h={},f=[{value:"Get a media file.",id:"get-a-media-file",level:2}],y={toc:f};function g(e){var t=e.components,a=(0,s.Z)(e,p);return(0,m.kt)("wrapper",(0,i.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h2",{id:"get-a-media-file"},"Get a media file."),(0,m.kt)("p",null,"Get a media file."),(0,m.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("strong",null,"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(d.Z,{className:"paramsItem",param:{in:"path",name:"media_id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)(r.Z,{mdxType:"ApiTabs"},(0,m.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Success")),(0,m.kt)("div",null,(0,m.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{textAlign:"left"}},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(n.Z,{collapsible:!1,name:"id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,m.kt)(n.Z,{collapsible:!1,name:"project_id",required:!0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,m.kt)(n.Z,{collapsible:!1,name:"status",required:!0,schemaDescription:void 0,schemaName:"status",qualifierMessage:"**Possible values:** [`UNKNOWN`, `PROCESSING`, `COMPLETED`, `FAILED`]",mdxType:"SchemaItem"}),(0,m.kt)(n.Z,{collapsible:!1,name:"timestamp",required:!0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,mdxType:"SchemaItem"}),(0,m.kt)(n.Z,{collapsible:!1,name:"url",required:!0,schemaDescription:void 0,schemaName:"url",qualifierMessage:void 0,mdxType:"SchemaItem"}))))),(0,m.kt)(l.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Not Found")),(0,m.kt)("div",null)))))}g.isMDXComponent=!0}}]);