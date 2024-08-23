<script setup>

const props = defineProps({
	list: Array,
	current: Array,
})

const emits = defineEmits(['change'])

const inputValue = ref('')
const selectHandle = () => {
	if(inputValue.value.includes(',')) {
		let endPos = inputValue.value.indexOf(',')
		emits('change', [...props.current, inputValue.value.slice(0, endPos)])
		inputValue.value = ''
	}
}
</script>

<template lang="pug">
.filter
	input.filter__input.bt(placeholder="Введите через запятую" v-model="inputValue" @input="selectHandle" :class="{ 'filter__input--filled': current.length > 0 }")
	.filter__row(v-if="current.length")
		Tag.filter__tag(v-for="item in current" :key="item" isAccent @click="emits('change', [...current.filter(i => i !== item)])")
			| {{ item }}
			IconsDeleteDropdownIcon(size="14").filter__tag-icon
</template>

<style scoped lang="scss">
.filter {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__input {
		border-bottom: 0px solid var(--GREY-100, #333);
		transition: .3s ease;
		color: white;
		&::placeholder {
			opacity: 0.5;
		}
		&:focus {
			border-bottom-color: var(--ACCENT);
		}
		&--filled {
			transition: .3s ease;
			padding-bottom: 6px;
			border-bottom-width: 1px;
		}
	}
	&__row {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	&__tag {
		transition: .3s ease;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 6px;
		&-icon {
			:deep(path) {
				fill: var(--DARK);
			}
		}
	}
}
</style>
