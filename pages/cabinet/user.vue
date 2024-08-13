<script setup>
import StarFillIcon from "~/components/icons/StarFillIcon.vue"
import ChatFillIcon from "~/components/icons/ChatFillIcon.vue"
import BookmarkIcon from "~/components/icons/BookmarkIcon.vue"
import BookmarkFillIcon from "~/components/icons/BookmarkFillIcon.vue"
import UserReview from "~/components/UserReview.vue"

const SORT = ref('Новые')
const bookmark = ref(false)
const typeVisitor = ref('employer')
// 'employer', 'executor', 'noneAuth'

const REVIEWS_PLACEHOLDER = [
	{
		name: 'Арсений Т.',
		id: '@arseni43',
		count: 32,
		date: '10 марта 2024',
		rate: 4,
		text: 'Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...',
		review_title: 'Нужен гид, чтобы провел по городу Чунцин. Запланирована поездка дальняя, через чащобы',
		status: 'Заказ выполнен',
		images: ['review-img-01','review-img-02'],
		answer: {
			text: 'Привет, Тарик, к сожалению, мы запросили дополнительную информацию, мы хотели узнать больше о вашей компании, чтобы сделать что-то более, Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством...Привет, Тарик, к сожалению, мы запросили дополнительную информацию, мы хотели узнать больше о вашей компании, чтобы сделать что-то более, Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством...',
			images: ['review-img-02','review-img-03'],
		}
	},
	{
		name: 'Арсений Т.',
		id: '@arseni43',
		count: 32,
		date: '10 марта 2024',
		rate: 4,
		text: 'Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...',
		review_title: 'Нужен гид, чтобы провел по городу Чунцин. Запланирована поездка дальняя, через чащобы',
		status: 'Заказ выполнен',
		images: ['review-img-01','review-img-02'],
	},
	{
		name: 'Арсений Т.',
		id: '@arseni43',
		count: 32,
		date: '10 марта 2024',
		rate: 4,
		text: 'Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...Я пишу, чтобы оставить отзыв об услуге по разработке логотипа, которую я недавно получил от Луи. К сожалению, вынужден выразить свое глубокое разочарование качеством выполненной работы. Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством выполненной работы и еще более того, было возмутительно получить неудавшиеся материалы, кстати...',
		review_title: 'Нужен гид, чтобы провел по городу Чунцин. Запланирована поездка дальняя, через чащобы',
		status: 'Заказ выполнен',
		images: ['review-img-01','review-img-02'],
		answer: {
			text: 'Привет, Тарик, к сожалению, мы запросили дополнительную информацию, мы хотели узнать больше о вашей компании, чтобы сделать что-то более, Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством...Привет, Тарик, к сожалению, мы запросили дополнительную информацию, мы хотели узнать больше о вашей компании, чтобы сделать что-то более, Предоставленному логотипу не хватает креативности и оригинальности разочарование качеством...',
			images: ['review-img-02','review-img-03'],
		}
	},
]

</script>
	
<template lang="pug">
div(style="position: fixed; top: 0px; left: 0px; display: flex; z-index: 1002")
button(@click="typeVisitor = 'executor'") executor
button(@click="typeVisitor = 'employer'") employer
button(@click="typeVisitor = 'noneAuth'") noneAuth
Header 

Block.cabinet
	img.cabinet-cover(src="assets/img/user-cover.jpg", alt="")
	.cabinet-info
		.user-info
			img.user-info__avatar(src="assets/img/avatar-01.jpg", alt="Avatar")
			.user-info__col
				p.user-info__status.medium-small(v-if="typeVisitor !== 'executor'") Онлайн
				p.user-info__title.h6 Мария Иванова
				p.user-info__id.medium @maryivanova
			.user-info__frame
				p.user-info__time.regular На сайте 1 год и 10 месяцев
				.user-info-reviews 
					p.user-info-reviews__rate.bold
						StarFillIcon(size="16")
						| 4.9
					hr
					p.user-info-reviews__count.regular 12 отзывов
			.user-info__actions(v-if="typeVisitor === 'employer'")
				Button(accent).user-info__button Предложить заказ
				Button(outline).user-info__chat
					ChatFillIcon 
					| Чат
				Button(small @click="bookmark = !bookmark").user-info__bookmark
					BookmarkIcon(v-if="!bookmark")
					BookmarkFillIcon(v-if="bookmark")
			.user-info__actions(v-else-if="typeVisitor === 'executor'")
				Button(accent).user-info__button Редактировать
			.user-info__actions.user-info__actions--noAuth(v-else-if="typeVisitor === 'noneAuth'")
				p.user-info__actions-title.h6 Готовы начать сотрудничество?
				p.user-info__actions-text.regular Чтобы предложить заказ или начать диалог, сперва необходимо авторизоваться
				Button(accent).user-info__button Присоединиться / Войти
			.user-info-description
				p.user-info-description__title.small-uppercase-medium Обо мне
				p.user-info-description__main.bold 
					| Возраст: 34 года
					<br>
					| Нахожусь: Шэньчжень
					<br>
					| Опыт работы: 12 лет
				p.user-info-description__text.regular
					| Я Мария, профессиональный графический дизайнер со стажем 5 лет.
					<br/><br/>
					| Я работал над множеством проектов: от логотипов до подробных иллюстраций и анимации. Я обладаю глубоким пониманием принципов дизайна и могу помочь вам создать уникальный и эффективный бренд.
					<br/><br/>
					| Дизайн — это то, что мне действительно нравится, и для меня это не просто работа. Я работал со многими известными агентствами, а сейчас работаю штатным дизайнером-фрилансером на Fiverr. Логотипы, инфографика, листовки, брошюры, упаковка, логотипы для спорта и игр — вот некоторые из моих специализаций. Спасибо, Найма.
				p.user-info-description__title.small-uppercase-medium Специализации
				p.user-info-description__row 
					Tag(isAccent) Посредник
					Tag Гид
					Tag Инспектор

		.user-reviews
			p.user-reviews__complaint.medium-small(v-if="typeVisitor !== 'executor'") Пожаловаться
			.user-reviews-filter 
				p.user-reviews-filter__count.h1 12
				p.user-reviews-filter__title.medium Отзывов
				SingleDropdown.user-reviews-filter__sort(:list="['Новые','Сначала дешевле','Сначала дороже']" :value="SORT" @update:modelValue="SORT = $event")
			.user-reviews-list
				UserReview(v-for="info in REVIEWS_PLACEHOLDER" :info="info" :typeVisitor="typeVisitor")
Footer
</template>
	
<style scoped lang="scss">
.cabinet {
	padding: 24px 0px 144px;
}
.cabinet-cover {
	width: 100%;
	border-radius: 4px;
	max-height: 200px;
	width: 100%;
	height: 100%;
	display: block;
	overflow: hidden;
	@include r(768px) {
		max-height: 100px;
	}
}
.cabinet-info {
	display: grid;
	grid-template-columns: 332px 1fr;
	gap: 24px;
	@include r(768px) {
		display: flex;
		flex-direction: column;
		gap: 60px;
	}
}
.user-info {
	display: flex;
	flex-direction: column;
	gap: 32px;
	&__id {
		opacity: 0.5;
	}
	&__avatar {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		min-width: 100px;
		min-height: 100px;
		box-shadow: 0px 0px 0px 8px var(--DARK);
		margin: -50px auto -20px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	&__status {
		padding: 4px 16px 4px 12px;
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: center;
		border-radius: 14px;
		background: var(--GREY-300);
		color: var(--GREEN) !important;
		margin-bottom: 12px;
		&::before {
			content: "";
			width: 4px;
			height: 4px;
			border-radius: 50%;
			background: var(--GREEN);
		}
	}
	&__time {
		opacity: 0.5;
	}
	&__frame {
		border-radius: 4px;
		border: 1px solid var(--BORDER-GREY, #252525);
		background: var(--GREY-400, #1C1C19);
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px 0px;
		align-items: center;
		justify-content: center;
	}
	&__actions {
		display: grid;
		grid-template-columns: 1fr 40px;
		gap: 8px;
		&-text {
			margin-bottom: 8px;
			opacity: 0.7;
		}
		&--noAuth {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
	}
	&__button {
		grid-column: 1 / 3;
	}
	&__chat {
		padding-top: 7px;
		padding-bottom: 7px;
		@include hover {
			:deep(path) {
				fill: var(--DARK);
			}
		}
	}
	&__bookmark {
		width: 40px;
		height: 40px;
		padding: 0;
		border-radius: 4px;
		border: 1px solid var(--GREY-100, #333);
		background: var(--GREY-400, #1C1C19);
		:deep(svg) {
			color: var(--ACCENT) !important;
		}
		@include hover {
			border-color: var(--GREY-100);
			background: var(--GREY-400);
		}
	}
}
.user-info-reviews {
	display: flex;
	gap: 12px;
	align-items: center;
	hr {
		width: 1px;
		height: 16px;
		background: var(--GREY-100, #333);
	}
	&__rate {
		padding: 2px 4px;
		display: flex;
		align-items: center;
		gap: 2px;
		:deep(path) {
			fill: var(--ACCENT);
		}
	}
	&__count {
		opacity: 0.5;
	}
}
.user-info-description {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__title {
		padding-bottom: 12px;
		border-bottom: 1px solid var(--GREY-100);
	}
	&__row {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
	}
	&__main {
		opacity: 0.7;
		color: var(--LIGHT-GREY);
	}
	&__text {
		opacity: 0.7;
	}
}
.user-reviews {
	display: flex;
	flex-direction: column;
	&__complaint {
		margin-left: auto;
		margin-bottom: 24px;
		opacity: 0.5;
		cursor: pointer;
		@include hover {
			opacity: 1;
		}
	}
	&>*:first-child {
		margin-top: 16px;
	}
	@include r(768px) {
		&__complaint {
			display: none;
		}
	}
}
.user-reviews-filter {
	display: flex;
	gap: 12px;
	align-items: flex-start;
	padding-bottom: 12px;
	margin-bottom: 32px;
	border-bottom: 1px solid var(--GREY-100);
	&__title {
		margin-top: 12px;
	}
	&__sort {
		margin-left: auto;
		margin-top: auto;
	}
}
.user-reviews-list {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	gap: 32px;
}
</style>