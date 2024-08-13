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
	<path d="M9.55004 17.2917L4.58081 12.3224L5.29426 11.609L9.55004 15.8648L18.7058 6.70898L19.4193 7.42243L9.55004 17.2917Z" fill="#00FF84"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>