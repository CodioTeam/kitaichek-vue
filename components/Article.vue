<script setup>
import ClockIcon from "~/components/icons/ClockIcon.vue"
import { filename } from 'pathe/utils'

const { info } =  defineProps({
	info: {
		type: Object,
	},
	isAside: {
		type: Boolean,
		default: false
	}
})

const { category, title, readTime, date, description, img } = info
const glob = import.meta.glob('@/assets/img/*.jpg', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>
	
<template lang="pug">
a(href="#" :class="{ 'article--aside': isAside }" ).article.card
	.article__header
		Tag.article__tag(isAccent isSmall) {{ category }}
		img.article__img(:src="images[img]", alt=title)
	.article__body
		h6.article__title {{ title }}
		.article__row
			p.article__text
				ClockIcon(size="20") 
				span {{ readTime }}
			p.article__text 
				span {{ date }}
		p.article__description.regular {{ description }}
</template>
	
<style scoped lang="scss">
.article {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__header  {
		position: relative;
		overflow: hidden;
		height: 198px;
		width: 100%;
		border-radius: 4px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__text {
		color: rgb(255, 255, 255);
		font-size: 12px;
		font-weight: 500;
		line-height: 160%; /* 19.2px */
		display: flex;
		align-items: center;
		gap: 6px;
		span {
			opacity: 0.7;
		}
	}
	&__description {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		opacity: 0.5;
	}
	&__tag {
		position: absolute;
		top: 8px;
		right: 8px;
		z-index: 1;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transform: scale(1.1);
		transition: .3s ease;
	}
	&__body {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	&--aside {
		background: transparent;
		border: 0;
		border-radius: 0;
		padding: 0 0 12px;
		border-bottom: 1px solid var(--GREY-100, #333);
		.article {
			&__description {
				-webkit-line-clamp: 5;
			}
			&__tag {
				position: static;
			}
			&__header {
				height: auto;
				display: flex;
				align-items: flex-start;
			}
			&__img {
				display: none;
			}
		}
	}
	@include hover {
		.article__img {
			transform: scale(1);
		}
	}
}
</style>