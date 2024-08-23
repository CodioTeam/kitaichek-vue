<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const PLACEHOLDER_ARTICLES = [
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
	{
		category: "Название рубрики",
		title: "Название статьи",
		readTime: "15 мин",
		date: "12.12.2024",
		img: "news-01",
		description: "Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа новых предложений. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения форм развития."
	},
]

const readTime = "15 мин"
const date = "12.12.2024"

const swiperInit = (swiper, id) => {
	console.log("init")
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
</script>

<template lang="pug">
Block.article-page
	.article-page__header
		Breadcrumbs.article-page__breadcrumbs
			a(href="#") Главная
			a(href="#") Статьи
			a(href="#") Название статьи
		a(href="#").article-page__back.bt-medium
			IconsChevronIcon
			| К списку статей
	.article-page__body
		.article-content
			.article-preview
				img(src="assets/img/news-01.jpg", alt="").article-preview__img
				.article-preview__body
					Tag.article-preview__tag(isAccent isSmall) Название рубрики
					.article-preview__row
						p.article-preview__text.bt-medium
							IconsClockIcon(size="20")
							span {{ readTime }}
						p.article-preview__text.bt-medium
							span Дата публикации — {{ date }}
			h1.h1.article-content__title Китайский экспорт вырос более чем на 7% за 2024 год
			.article-block
				h5.h5.article-block__title Наверняка, вы тоже заметили, что в последнее время Dribbble и Behance заполонили интерфейсы, составленные из квадратных и прямоугольных карточек со скругленными углами. Этот стиль называется “bento”.
				.article-block__texts
					p.article-block__text Принимая во внимание показатели успешности, высококачественный прототип будущего проекта однозначно фиксирует необходимость вывода текущих активов. Сложно сказать, почему диаграммы связей обнародованы. Как уже неоднократно упомянуто, предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы.
					p.article-block__text Как уже неоднократно упомянуто, предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Равным образом, существующая теория представляет собой интересный эксперимент проверки стандартных подходов. Как принято считать, независимые государства, превозмогая сложившуюся непростую экономическую ситуацию, функционально разнесены на независимые элементы.
					p.article-block__text Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта могут быть преданы социально-демократической анафеме. Наше дело не так однозначно, как может показаться: консультация с широким активом в значительной степени обусловливает важность глубокомысленных рассуждений.
			.article-block
				.article-block-collage
					.article-block-collage__grid.article-block-collage__grid--three
						img(src="assets/img/collage-img-01.jpg", alt="").article-block-collage__img
						img(src="assets/img/collage-img-02.jpg", alt="").article-block-collage__img
						img(src="assets/img/collage-img-03.jpg", alt="").article-block-collage__img
					p.article-block-collage__caption Apple использует Bento UI для продвижения своих продуктов (здесь iPhone 14)
			.article-block
				h4.h4.article-block__title Психологические причины
				h5.h5.article-block__title a. Предвкушение вознаграждения
				.article-block__texts
					p.article-block__text Принимая во внимание показатели успешности, высококачественный прототип будущего проекта однозначно фиксирует необходимость вывода текущих активов. Сложно сказать, почему диаграммы связей обнародованы. Как уже неоднократно упомянуто, предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы.
					p.article-block__text Как уже неоднократно упомянуто, предприниматели в сети интернет призывают нас к новым свершениям, которые, в свою очередь, должны быть обнародованы. Равным образом, существующая теория представляет собой интересный эксперимент проверки стандартных подходов. Как принято считать, независимые государства, превозмогая сложившуюся непростую экономическую ситуацию, функционально разнесены на независимые элементы.
					p.article-block__text Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта могут быть преданы социально-демократической анафеме. Наше дело не так однозначно, как может показаться: консультация с широким активом в значительной степени обусловливает важность глубокомысленных рассуждений.
			.article-block
				.article-block-collage
					.article-block-collage__grid.article-block-collage__grid--one
						img(src="assets/img/collage-img-01.jpg", alt="").article-block-collage__img
					p.article-block-collage__caption Apple использует Bento UI для продвижения своих продуктов (здесь iPhone 14)
			.article-block
				h4.h4.article-block__title Как начать проектировать в стиле Bento
				.article-block__texts
					p.article-block__text Бенто работает лучше всего, когда вы разбиваете содержимое на небольшие кусочки - котлету в один отдел, макарошки в другой. Как только вы это сделаете, приступить к работе будет проще:
					ul.article-block__list
						li.article-block__list-item <strong>Начните с сетки</strong> — Bento UI работает по строгой системе. Каждая ячейка в сетке должна быть прямоугольной.
						li.article-block__list-item <strong>Распределите содержимое по ячейкам</strong> — вставьте содержимое в разные ячейки.
						li.article-block__list-item <strong>Создайте иерархию для управления вниманием.</strong> Управлять вниманием можно при помощи размеров блоков, изображений и цвета.
						li.article-block__list-item <strong>Не забудьте закруглить углы.</strong> Закругленные углы ячеек помогают отличить их друг от друга, и это ключевая составляющая эстетики Bento Box.
						li.article-block__list-item <strong>Сгруппируйте связанный контент</strong> — расположите ячейки таким образом, чтобы связанный контент находился в непосредственной близости. Работает «Теория близости».
			.article-block
				.article-block-collage
					.article-block-collage__grid.article-block-collage__grid--two
						img(src="assets/img/collage-img-01.jpg", alt="").article-block-collage__img
						img(src="assets/img/collage-img-02.jpg", alt="").article-block-collage__img
					p.article-block-collage__caption Apple использует Bento UI для продвижения своих продуктов (здесь iPhone 14)
		.article-aside
			.article-aside__wrapper
				.article-aside__header
					p.article-aside__title.subtitle Избранные статьи
				FavoriteArticles(:list="PLACEHOLDER_ARTICLES" :count="3")

Block.other-article
	h3.section__title.h3 Другие статьи
	Swiper.other-article-swiper(
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
			nextEl: '#nextPaginationOtherArticles',
			prevEl: '#prevPaginationOtherArticles',
		},
		@init="(swiper) => swiperInit(swiper, 'paginationOtherArticles')"
		@slideChange="(swiper) => swiperSlideChange(swiper)"
		@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
		@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
	)
		template(v-for="article in PLACEHOLDER_ARTICLES")
			SwiperSlide
				Article(:info="article")

	.pagination
		.pagination__progress#paginationOtherArticles
			.pagination__progress-bar
			.pagination__progress-bar
		.pagination__buttons
			.pagination__button#prevPaginationOtherArticles
				ChevronIcon
			.pagination__button#nextPaginationOtherArticles
				ChevronIcon
</template>

<style scoped lang="scss">
.other-article {
	padding-bottom: 80px;
	@include r(768px) {
		padding-bottom: 60px;
	}
}
.other-article-swiper {
	margin-top: 60px;

	@include r(768px) {
		margin-top: 32px;
	}
}
.article-preview {
	display: flex;
	position: relative;
	max-height: 360px;
	overflow: hidden;
	border-radius: 16px;
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
	}
	&__body {
		position: absolute;
		z-index: 1;
		top: auto;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 32px;
		display: flex;
		align-items: flex-end;
		gap: 24px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	&__tag {
		white-space: nowrap;
	}
	&__text {
		display: flex;
		align-items: center;
	}
	@include r(990px) {
		&__tag {
			position: absolute;
			right: 8px;
			top: 8px;
			bottom: auto;
		}
		&__body {
			padding: 8px 8px 16px;
		}
	}
}
.article-block-collage {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-left: auto;
	margin-right: auto;
	max-width: 780px;
	&__grid {
		display: flex;
		gap: 24px;
		width: 100%;
		height: 400px;
		&--two {
			&>* {
				max-width: calc(50% - 12px);
			}
		}
		&--three {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-template-areas: "one two" "one three";
			height: 540px;
			&>*:nth-child(1) {
				grid-area: one;
			}
			&>*:nth-child(2) {
				grid-area: two;
			}
			&>*:nth-child(3) {
				grid-area: three;
			}
		}
	}
	&__img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border-radius: 16px;
	}
	&__caption {
		color: #FFF;
		font-size: 16px;
		font-style: italic;
		font-weight: 400;
		line-height: 160%; /* 25.6px */
		opacity: 0.5;
	}
	@include r(768px) {
		&__grid {
			height: auto;
			gap: 20px;
			&--one {
				&>* {
					height: 400px;
				}
			}
			&--two {
				flex-direction: column;
				&>* {
					max-width: 100%;
					&:nth-child(1) {
						height: 400px;
					}
					&:nth-child(2) {
						height: 200px;
					}
				}
			}
			&--three {
				display: flex;
				flex-direction: column;
				&>* {
					max-width: 100%;
					&:nth-child(1), &:nth-child(3) {
						height: 200px;
					}
					&:nth-child(2) {
						height: 400px;
					}
				}
			}
		}
	}
}
.article-page {
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	&__body {
		margin-top: 40px;
		display: flex;
		gap: 24px;
	}
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__back {
		color: #fff;
		:deep(svg) {
			display: none;
		}
	}
	@include r(768px) {
		&__body {
			flex-direction: column-reverse;
		}
		&__breadcrumbs {
			display: none;
		}
		&__back {
			display: flex;
			align-items: center;
			:deep(svg) {
				display: block;
				transform: rotate(90deg);
			}
		}
	}
}
.article-content {
	width: 100%;
	&__title {
		padding-bottom: 32px;
		border-bottom: 1px solid #D9D9D9;
	}
	& > * + &__title {
		margin-top: 60px;
	}
	h4 + * {
		margin-top: 40px;
	}
	h5 + * {
		margin-top: 24px;
	}
	@include r(768px) {
		&__title {
			padding-bottom: 25px;
		}
		& > * + &__title {
			margin-top: 40px;
		}
		h4 + * {
			margin-top: 32px;
		}
		h5 + * {
			margin-top: 20px;
		}
	}
}
.article-block {
	display: flex;
	flex-direction: column;
	margin-top: 60px;
	&__text {
		color: var(--LIGHT-GREY, #F8F8F8);
		font-size: 18px;
		font-style: normal;
		font-weight: 300;
		line-height: 160%; /* 28.8px */
		& + * {
			margin-top: 12px;
		}
	}
	&__list {
		display: flex;
		flex-direction: column;
		padding-left: 24px;
		gap: 16px;
		&-item {
			list-style: disc;
			color: var(--LIGHT-GREY, #F8F8F8);
			font-size: 18px;
			font-style: normal;
			font-weight: 300;
			line-height: 160%; /* 28.8px */
			strong {
				color: inherit;
			}
		}
	}
	@include r(768px) {
		margin-top: 40px;
		&__text {
			font-size: 14px;
		}
		&__title {
			&.h4 {
				font-size: 24px;
				line-height: 120%;
			}
			&.h5 {
				font-size: 18px;
			}
		}
		&__list {
			gap: 12px;
			&-item {
				font-size: 14px;
			}
		}
	}
}
.article-aside {
	position: relative;
	min-width: 332px;
	max-width: 332px;
	display: flex;
	align-items: flex-start;
	&__wrapper {
		top: 65px;
		width: 100%;
		position: sticky;
		display: flex;

		flex-direction: column;
		gap: 32px;
	}
	&__header {
		display: flex;
		padding: 12px 0;
		border-bottom: 1px solid #D9D9D9;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	&__button {
		color: #A8A8A8;
		line-height: 24px;
	}
	@include r(768px) {
		display: none;
	}
}
</style>
