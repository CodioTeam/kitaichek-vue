<script setup>
import LocationIcon from "~/components/icons/LocationIcon.vue"
import ResponseIcon from "~/components/icons/ResponseIcon.vue"

const { info } =  defineProps({
	info: {
		type: Object,
	},
})

const { title, description, price, tags, city, createdAt, deadline, responses } = info

</script>
	
<template lang="pug">
a(href="#").request
	.request__col
		.request__header
			.request__header-main
				p.request__title.h5 {{ title }}
				p.request__time.small {{ createdAt }}
			.request__info
				p.request__price {{ price }}
				p.request__date {{ deadline }}
		p.request__description.regular {{ description }}
		.request__tags
			Tag(v-for="tag in tags" isAccent) {{ tag }}
		.request__footer
			p.request__address.medium
				LocationIcon
				| {{ city }}
			p.request__response.small
				ResponseIcon(size="20")
				| {{ responses }} откликов
</template>
	
<style scoped lang="scss">
.request {
	display: flex;
	border: 1px solid var(--GREY-300, #272723);
	padding: 24px;
	gap: 24px;
	align-items: flex-start;
	transition: .3s ease;
	&+& {
		border-top: 0;
	}
	&:first-child {
		border-radius: 4px 4px 0 0;
	}
	&:last-child {
		border-radius: 0 0 4px 4px;
	}
	&__header {
		display: flex;
		justify-content: space-between;
		gap: 24px;
	}
	&__info {
		padding: 8px 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		position: relative;
		overflow: hidden;
		min-width: 106px;
		&>* {
			position: relative;
			z-index: 2;
		}
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__date {
		white-space: nowrap;
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		opacity: 0.7;
		text-align: right;
		font-size: 14px;
		line-height: 160%;
	}
	&__price {
		text-align: right;
		color: var(--GREEN, #00FF84) !important;
		font-size: 20px;
		font-weight: 600;
		line-height: 100%; /* 20px */
	}
	&__info-row {
		display: flex;
		.request__time {
			display: none;
		}
	}
	&__time {
		opacity: 0.5;
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		white-space: nowrap;
	}
	&__address {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #f8f8f880 !important;
	}
	&__footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__response {
		display: flex;
		gap: 4px;
		align-items: center;
		color: #f8f8f880 !important;
	}
	&__tags {
		gap: 4px;
		display: flex;
	}
	&__tag {
		border-radius: 4px;
		background: var(--ACCENT, #FF0);
		padding: 4px 8px;
		color: var(--DARK) !important;
	}
	&__description {
		height: 90px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	@include hover {
		background: var(--GREY-400, #1C1C19);
	}
	@include r(768px) {
		padding: 16px;
		flex-direction: column;
		&__header {
			flex-direction: column-reverse;
		}
		&__header-main {
			margin-top: -8px;
		}
		&__title {
			font-size: 18px;
			line-height: 160%;
		}
		&__info {
			max-width: 100%;
			flex-direction: row;
			justify-content: space-between;
			width: 100%;
			padding: 0;
		}
		&__info-row {
			justify-content: space-between;
			align-items: flex-end;
		}
	}
}
</style>