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
	<path d="M6.40008 18.3078L5.69238 17.6001L11.2924 12.0001L5.69238 6.40008L6.40008 5.69238L12.0001 11.2924L17.6001 5.69238L18.3078 6.40008L12.7078 12.0001L18.3078 17.6001L17.6001 18.3078L12.0001 12.7078L6.40008 18.3078Z" fill="currentColor"/>
</svg>
</template>

<style scoped lang="scss">

</style>
