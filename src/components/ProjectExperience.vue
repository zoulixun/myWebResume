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
		  "environment":"开发环境:  Windows7/Windows10、Google Chrome",
		  "tools":"开发工具: HBuilderX、EditPlus、Google Chrome",
		  "proIntro":"",
		  "detail":"项目详情: 该项目严格遵循了W3C规范并应用了Html5标准,页面结构与样式使用DIV+CSS手写,未使用任何开源UI框架。在与后台进行数据交换时应用了jQuery Ajax API,数据格式采用了Json,动态数据显示以及逻辑行为处理使用了jQuery框架。该项目前端所有编码任务由我独自完成。"
		  },
		  {
		  "title":"二．数字蓝图系统",
		  "environment":"开发环境:  Windows7/Windows10、Google Chrome",
		  "tools":"开发工具: HBuilderX、EditPlus、Google Chrome",
		  "proIntro":"",
		  "detail":"项目详情: 该项目严格遵循了W3C规范并应用了Html5标准,使用Webpack+Vue.js+Element-UI作为基础框架,并应用了vue-router与axios实现了页面的跳转与数据的请求和发送。该项目前端所有编码任务由我独自完成。"
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

