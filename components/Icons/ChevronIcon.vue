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
<svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M17.6076 9.69991L12.2999 15.0076L6.99219 9.69991L7.69989 8.99221L12.2999 13.5922L16.8999 8.99221L17.6076 9.69991Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>