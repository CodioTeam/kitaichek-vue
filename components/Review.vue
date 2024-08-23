<script setup>
import StarIcon from "~/components/icons/StarIcon.vue"
import FeedbackIcon from "~/components/icons/FeedbackIcon.vue"

const { info } =  defineProps({
	info: {
		type: Object,
	},
})

const { hired, price, title, description, date, executor } = info

</script>

<template lang="pug">
.review-card.card
	.review-card__header
		p.review-card__date.st {{ hired }}
		p.review-card__price.h5 {{ price }}
	a(href="#").h5.review-card__title {{ title }}
	.review-card__review
		p.review-card__description.bt-medium {{ description }}
		p.review-card__time.st {{ date }}
	a(href="#").review-card__info
		.review-card__avatar
			img(src="assets/img/avatar-01.jpg", alt="")
		.review-card__col
			p.review-card__name {{ executor.name }}
			p.review-card__completed {{ executor.jobs }}
	.review-card__row
		a(href="#").review-card__small-button
			StarIcon
			| {{ executor.rate }}
		a(href="#").review-card__small-button
			FeedbackIcon
			| {{ executor.feedback }}
</template>

<style scoped lang="scss">
.review-card {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__info {
		display: flex;
		align-items: center;
		gap: 16px;
		@include hover {
			.review-card__name {
				opacity: 0.6;
			}
		}
	}
	&__avatar {
		border-radius: 50px;
		width: 50px;
		height: 50px;
		min-width: 50px;
		min-height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	&__name {
		color: var(--WHITE);
		font-size: 16px;
		transition: .3s ease;
		font-weight: 600;
		line-height: 100%; /* 16px */
	}
	&__completed {
		color: var(--LIGHT-GREY, #F8F8F8);
		font-size: 12px;
		font-weight: 500;
		line-height: 100%; /* 12px */
		opacity: 0.5;
	}
	&__small-button {
		display: flex;
		padding: 2px 8px 2px 4px;
		align-items: center;
		gap: 8px;
		border-radius: 16px;
		background: var(--GREY-300, #272723);
		transition: .3s ease;
		color: var(--LIGHT-GREY, #F8F8F8);
		font-size: 14px;
		font-weight: 500;
		line-height: 100%; /* 14px */
		:deep(path) {
			fill: var(--ACCENT) !important;
		}
		@include hover {
			background: var(--GREY-100, #333);
		}
	}
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__control {
		display: flex;
		gap: 8px;
	}
	&__description {
		opacity: 0.7;
	}
	&__review {
		display: flex;
		padding: 12px;
		border-radius: 16px;
		background: var(--GREY-300, #272723);
		flex-direction: column;
		gap: 16px;
	}
	&__date {
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		opacity: 0.5;
	}
	&__time {
		color: var(--LIGHT-GREY, #F8F8F8) !important;
		opacity: 0.5;
	}
	&__price {
		color: var(--GREEN, #00FF84) !important;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	&__row {
		display: flex;
		gap: 4px;
	}
	&__title {
		color: var(--WHITE);
		transition: .3s ease;
		@include hover {
			color: var(--ACCENT)
		}
	}
}
</style>
