<template>
	<div class="myInfo">
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
    <span><strong>个人信息</strong></span>
  </div>
  <div v-for="myInitem in messageArray" :key="myInitem" class="text item">
    {{ myInitem }}
  </div>
	<img src="../../static/images/myPhoto.png" width="120" alt="我的照片">
</el-card>
<!-- <div class="myPhoto"> -->
		<!-- <img src="../../static/images/myPhoto.png" width="120" alt="我的照片"> -->
<!-- </div> -->

  </div>
</template>

<script>
  export default {
	  name:'MyInfo',
    data() {
      return {
       activeIndex: '1',
       activeIndex2: '1',
	   messageArray:[
		   "姓名: 邹立勋",
		   "出生年月: 1994.07",
		   "院校: 黑龙江工程学院",
		   "学历: 统招本科",
		   "邮箱: 13354038890@163.com",
		   "电话: 13354038890",
		   "住址: 大连市金州区"
		   
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
	position: relative;
  width: 800px;
	max-width: 80%;
	height: auto;
	margin: 0 auto;
	margin-top: 12%;
	background: rgba(255, 255, 255, 0.1);
	color: #CCCCCC;
  }
  /* .myPhoto{
	  width: 140px;
	  height: 180px; 
	  border-radius:10px;
	  background: url(../assets/myPhoto.png);
	  background-size: 100% 100%; 
	  position: absolute;
	  top: 41%;
	  left:55%;	  
  } */
	img{
		display: block;
		border-radius: 8px;
    max-width: 100%;
    height: auto;
		position: absolute;
		left: 60%;
		top:35%;	
		
	}
  .myInfo{
	  width: 100%;
	  height: 960px;
	  background: url(../assets/joshua-sorenson-1242547-unsplash.jpg);
	  background-size: 100% 100%;
  }
</style>
