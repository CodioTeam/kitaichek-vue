<script setup>
import StarIcon from "~/components/icons/StarIcon.vue"
import FeedbackIcon from "~/components/icons/FeedbackIcon.vue"
import BookmarkIcon from "~/components/icons/BookmarkIcon.vue"
import ForumIcon from "~/components/icons/ForumIcon.vue"

const { info } =  defineProps({
	info: {
		type: Object,
	},
})

const { name, city, rating, feedback, tags } = info
</script>
	
<template lang="pug">
.user-card.card
	.user-card__header
		a(href="#").user-card__info
			.user-card__avatar
				img(src="assets/img/avatar-01.jpg", alt="")
			.user-card__col
				p.user-card__name {{ name }}
				p.user-card__city {{ city }}
		.user-card__row
			a(href="#").user-card__small-button 
				StarIcon
				| {{ rating }}
			a(href="#").user-card__small-button 
				FeedbackIcon
				| {{ feedback }}
			button.user-card__bookmark
				BookmarkIcon
		.user-card__control
			Button(dark).user-card__button
				ForumIcon
			Button(dark).user-card__button Предложить заказ
	p.user-card__description.medium
		| В сфере дизайна более 9 лет. Свое дело люблю и работаю 24/7.
		| <br> Специализируюсь на графическом дизайне и UI/UX.
		| <br> • Полиграфия
		| <br> • Иллюстрации
		| <br> • Сайты/приложения 
		| <br>
		| <br> Программы: 
		| <br> •Adobe Illustrator
		| <br> •Adobe Photoshop
		| <br> •Adobe InDesign
		| <br> •Figma
	.user-card__tags
		template(v-for="tag, index in tags")
			Tag(v-if="index <= 3" :isAccent="index===0")
				| {{ index === 3 ? `+${tags.length - 3}` : tag }}
</template>
	
<style scoped lang="scss">
.user-card {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__header {
		display: flex;
		flex-direction: column;
		padding: 12px;
		border-radius: 4px;
		background: var(--GREY-300, #272723);
		gap: 16px;
		height: 118px;
		transition: .3s ease;
		overflow: hidden;
	}
	&__info {
		display: flex;
		align-items: center;
		gap: 16px;
		@include hover {
			.user-card__name {
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
		font-weight: 600;
		transition: .3s ease;
		line-height: 100%; /* 16px */
	}
	&__city {
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
		border-radius: 4px;
		background: var(--GREY-400, #1C1C19);
		transition: .3s ease;
		color: var(--LIGHT-GREY, #F8F8F8);
		font-size: 14px;
		font-weight: 500;
		line-height: 100%; /* 14px */
		:deep(path) {
			fill: var(--ACCENT) !important;
		}
		@include hover {
			background: #333333;
		}
	}
	&__row {
		display: flex;
		gap: 4px;
	}
	&__control {
		display: flex;
		gap: 8px;
	}
	&__bookmark {
		display: flex;
		padding: 2px 8px;
	}
	&__button {
		:deep(path) {
			transition: .3s ease;
		}
		&:first-child {
			padding: 10px 11px;
		}
		&:last-child {
			width: 100%;
		}
		@include hover {
			background: var(--ACCENT);
			color: var(--DARK);
			:deep(path) {
				fill: var(--DARK);
			}
		}
	}
	&__description {
		display: -webkit-box;
		-webkit-line-clamp: 12;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		opacity: 0.7;
		height: 234px;
		transition: .3s ease;
	}
	&__tags {
		display: flex;
		gap: 4px;
		align-items: center;
		flex-wrap: wrap;
	}
	&__tag {
		border-radius: 4px;
		border: 1px solid rgba(248, 248, 248, 0.10);
		padding: 4px 12px 4px 8px;
		color: #f8f8f861 !important;
		font-size: 14px;
		font-weight: 500;
		line-height: 100%; /* 14px */
		&:last-child {
			padding: 0;
			border: 0;
		}
		&--accent {
			background: var(--ACCENT);
			color: var(--DARK) !important;
		}
	}
	&__col {
		display: flex;
		flex-direction: column;	
		gap: 8px;
	}
	@include hover {
		.user-card {
			&__description {
				height: 178px;
				-webkit-line-clamp: 9;
			}
			&__header {
				height: 174px;
			}
		}
	}
	@include r(768px) {
		&__description {
			height: 178px;
			-webkit-line-clamp: 9;
		}
		&__header {
			height: 174px;
		}
	}
}
</style>