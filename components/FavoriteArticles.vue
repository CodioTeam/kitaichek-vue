<script setup>
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Article from '~/components/Article.vue';
import 'swiper/css';

defineProps({
	list: {
		type: Array,
		default: () => []
	},
	count: {
		type: Number,
		default: 3
	}
})

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
.favorite-articles__wrapper
	Swiper(
		:slidesPerView="1"
		:spaceBetween="24"
		:enabled="true"
		:breakpoints={
			769: {
				enabled: false,
			},
		},
		:modules="[Navigation]"
		:navigation={
			nextEl: '#nextPaginationArticles',
			prevEl: '#prevPaginationArticles',
		},
		@init="(swiper) => swiperInit(swiper, 'paginationArticles')"
		@slideChange="(swiper) => swiperSlideChange(swiper)"
		@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
		@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
	).favorite-articles
		template(v-for="i in count")
			SwiperSlide
				Article(v-if="list[i]" :info="list[i]" isAside)
	.pagination
		.pagination__progress#paginationArticles
			.pagination__progress-bar
			.pagination__progress-bar
		.pagination__buttons
			.pagination__button#prevPaginationArticles
				IconsChevronIcon
			.pagination__button#nextPaginationArticles
				IconsChevronIcon
</template>

<style scoped lang="scss">
.favorite-articles {
	display: flex;
	flex-direction: column;
	gap: 24px;
	@media screen and (min-width: 769px) {
		:deep(.swiper-wrapper) {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
	}
}
.pagination {
	display: none;
	@include r(768px) {
		display: flex;
	}
}
</style>
