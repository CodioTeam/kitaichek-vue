<script setup>
const props = defineProps({
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
	
<template>
<svg :width="size" :height="size" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M8.33662 13.436C8.18138 13.436 8.05175 13.384 7.94774 13.28C7.84374 13.176 7.79173 13.0464 7.79173 12.8911V8.94077L3.96939 4.10781C3.87412 3.98067 3.86119 3.8508 3.93061 3.71823C4.00014 3.58565 4.11117 3.51936 4.2637 3.51936H12.7364C12.889 3.51936 13 3.58565 13.0695 3.71823C13.1389 3.8508 13.126 3.98067 13.0307 4.10781L9.2084 8.94077V12.8911C9.2084 13.0464 9.1564 13.176 9.05239 13.28C8.94838 13.384 8.81876 13.436 8.66352 13.436H8.33662ZM8.50007 8.6902L12.0063 4.2277H4.99382L8.50007 8.6902Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>