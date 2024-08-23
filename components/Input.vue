<script setup>

defineProps({
	title: String,
	type: String,
	value: String,
	placeholder: String,
	isDark: Boolean,
	prefix: String,
	postfix: String
})

defineEmits(['update:modelValue'])
</script>

<template lang="pug">
label.input(:class="{ 'input--dark': isDark }")
	p.input__title {{title}}
	.input__field
		p(v-if="prefix").bt-medium {{prefix}}
		input.input__input(:type="type" :placeholder="placeholder" :value="value" @input="$emit('update:modelValue', $event.target.value)")
		p(v-if="postfix").bt-medium {{postfix}}
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
	&__field {
		display: flex;
		gap: 12px;
		width: 100%;
		margin-top: 8px;
		padding: 12px 0;
		border-bottom: 1px solid var(--BORDER-LIGHT-2, #E9E9E9);
	}
	&__input {
		width: 100%;
		color: var(--DARK, #12120F);
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 140%;
		&::placeholder {
			opacity: 0.3;
		}
	}
	&--dark {
		.input {
			&__title {
				color: var(--LIGHT-GREY);
				opacity: 1;
			}
			&__input {
				color: #fff;
				&::placeholder {
					opacity: 0.5;
				}
			}
			&__field {
				border-color: var(--GREY-100);
			}
		}
	}
}
</style>
