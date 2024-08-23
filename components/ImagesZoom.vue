<script setup>
import CloseIcon from './Icons/CloseIcon.vue';
import ChevronIcon from './icons/ChevronIcon.vue';
import { filename } from 'pathe/utils'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const props = defineProps({
	images: {
		type: Array,
		default: []
	},
	open: {
		type: Boolean,
		default: false
	},
	zoomedImage: {
		type: Number,
		default: 0
	}
})
const emit = defineEmits(['close', 'update:zoomedImage'])

const swiperInit = (swiper, id) => {
	swiper.paginationBest = document.getElementById(id)
	swiper.paginationBest.style = `--width: ${100 / (swiper.slides.length - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1)}%; --reverseWidth: ${100 - (100 / (swiper.slides.length - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1))}%;`
	swiper.slideTo(props.zoomedImage, 0)
	window.addEventListener('keydown', (e) => {
		if(e.code === 'Escape') emit('close')
		if(e.code === 'ArrowRight') swiper.slideNext()
		if(e.code === 'ArrowLeft') swiper.slidePrev()
		if(e.code === 'ArrowUp') swiper.slidePrev()
		if(e.code === 'ArrowDown') swiper.slideNext()
	})
}
const swiperSlideChange = (swiper) => {
	swiper.paginationBest.style = `--width: ${100 / (swiper.slides.length - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1)}%; --reverseWidth: ${100 - (100 / (swiper.slides.length - swiper.params.slidesPerView + 1) * (swiper.activeIndex + 1))}%;`
	emit('update:zoomedImage', swiper.activeIndex)
}
const swiperSlideChangeTransitionStart = (swiper) => {
	swiper.paginationBest.classList.add('pagination__progress--active')
}
const swiperSlideChangeTransitionEnd = (swiper) => {
	swiper.paginationBest.classList.remove('pagination__progress--active')
}

const glob = import.meta.glob('@/assets/img/*.jpg', { eager: true })
const img = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)

</script>

<template lang="pug">
.zoom(v-if="open")
	.container
		.zoom__header
			p.zoom__count.subtitle {{zoomedImage + 1}} / {{ images.length }}
			button.close__icon(@click="$emit('close')")
				CloseIcon(size="32")
		Swiper.zoom-swiper(
			:slidesPerView="1"
			:spaceBetween="24"
			:modules="[Navigation]"
			:navigation={
				nextEl: '#nextZoomImage',
				prevEl: '#prevZoomImage',
			},
			@init="(swiper) => swiperInit(swiper, 'paginationZoomImage')"
			@slideChange="(swiper) => swiperSlideChange(swiper)"
			@slideChangeTransitionEnd="(swiper) => swiperSlideChangeTransitionEnd(swiper)"
			@slideChangeTransitionStart="(swiper) => swiperSlideChangeTransitionStart(swiper)"
		)
			template(v-for="i in images")
				SwiperSlide
					img.zoom__img(:src="img[i]", alt="Review image")

		.pagination
			.pagination__progress#paginationZoomImage
				.pagination__progress-bar
				.pagination__progress-bar
			.pagination__buttons
				.pagination__button#prevZoomImage
					ChevronIcon
				.pagination__button#nextZoomImage
					ChevronIcon
</template>

<style scoped lang="scss">
	.zoom {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1001;
		background: #161614;
		padding: 24px 0;
		.container {
			height: 100%;
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			display: block;
			border-radius: 16px;
		}
	}
	.zoom-swiper {
		width: 100%;
		height: 100%;
		flex-grow: 1;
	}
</style>
