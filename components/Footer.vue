<script setup>
import InstagramIcon from "~/components/icons/InstagramIcon.vue"
import TelegramIcon from "~/components/icons/TelegramIcon.vue"
import YouTubeIcon from "~/components/icons/YouTubeIcon.vue"
import WhatsappIcon from "~/components/icons/WhatsappIcon.vue"
import LinkIcon from "~/components/icons/LinkIcon.vue"

</script>
	
<template lang="pug">
footer.footer
	.container
		nav.footer-nav
			.footer-nav__col
				p.footer-nav__title.h6 Направления
				a(href="#").footer-nav__link.regular Байеры
				a(href="#").footer-nav__link.regular Гиды
				a(href="#").footer-nav__link.regular Переводчики
				a(href="#").footer-nav__link.regular Экспедиторы
				a(href="#").footer-nav__link.regular Посредники
				a(href="#").footer-nav__link.regular Инспекторы
			.footer-nav__col
				p.footer-nav__title.h6 Работа
				a(href="#").footer-nav__link.regular Для Байеров
				a(href="#").footer-nav__link.regular Для Гидов
				a(href="#").footer-nav__link.regular Для Переводчиков
				a(href="#").footer-nav__link.regular Для Экспедиторов
				a(href="#").footer-nav__link.regular Для Посредников
				a(href="#").footer-nav__link.regular Для Инспекторов
			.footer-nav__col
				p.footer-nav__title.h6 Статьи
				a(href="#").footer-nav__link.regular Актуальное
				a(href="#").footer-nav__link.regular Новости
				a(href="#").footer-nav__link.regular Гайды
				a(href="#").footer-nav__link.regular Полезное
			.footer-nav__col
				a(href="#").footer-nav__title.h6 
					| Q&A
					LinkIcon
		.footer-socials
			p.footer-socials__title.h6 Следите за нами
			.footer-socials__row
				a(href="#").footer-socials__link
					InstagramIcon
				a(href="#").footer-socials__link
					YouTubeIcon
				a(href="#").footer-socials__link
					TelegramIcon
				a(href="#").footer-socials__link
					WhatsappIcon
		.footer-bottom 
			p.footer-bottom__text.medium © 2018 - 2024 КИТАЙЧЕК.Partners. <br> Все права защищены.
			a(href="#").footer-bottom__link.medium Пользовательское соглашение
			a(href="#").footer-bottom__link.medium Политика конфиденциальности
			a(href="#").footer-bottom__link.medium Настройки куки
</template>
	
<style scoped lang="scss">
// FOOTER
.footer {
	padding: 80px 0px;
	@include r(768px) {
		padding: 40px 0px;
	}
}
.footer-nav {
	display: flex;
	gap: 24px;
	&__col {
		display: flex;
		flex-direction: column;
		max-width: calc(25% - 18px);
		width: 100%;
		gap: 16px;
		&:last-child {
			.footer-nav__title {
				position: relative;
				margin-bottom: 0;
				&::before {
					content: '';
					position: absolute;
					bottom: -1px;
					width: 100%;
					transform-origin: left;
					transform: scaleX(0);
					transition: .3s ease;
					height: 1px;
					border-bottom: 1px solid rgba(28, 28, 25, 0.8);
				}
				@include hover {
					&::before {
						transform: scaleX(1);
					}
				}
			}
		}
	}
	&__title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba(28, 28, 25, 0.2);
		padding-bottom: 16px;
		margin-bottom: 8px;
	}
	&__link {
		text-underline-position: under;
		@include hover {
			text-decoration: underline;
		}
	}
	@include r(990px) {
		flex-wrap: wrap;
		&__col {
			max-width: calc(50% - 12px);
		}
	}
	@include r(425px) {
		flex-direction: column;
		&__col {
			max-width: 100%;
		}
	}
}
.footer-socials {
	margin-top: 60px;
	display: flex;
	gap: 24px;
	align-items: center;
	&__row {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	&__link {
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 4px;
		background: var(--GREY-400, #1C1C19);
		transition: .3s ease;
		:deep(path) {
			transition: .3s ease;
		}
		@include hover {
			background: var(--GREY-100, #333);
			:deep(path) {
				fill: var(--ACCENT);
			}
		}
	}
	@include r(768px) {
		margin-top: 40px;
		flex-direction: column;
		align-items: flex-start;
	}
}
.footer-bottom {
	margin-top: 24px;
	padding-top: 24px;
	display: flex;
	align-items: flex-start;
	gap: 12px 32px;
	border-top: 1px solid rgba(28, 28, 25, 0.2);
	&__text {
		margin-right: auto;
	}
	&__link {
		text-underline-position: under;
		@include hover {
			text-decoration: underline;
		}
	}
	@include r(990px) {
		flex-wrap: wrap;
	}
	@include r(768px) {
		flex-direction: column;
		&__text {
			order: 1;
			margin-top: 12px;
		}
	}
}
</style>