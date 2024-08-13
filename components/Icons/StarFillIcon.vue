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
	<path d="M7.90053 13.8886L6.4201 20.3232L11.9999 16.9068L17.5797 20.3232L16.0992 13.8886L21.0203 9.56395L14.5384 8.99339L11.9999 2.92676L9.46132 8.99339L2.97949 9.56395L7.90053 13.8886Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>