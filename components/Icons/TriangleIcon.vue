<script setup>
defineProps({
	size: {
		type: String,
		default: "24"
	},
	color: {
		type: String,
		default: 'currentColor'
	}
})
</script>
	
<template lang="pug">
<svg :width="size" :height="size" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M7.99984 10.1667L4.6665 6.83333H11.3332L7.99984 10.1667Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>