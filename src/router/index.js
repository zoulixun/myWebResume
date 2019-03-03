import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import MyInfo from '@/components/MyInfo'
import EducationAndCertificate from '@/components/EducationAndCertificate'
import Evaluation from '@/components/Evaluation'
import Interest from '@/components/Interest'
import ProjectExperience from '@/components/ProjectExperience'
import WorkExperience from '@/components/WorkExperience'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
		{
			path:'/MyInfo',
			name:'MyInfo',
			component:MyInfo
		},
		{
			path:'/EducationAndCertificate',
			name:'EducationAndCertificate',
			component:EducationAndCertificate
		},
		{
			path:'/Evaluation',
			name:'Evaluation',
			component:Evaluation
		},
		{
			path:'/Interest',
			name:'Interest',
			component:Interest
		},
		{
			path:'/ProjectExperience',
			name:'ProjectExperience',
			component:ProjectExperience
		},
		{
			path:'/WorkExperience',
			name:'WorkExperience',
			component:WorkExperience
		}	
  ],
	mode:"hash"
})
