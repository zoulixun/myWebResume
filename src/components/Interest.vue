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
	<div class="interestBack">
 <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span><strong>兴趣爱好</strong></span>
  </div>
  <div v-for="initem in messageArray" :key="initem" class="text item">
    {{ initem }}
  </div>
</el-card>
</div>
  </div>
</template>

<script>
  export default {
	  name:'Interest',
    data() {
      return {
       activeIndex: '5',
       activeIndex2: '5',
	   messageArray:[
		   "兴趣爱好: 吉他  K歌  篮球  汽车  前端开发",
		   "座右铭: 好运只不过是坚持不懈的结果"		   
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
		max-width: 80%;
		height: auto;
    width: 800px;
	margin: 0 auto;
	margin-top: 15%;
	box-shadow: 10px 10px 5px #888888;
	background: rgba(255, 255, 255, 0.2);
  }
  .myInfo{
	  width: 100%;
	  height: 960px;
	  background: url(../assets/curry.jpg);
  }
</style>

