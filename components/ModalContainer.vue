<script setup>

const props = defineProps({
	open: Boolean,
	blur: Boolean,
	centered: Boolean
})

defineEmits(['close'])

onUpdated(() => {
	if (props.open) {
		document.body.classList.add('lock')
	} else {
		document.body.classList.remove('lock')
	}
})
</script>

<template lang="pug">
teleport(to="body")
	.modal-container( :class="{ 'active': open, 'blur': blur, 'centered': centered }" @click.self="$emit('close')")
		slot
</template>

<style scoped lang="scss">
.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	background: #11110e33;
	z-index: 100;
	width: 100vw;
	height: 100vh;
	padding: 24px;
	overflow: hidden;
	pointer-events: none;
	opacity: 0;
	transition: .3s ease;
	&.active {
		pointer-events: all;
		opacity: 1;
		&.blur {
			background: rgba(18, 18, 15, 0.40);
			backdrop-filter: blur(16px);
		}
	}
	&.centered {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@include r(768px) {
		padding: 64px 16px 16px;
	}
}
</style>
