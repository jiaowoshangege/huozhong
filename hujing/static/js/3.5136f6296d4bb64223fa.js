webpackJsonp([3],{"7Otq":function(e,t,a){e.exports=a.p+"static/img/logo.23f2859.png"},NFOp:function(e,t){},fYsj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("5reh"),i={name:"layout",data:function(){return{contentStyle:{height:window.innerHeight+"px"},siderStyle:{height:window.innerHeight+"px"},navStyle:{height:window.innerHeight-120-42+"px"},screenHeight:window.innerHeight,numIndex:0,flag:1,salesSpe1Flag:!1,menuData:[],menuData1:this.myData.menuData1,menuData2:this.myData.menuData2,menuDataB:this.myData.menuDataB,menuDataSalesSpe1:this.myData.menuDataSalesSpe1,menuData3:this.myData.menuData3,collapsed:!1}},mounted:function(){var e=this;window.onresize=function(){return e.screenHeight=window.innerHeight,e.contentStyle={height:e.screenHeight+"px"},e.siderStyle={height:e.screenHeight+"px"},void(e.navStyle={height:e.screenHeight-120-42+"px"})}},watch:{screenHeight:function(e){this.screenHeight=e,this.contentStyle={height:this.screenHeight+"px"},this.siderStyle={height:this.screenHeight+"px"},this.navStyle={height:this.screenHeight-120-42+"px"}}},methods:{toggleSider:function(){this.collapsed=!this.collapsed,this.$store.commit(s.a,this.collapsed)},goTo:function(e){var t=e.flag;if(1===t)this.$router.push(e.href);else if(2===t){var a=this.$route.params,s="/"+e.icon+"/"+a.id+"/"+a.name+"/"+a.department_name;this.$router.push(s)}},goToUserSet:function(){this.$router.push("/applUser")},goToGuide:function(){window.open("http://doc.aihujing.com")}},computed:{isActive:{get:function(){var e=this.$store.state.power;e=(e=(e=(e=(e=e.replace("11","十一")).replace("12","十二")).replace("13","十三")).replace("14","十四")).replace("15","十五");var t=[];this.$store.state.statistics&&(t=this.$store.state.statistics.split(","));if(this.salesSpe1Flag=!1,void 0!==this.$root._route.params.id)this.menuData=this.menuData2,this.$store.state.power.includes("b")&&(this.menuData=this.menuDataB,this.$route.params.department_name===this.salesSpe1&&(this.salesSpe1Flag=!0,this.menuData=this.menuDataSalesSpe1));else{this.menuData=[];var a=!0,s=!1,i=void 0;try{for(var n,l=this.menuData1[Symbol.iterator]();!(a=(n=l.next()).done);a=!0){var o=n.value;15===o.id&&e.includes("十五")&&this.menuData.push(o),6!==o.id&&e.includes(o.id)&&this.menuData.push(o),6===o.id&&(e.includes("6")||e.includes("十二")||e.includes("十三")||e.includes("十四"))&&this.menuData.push(o),11===o.id&&e.includes("十一")&&this.menuData.push(o),4===o.id&&!e.includes(4)&&e.includes(7)&&this.menuData.push(o)}}catch(e){s=!0,i=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw i}}}for(var r=0;r<this.menuData.length;r++){var c=this.menuData[r];c.selected=!1,1===this.menuData[r].flag?(this.$root._route.path===this.menuData[r].href&&(c.selected=!0,this.flag=c.flag),"roleManage"===this.$root._route.name&&"quality"===c.icon&&(c.selected=!0,c.flag=1)):2===this.menuData[r].flag&&(t.length>0&&(this.menuData[r].num=t[r]),this.$root._route.path.includes(this.menuData[r].icon)&&(c.selected=!0,this.flag=c.flag))}return this.menuData},set:function(e){}}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"min-width":"1200px"}},[s("v-layout",[s("v-sider",{class:{"long-silder":!e.collapsed,"short-silder":e.collapsed},style:e.contentStyle,attrs:{collapsible:"",collapsed:e.collapsed,trigger:!1,"collapsed-width":64}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"logo"},[e._v("虎鲸销售洞见")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"line"}),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"v-ul",class:{active:e.isActive},staticStyle:{overflow:"auto"},style:e.navStyle},[s("el-scrollbar",e._l(e.menuData,function(t){return s("li",{key:t.name,staticClass:"v-li",class:{"v-li2":2===t.flag},on:{click:function(a){e.goTo(t)},mouseover:function(e){t.hover=!0},mouseout:function(e){t.hover=!1}}},[1===t.flag?s("span",{staticStyle:{"margin-right":"5px"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!data.hover"}]},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"data.selected"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+".png",alt:t.name}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.selected,expression:"!data.selected"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+"1.png",alt:t.name}})]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.hover,expression:"data.hover"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+".png",alt:t.name}})]):e._e(),e._v(" "),s("span",{staticClass:"nav-text",class:{"nav-text1":t.selected}},[e._v("\n            "+e._s(t.name)+"\n            "),2!==t.flag||"perContent"===t.icon||e.salesSpe1Flag?e._e():s("span",[e._v("("+e._s(t.num)+")")])])])}))],1),e._v(" "),1===e.flag?s("div",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"clearfix sider-footer"},[s("div",{staticStyle:{width:"80%","border-top":"1px solid rgba(255, 255, 255, .3)","margin-left":"10%"}}),e._v(" "),s("div",{staticStyle:{float:"left","margin-left":"40px"}},[s("div",{staticClass:"sider-footer-div",attrs:{title:"用户管理"},on:{click:function(t){e.goToUserSet()}}},[s("v-icon",{attrs:{type:"user"}})],1),e._v(" "),s("div",{staticClass:"sider-footer-div1",staticStyle:{"margin-left":"24px"},attrs:{title:"查看帮助文档"},on:{click:function(t){e.goToGuide()}}},[s("v-icon",{attrs:{type:"question"}})],1),e._v(" "),s("div",{staticClass:"sider-footer-div2",staticStyle:{"margin-left":"24px"},attrs:{title:"收起"},on:{click:function(t){e.toggleSider()}}},[s("v-icon",{attrs:{type:"menu-fold"}})],1)])]):e._e(),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],staticClass:"logo",staticStyle:{height:"84px",margin:"0 auto","line-height":"116px"}},[s("img",{attrs:{src:a("7Otq"),width:"42px",height:"42px"}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],staticClass:"line"}),e._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],staticClass:"v-ul",class:{active:e.isActive},staticStyle:{overflow:"auto"},style:e.navStyle},[s("el-scrollbar",e._l(e.menuData,function(t){return s("li",{key:t.name,staticClass:"v-li",class:{"v-li2":2===t.flag},staticStyle:{"padding-left":"0","text-align":"center"},attrs:{title:t.name},on:{click:function(a){e.goTo(t)},mouseover:function(e){t.hover=!0},mouseout:function(e){t.hover=!1}}},[1===t.flag?s("span",{staticStyle:{"margin-right":"5px"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.hover,expression:"!data.hover"}]},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.selected,expression:"data.selected"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+".png",alt:t.name}}),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:!t.selected,expression:"!data.selected"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+"1.png",alt:t.name}})]),e._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.hover,expression:"data.hover"}],staticClass:"v-icon",attrs:{src:"static/"+t.icon+".png",alt:t.name}})]):e._e()])}))],1),e._v(" "),1===e.flag?s("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],staticClass:"clearfix sider-footer"},[s("div",{staticStyle:{width:"80%","border-top":"1px solid rgba(255, 255, 255, .3)","margin-left":"10%"}}),e._v(" "),s("div",{staticStyle:{float:"left"}},[s("div",{staticClass:"sider-footer-div2",staticStyle:{"margin-left":"16px"},attrs:{title:"展开"},on:{click:function(t){e.toggleSider()}}},[s("v-icon",{attrs:{type:"menu-unfold"}})],1)])]):e._e()]),e._v(" "),s("v-content",{staticStyle:{padding:"10px",overflow:"auto"},style:e.contentStyle},[s("router-view")],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,n,!1,function(e){a("NFOp")},"data-v-2713df1d",null);t.default=l.exports}});