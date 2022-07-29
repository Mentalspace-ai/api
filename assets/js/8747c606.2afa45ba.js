"use strict";(self.webpackChunkmentalspace_docs=self.webpackChunkmentalspace_docs||[]).push([[7288],{45885:function(a,e,t){t.r(e),t.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return y}});var n=t(83117),s=t(80102),i=(t(67294),t(3905)),o=t(74933),p=(t(24310),t(26389)),r=(t(63303),t(85162)),l=["components"],d={id:"put-analysis",sidebar_label:"Create or update company analysis.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"put_analysis",parameters:[{in:"path",name:"company_id",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},description:"Analysis definition",required:!0},responses:{201:{content:{},description:"Created or updated"},400:{content:{},description:"Bad Request"}},tags:["analysis"],"x-amazon-apigateway-integration":{contentHandling:"CONVERT_TO_TEXT",httpMethod:"POST",passthroughBehavior:"when_no_match",responses:{default:{statusCode:"200"}},type:"aws_proxy",uri:"arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:214515308706:function:mentalspace-APIHandler-aKWJlMdUMPZT/invocations"},description:"Create or update company analysis.",method:"put",path:"/company/{company_id}/analysis",servers:[{url:"https://api.mentalspace.ai"}],jsonRequestBodyExample:{},info:{title:"mentalspace",version:"1.0"},postman:{name:"Create or update company analysis.",description:{type:"text/plain"},url:{path:["company",":company_id","analysis"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"company_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mentalspace/mentalspace"},c=void 0,u={unversionedId:"mentalspace/put-analysis",id:"mentalspace/put-analysis",title:"put-analysis",description:"Create or update company analysis.",source:"@site/docs/mentalspace/put-analysis.api.mdx",sourceDirName:"mentalspace",slug:"/mentalspace/put-analysis",permalink:"/docs/mentalspace/put-analysis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mentalspace/put-analysis.api.mdx",tags:[],version:"current",frontMatter:{id:"put-analysis",sidebar_label:"Create or update company analysis.",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"put_analysis",parameters:[{in:"path",name:"company_id",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},description:"Analysis definition",required:!0},responses:{201:{content:{},description:"Created or updated"},400:{content:{},description:"Bad Request"}},tags:["analysis"],"x-amazon-apigateway-integration":{contentHandling:"CONVERT_TO_TEXT",httpMethod:"POST",passthroughBehavior:"when_no_match",responses:{default:{statusCode:"200"}},type:"aws_proxy",uri:"arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:214515308706:function:mentalspace-APIHandler-aKWJlMdUMPZT/invocations"},description:"Create or update company analysis.",method:"put",path:"/company/{company_id}/analysis",servers:[{url:"https://api.mentalspace.ai"}],jsonRequestBodyExample:{},info:{title:"mentalspace",version:"1.0"},postman:{name:"Create or update company analysis.",description:{type:"text/plain"},url:{path:["company",":company_id","analysis"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"company_id"}]},header:[{key:"Content-Type",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/mentalspace/mentalspace"},sidebar:"openApiSidebar",previous:{title:"Get company analysis.",permalink:"/docs/mentalspace/get-analysis"},next:{title:"Get media files for a company project.",permalink:"/docs/mentalspace/get-company-project-media"}},m={},y=[{value:"Create or update company analysis.",id:"create-or-update-company-analysis",level:2}],h={toc:y};function k(a){var e=a.components,t=(0,s.Z)(a,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-or-update-company-analysis"},"Create or update company analysis."),(0,i.kt)("p",null,"Create or update company analysis."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"company_id",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,i.kt)("p",null,"Analysis definition"))),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))),(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(r.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Created or updated")),(0,i.kt)("div",null)),(0,i.kt)(r.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)))))}k.isMDXComponent=!0}}]);