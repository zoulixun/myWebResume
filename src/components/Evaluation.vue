<template>
	<div class="evaluation">
		<el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo"
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
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span><strong>自我评价</strong></span>
  </div>
  <div v-for="evitem in messageArray" :key="evitem" class="text item">
    {{ evitem }}
  </div>
</el-card>
  </div>
</template>

<script>
  export default {
	  name:'Evaluation',
    data() {
      return {
       activeIndex: '6',
       activeIndex2: '6',
	   messageArray:[
		   "1年Web前端开发经验，擅于快速绘制网站原型图，精通html（5)，css（3）以及div+css布局方式，精通jQuery，ES5基础掌握牢固，掌握ES6常用语法, 掌握Vue.js、Bootstrap、Element UI框架的使用，掌握Axios，掌握Git版本控制管理工具的使用，对Webpack模块打包工具、Sass预处理器、Vuex有一定的了解。"	   
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

 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
	  color: black !important;
		position: relative;
		max-width: 80%;
		height: auto;
    width: 800px;
	margin: 0 auto;
	margin-top: 15%;
	background: rgba(255, 255, 255, 0.1);
	color: #CCCCCC;
  }
  .evaluation{
	  width: 100%;
	  height: 960px;
	  background: url(../assets/car.jpg);
	  background-size: 100% 100%;
  }
</style>

