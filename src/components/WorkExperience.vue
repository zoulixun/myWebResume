<template>
	<div class="workExperience">
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
    <span><strong>工作经历</strong></span>
  </div>
  <div v-for="workitem in messageArray" :key="workitem" class="text item">
    {{ workitem }}
  </div>
</el-card>
  </div>
</template>

<script>
  export default {
	  name:'WorkExperience',
    data() {
      return {
       activeIndex: '3',
       activeIndex2: '3',
	   messageArray:[
		   "2016.07-2017.08     大连平安普惠投资咨询有限公司担任客户经理,并获得优秀个人荣誉称号",
		   "2018.03-2018.12     大连建筑设计研究所有限公司信息部担任Web前端开发负责人"		   
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
    width: 800px;
	margin: 0 auto;
	margin-top: 250px;
	background: rgba(255, 255, 255, 0.1);
	color: #CCCCCC;
  }
  .workExperience{
	  width: 100%;
	  height: 960px;
	  background: url(../assets/joshua-sorenson-1242547-unsplash.jpg);
	  background-size: 100% 100%;
  }
</style>

