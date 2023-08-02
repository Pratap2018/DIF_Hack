"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{755:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var a=r(252);const i={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function n(e,t,r,n,l,o){const s=(0,a.up)("ContactForm"),c=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(s),(0,a.Wm)(c,{contacts:e.contacts},null,8,["contacts"])])}var l=r(508),o=r.n(l);const s={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},d=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),u={action:"#",class:"font-general-regular space-y-7"};function m(e,t,r,i,n,l){const o=(0,a.up)("FormInput"),m=(0,a.up)("FormTextarea"),p=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",c,[d,(0,a._)("form",u,[(0,a.Wm)(o,{label:"Full Name",inputIdentifier:"name"}),(0,a.Wm)(o,{label:"Email",inputIdentifier:"email",inputType:"email"}),(0,a.Wm)(o,{label:"Subject",inputIdentifier:"subject"}),(0,a.Wm)(m,{label:"Message",textareaIdentifier:"message"}),(0,a._)("div",null,[(0,a.Wm)(p,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])])])])}var p=r(577);function g(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,p.zw)(r.title),1)}var f={props:["title"],data:()=>({})},b=r(744);const x=(0,b.Z)(f,[["render",g]]);var y=x;const j=["for"],h=["id","name","placeholder","aria-label","value","type"];function v(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:r.label},(0,p.zw)(r.label),9,j),(0,a._)("input",(0,a.dG)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.inputIdentifier,name:r.inputIdentifier,placeholder:r.label,"aria-label":r.inputIdentifier,value:r.val,type:r.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,h)])}var k={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}};const w=(0,b.Z)(k,[["render",v]]);var I=w;const _=["for"],P=["id","name","aria-label","placeholder"];function D(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:r.textareaIdentifier},(0,p.zw)(r.label),9,_),(0,a._)("textarea",(0,a.dG)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.textareaIdentifier,name:r.textareaIdentifier,"aria-label":r.textareaIdentifier,placeholder:r.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,P)])}var q={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}};const H=(0,b.Z)(q,[["render",D]]);var S=H,z={components:{Button:y,FormInput:I,FormTextarea:S}};const C=(0,b.Z)(z,[["render",m]]);var W=C;const T={class:"w-full md:w-1/2"},Z={class:"text-left max-w-xl px-6"},L=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),F={class:"font-general-regular"},U=["data-feather"];function K(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("div",Z,[L,(0,a._)("ul",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,U),(0,a._)("a",{href:"#",class:(0,p.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,p.zw)(e.name),3)])))),128))])])])}var M={props:["contacts"]};const Y=(0,b.Z)(M,[["render",K]]);var N=Y,A={components:{ContactForm:W,ContactDetails:N},data:()=>({contacts:[{id:1,name:"Your Address, Your City, Your Country",icon:"map-pin"},{id:2,name:"email@domain.com",icon:"mail"},{id:3,name:"555 8888 888",icon:"phone"}]}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const G=(0,b.Z)(A,[["render",n]]);var $=G},773:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(252);const i={class:"container mx-auto"};function n(e,t,r,n,l,o){const s=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(s)])}var l=r(70),o={name:"Projects",components:{ProjectsGrid:l.Z}},s=r(744);const c=(0,s.Z)(o,[["render",n]]);var d=c},188:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var a=r(252);const i={class:"container mx-auto mt-10 sm:mt-20"};function n(e,t,r,n,l,o){const s=(0,a.up)("ProjectHeader"),c=(0,a.up)("ProjectGallery"),d=(0,a.up)("ProjectInfo"),u=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(s,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(c,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(d,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(u,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var l=r(508),o=r.n(l),s=r(577);const c={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},d={class:"flex"},u={class:"flex items-center mr-10"},m=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},f=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),b={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function x(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",c,(0,s.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",d,[(0,a._)("div",u,[m,(0,a._)("span",p,(0,s.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",g,[f,(0,a._)("span",b,(0,s.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var y={props:["singleProjectHeader"]},j=r(744);const h=(0,j.Z)(y,[["render",x]]);var v=h;const k={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},w=["src"];function I(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,w)])))),128))])}var _={props:["projectImages"]};const P=(0,j.Z)(_,[["render",I]]);var D=P;const q={class:"block sm:flex gap-0 sm:gap-10 mt-14"},H={class:"w-full sm:w-1/3 text-left"},S={class:"mb-7"},z={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},C={class:"leading-loose"},W={class:"mb-7"},T={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},Z={class:"font-general-regular text-primary-dark dark:text-ternary-light"},L={class:"mb-7"},F={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},U={class:"font-general-regular text-primary-dark dark:text-ternary-light"},K={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},M={class:"flex items-center gap-3 mt-5"},Y=["href"],N=["data-feather"],A={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},G={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function $(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",H,[(0,a._)("div",S,[(0,a._)("p",z,(0,s.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,s.zw)(e.title)+": ",1),(0,a._)("a",{href:"#",class:(0,s.C_)("Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,s.zw)(e.details),3)])))),128))])]),(0,a._)("div",W,[(0,a._)("p",T,(0,s.zw)(r.projectInfo.objectivesHeading),1),(0,a._)("p",Z,(0,s.zw)(r.projectInfo.objectivesDetails),1)]),(0,a._)("div",L,[(0,a._)("p",F,(0,s.zw)(r.projectInfo.technologies[0].title),1),(0,a._)("p",U,(0,s.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",K,(0,s.zw)(r.projectInfo.socialSharingsHeading),1),(0,a._)("div",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,N)],8,Y)))),128))])])]),(0,a._)("div",A,[(0,a._)("p",G,(0,s.zw)(r.projectInfo.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,s.zw)(e.details),1)))),128))])])}var R={props:["projectInfo"],mounted(){o().replace()},updated(){o().replace()}};const B=(0,j.Z)(R,[["render",$]]);var J=B;const O={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},E={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},Q={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},V=["src","alt"];function X(e,t,r,i,n,l){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("p",E,(0,s.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",Q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,V)])))),128))])])}var ee={props:["relatedProject"]};const te=(0,j.Z)(ee,[["render",X]]);var re=te,ae={name:"Projects",components:{ProjectHeader:v,ProjectGallery:D,ProjectInfo:J,ProjectRelatedProjects:re},data:()=>({singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(35)},{id:2,title:"Kabul Project Management UI",img:r(294)},{id:3,title:"Kabul Project Management UI",img:r(687)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:5,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/c/StomanStudio"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(725)},{id:2,title:"Web Application",img:r(600)},{id:3,title:"UI Design",img:r(34)},{id:4,title:"Kabul Mobile App UI",img:r(687)}]}}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const ie=(0,j.Z)(ae,[["render",n]]);var ne=ie},725:function(e,t,r){e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},687:function(e,t,r){e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},35:function(e,t,r){e.exports=r.p+"img/ui-project-1.96e7f21e.jpg"},34:function(e,t,r){e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},600:function(e,t,r){e.exports=r.p+"img/web-project-1.d1debdf5.jpg"},294:function(e,t,r){e.exports=r.p+"img/web-project-2.ecd6c182.jpg"}}]);
//# sourceMappingURL=projects.6527e675.js.map