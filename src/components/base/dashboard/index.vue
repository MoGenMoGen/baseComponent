<template>
	<div style="width: 400px;height: 320px;">
		<myCharts style="width: 400px;height: 320px;" :id="id" :data="options"></myCharts>
	</div>
</template>
<script>
	import myCharts from '../../myCharts/MyCharts'
	export default {
		name: 'baseDashboard',
		props: {
			option: Object,
			component: Object
		},
		data() {
		  return {
		    id: '',
			options: {
				tooltip: {
				    formatter: '{a} <br/>{b} : {c}%'
				  },
				  series: [
				    {
				      name: 'Pressure',
				      type: 'gauge',
				      progress: {
				        show: true
				      },
				      detail: {
				        valueAnimation: true,
				        formatter: '{value}'
				      },
				      data: [
				        {
				          value: 50,
				          name: 'SCORE'
				        }
				      ]
				    }
				  ]
			}
		  }
		},
		computed: {
		},
		components:{
			myCharts
		},
		created() {
			this.id = `chart_${new Date().getTime()}`
		},
		methods: {
			
		}
	}
</script>
