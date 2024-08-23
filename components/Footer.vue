<script setup>
</script>

<template lang="pug">
footer.footer
	.container
		nav.footer-nav
			.footer-nav__col
				p.footer-nav__title.h5 Направления
				a(href="#").footer-nav__link.bt Байеры
				a(href="#").footer-nav__link.bt Гиды
				a(href="#").footer-nav__link.bt Переводчики
				a(href="#").footer-nav__link.bt Экспедиторы
				a(href="#").footer-nav__link.bt Посредники
				a(href="#").footer-nav__link.bt Инспекторы
			.footer-nav__col
				p.footer-nav__title.h5 Работа
				a(href="#").footer-nav__link.bt Для Байеров
				a(href="#").footer-nav__link.bt Для Гидов
				a(href="#").footer-nav__link.bt Для Переводчиков
				a(href="#").footer-nav__link.bt Для Экспедиторов
				a(href="#").footer-nav__link.bt Для Посредников
				a(href="#").footer-nav__link.bt Для Инспекторов
			.footer-nav__col
				p.footer-nav__title.h5 Статьи
				a(href="#").footer-nav__link.bt Актуальное
				a(href="#").footer-nav__link.bt Новости
				a(href="#").footer-nav__link.bt Гайды
				a(href="#").footer-nav__link.bt Полезное
			.footer-nav__col
				a(href="#").footer-nav__title.h5
					| Q&A
					IconsLinkIcon
		.footer-socials
			p.footer-socials__title.h5 Следите за нами
			.footer-socials__row
				a(href="#").footer-socials__link
					IconsInstagramIcon
				a(href="#").footer-socials__link
					IconsYouTubeIcon
				a(href="#").footer-socials__link
					IconsTelegramIcon
				a(href="#").footer-socials__link
					IconsWhatsappIcon
		.footer-bottom
			p.footer-bottom__text.bt-medium © 2018 - 2024 КИТАЙЧЕК.Partners. <br> Все права защищены.
			a(href="#").footer-bottom__link.bt-medium Пользовательское соглашение
			a(href="#").footer-bottom__link.bt-medium Политика конфиденциальности
			a(href="#").footer-bottom__link.bt-medium Настройки куки
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
		border-radius: 12px;
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
