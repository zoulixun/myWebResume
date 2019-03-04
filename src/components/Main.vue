<template>
  <div class="main">
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
	<div class="mainBack">
<div class="outCircle">
			<div id="js" class="innerCircle a1">Javascript</div>
			<div id="css" class="innerCircle a2">Git</div>
			<div id="css3" class="innerCircle a3">Css(3)</div>
			<div id="html" class="innerCircle a1">Webpack</div>
			<div id="html5" class="innerCircle a2">Html(5)</div>
			<div id="jQuery" class="innerCircle a3">jQuery</div>
			<div id="Bootstrap" class="innerCircle a1">BootStrap</div>
			<div id="Vue" class="innerCircle a2">Vue.js</div>
			<div id="elementui" class="innerCircle a3">Element-UI</div>
			<div id="ajax" class="innerCircle a1">Ajax</div>
			<div id="axios" class="innerCircle a2">Axios</div>			
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
       activeIndex: '',
       activeIndex2: ''
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainBack{
		width: 100%;
		height: 960px;
		text-align: center;
}
.outCircle{
				width: 800px;
				height: 800px;
				/* border: 1px solid black; */
				margin: 0 auto;
				margin-top: 5%;
				position: relative;
			}
			.innerCircle{
				width: 80px;
				height: 80px;
				border: 1px #ccc solid;
				border-radius: 50px;
				line-height: 80px;
				text-align: center;
				box-shadow: 10px 10px 5px #888888;
			}
			
			.a1{
				animation:mya1 5s;
				-webkit-animation:mya1 2s; /* Safari and Chrome */
				animation-play-state:running;
				animation-iteration-count: infinite;
				animation-delay: 3s;
			}
			
			.a2{
				animation:mya2 5s;
				-webkit-animation:mya2 3s; /* Safari and Chrome */
				animation-play-state:running;
				animation-iteration-count: infinite;
				animation-delay: 1s;
			}
			
			.a3{
				animation:mya3 5s;
				-webkit-animation:mya3 5s; /* Safari and Chrome */
				animation-play-state:running;
				animation-iteration-count: infinite;
				animation-delay: 2s;
			}
			
			#js{
				position: absolute; 
				left: 80px;
				top: 200px;
				background: #FF0000;
			}
			#css{
				position: absolute; 
				left: 150px;
				top: 100px;
				background: #CC6600;
			}
			#css3{
				position: absolute; 
				left: 280px;
				top: 50px;
				background: #CC9900;
			}
			#html{
				position: absolute; 
				left: 420px;
				top: 60px;
				background: #99CC33;
			}
			#html5{
				position: absolute; 
				left: 500px;
				top: 150px;
				background: #CCFFFF;
			}
			#jQuery{
				position: absolute; 
				left: 540px;
				top: 260px;
				background: #99CCFF;
			}
			#Bootstrap{
				position: absolute; 
				left: 500px;
				top: 370px;
				background: #CC99FF;
			}
			#Vue{
				position: absolute; 
				left: 410px;
				top: 450px;
				background: #FFCCCC;
			}
			#elementui{
				position: absolute; 
				left: 280px;
				top: 460px;
				background: #CC6666;
			}
			#ajax{
				position: absolute; 
				left:170px;
				top: 420px;
				background: #99CCFF;
			}
			#axios{
				position: absolute; 
				left: 100px;
				top: 320px;
				background: #FF6666;
			}
				
@keyframes mya1
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 82px;height: 82px;}
	50%  {width: 84px;height: 84px;}
	75%  {width: 86px;height: 86px;}
	100% {width: 88px;height: 88px;}
}

@-webkit-keyframes mya1 /* Safari and Chrome */
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 82px;height: 82px;}
	50%  {width: 84px;height: 84px;}
	75%  {width: 86px;height: 86px;}
	100% {width: 88px;height: 88px;}
}	
	
	
@keyframes mya2
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 83px;height: 83px;}
	50%  {width: 86px;height: 86px;}
	75%  {width: 89px;height: 89px;}
	100% {width: 92px;height: 92px;}
}

@-webkit-keyframes mya2 /* Safari and Chrome */
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 83px;height: 83px;}
	50%  {width: 86px;height: 86px;}
	75%  {width: 89px;height: 89px;}
	100% {width: 92px;height: 92px;}
}
	
@keyframes mya3
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 85px;height: 85px;}
	50%  {width: 90px;height: 90px;}
	75%  {width: 95px;height: 95px;}
	100% {width: 100px;height: 100px;}
}

@-webkit-keyframes mya3 /* Safari and Chrome */
{
	0%   {width: 80px;height: 80px;}
	25%  {width: 85px;height: 85px;}
	50%  {width: 90px;height: 90px;}
	75%  {width: 95px;height: 95px;}
	100% {width: 100px;height: 100px;}
}
.main{
	 width: 100%;
	height: 960px;
	background: url(../assets/bijiben.jpg);
	background-size: 100% 100%;
	}
</style>
