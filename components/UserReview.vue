<script setup>
import { filename } from 'pathe/utils'
const props = defineProps({
	isAnswer: false,
	info: {
		type: Object,
	},
	typeVisitor: {
		type: String,
	}
})

const { name, id, count, date, rate, text, images, answer, status, review_title } = props.info
const more = ref(false)
const zoomImage = ref(false)
const zoomedImage = ref(0)
const canSendAnswer = ref(false)
const selectedImages = ref([])
const selectedImagesPreview = ref([])
const message = ref('')
const handleSelectedImage = (e) => {
	selectedImages.value = e.target.files
	selectedImagesPreview.value = []
	for (let i = 0; i < selectedImages.value.length; i++) {
		selectedImagesPreview.value.push(URL.createObjectURL(selectedImages.value[i]))
	}
}

const glob = import.meta.glob('@/assets/img/*.jpg', { eager: true })
const img = Object.fromEntries(
  Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template lang="pug">
.review
	img.review__avatar(src="assets/img/avatar-01.jpg", alt="Avatar")
	.review__col
		.review-info__wrapper
			img.review__avatar(src="assets/img/avatar-01.jpg", alt="Avatar")
			.review-info
				.review-info__row
					p.review-info__name.h5 {{ isAnswer ? 'Ответ исполнителя' : name }}
					p.review-info__id.bt-medium(v-if="!isAnswer") {{ id }}
				p.review-info__count.st(v-if="!isAnswer") {{ count }} заказа
			button.review-info__add-answer.bt-medium(v-if="typeVisitor === 'executor' && !isAnswer && answer === undefined" @click="canSendAnswer = !canSendAnswer") {{ canSendAnswer ? 'Отмена' : 'Ответить' }}
		.review-rate(v-if="!isAnswer")
			.review-rate__stars
				template(v-for="i in 5" v-if="!isAnswer")
					IconsStarFillIcon(size="16" v-if="i <= rate")
					IconsStarIcon(size="16" v-else)
			p.review-rate__number.bt-bold {{ rate }}
			hr
			p.review-rate__date.st {{date}}
		.review-frame(:class="{'review-frame--answer': isAnswer}")
			p.review-frame__text.bt(:class="{ 'review-frame__text--more': more }") {{ text }}
			p.review-frame__more.bt(@click="more = !more") {{ more ? 'Скрыть' : 'Показать больше' }}
			.review-frame__images
				template(v-for="i, j in images")
					img.review-frame__img(:src="img[i]", alt="Review image" @click="zoomImage = !zoomImage; zoomedImage = j")
			p.review-frame__complete(v-if="!isAnswer")
				span {{ status }}
				span.bt-medium {{ review_title }}
		UserReview(v-if="answer" :info="answer" :isAnswer="true")

		form.review-answer(v-if="canSendAnswer")
			label.review-answer-images
				input.review-answer-images__input(type="file" multiple accept="image/*" @input="handleSelectedImage($event)")
				template(v-for="img in selectedImagesPreview")
					span.review-answer-images__label
						img.review-answer-images__img(:src="img")
				span.review-answer-images__label
					IconsAddIcon(size="24")
			.review-answer__row(:class="{ 'active': message.length > 0 }")
				input.bt-medium.review-answer__input(type="text" placeholder="Текст ответа" v-model="message")
				Button(yellow).review-answer__button
					IconsEnterIcon
					span Enter
ImagesZoom(:images="images" :open="zoomImage" :zoomedImage="zoomedImage" @update:zoomedImage="zoomedImage = $event" @close="zoomImage = false; zoomedImage = 0")

</template>

<style scoped lang="scss">
.review-answer {
	display: flex;
	flex-direction: column;
	gap: 12px;
	&__input {
		padding: 12px;
		border-bottom: 1px solid var(--LIGHT-GREY);
		width: 100%;
		color: #fff;
	}
	&__button {
		position: relative;
		min-width: 48px;
		min-height: 48px;
		max-width: 48px;
		max-height: 48px;
		width: 48px;
		height: 48px;
		overflow: hidden;
		transform: translateX(48px);
		transition: .3s ease;
		opacity: 0;
		pointer-events: none;
		margin-left: -72px;
		color: var(--GREY-400);
		svg {
			position: absolute;
			top: 50%;
			left: 50%;
			transition: .3s ease;
			transform: translate(-50%, -50%);
			color: var(--GREY-400);
			:deep(path) {
				fill: var(--GREY-400);
			}
		}
		span:not(.icon) {
			position: absolute;
			top: 50%;
			left: 50%;
			transition: .3s ease;
			color: var(--GREY-400);
			transform: translate(-50%, 150%);
		}
		@include hover {
			svg {
				transform: translate(-50%, -200%);
			}
			span:not(.icon) {
				transform: translate(-50%, -50%);
			}
		}
	}
	&__row {
		display: flex;
		gap: 24px;
		&.active {
			.review-answer__button {
				opacity: 1;
				transform: translateX(0);
				pointer-events: all;
				margin-left: 0;
			}
		}
	}
}
.review-answer-images {
	display: flex;
	position: relative;
	gap: 16px;
	flex-wrap: wrap;
	&__input {
		position: absolute;
		width: 100%;
		height: 10px;
		top: 0;
		left: 0;
		opacity: 0;
	}
	&__label {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 16px;
		overflow: hidden;
		position: relative;
		width: 120px;
		height: 100px;
		background: var(--GREY-400);
		cursor: pointer;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
.review {
	display: flex;
	gap: 16px;
	&__avatar {
		border-radius: 50%;
		width: 42px;
		height: 42px;
		min-width: 42px;
		min-height: 42px;
	}
	&__col {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	@include r(768px) {
		&__avatar {
			display: none;
		}
	}
}
.review-info {
	display: flex;
	flex-direction: column;
	&__row {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	&__id {
		opacity: 0.5;
	}
	&__count {
		opacity: 0.5;
	}
	&__wrapper {
		display: flex;
		position: relative;
		gap: 16px;
		.review__avatar {display: none;}
	}
	&__add-answer {
		position: absolute;
		right: 0;
		top: 5px;
		color: #fff;
		opacity: 0.5;
	}
	@include r(768px) {
		&__wrapper {
			.review__avatar {display: block;}
		}
	}
}
.review-rate {
	margin-top: 8px;
	display: flex;
	align-items: center;
	gap: 12px;
	hr {
		width: 1px;
		height: 16px;
		background: var(--GREY-100, #333);
	}
	&__stars {
		display: flex;
		align-items: center;
		:deep(svg) {
			color: var(--ACCENT, #FFC107);

		}
		:deep(svg:not(:first-child)) {
			margin-left: -2px;
		}
	}
	&__number {
		margin-left: -8px;
		color: var(--ACCENT) !important;
	}
	&__date {
		opacity: 0.5;
		color: var(--LIGHT-GREY);
	}
}
.review-frame {
	display: flex;
	flex-direction: column;
	border-radius: 16px;
	gap: 16px;
	width: 100%;
	&:not(&--answer) {
		padding: 16px;
		background: var(--GREY-400, #1C1C19);
	}
	&__text {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		&--more {
			display: block;
		}
	}
	&__more {
		margin-top: -8px;
		cursor: pointer;
		text-decoration: underline;
		text-underline-position: under;
	}
	&__images {
		display: flex;
		gap: 12px;
		cursor: pointer;
		flex-wrap: wrap;
	}
	&__img {
		display: block;
		width: 120px;
		height: 100px;
		border-radius: 16px;
		object-fit: cover;
	}
	&__complete {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		width: 100%;

		span:first-child {
			color: var(--ACCENT);
			white-space: nowrap;
		}
		span:last-child {
			opacity: 0.5;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
}
</style>
