<script setup>

</script>
	
<template lang="pug">
.breadcrumbs 
	slot
</template>
	
<style scoped lang="scss">
.breadcrumbs {
	display: flex;
	align-items: center;
	:deep(a) {
		color: #A8A8A8;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 140%;
		&:not(:last-child) {
			&::after {
				content: '/';
				margin: 0 10px;
			}
		}
		&:last-child {
			color: #fff;
		}
	}
}
</style>