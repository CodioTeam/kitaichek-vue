<script setup>

defineProps({
	isAccent: Boolean,
	isOutline: Boolean,
	isSmall: Boolean,
	isAccentColor: Boolean,
	isClick: Boolean
})

</script>

<template lang="pug">
button.tag(
	v-if="isClick"
	:class="{'tag--accent': isAccent, 'tag--outline': isOutline, 'tag--small': isSmall, 'tag--accent-color': isAccentColor}"
)
	slot
.tag(
	v-else
	:class="{'tag--accent': isAccent, 'tag--outline': isOutline, 'tag--small': isSmall, 'tag--accent-color': isAccentColor}"
)
	slot
</template>

<style scoped lang="scss">
.tag {
	color: #f8f8f880;
	font-size: 14px;
	font-weight: 500;
	line-height: 100%;
	padding: 4px 16px;
	gap: 6px;
	display: flex;
	align-items: center;
	background: #000;
	border-radius: 34px;
	background: var(--GREY-300);
	border-color: var(--GREY-300);
	&--accent-color {
		color: var(--ACCENT);
		:deep(svg) {
			color: var(--ACCENT) !important;
		}
	}
	&--outline {
		background: transparent;
		border-width: 1px;
		border-style: solid;
	}
	&--accent {
		background: var(--ACCENT);
		border-color: var(--ACCENT);
		color: var(--DARK);
		:deep(svg) {
			color: var(--DARK) !important;
		}
	}
	&--small {
		border: 0;
		padding: 5px 16px;
	}
}
</style>
