<script setup>

defineProps({
	title: String,
	type: String,
	value: String
})

defineEmits(['update:modelValue'])
</script>
	
<template lang="pug">
label.input
	p.input__title {{title}}
	input.input__input(:type="type" :value="value" @input="$emit('update:modelValue', $event.target.value)")
</template>
	
<style scoped lang="scss">
.input {
	width: 100%;
	&__title {
		display: flex;
		color: var(--DARK, #12120F);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%;
		letter-spacing: 0.48px;
		text-transform: uppercase;
		opacity: 0.3;
	}
	&__input {
		width: 100%;
		margin-top: 8px;
		color: var(--DARK, #12120F);
		font-size: 14px;
		font-style: normal;
		padding: 12px;
		border-bottom: 1px solid var(--BORDER-LIGHT-2, #E9E9E9);
		font-weight: 500;
		line-height: 140%;
		&::placeholder {
			opacity: 0.3;
		}
	}
}
</style>