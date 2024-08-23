<script setup>
</script>

<template lang="pug">
Block.order
	.order-aside
		slot(name="aside")
	.order-content
		slot
</template>

<style scoped lang="scss">
.order {
	display: flex;
	flex: 1;
	background: var(--DARK);
	padding: 16px 0px 32px;
}
</style>
