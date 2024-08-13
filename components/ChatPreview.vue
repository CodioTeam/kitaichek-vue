<script setup>
const { info } =  defineProps({
	info: {
		type: Object,
	}
})

const { sender, messages } = info
const isRead = ref(info.isRead)

defineEmits(['openChat'])
</script>
	
<template lang="pug">
button.modal-messages-item(:class="{ 'modal-messages-item--new': !isRead }", @click="$emit('openChat'); isRead = true")
	a(href="#").modal-messages-item__avatar
	.modal-messages-item__info
		p.modal-messages-item__title.bold {{ sender }}
		p.modal-messages-item__date.regular {{ messages.at(-1)[1] }}
</template>
	
<style scoped lang="scss">
.modal-messages-item {
	border-radius: 4px;
	padding: 8px;
	display: flex;
	gap: 12px;
	transition: .3s ease;
	align-items: center;
	text-align: left;
	&__avatar {
		width: 40px;
		min-width: 40px;
		min-height: 40px;
		height: 40px;
		border-radius: 50%;
		background: #D9D9D9;
	}
	&__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2px;
	}
	&__title {
		position: relative;
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
		top: 8px;
	}
	@include hover {
		background: #F8F8F8;
	}
}
</style>