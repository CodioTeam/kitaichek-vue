<script setup>
import DeleteDropdownIcon from '../icons/DeleteDropdownIcon.vue';

defineProps({
	list: Array,
	current: Array,
})

defineEmits(['change'])
</script>
	
<template lang="pug">
.filter
	p.filter__title.regular Выберите направления
	.filter__row
		Tag.filter__tag(v-for="item in list" :key="item" isOutline :isAccent="current.includes(item)" @click="current.includes(item) ? $emit('change', [...current.filter(i => i !== item)]) : $emit('change', [...current, item])") 
			| {{ item }}
			DeleteDropdownIcon(v-if="current.includes(item)" size="14").filter__tag-icon
</template>
	
<style scoped lang="scss">
.filter {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__title {
		opacity: 0.5;
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