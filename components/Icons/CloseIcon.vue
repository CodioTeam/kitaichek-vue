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
	<path d="M5.52638 19.95L4.82031 19.2439L10.4772 13.587L11.1832 14.2931L5.52638 19.95Z" :fill="color"/>
	<path d="M12.8174 14.2958L13.5255 13.5876L19.1824 19.2445L18.4742 19.9526L12.8174 14.2958Z" :fill="color"/>
	<path d="M4.82033 4.75319L5.5264 4.04712L11.1833 9.70397L10.4772 10.41L4.82033 4.75319Z" :fill="color"/>
	<path d="M13.5258 10.4125L12.8177 9.70435L18.4745 4.04749L19.1827 4.75564L13.5258 10.4125Z" :fill="color"/>
	<path d="M11.5 11.5V12.5H12.5V11.5H11.5Z" :fill="color"/>
</svg>
</template>
	
<style scoped lang="scss">
	
</style>