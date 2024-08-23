<script setup>
import { Navigation, Thumbs, EffectFade, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { ref } from 'vue';

import 'swiper/css';
import "swiper/css/grid";

const PLACEHOLDER_USER = {
	name: "Иван Иванов",
	city: "Москва",
	rating: 4.94,
	feedback: 10,
	tags: ["Гид", "Посредник", "Инспектор"]
}

const PLACEHOLDER_REQUEST = {
	title: "Гид на куда-то, чтобы сделать что-то",
	description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
	price: "$40",
	city: "Шэньчжень",
	tags: ["Гид", "Посредник", "Инспектор"],
	createdAt: "2 ч 42 мин назад",
	deadline: '1-3 месяца',
	responses: '12'
}

const PLACEHOLDER_REVIEW = {
	hired: "Исполнитель нашелся за 1 день",
	price: "$40",
	title: "Проверить товар на фабрике в Шэгьчжень",
	description: "Очень аккуратная вежливая девушка. Мой ребёнок все время «помогал», и несмотря на это квартира убрана хорошо и весело))",
	date: "12.14.2024",
	executor: {
		name: "Мария Иванова",
		jobs: "Выполнил(а) 837 заданий",
		rate: 4.94,
		feedback: 81
	}
}

const PLACEHOLDER_CATEGORIES = [
	{
		title: "Байеры",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsCartIcon
	},
	{
		title: "Гиды",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsLineIcon
	},
	{
		title: "Переводчики",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsLangIcon
	},
	{
		title: "Экспедиторы",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsWalkIcon
	},
	{
		title: "Посредники",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsHandsIcon
	},
	{
		title: "Инспекторы",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsGuardIcon
	},
	{
		title: "Байеры",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsCartIcon
	},
	{
		title: "Гиды",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsLineIcon
	},
	{
		title: "Переводчики",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsLangIcon
	},
	{
		title: "Экспедиторы",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsWalkIcon
	},
	{
		title: "Посредники",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsHandsIcon
	},
	{
		title: "Инспекторы",
		count: 2831,
		description: "Удаленные помощники на китайском рынке товаров",
		icon: IconsGuardIcon
	},
]

const newsSwiper = ref(null)
const newsThumbsSwiper = ref(null)
const swiperInit = (swiper, id) => {
	if(id === 'paginationNewsThumbs') return newsThumbsSwiper.value = swiper
	if(id === 'paginationNews') newsSwiper.value = swiper
	let grided = swiper.params?.grid?.rows ? swiper.params?.grid?.rows : 1
	swiper.paginationBest = document.getElementById(id)
	swiper.paginationBest.style = `--width: ${100 / (swiper.slides.length / grided - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1)}%; --reverseWidth: ${100 - (100 / (swiper.slides.length / grided - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1))}%;`
}
const swiperSlideChange = (swiper) => {
	let grided = swiper.params?.grid?.rows ? swiper.params?.grid?.rows : 1
	swiper.paginationBest.style = `--width: ${100 / (swiper.slides.length / grided - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1)}%; --reverseWidth: ${100 - (100 / (swiper.slides.length / grided - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1))}%;`
}
const swiperSlideChangeTransitionStart = (swiper) => {
	swiper.paginationBest.classList.add('pagination__progress--active')
}
const swiperSlideChangeTransitionEnd = (swiper) => {
	swiper.paginationBest.classList.remove('pagination__progress--active')
}

const currentNewsSlide = ref(0)
const setSwiperThumb = (swiper) => {
	newsSwiper.value = swiper;
}

const searchInput = ref('')
</script>

<template lang="pug">
Block.section--light.intro
	h1.h1.intro__title Начни свой Бизнес с Китаем <br class="desktop tablet"> с поиска <span>исполнителя</span>
	.intro-search
		input.intro-search__input(type="text" placeholder="Я ищу..." v-model="searchInput")
		Button.intro-search__button(type="submit" large dark)
			span
				IconsFindIcon
			span Найти
	.intro-examples
		p.intro-examples__title.bt Например:
		.intro-examples__row
			button.intro-examples__item.st(@click="searchInput = 'Доставка грузов из Китая в СНГ'") Доставка грузов из Китая в СНГ
			button.intro-examples__item.st(@click="searchInput = 'Переводчик с Китайского'") Переводчик с Китайского

Block.categories
	p.section__suptitle.bt-medium Популярные направления
	h3.section__title.h3 Тысячи надежных исполнителей по каждому направлению
	.categories__row
		.categories__swiper-wrapper
			Swiper.category-swiper(
				style="height: 464px"
				:slidesPerView="1"
				:breakpoints={
					1440: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					769: {
						slidesPerView: 1,
					},
					660: {
						slidesPerView: 2,
					}
				}
				:spaceBetween="24"
				:modules="[Navigation, Grid]"
				:grid={
					rows: 2,
					fill: 'column',
				}
				:navigation={
					nextEl: '#nextPaginationCategory',
					prevEl: '#prevPaginationCategory',
				},
				@init="(swiper) => swiperInit(swiper, 'paginationCategory')"
				@slideChange="(swiper) => swiperSlideChange(swiper)"
				@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
				@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
			)
				SwiperSlide(v-for="category in PLACEHOLDER_CATEGORIES")
					Category(:info="category")
		.banner.categories__banner
			h5.banner__title.banner__title--white.h5 Удаленные помощники
			Button(dark) Все специалисты
	.pagination
		.pagination__progress#paginationCategory
			.pagination__progress-bar
			.pagination__progress-bar
		.pagination__buttons
			.pagination__button#prevPaginationCategory
				IconsChevronIcon
			.pagination__button#nextPaginationCategory
				IconsChevronIcon

Block.best
	p.section__suptitle.bt-medium Топ проверенных исполнителей
	h3.section__title.h3 Выберите лучшего среди лучших
	.best__col
		.best__row
			//- .banner.best-banner
			//- 	img(src="assets/img/illustration-02.svg", alt="")
			//- 	h5.banner__title.h5 Простой поиск
			//- 	button.button.button--dark Найти специалиста
			Swiper.best-swiper(
				:slidesPerView="1"
				:spaceBetween="24"
				:breakpoints={
					1440: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					769: {
						slidesPerView: 2,
					},
				},
				:modules="[Navigation]"
				:navigation={
					nextEl: '#nextPaginationBest',
					prevEl: '#prevPaginationBest',
				},
				@init="(swiper) => swiperInit(swiper, 'paginationBest')"
				@slideChange="(swiper) => swiperSlideChange(swiper)"
				@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
				@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
			)
				SwiperSlide
					User.swiper-slide(:info="PLACEHOLDER_USER")
				SwiperSlide
					User.swiper-slide(:info="PLACEHOLDER_USER")
				SwiperSlide
					User.swiper-slide(:info="PLACEHOLDER_USER")
				SwiperSlide
					User.swiper-slide(:info="PLACEHOLDER_USER")
				SwiperSlide
					User.swiper-slide(:info="PLACEHOLDER_USER")
		.pagination
			.pagination__progress#paginationBest
				.pagination__progress-bar
				.pagination__progress-bar
			.pagination__buttons
				.pagination__button#prevPaginationBest
					IconsChevronIcon
				.pagination__button#nextPaginationBest
					IconsChevronIcon

Block.requests
	p.section__suptitle.bt-medium Популярные запросы
	h3.section__title.h3 Начните бизнес с надежного сотрудничества
	.requests__row
		.banner.requests__banner
			img(src="assets/img/illustration-03.svg", alt="")
			h5.banner__title.h5 Найдите специалиста всего за 15 минут
			Button(dark) Разместить заказ
		.requests__col
			Request(:info="PLACEHOLDER_REQUEST")
			Request(:info="PLACEHOLDER_REQUEST")
			Request(:info="PLACEHOLDER_REQUEST")
			Request(:info="PLACEHOLDER_REQUEST")
			Button(dark).requests__button Все объявления

Block.reviews
	p.section__suptitle.bt-medium Отзывы об исполнителях
	h3.section__title.h3 Тысячи выполненных заказов
	Swiper.reviews-swiper(
		:slidesPerView="1"
		:spaceBetween="24"
		:breakpoints={
			1440: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 2,
			},
		},
		:modules="[Navigation]"
		:navigation={
			nextEl: '#nextPaginationReviews',
			prevEl: '#prevPaginationReviews',
		},
		@init="(swiper) => swiperInit(swiper, 'paginationReviews')"
		@slideChange="(swiper) => swiperSlideChange(swiper)"
		@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
		@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
	)
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")
		SwiperSlide
			Review(:info="PLACEHOLDER_REVIEW")

	.pagination
		.pagination__progress#paginationReviews
			.pagination__progress-bar
			.pagination__progress-bar
		.pagination__buttons
			.pagination__button#prevPaginationReviews
				IconsChevronIcon
			.pagination__button#nextPaginationReviews
				IconsChevronIcon

Block.how
	.how__row
		.how-block
			h3.section__title.h3 Как работает сайт?
			p.section__suptitle.bt-medium Работайте с крупнейшей сетью независимых профессионалов в сфере бизнеса с Китаем — тысячи специалистов по шести направлениям для достижения вашей цели
			Button(dark) Разместить заказ
			.how-block__row
				p.how-block__text.bt-medium
					IconsNewsIcon
					| Опишите свою задачу и условия. Это бесплатно и займёт пару минут
				p.how-block__text.bt-medium
					IconsPeopleIcon
					| Получите отклики от исполнителей. Обычно они приходят в течение 30 минут
				p.how-block__text.bt-medium
					IconsHandsIcon
					| Выберите подходящего исполнителя и обсудите сроки выполнения
		.banner.how__banner
			img(src="assets/img/illustration-04.svg", alt="")
			h5.banner__title.h5 КИТАЙЧЕК.Partners — эффективный поиск удаленного помощника

Block.news
	.news-block
		.news-block__bg
			transition(name="fade" mode="in-out")
				img.news-block__bg-img(src="assets/img/news-01.jpg", alt="" v-if="currentNewsSlide === 0")
				img.news-block__bg-img(src="assets/img/news-02.jpg", alt="" v-else-if="currentNewsSlide === 1")
				img.news-block__bg-img(src="assets/img/news-03.jpg", alt="" v-else-if="currentNewsSlide === 2")
		p.section__suptitle.bt-medium Актуальные новости и полезные статьи
		h3.section__title.h3 Статьи
		.news-block__row
			Swiper.news-block__slides(
				:slidesPerView="1"
				:spaceBetween="24"
				:navigation={
					nextEl: '#nextPaginationNews',
					prevEl: '#prevPaginationNews',
				}
				direction="vertical"
				:simulateTouch="false"
				:allowTouchMove="false"
				:modules="[Navigation]"
				@init="(swiper) => swiperInit(swiper, 'paginationNews')"
				@slideChange="(swiper) => {swiperSlideChange(swiper); currentNewsSlide = swiper.activeIndex}"
				@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
				@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
			)
				SwiperSlide.news-item
					h5.news-item__title.h5 Китайский экспорт вырос более чем на 7% за 2024 год
					p.news-item__date.st 12.12.2024
					p.news-item__description.bt-medium Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития.
					Button(href="#" yellow) Читать полностью
				SwiperSlide.news-item
					h5.news-item__title.h5 Китайский экспорт вырос более чем на 7% за 2024 год
					p.news-item__date.st 12.12.2024
					p.news-item__description.bt-medium Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития.
					Button(href="#" yellow) Читать полностью
				SwiperSlide.news-item
					h5.news-item__title.h5 Китайский экспорт вырос более чем на 7% за 2024 год
					p.news-item__date.st 12.12.2024
					p.news-item__description.bt-medium Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития.
					Button(href="#" yellow) Читать полностью
			Swiper.news-block__swiper(
				:spaceBetween="24"
				:slidesPerView="2"
				:slidesPerGroup="1"
				:loop="true"
				:allowTouchMove="false"
				:slideToClickedSlide="true"
				:modules="[Navigation]"
				@init="(swiper) => swiperInit(swiper, 'paginationNewsThumbs')"
				@slideChange="(swiper) => {newsSwiper.slideTo(swiper.realIndex)}"
				:navigation={
					nextEl: '#nextPaginationNews',
					prevEl: '#prevPaginationNews',
				}
			)
				//- @swiper="(swiper) => setSwiperThumb(swiper)"
				SwiperSlide.news-block__preview
						img(src="assets/img/news-01.jpg", alt="")
						.news-item__link
							Button(outline)
								IconsArrowDotsIcon
				SwiperSlide.news-block__preview
						img(src="assets/img/news-02.jpg", alt="")
						.news-item__link
							Button(outline)
								IconsArrowDotsIcon
				SwiperSlide.news-block__preview
						img(src="assets/img/news-03.jpg", alt="")
						.news-item__link
							Button(outline)
								IconsArrowDotsIcon
		.pagination
			.pagination__progress#paginationNews
				.pagination__progress-bar
				.pagination__progress-bar
			.pagination__buttons
				.pagination__button#prevPaginationNews
					IconsChevronIcon
				.pagination__button#nextPaginationNews
					IconsChevronIcon
</template>

<style scoped lang="scss">
// INTRO
.intro {
	padding: 60px 0px 24px;
	&__title {
		color: var(--DARK);
		span {
			color: #929292;
		}
	}
	@include r(768px) {
		padding-top: 160px;
		&__title {
			br {
				display: none;
			}
		}
	}
}
.intro-search {
	display: flex;
	align-items: flex-end;
	gap: 32px;
	margin-top: 80px;
	&__input {
		width: 100%;
		padding: 16px 0px;
		font-size: 24px;
		font-weight: 700;
		line-height: 160%;
		border-bottom: 1px solid var(--DARK, #12120F);
		&::placeholder {
			color: var(--DARK);
			opacity: 0.3;
		}
	}
	&__button {
		span:first-child {display: none}
		span:last-child {display: flex}
		path {
			fill: #fff;
		}
	}
	@include r(768px) {
		gap: 16px;
		&__input {
			font-size: 14px;
			padding: 12px 0px;
		}
		&__button {
			min-height: 48px;
			padding: 11px 16px;
			span:last-child {display: none}
			span:first-child {display: flex}
		}
	}
}
.intro-examples {
	display: flex;
	align-items: center;
	margin-top: 28px;
	flex-wrap: wrap;
	gap: 4px 0px;
	&__item {
		padding: 4px 12px;
		border: 1px solid var(--DARK);
		border-radius: 100px;
		white-space: nowrap;
		transition: .3s ease;
		@include hover {
			background: var(--DARK);
			color: #fff;
		}
	}
	&__title {
		margin-right: 12px;
	}
	&__row {
		display: flex;
		gap: 4px;
		overflow: auto;
	}
	@include r(768px) {
		margin-top: 16px;
		&__row {
			margin: 0px -16px;
			padding: 0px 16px;
			width: 100vw;
			max-width: 100vw;
		}
	}
}

// CATEGORIES
.categories {
	&__grid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
		width: 100%;
	}
	&__row {
		display: flex;
		margin-top: 60px;
		gap: 24px;
	}
	&__banner {
		max-height: 464px;
		position: sticky;
		top: 88px;
		width: 100%;
		background: url("@/assets/img/categories-banner.jpg") no-repeat;
	}
	&__swiper-wrapper {
		display: flex;
		width: calc(75% - 6px);
	}
	@include r(768px) {
		&__row {
			margin-top: 40px;
			flex-direction: column-reverse;
		}
		&__banner {
			position: static;
			max-width: 100%;
			width: 100%;
			max-height: unset;
		}
		&__swiper-wrapper {
			width: 100%;
		}
	}
	@include r(425px) {
		&__grid {
			grid-template-columns: 1fr;
		}
	}
}

// BEST
.best {
	&__col {
		display: flex;
		flex-direction: column;
		margin-top: 60px;
	}
	&__row {
		display: flex;
		gap: 24px;
	}
	@include r(768px) {
		&__col {
			margin-top: 40px;
		}
		&__row {
			flex-direction: column;
		}
	}
}
.best-swiper {
	width: 100%;
}
.best-banner {
	@include r(1440px) {
		max-width: calc(33% - 16px);
	}
	@include r(990px) {
		max-width: calc(50% - 12px);
	}
	@include r(768px) {
		max-width: 100%;
	}
}

// REQUESTS
.requests {
	&__row {
		display: flex;
		gap: 24px;
		margin-top: 60px;
		align-items: flex-start;
	}
	&__banner {
		position: sticky;
		max-width: 332px;
		top: 88px;
		height: 466px;
		img {
			height: 272px;
		}
	}
	&__button {
		width: 100%;
		margin-top: 24px;
	}
	@include r(990px) {
		&__row {
			flex-direction: column;
		}
		&__banner {
			position: static;
		}
	}
	@include r(768px) {
		&__banner {
			max-width: 100%;
			width: 100%;
			height: unset;
			img {
				margin-bottom: 24px;
				height: unset;
			}
		}
		&__row {
			margin-top: 40px;
		}
	}
}

// REVIEWS
.reviews-swiper {
	margin-top: 60px;
	:deep(.swiper-wrapper) {
		height: auto;
	}
}

// HOW
.how {
	&__row {
		display: flex;
		gap: 24px;
	}
	&__banner {
		max-width: 332px;
		background: var(--WHITE);
		min-height: 520px;
		.banner__title {
			margin-bottom: 0;
			margin-top: auto;
		}
	}
	@include r(768px) {
		&__row {
			gap: 12px;
			flex-direction: column;
		}
		&__banner {
			min-height: unset;
			max-width: 100%;
			.banner__title {
				margin-top: 24px;
			}
		}
	}
}
.how-block {
	width: 100%;
	border-radius: 16px;
	background: var(--ACCENT, #FF0);
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	*:is(p,h3) {
		color: var(--DARK) !important;
	}
	&__row {
		display: flex;
		margin-top: auto;
		padding-top: 24px;
		gap: 24px;
		border-top: 1px solid rgba(37, 37, 37, 0.3);
	}
	.section__suptitle {
		margin: 24px 0px 32px;
		max-width: 520px;
	}
	&__text {
		max-width: calc(33.333% - 16px);
		:deep(svg) {
			display: none;
		}
	}
	@include r(990px) {
		&__row {
			flex-direction: column;
		}
		&__text {
			max-width: 100%;
		}
	}
	@include r(768px) {
		padding: 24px 16px;
		&__row {
			margin-top: 40px;
		}
		&__text {
			display: flex;
			gap: 12px;
			:deep(svg) {
				display: block;
				min-width: 32px;
				min-height: 32px;
				width: 32px;
				height: 32px;
				path {
					fill: var(--DARK) !important;
				}
			}
		}
	}
}

// NEWS
.news {
	padding-bottom: 80px;
	@include r(768px) {
		padding-bottom: 60px;
	}
}
.news-block {
	padding: 24px;
	position: relative;
	height: 670px;
	display: flex;
	flex-direction: column;
	& > *:not(.news-block__bg) {
		position: relative;
		z-index: 1;
	}
	&__bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		opacity: 0.2;
		pointer-events: none;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			height: 100%;
			border-radius: 16px;
			background: rgba(18, 18, 15, 0.10);
			backdrop-filter: blur(8px);
		}
		:deep(.swiper-slide) {
			pointer-events: none;
		}
	}
	&__bg-img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
	}
	&__slides {
		max-width: 640px;
		:deep(.swiper-wrapper) {
			height: 274px;
		}
	}
	&__row {
		display: flex;
		gap: 48px;
		margin-top: auto;
	}
	&__preview {
		max-width: 320px;
		max-height: 200px;
		width: 100%;
		height: 100%;
		border-radius: 16px;
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__swiper {
		display: flex;
		align-items: flex-end;
		min-width: 500px;
		:deep(.swiper-wrapper) {
			height: auto;
		}
	}
	@include r(1024px) {
		&__swiper {
			min-width: 300px;
		}
	}
	@include r(768px) {
		height: 560px;
		padding: 24px 16px;
		&__swiper {
			display: none;
		}
		&__slides {
			max-width: 100%;
			:deep(.swiper-wrapper) {
				height: 255px;
			}
		}
	}
}
.news-item {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: auto;
	&__description {
		max-height: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		margin-top: 12px;
		-webkit-box-orient: vertical;
		color: var(--LIGHT-GREY) !important;
	}
	:deep(.button) {
		margin-top: 32px;
	}
	&__date {
		border-radius: 16px;
		padding: 2px 4px;
		margin-top: 12px;
		background: var(--GREY-400, #1C1C19);
		color: var(--LIGHT-GREY, #F8F8F8) !important;
	}
	&__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #16161499;
		transition: .3s ease;
		opacity: 0;
		:deep(.button) {
			padding: 4px 12px;
			path {
				transition: .3s ease;
			}
			@include hover {
				path {
					fill: var(--DARK) !important;
				}
			}
		}
		:deep(.swiper-slide-active) & {
			pointer-events: none;
		}
		@include hover {
			opacity: 1;
		}
	}
	@include r(425px) {
		&__title {
			font-size: 18px;
		}
		:deep(.button) {
			width: 100%;
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
