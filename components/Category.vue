<script setup>

const { info } = defineProps({
	info: {
		type: Object,
	}
})

const { href, icon, title, count, description } = info

</script>
	
<template lang="pug">
a(:href="href").card.category
	.category__header
		component(:is="icon")
		h6.category__title.h6 {{ title }}
		p.category__count.small {{ count }}
	p.category__description.regular {{ description }}
</template>
	
<style scoped lang="scss">

.category {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 16px;
	transition: .3s ease;
	min-height: 220px;
	&__count {
		padding: 4px 8px;
		border-radius: 4px;
		border: 1px solid rgba(248, 248, 248, 0.40);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: .3s ease;
	}
	&__header {
		display: flex;
		gap: 12px;
		align-items: center;
	}
	&__title {
		transition: .3s ease;
	}
	&__description {
		opacity: 0.7;
	}
	@include hover {
		border: 1px solid var(--BORDER-GREY, #252525);
		background: var(--GREY-300, #272723);
		.category__title {
			color: var(--ACCENT);
		}
		.category__count {
			border: 1px solid var(--ACCENT);
			color: var(--DARK);
			background: var(--ACCENT);
		}
	}
}
</style>