<template>
	<div class="projectExperience">
		<el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo"p
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#0099CC"
	  text-color="#FFFFFF"
	  active-text-color="#ffd04b">
	  <el-menu-item index="1"><router-link to="/MyInfo">个人信息</router-link></el-menu-item>
	  <el-menu-item index="2"><router-link to="/EducationAndCertificate">教育背景/所获证书</router-link></el-menu-item>
	  <el-menu-item index="3"><router-link to="/WorkExperience">工作经历</router-link></el-menu-item>
	  <el-menu-item index="4"><router-link to="/ProjectExperience">项目经历</router-link></el-menu-item>
	  <el-menu-item index="5"><router-link to="/Interest">兴趣爱好</router-link></el-menu-item>
	  <el-menu-item index="6"><router-link to="/Evaluation">自我评价</router-link></el-menu-item>
	</el-menu>
	<div class="myCarousel">
	<el-carousel indicator-position="outside">
    <el-carousel-item v-for="pro_item in proMessage">
      <p style="text-align: center;">{{pro_item.title}}</p>
	  <p>{{pro_item.environment}}</p>
	  <p>{{pro_item.tools}}</p>
	  <p>{{pro_item.proIntro}}</p>
	  <p>{{pro_item.detail}}</p>	  
    </el-carousel-item>
  </el-carousel>
	</div>
  </div>
</template>

<script>
  export default {
	  name:'ProjectExperience',
    data() {
      return {
       activeIndex: '4',
       activeIndex2: '4',
	   proMessage:[
		  {
		  "title":"一．工程师协助系统",
		  "environment":"技术栈:  Html5，DIV+CSS， jQuery，Bootstrap，Ajax，Fontawsome",
		  "tools":"开发工具:HBuilderX， EditPlus， Eclipse， Google Chrome DevTools",
		  "proIntro":"项目描述: 建筑工程师可以随时提交工作中遇到的软硬件问题到该系统，支持文字描述，图片上传，word/excel文档上传方式，被提交的问题全员可见，问题主要交由信息部成员解决，其他公司员工也具有回答权限，同时，评选年度优秀员工时对于积极主动回答问题的员工会有加分机制，大大提升了工作效率，目前该系统仅为公司内部使用，以后可能会考虑商用。",
		  "detail":"项目详情: 该项目严格遵循了W3C规范并应用了Html5标准,使用了Bootstrap+jQuery作为前端框架。在与后台进行数据对接时应用了jQuery Ajax技术，数据传输格式一律采用了Json格式，动态数据显示以及逻辑行为处理使用了jQuery。该项目前端所有编码任务由我独自完成。"
		  },
		  {
		  "title":"二．数字蓝图系统",
		  "environment":"技术栈:  Html5， DIV+CSS， Vue.js ，ElementUI， Axios，Fontawsome",
		  "tools":"开发工具: HBuilderX， EditPlus， Eclipse， Google Chrome DevTools",
		  "proIntro":"项目描述: 建筑工程项目经理将已完成项目的CAD图纸提交到该系统，通过该系统将图纸成批次的发送给合作打印社打印出图。图纸上传到该系统时，会经过在线图纸检查（PDF版本）---图纸审核（PDF版本）---打印管理这三个过程，通过该系统很大程度上提升了工程师的检图，挑图，替图的工作效率，并且节约了纸张成本，目前该系统仅为公司内部使用，以后可能会考虑商用。",
		  "detail":"项目详情: 该项目严格遵循了W3C规范并应用了Html5标准,使用了vue+vue-router+element-UI作为前端框架,在与后台进行数据对接时应用了Axios技术，数据传输格式一律采用了Json格式。该项目包括vue-cli项目搭建以及所有编码任务由我独自完成。"
		  }	  
		]
	  }
    },
	  methods: {
	    handleSelect(key, keyPath) {
	      console.log(key, keyPath);
	    }
	  }
  }
</script>

<style scoped>
	el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
	padding-left: 20px;
	background: rgb(255,255,255,0.2);
	width: 80%;
	margin-left: 10% !important;
	border-radius: 10px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
	padding-left: 20px;
	background: rgb(255,255,255,0.2);
	width: 80%;
	margin-left: 10% !important;
	border-radius: 10px;
  }
  .myCarousel{
	  margin-top: 15%;
  }
  .projectExperience{
	  width: 100%;
	  height: 960px;
	  background:url(../assets/joshua-sorenson-1242547-unsplash.jpg);
	  background-size: 100% 100%;
  }
</style>

