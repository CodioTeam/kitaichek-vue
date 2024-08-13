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
	<path d="M8.5 17.5L3.5 12.5L8.50577 7.49422L9.21348 8.2077L5.42115 12H19.5V6.5H20.5V13H5.42115L9.21348 16.7866L8.5 17.5Z" fill="white"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>