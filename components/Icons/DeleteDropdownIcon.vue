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
<svg :width="size" :height="size" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M4.26672 12.2052L3.79492 11.7334L7.52825 8.00005L3.79492 4.26672L4.26672 3.79492L8.00005 7.52825L11.7334 3.79492L12.2052 4.26672L8.47186 8.00005L12.2052 11.7334L11.7334 12.2052L8.00005 8.47185L4.26672 12.2052Z" :fill="color"/>
</svg>
</template>

<style scoped lang="scss">

</style>
