<script setup>
defineProps({
	value: {type: Boolean, default: false},
	name: {type: String, default: ''},
})
defineEmits(['update:value'])
</script>
	
<template lang="pug">
.checkbox(:class="{ 'checkbox--checked': value }")
	input.checkbox__input(type="checkbox", :name="name" :aria-checked="value" :checked="value" @input="e => $emit('update:value', e.target.checked)")
	.checkbox__box
</template>
	
<style scoped lang="scss">
.checkbox {
	position: relative;
	&__input {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
	}
	&__box {
		width: 36px;
		height: 20px;
		border-radius: 10px;
		background: var(--GRAY-100, #333);
		transition: .3s ease-in-out;
		&::before {
			content: '';
			position: absolute;
			width: 16px;
			height: 16px;
			background: white;
			top: 2px;
			left: 2px;
			border-radius: 50%;
			transition: .3s ease-in-out;
		}
	}
	&--checked {
		.checkbox__box {
			background: var(--GREEN);
			&::before {
				left: 18px;
			}
		}
	}
}
</style>