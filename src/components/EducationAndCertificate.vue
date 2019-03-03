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
<img id="biye" src="../../static/images/biye.jpg" width="300" height="" >
<img id="cad" src="../../static/images/cad.jpg" width="300"  alt="cad工程师证" title="照片太丑...">
<img id="cet4" src="../../static/images/cet4.jpg" width="350"  alt="四级证" title="照片太丑...">
<img id="guoer" src="../../static/images/guoer.jpg" width="400"  alt="国二证">
<img id="xuewei" src="../../static/images/xuewei.jpg" width="300"  alt="学位证">
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
	img{
		display:block;
		max-width: 100%;
		height: auto;
		position: absolute;	
		border-radius: 8px;
	}
	#biye{
		top:10%;
		left:7%;
		transform:rotate(275deg);
		-ms-transform:rotate(275deg); /* IE 9 */
		-webkit-transform:rotate(275deg); /* Safari and Chrome */
	}
	#xuewei{
		top:10%;
		left:77%;  
		transform:rotate(260deg);
		-ms-transform:rotate(260deg); /* IE 9 */
		-webkit-transform:rotate(260deg); /* Safari and Chrome */
	}
	#cad{
		top:52%;
		left:10%;
		transform:rotate(-50deg);
		-ms-transform:rotate(-50deg); /* IE 9 */
		-webkit-transform:rotate(-50deg); /* Safari and Chrome */
	}
		  
	#cet4{
		top:65%;
		left:40%;
		transform:rotate(90deg);
		-ms-transform:rotate(90deg); /* IE 9 */
		-webkit-transform:rotate(90deg); /* Safari and Chrome */

	}
	#guoer{
		top:60%;
		left:70%;
		transform:rotate(20deg);
		-ms-transform:rotate(20deg); /* IE 9 */
		-webkit-transform:rotate(20deg); /* Safari and Chrome */
	}
	.educationAndCertificate{
		width: 100%;
		height: 960px;
		background:url(../assets/joshua-sorenson-1242547-unsplash.jpg);
		background-size: 100% 100%;
	}
</style>
