<template>
	<div :class="b()" :style="styleSizeName">
		<div :ref="id" :style="styleChartName"></div>
	</div>
</template>
<script>
	import create from "../../../echart/create.js";
	export default {
		name: 'baseDashboard',
		props: {
			option: Object,
			component: Object
		},
		computed: {},
		methods: {

		}
	}
</script>
