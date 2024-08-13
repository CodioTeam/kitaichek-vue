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
	<path d="M8.24036 17.7824L12 15.4816L15.7596 17.8127L14.775 13.4531L18.087 10.5467L13.7306 10.1532L12 6.03579L10.2694 10.1229L5.91297 10.5165L9.22503 13.4531L8.24036 17.7824ZM6.42022 20.3232L7.90065 13.8886L2.97961 9.56396L9.46144 8.9934L12 2.92677L14.5386 8.9934L21.0204 9.56396L16.0993 13.8886L17.5798 20.3232L12 16.9068L6.42022 20.3232Z" :fill="color" />
</svg>
</template>
	
<style scoped lang="scss">
	
</style>