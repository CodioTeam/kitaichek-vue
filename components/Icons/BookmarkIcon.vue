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
	<path d="M6 19.5V5.61537C6 5.15512 6.15417 4.77083 6.4625 4.4625C6.77083 4.15417 7.15512 4 7.61537 4H16.3846C16.8449 4 17.2292 4.15417 17.5375 4.4625C17.8458 4.77083 18 5.15512 18 5.61537V19.5L12 16.9231L6 19.5ZM7 17.95L12 15.8L17 17.95V5.61537C17 5.46154 16.9359 5.32052 16.8077 5.1923C16.6795 5.0641 16.5385 5 16.3846 5H7.61537C7.46154 5 7.32052 5.0641 7.1923 5.1923C7.0641 5.32052 7 5.46154 7 5.61537V17.95Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>