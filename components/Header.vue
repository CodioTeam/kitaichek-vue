<script setup>
import GroupsIcon from "~/components/icons/GroupsIcon.vue"
import ChevronIcon from "~/components/icons/ChevronIcon.vue"
import LinkIcon from "~/components/icons/FindIcon.vue"
import ChatIcon from "~/components/icons/ChatIcon.vue"
import NotificationIcon from "~/components/icons/NotificationIcon.vue"


onMounted(() => {
	// HEADER
	const headerBottoms = document.querySelectorAll('.header-bottom')
	const headerNav = document.querySelectorAll('[data-header]')

	headerBottoms.forEach((item) => {
		const bottomHeader = item.querySelector('.header-bottom__header--mobile')
		bottomHeader.addEventListener('click', () => {
			headerBottoms.forEach((i) => {
				if(!i.classList.contains('header-bottom--active')) {
					i.classList.remove('header-bottom--active')
				}

				if(i.classList.contains('header-bottom--active') && i !== item) {
					i.classList.remove('header-bottom--active')
				}
			})
			item.classList.toggle('header-bottom--active')
		})
	})

	headerNav.forEach((nav) => {
		nav.addEventListener('mouseenter', () => {
			const navData = nav.dataset.header
			headerNav.forEach((item) => {
				item.classList.remove('header-nav__link--active')
				nav.classList.add('header-nav__link--active')
				// if(item === nav && !item.classList.contains('header-nav__link--active')) {
				// } else {
				// }
			})
			headerBottoms.forEach((item) => {
				if (item.classList.contains(`header-bottom--${navData}`)) {
					item.classList.add('header-bottom--active')
				} else {
					item.classList.remove('header-bottom--active')
				}
			})
		})
	})

	window.addEventListener('click', (e) => {
		if (!e.target.closest('.header-bottom') && !e.target.closest('[data-header]') && !e.target.closest('.header-top__burger')) {
			headerBottoms.forEach((item) => {
				item.classList.remove('header-bottom--active')
			})
			headerNav.forEach((item) => {
				item.classList.remove('header-nav__link--active')
			})
		}
	})
	window.addEventListener('mousemove', (e) => {
		if(!e.target.closest('.header')) {
			headerBottoms.forEach((item) => {
				item.classList.remove('header-bottom--active')
			})
			headerNav.forEach((item) => {
				item.classList.remove('header-nav__link--active')
			})
		}
	})

	// HEADER BURGER

	const headerBurger = document.querySelector('.header-top__burger')
	const headerBottomWrapper = document.querySelector('.header-bottom__wrapper')

	headerBurger?.addEventListener('click', () => {
		document.body.classList.toggle('lock')
		headerBurger.classList.toggle('header-top__burger--active')
		headerBottomWrapper.classList.toggle('header-bottom__wrapper--active')
		headerBottoms[0].classList.toggle('header-bottom--active')
	})
})

const modalOpen = ref(false)
const modalActive = ref(null)

const formLogin = ref({
	email: '',
	password: '',
})
const formRecovery = ref({
	email: '',
})

const isAuth = ref(false)

const PLACEHOLDER_CHAT = [
	{
		isRead: false,
		sender: "Иван Иванов",
		city: "Москва",
		messages: [
			[0, "Привет, в чем я могу помочь тебе сегодня?", "12.04.2024 19:34"],
			[1, "Привет, мне нужна помощь с домашним заданием по математике.", "12.04.2024 19:35"],
			[0, "Конечно, буду рад помочь. С каким упражнением ты работаешь?", "12.04.2024 19:36"],
			[1, "Я пытаюсь решить это уравнение: 2x + 3 = 9", "12.04.2024 19:37"],
			[0, "Сначала вычти 3 из обеих сторон уравнения, чтобы изолировать член с x.", "12.04.2024 19:38"],
			[1, "Хорошо, я это сделал. Теперь у меня 2x = 6", "12.04.2024 19:39"],
			[0, "Отлично! Теперь раздели обе части на 2, чтобы найти x.", "12.04.2024 19:40"],
			[1, "Понял, x = 3. Большое спасибо за помощь!", "12.04.2024 19:41"],
			[0, "Пожалуйста! Не стесняйся обращаться, если нужна еще помощь.", "12.04.2024 19:42"],
			[1, "У меня еще один вопрос. Как найти производную этой функции: f(x) = x^2 + 3x - 1?", "13.04.2024 16:12"],
			[0, "Чтобы найти производную f(x), нужно применить правило степени к каждому слагаемому.", "13.04.2024 16:13"],
			[1, "Хорошо, тогда производная x^2 равняется 2x, верно?", "13.04.2024 16:14"],
			[0, "Да, это верно. А производная 3x равняется 3.", "13.04.2024 16:15"],
			[1, "Ясно. А производная -1 просто равна 0, верно?", "13.04.2024 16:16"],
			[0, "Точно. Таким образом, производная f(x) равняется: f'(x) = 2x + 3.", "13.04.2024 16:17"],
			[1, "Спасибо, теперь все понятно! Можешь помочь мне еще с одним вопросом?", "14.04.2024 11:22"],
			[0, "Когда угодно. В чем ты сейчас нуждаешься?", "14.04.2024 11:23"],
			[1, "У меня возникли трудности с пониманием, как интегрировать эту функцию: ∫(3x^2 - 2x + 1) dx", "14.04.2024 11:24"],
			[0, "Чтобы проинтегрировать эту функцию, нужно применить правило степени для интегрирования к каждому слагаемому.", "14.04.2024 11:25"],
			[1, "Хорошо, тогда интеграл 3x^2 равняется x^3, верно?", "14.04.2024 11:26"],
			[0, "Немного не так. Интеграл 3x^2 равняется (3/3)x^3 = x^3. Не забудь про константу интегрирования!", "14.04.2024 11:27"],
			[1, "О, точно. А интеграл -2x равняется -x^2, верно?", "14.04.2024 11:28"],
			[0, "Да, это верно. А интеграл 1 равняется просто x.", "14.04.2024 11:29"],
			[1, "Понял. Тогда интеграл функции равняется (x^3 - x^2 + x) + C, верно?", "14.04.2024 11:30"],
			[0, "Верно! Теперь ты на верном пути.", "14.04.2024 11:31"]
		]
	},
	{
		isRead: false,
		sender: "Иван Иванов",
		messages: [
			[0, "Входящее", "12.04.2024 19:33"],
			[1, "Исходящее", "12.04.2024 19:34"],
			[0, "Входящее", "12.04.2024 19:35"],
			[1, "Исходящее", "12.04.2024 19:36"],
		]
	},
]
const PLACEHOLDER_NOTIFICATION = ref([
	{
		title: 'Получен отклик',
		time: '12.04.2024 19:34',
		text: 'Ваш отклик на задание "Как сделать красивую вёрстку"',
		isRead: false,
	},
	{
		title: 'Получен отклик',
		time: '12.04.2024 19:34',
		text: 'Ваш отклик на задание "Как сделать красивую вёрстку"',
		isRead: false,
	},
	{
		title: 'Получен отклик',
		time: '12.04.2024 19:34',
		text: 'Ваш отклик на задание "Как сделать красивую вёрстку"',
		isRead: false,
	},
])

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

</script>

<template lang="pug">
header.header
	.header-top
		.container
			.header-top__row
				button.header-top__burger
					span
					span
					span
					span
					span
					span
				router-link(to="/").header-top__logo
					img(src="assets/img/logo-mini.svg", alt="")
					img(src="assets/img/logo.svg", alt="")
				nav.header-nav
					button.header-nav__link.bt-medium(data-header="direction")
						| Направления
						ChevronIcon
					button.header-nav__link.bt-medium(data-header="work")
						| Работа
						ChevronIcon
					button.header-nav__link.bt-medium(data-header="news")
						| Статьи
						ChevronIcon
					a(href="#").header-nav__link.bt-medium
						| Q&A
			.header-auth(v-if="!isAuth")
				p.header-auth__users.bt-medium
					GroupsIcon
					| 1 312 238
				Button(outline dark @click="modalOpen = true; modalActive = 'login'") Присоединиться
				Button(outline dark @click="modalOpen = true; modalActive = 'login'") Войти
			.header-auth(v-else)
				p.header-auth__orders.bt-medium Мои заказы
				.header-auth__controllers
					button.header-auth__button(@click="modalOpen = true; modalActive = 'chat'" :class="{ 'active': PLACEHOLDER_CHAT.filter(n => !n.isRead).length > 0 }")
						ChatIcon
					button.header-auth__button(@click="modalOpen = true; modalActive = 'notification'" :class="{ 'active': PLACEHOLDER_NOTIFICATION.filter(n => !n.isRead).length > 0 }")
						NotificationIcon
				a(href="#").header-auth__avatar
	.header-bottom__wrapper
		.header-bottom.header-bottom--direction
			.container
				.header-bottom__header.header-bottom__header--pc
					p.header-bottom__title.bt-medium Поиск специалиста по направлениям
					a(href="#").header-bottom__link.st Перейти в каталог
				.header-bottom__header.header-bottom__header--mobile
					p.header-bottom__title.bt-medium Направления
					ChevronIcon
				.header-bottom__links-wrapper
					.header-bottom__links
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Байеры
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Гиды
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Переводчики
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Экспедиторы
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Посредники
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Инспекторы
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
				.header-bottom__line
		.header-bottom.header-bottom--work
			.container
				.header-bottom__header.header-bottom__header--pc
					p.header-bottom__title.bt-medium Поиск работы по направлениям
					a(href="#").header-bottom__link.st Перейти в каталог
				.header-bottom__header.header-bottom__header--mobile
					p.header-bottom__title.bt-medium Работа
					ChevronIcon
				.header-bottom__links-wrapper
					.header-bottom__links
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Байеров
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Гидов
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Переводчиков
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Экспедиторов
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Посредников
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Для Инспекторов
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
				.header-bottom__line
		.header-bottom.header-bottom--news
			.container
				.header-bottom__header.header-bottom__header--pc
					p.header-bottom__title.bt-medium Поиск работы по направлениям
					a(href="#").header-bottom__link.st Перейти в каталог
				.header-bottom__header.header-bottom__header--mobile
					p.header-bottom__title.bt-medium Статьи
					ChevronIcon
				.header-bottom__links-wrapper
					.header-bottom__links
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 1
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 2
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 3
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 4
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 5
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
						a(href="#").header-bottom-item
							ChevronIcon
							p.header-bottom-item__title.bt-medium Рубрика 6
							p.header-bottom-item__text.st Удаленные помощники на китайском рынке товаров
				.header-bottom__line
		.header-bottom
			.container
				a(href="#").header-bottom__header.header-bottom__header--mobile
					p.header-bottom__title.bt-medium Q&A
					LinkIcon

ModalContainer(:open="modalOpen" @close="modalOpen = false; modalActive = null;")
	transition(name="fade-right" mode="out-in")
		Modal(v-if="modalActive === 'login'" noBorder @close="modalActive = null; modalOpen = false" isForm)
			template(#content)
				form.modal-login-content__form
					h5.modal-login-content__title.h5 Вход
					.modal-login-content__step
						Input(type="email" title="Email" v-model="formLogin.email" :value="formLogin.email")
						Input(type="password" title="Пароль" v-model="formLogin.password" :value="formLogin.password")
						Button(type="button" dark @click="modalActive = null; modalOpen = false; isAuth = true").modal-login-content__button Войти
						button(type="button" @click="modalActive = 'recovery'").best-link.bt-medium Напомнить пароль?
			template(#footer)
				a.registration-footer__link.bt-medium
					| Еще не присоеднились?
					router-link(to="/registration").best-link.bt-medium Регистрация
		Modal(v-else-if="modalActive === 'recovery'" noBorder @close="modalActive = null; modalOpen = false" isForm)
			template(#content)
				form.modal-login-content__form
					h5.modal-login-content__title.h5 Восстановление пароля
					.modal-login-content__step
						Input(type="email" title="Email" v-model="formRecovery.email" :value="formRecovery.email")
						Button(type="button" dark @click="modalActive = 'recoveryDone'").modal-login-content__button Восстановить пароль
						Button(type="button" white @click="modalActive = 'login'").modal-login-content__button Назад
			template(#footer)
				a.registration-footer__link.bt-medium
					| Еще не присоеднились?
					router-link(to="/registration").best-link.bt-medium Регистрация
		Modal(v-else-if="modalActive === 'recoveryDone'" noBorder @close="modalActive = null; modalOpen = false" isForm)
			template(#content)
				form.modal-login-content__form
					h5.modal-login-content__title.h5 Восстановление пароля
					.modal-login-content__step
						p.modal-login-content__text.bt-medium Мы отправили письмо с инструкцией на указанный адрес электронной почты.
						Button(type="button" dark @click="modalActive = 'login'").modal-login-content__button Войти
			template(#footer)
				a.registration-footer__link.bt-medium
					| Еще не присоеднились?
					router-link(to="/registration").best-link.bt-medium Регистрация
		Modal(v-else-if="modalActive === 'notification'" @close="modalActive = null; modalOpen = false").modal-notification
			template(#header)
				p.modal__title.modal-notification__title(:data-new="PLACEHOLDER_NOTIFICATION.filter(n => !n.isRead).length")
			template(#content)
				Notification(v-for="notification in PLACEHOLDER_NOTIFICATION" :info="notification" @read="notification.isRead = true")
		Modal(v-else-if="modalActive === 'chat'" @close="modalActive = null; modalOpen = false")
			template(#header)
				p.modal__title.modal-messages__title(:data-new="PLACEHOLDER_CHAT.filter(c => !c.isRead).length")
			template(#content)
				ChatPreview(v-for="chat in PLACEHOLDER_CHAT" :info="chat" @openChat="activeChat = chat; modalActive = 'chat-message'; chat.isRead = true")
		Modal(v-else-if="modalActive === 'chat-message'" @close="modalActive = null; modalOpen = false", @back="modalActive = 'chat'")
			template(#content)
				Chat(:info="activeChat" @newMessage="activeChat.messages.push([1, $event, formatDate(new Date())])")

</template>

<style scoped lang="scss">
// HEADER
.header {
	background: var(--LIGHT-GREY);
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 5;
}
.header-top {
	display: flex;
	padding: 11px 0;
	position: relative;
	z-index: 10;
	background: var(--LIGHT-GREY);
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&__row {
		display: flex;
		gap: 24px;
		align-items: center;
		justify-content: center;
	}
	&__burger {
		display: none;
		width: 24px;
		height: 24px;
		position: relative;
		overflow: hidden;
		span {
			height: 1px;
			background: #1C1B1F;
			position: absolute;
			width: 16px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			transition: all .3s ease, width .15s ease .15s;
			&:nth-child(1) {
				transform-origin: center;
				width: 8px;
				transform: translate(calc(-50% + 4px), calc(-50% - 4px)) rotate(0deg);
			}
			&:nth-child(2) {
				width: 8px;
				transform: translate(calc(-50% - 4px), calc(-50% - 4px)) rotate(0deg);
			}
			&:nth-child(3) {
				width: 8px;
				transform: translate(calc(-50% + 4px), calc(-50% + 4px)) rotate(0deg);
			}
			&:nth-child(4) {
				width: 8px;
				transform: translate(calc(-50% - 4px), calc(-50% + 4px)) rotate(0deg);
			}
			&:nth-child(5) {
				width: 8px;
				left: -100%;
			}
		}
		&--active {
			span {
				&:nth-child(1) {
					transform: translate(calc(-50% + 4px), calc(-50% - 4px)) rotate(-45deg);
				}
				&:nth-child(2) {
					transform: translate(calc(-50% - 4px), calc(-50% - 4px)) rotate(45deg);
				}
				&:nth-child(3) {
					transform: translate(calc(-50% + 4px), calc(-50% + 4px)) rotate(45deg);
				}
				&:nth-child(4) {
					transform: translate(calc(-50% - 4px), calc(-50% + 4px)) rotate(-45deg);
				}
				&:nth-child(5) {
					left: 50%;
					width: 1px;
					transform: translate(-50%, -50%);
				}
				&:nth-child(6) {
					left: 150%;
				}
			}
		}
	}
	&__logo {
		img {
			&:first-child {
				display: none;
			}
		}
	}
	@include r(990px) {
		&__logo {
			img {
				&:first-child {
					display: block;
				}
				&:last-child {
					display: none;
				}
			}
		}
	}
	@include r(768px) {
		&__burger {
			display: flex;
		}
		&__row {
			gap: 12px;
		}
	}
}
.header-nav {
	display: flex;
	align-items: center;
	gap: 32px;
	&__link {
		display: flex;
		padding: 4px 8px;
		border-radius: 16px;
		align-items: center;
		transition: .3s ease;
		gap: 4px;
		svg {
			width: 16px;
			height: 16px;
			transition: .3s ease;
		}
		&--active {
			background: var(--HOVER-LIGHT-GREY, #EFEFEF);
			svg {
				transform: rotate(-180deg);
			}
		}
	}
	@include r(768px) {
		display: none;
	}
}
.header-auth {
	display: flex;
	align-items: center;
	gap: 24px;
	justify-content: center;
	&__users {
		display: flex;
		align-items: center;
		gap: 4px;
		align-items: center;
	}
	&__controllers {
		display: flex;
		gap: 4px;
	}
	&__button {
		position: relative;
		padding: 4px 8px;
		border-radius: 16px;
		transition: .3s ease;
		&.active::before {
			content: '';
			width: 4px;
			height: 4px;
			border-radius: 50%;
			position: absolute;
			top: 4px;
			right: 4px;
			background: #FF5C00;
		}
		@include hover {
			background: var(--BORDER-LIGHT-2, #E9E9E9);
		}
	}
	&__avatar {
		width: 40px;
		min-width: 40px;
		min-height: 40px;
		height: 40px;
		border-radius: 50%;
		background: #D9D9D9;
	}
	.button {
		&:nth-of-type(2) {
			display: none;
		}
	}
	@include r(990px) {
		.button {
			&:nth-of-type(1) {
				display: none;
			}
			&:nth-of-type(2) {
				display: flex;
			}
		}
	}
	@include r(768px) {
		.button {
			padding: 6px 16px;
			min-height: 32px;
			border-radius: 16px;
		}
		&__users {
			display: none;
		}
		&__orders {
			display: none;
		}
	}
}
.header-bottom {
	padding-top: 24px;
	padding-bottom: 12px;
	position: absolute;
	left: 0;
	background: var(--LIGHT-GREY);
	top: 0;
	width: 100%;
	transform: translate(0, -100%);
	transition: .3s ease;
	opacity: 0;
	pointer-events: none;
	&__wrapper {
		position: relative;
		z-index: 1;
		transition: .3s ease;
	}
	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 16px;
		margin-bottom: 32px;
		border-bottom: 1px solid #E9E9E9;
		&--mobile {
			display: none;
		}
	}
	&__line {
		margin: 24px auto 0;
		width: 32px;
		height: 2px;
		border-radius: 16px;
		background: #E9E9E9;
	}
	&__links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
		gap: 24px;
	}
	&--active {
		opacity: 1;
		pointer-events: all;
		transform: translate(0, 0);
	}
	@include r(768px) {
		position: static;
		transform: translate(0, 0);
		opacity: 1;
		pointer-events: all;
		padding-top: 0;
		padding-bottom: 24px;
		&__header {
			margin-bottom: 0;
			svg {
				transition: .3s ease;
			}
			&--pc {
				display: none;
			}
			&--mobile {
				display: flex;
			}
		}
		&__links-wrapper {
			display: grid;
			grid-template-rows: 0fr;
			transition: .3s ease;
		}
		&__line {
			display: none;
		}
		&__links {
			height: 100%;
			overflow: hidden;
			transition: .3s ease;
			gap: 4px;
		}
		&__wrapper {
			position: absolute;
			padding-top: 16px;
			padding-bottom: 16px;
			display: flex;
			flex-direction: column;
			pointer-events: none;
			width: 100%;
			left: 0;
			top: 55px;
			overflow: auto;
			background: var(--LIGHT-GREY);
			transform: translate(-100%, 0);
			max-height: calc(100vh - 55px);
			height: calc(100vh - 55px);
			&--active {
				pointer-events: all;
				transform: translate(0, 0);
			}
		}
		&--active:not(:last-child) {
			.header-bottom__links-wrapper {
				grid-template-rows: 1fr;
			}
			.header-bottom__header {
				svg {
					transform: rotate(-180deg);
				}
			}
		}
		&:last-child {
			padding-bottom: 0;
		}
	}
}
.header-bottom-item {
	padding: 16px;
	border-radius: 16px;
	transition: .3s ease;
	display: flex;
	flex-direction: column;
	gap: 12px;
	position: relative;
	&__text {
		opacity: 0.6;
	}
	svg {
		display: none;
	}
	@include hover {
		background: #EFEFEF;
	}
	@include r(768px) {
		border-radius: 16px;
		background: var(--GREY-400, #1C1C19);
		&__title, &__text {
			color: #fff;
		}
		&__title {
			height: 24px;
			line-height: 24px;
		}
		svg {
			position: absolute;
			right: 16px;
			top: 16px;
			display: block;
			transform: rotate(-90deg);
			path {
				fill: #fff;
			}
		}
	}
}

// MODAL-LOGIN
.modal-login-content {
	&__wrapper {
		overflow: hidden;
		height: 100%;
		width: 100%;
		transition: .3s ease;
	}
	&__form {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 32px;
	}
	&__step {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 440px;
		gap: 32px;
		.best-link {
			margin-left: auto;
			margin-top: -8px;
		}
	}
	&__button {
		&.button--white {
			margin-top: -16px;
		}
	}
}
.registration-footer__link {
	display: flex;
	gap: 8px;
	opacity: 1;
	position: static;
	max-width: 440px;
	width: 100%;
	margin: 0 auto;
	pointer-events: all;
}

// MODAL-NOTIFICATION
.modal-notification {
	max-width: 440px;
	&__title {
		display: flex;
		align-items: center;
		gap: 4px;
		&::before {
			content: 'Уведомления';
		}
		&[data-new]:not([data-new="0"])::before {
			content: 'Новых уведомлений';
		}
		&[data-new]:not([data-new="0"])::after {
			content: attr(data-new);
			display: block;
			color: #272723;
			padding: 2px 4px;
			border-radius: 16px;
			background: #E9E9E9;
		}
	}
}

// MODAL-MESSAGES
.modal-messages {
	&__title {
		display: flex;
		align-items: center;
		gap: 4px;
		&::before {
			content: 'Сообщения';
		}
		&[data-new]:not([data-new="0"])::before {
			content: 'Новых сообщений';
		}
		&[data-new]:not([data-new="0"])::after {
			content: attr(data-new);
			display: block;
			color: #272723;
			padding: 2px 4px;
			border-radius: 16px;
			background: #E9E9E9;
		}
	}
}
</style>
