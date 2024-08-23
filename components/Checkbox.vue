<script setup>
defineProps({
	value: {type: Boolean, default: false},
	name: {type: String, default: ''},
	secondary: Boolean
})
defineEmits(['update:value'])
</script>

<template lang="pug">
.checkbox(:class="{ 'checkbox--checked': value, 'checkbox--secondary': secondary }")
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
		border-radius: 16px;
		background: var(--GRAY-100, #333);
		transition: .3s ease-in-out;
		cursor: pointer;
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
	&--secondary {
		.checkbox__box {
			width: 18px;
			height: 18px;
			border-radius: 4px;
			border: 2px solid #E9E9E9;
			background: transparent;
			&::before {
				width: 10px;
				height: 10px;
				border-radius: 1px;
				background: var(--GREY-400, #1C1C19);
				opacity: 0;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				transition: .3s ease-in-out;
			}
		}
	}
	&--checked.checkbox--secondary {
		.checkbox__box {

			&::before {
				opacity: 1;
			}
		}
	}
}
</style>
