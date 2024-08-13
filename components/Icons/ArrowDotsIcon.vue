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
	<path d="M21.1133 12.1968L14.7672 18.543L14.0537 17.8545L19.2114 12.6968L12.0941 12.6968L12.0941 11.6968L19.2306 11.6968L14.0787 6.53912L14.7672 5.85067L21.1133 12.1968ZM10.0941 12.6968L7.09412 12.6968L7.09412 11.6968L10.0941 11.6968L10.0941 12.6968ZM5.09412 12.6968L3.09412 12.6968L3.09412 11.6968L5.09412 11.6968L5.09412 12.6968Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>