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
	<path d="M6.68848 17.7885L6 17.1L16.0808 7H6.78845V6H17.7885V17H16.7885V7.7077L6.68848 17.7885Z" :fill="color" />
</svg>
</template>
	
<style scoped lang="scss">
	
</style>