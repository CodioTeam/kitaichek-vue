<script setup>
import DeleteDropdownIcon from '../icons/DeleteDropdownIcon.vue';

const props = defineProps({
	min: String,
	max: String,
	postfix: String,
	minPlaceholder: {
		type: String,
		default: '100',
	},
	maxPlaceholder: {
		type: String,
		default: '10000',
	}
})
const emits = defineEmits(['update:min', 'update:max', 'update:postfix'])
</script>
	
<template lang="pug">
.filter
	.filter__label-row(:class="{ 'filter__label-row--filled': (min || max) }")
		.filter__label
			p.filter__prefix.small От
			input.filter__input.regular(:placeholder="minPlaceholder" type="number" :value="min" @input="$emit('update:min', $event.target.value)")
			p.filter__postfix.regular {{ postfix }}
		.filter__line
		.filter__label
			p.filter__prefix.small До
			input.filter__input.regular(:placeholder="maxPlaceholder" type="number" :value="max" @input="$emit('update:max', $event.target.value)")
			p.filter__postfix.regular {{ postfix }}
	.filter__row(v-if="min || max")
		Tag.filter__tag(v-if="min" isAccent @click="$emit('update:min', null)") 
			| От {{ min }} {{ postfix }}
			DeleteDropdownIcon(size="14").filter__tag-icon
		Tag.filter__tag(v-if="max" isAccent @click="$emit('update:max', null)") 
			| До {{ max  }} {{ postfix }}
			DeleteDropdownIcon(size="14").filter__tag-icon
</template>
	
<style scoped lang="scss">
.filter {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__input {
		transition: .3s ease;
		width: 100%;
		color: white;
		&::placeholder {
			opacity: 0.5;
		}
	}
	&__line {
		display: flex;
		height: 30px;
		width: 1px;
		background: #333;
	}
	&__postfix {
		white-space: nowrap;
	}
	&__label-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
		&--filled {
			padding-bottom: 12px;
			border-bottom: 1px solid #333;
		}
	}
	&__label {
		display: flex;
		align-items: center;
		gap: 12px;
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