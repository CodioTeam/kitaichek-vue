<script setup>

</script>

<template lang="pug">
.request-refused
  .request-refused__icon
    IconsCrossIcon
  .request-refused__col
    p.request-refused__title.h5 Заказчик отказался
    p.request-refused__text.bt К сожалению, предложение не подошло заказчику. Попробуйте откликнуться в другом заказе.
</template>

<style scoped lang="scss">
.request-refused {
	padding: 12px;
	border-radius: 16px;
	background: #262019;
	display: flex;
	align-items: center;
	gap: 16px;
	&__col {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	&__title {
		color: var(--RED) !important;
	}
	&__icon {
		display: flex;
		padding: 12px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 12px;
		background: #161614;
		max-width: 48px;
		max-height: 48px;
		:deep(svg) {
			color: var(--RED);
		}
	}
}
</style>
