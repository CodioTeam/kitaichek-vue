<script setup>
import Checkbox from '../Checkbox.vue';

defineProps({
	value: {type: Boolean, default: false},
	name: {type: String, default: ''},
})
defineEmits(['update:value'])
</script>

<template lang="pug">
label.filter
	Checkbox(name="name", :value="value", @update:value="$emit('update:value', $event)")
	.filter__line
	p.filter__text.bt
		slot
</template>

<style scoped lang="scss">
.filter {
	display: flex;
	gap: 16px;
	align-items: center;
	cursor: pointer;
	&__line {
		height: 32px;
		width: 1px;
		background: #333333;
	}
	&__text {
		opacity: 0.5;
		color: white;
	}
}
</style>
