<template>
	<div class="educationAndCertificate">
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
    <span><strong>教育背景及所获证书</strong></span>
  </div>
  <div v-for="editem in messageArray" :key="editem" class="text item">
    {{ editem }}
  </div>
</el-card>
<div class="myCertificates" id="biye"><img src="../assets/biye.jpg" alt="毕业证"></div>
<div class="myCertificates" id="cad"><img src="../assets/cad.jpg" alt="cad工程师证" title="照片太丑..."></div>
<div class="myCertificates" id="cet4"><img src="../assets/cet4.jpg" alt="四级证" title="照片太丑..."></div>
<div class="myCertificates" id="guoer"><img src="../assets/guoer.jpg" alt="国二证"></div>
<div class="myCertificates" id="xuewei"><img src="../assets/xuewei.jpg" alt="学位证"></div>
  </div>
</template>

<script>
  export default {
	  name:'EducationAndCertificate',
    data() {
      return {
       activeIndex: '2',
       activeIndex2: '2',
	   messageArray:[
		   "2012.09-2016.06   黑龙江工程学院   交通运输（四年制统招本科）",
		   "大学英语四级证书",
		   "全国二维CAD应用工程师证书",
		   "国家计算机二级证书",
		   "驾驶证（熟练驾驶C1机动车）",		   
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
	margin-top: 200px;
	background: rgba(255, 255, 255, 0.1);
	color: #CCCCCC;
  }
	 .myCertificates>img{
		  width: 350px;
		  height: 350px;
		  border-radius: 8px;
	}
	#biye{
		  position: absolute;
		  top:15%;
		  left:4%;
		  transform:rotate(275deg);
		  -ms-transform:rotate(275deg); /* IE 9 */
		  -webkit-transform:rotate(275deg); /* Safari and Chrome */
	}
	#xuewei{
		position: absolute;
		top:15%;
		left:75%;  
		 transform:rotate(260deg);
		-ms-transform:rotate(260deg); /* IE 9 */
		-webkit-transform:rotate(260deg); /* Safari and Chrome */
	}
	#cad{
		  position: absolute;
		  top:60%;
		  left:10%;
	}
		  
	#cet4{
		  position: absolute;
		  top:60%;
		  left:40%;
		   transform:rotate(90deg);
		  -ms-transform:rotate(90deg); /* IE 9 */
		  -webkit-transform:rotate(90deg); /* Safari and Chrome */
	}
	#guoer{
		  position: absolute;
		  top:60%;
		  left:70%;
	}
	.educationAndCertificate{
		width: 100%;
		height: 960px;
		background:url(../assets/joshua-sorenson-1242547-unsplash.jpg);
		background-size: 100% 100%;
	}
</style>
