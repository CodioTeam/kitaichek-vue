<script setup>
const props = defineProps({
	list: Array,
	current: Array,
})

const emits = defineEmits(['change'])

const inputValue = ref('')
const filterHandle = (list) => {
	return list.filter(i => {
		if(props.current.includes(i)) return true
		return inputValue.value === '' ? false : i.toLowerCase().includes(inputValue.value.toLowerCase())
	}).sort((a, b) => props.current.includes(b) - props.current.includes(a))
}
const selectHandle = (item) => {
	props.current.includes(item) ? emits('change', [...props.current.filter(i => i !== item)]) : emits('change', [...props.current, item])
}
</script>

<template lang="pug">
.filter
	input.filter__input.bt(placeholder="Начните вводить название..." v-model="inputValue" :class="{ 'filter__input--filled': filterHandle(list).length }")
	.filter__row(v-if="filterHandle(list).length")
		Tag.filter__tag(v-for="item in filterHandle(list)" :key="item" isOutline :isAccent="props.current.includes(item)" @click="selectHandle(item)")
			| {{ item }}
			IconsDeleteDropdownIcon(v-if="props.current.includes(item)" size="14").filter__tag-icon
</template>

<style scoped lang="scss">
.filter {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__input {
		border-bottom: 0 solid var(--GREY-100, #333);
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
