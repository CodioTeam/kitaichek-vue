<script setup>

defineProps({
	isAccent: {
		type: Boolean
	},
	isOutline: {
		type: Boolean
	},
	isSmall: {
		type: Boolean
	}
})

</script>
	
<template lang="pug">
.tag(:class="{'tag--accent': isAccent, 'tag--outline': isOutline, 'tag--small': isSmall}")
	slot
</template>
	
<style scoped lang="scss">
.tag {
	color: #f8f8f880;
	font-size: 14px;
	font-weight: 500;
	line-height: 100%;
	padding: 6px 16px;
	background: #000;
	border-radius: 34px;
	background: var(--GREY-100, #333);
	border-color: var(--GREY-100, #333);
	border-style: solid;
	&--outline {
		background: transparent;
		border-width: 1px;
	}
	&--accent {
		background: var(--ACCENT);
		border-color: var(--ACCENT);
		color: var(--DARK);
	}
	&--small {
		border: 0;
		padding: 5px 16px;
	}
}
</style>