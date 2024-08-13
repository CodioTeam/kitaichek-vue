<script setup>

const { info } = defineProps({
	info: {
		type: Object,
	}
})
defineEmits(['read'])

const { title, time, text } = info
const isRead = ref(info.isRead)
</script>
	
<template lang="pug">
button.modal-notification-item(:class="{ 'modal-notification-item--new': !isRead }" @click="$emit('read'); isRead = true")
	.modal-notification-item__header
		p.modal-notification-item__title.h6 {{ title }}
		p.modal-notification-item__date.small {{ time }}
	p.modal-notification-item__text.medium {{ text }}
</template>
	
<style scoped lang="scss">
.modal-notification-item {
	display: flex;
	flex-direction: column;
	padding: 16px;
	gap: 16px;
	text-align: left;
	transition: .3s ease;
	width: 100%;
	&__header {
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	&__title {
		position: relative;
	}
	&__date {
		opacity: 0.5;
	}
	&--new &__title::after{
		content: '';
		width: 4px;
		height: 4px;
		min-width: 4px;
		min-height: 4px;
		border-radius: 50%;
		background: #FF5C00;
		position: absolute;
		left: calc(100% + 12px);
		top: 14px;
	}
	@include hover {
		background: #F8F8F8;
	}
}
</style>