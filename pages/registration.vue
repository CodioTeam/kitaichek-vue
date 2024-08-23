<script setup>
const PLACEHOLDER_DROPDOWN = ["Байер","Гид","Переводчик","Экспедитор","Посредник","Инспектор","Инспектор1","Инспектор2","Инспектор3",]

const registrationSteps = ref({
	maxSteps: 2,
	currentStep: 0,
	type: null
})

const back = () => {
	registrationSteps.value.currentStep -= 1
	if(registrationSteps.value.currentStep === 0) {
		registrationSteps.value.type = null
	}
}
const next = () => {
	registrationSteps.value.currentStep += 1
}

const registrationForm = ref({
	email: "",
	password: "",
	fio: "",
	dateBirth: "",
	country: "",
})

const loginForm = ref({
	email: "",
	password: "",
})

const recoveryForm = ref({
	email: "",
})
</script>

<template lang="pug">
section.registration
	img(src="assets/img/logo.svg", alt="").registration__logo
	.registration__container
		.registration-header(:class="{ hidden: registrationSteps.currentStep === 0}")
			p.registration-header__steps(v-if="registrationSteps.currentStep > 0 && registrationSteps.currentStep <= registrationSteps.maxSteps && (registrationSteps.type === 'customer' || registrationSteps.type === 'freelancer')") Шаг {{ registrationSteps.currentStep }} из {{ registrationSteps.maxSteps }}
			button.registration-header__back(@click="back()")
				IconsChevronIcon

		.registration-content
			.registration-content__wrapper
				transition(name="fade-right-small" mode="out-in")
					.registration-content__step(v-if="registrationSteps.currentStep === 0")
						h5.registration-content__title.h5 Регистрация
						.registration-card__wrapper
							button.registration-card(@click="registrationSteps.maxSteps = 2; registrationSteps.currentStep = 1; registrationSteps.type = 'customer'")
								IconsChevronIcon
								p.registration-card__title.h5
									span Я Заказчик, ищу исполнителя
									span Продолжить как <span>Заказчик</span>
							button.registration-card(@click="registrationSteps.maxSteps = 3; registrationSteps.currentStep = 1; registrationSteps.type = 'freelancer'")
								IconsChevronIcon
								p.registration-card__title.h5
									span Я Фрилансер, ищу работу
									span Продолжить как <span>Фрилансер</span>

					form.registration-content__form(v-else-if="registrationSteps.type === 'customer' || registrationSteps.type === 'freelancer'")
						transition(name="fade-right-small" mode="out-in")
							h5.registration-content__title.h5(v-if="registrationSteps.type === 'customer' && registrationSteps.currentStep < 3") Регистрация Заказчика
							h5.registration-content__title.h5(v-else-if="registrationSteps.type === 'freelancer' && registrationSteps.currentStep < 4") Регистрация Исполнителя
							h5.registration-content__title.h5(v-else) Регистрация успешно завершена
						transition(name="fade-right-small" mode="out-in")
							.registration-content__step(v-if="registrationSteps.currentStep === 1")
								h5.registration-content__subtitle.h5 С помощью электронной почты
								Input(title="email" v-model="registrationForm.email" :value="registrationForm.email" type="email")
								Input(title="пароль" v-model="registrationForm.password" :value="registrationForm.password" type="password")
								.registration-valid
									p.registration-valid__title Создайте пароль, который:
									p.registration-valid__item.st
										IconsValidateCheckIcon
										IconsValidateCrossIcon
										IconsValidateDefaultIcon
										| содержит не менее 8 симв.
									p.registration-valid__item.st
										IconsValidateCheckIcon
										IconsValidateCrossIcon
										IconsValidateDefaultIcon
										| содержит как строчные (a–z), так и прописные буквы (A–Z)
									p.registration-valid__item.st
										IconsValidateCheckIcon
										IconsValidateCrossIcon
										IconsValidateDefaultIcon
										| содержит по крайней мере одну цифру (0–9) или символ.
									p.registration-valid__item.st
										IconsValidateCheckIcon
										IconsValidateCrossIcon
										IconsValidateDefaultIcon
										| не содержит ваш адрес электронной почты
								Button(type="button" dark @click="next()").registration-content__button Продолжить
								Button(type="button" white @click="back()").registration-content__button Назад

							.registration-content__step(v-else-if="registrationSteps.currentStep === 2")
								Input(title="ФИО" v-model="registrationForm.fio" :value="registrationForm.fio")
								Input(title="Дата рождения" v-model="registrationForm.dateBirth" :value="registrationForm.dateBirth")
								Input(title="Страна" v-model="registrationForm.country" :value="registrationForm.country")

								p.registration-content__text Нажимая «Создать аккаунт», я подтверждаю, что ознакомился с положениями, указанными в статьях <a href="#">Условия использования</a> и <a href="#">Политика конфиденциальности</a>.
								Button(type="button" dark @click="next()" v-if="registrationSteps.type === 'freelancer'").registration-content__button Продолжить
								Button(type="button" dark @click="next()" v-else).registration-content__button Создать аккаунт
								Button(type="button" white @click="back()").registration-content__button Назад

							.registration-content__step(v-else-if="registrationSteps.currentStep === 3 && registrationSteps.type === 'freelancer'")
								Dropdown(title="Первая Выбранная специализация считается основной" :list="PLACEHOLDER_DROPDOWN")

								p.registration-content__text Нажимая «Создать аккаунт», я подтверждаю, что ознакомился с положениями, указанными в статьях <a href="#">Условия использования</a> и <a href="#">Политика конфиденциальности</a>.
								Button(type="button" dark @click="next()").registration-content__button Создать аккаунт
								Button(type="button" white @click="back()").registration-content__button Назад

							.registration-content__step(v-else-if="(registrationSteps.currentStep === 4 && registrationSteps.type === 'freelancer') || (registrationSteps.currentStep === 3 && registrationSteps.type === 'customer')")
								p.bt-medium Мы отправили письмо с инструкцией для подтверждения аккаунта на указанный адрес электронной почты.
								Button(href="/" dark).registration-content__button Перейти к сайту

					form.registration-content__form(v-else-if="registrationSteps.type === 'login'")
						h5.registration-content__title.h5 Вход
						.registration-content__step
							Input(title="email" v-model="loginForm.email" :value="loginForm.email")
							Input(title="пароль" v-model="loginForm.password" :value="loginForm.password" type="password")
							Button(href="/" dark).registration-content__button Войти
							Button(type="button" @click="back()" white).registration-content__button Назад
							button(type="button" @click="registrationSteps.type = 'recovery'").best-link.bt-medium Напомнить пароль?

					form.registration-content__form(v-else-if="registrationSteps.type === 'recovery'")
						h5.registration-content__title.h5 Восстановление пароля
						transition(name="fade-right-small" mode="out-in")
							.registration-content__step(v-if="registrationSteps.currentStep === 1")
								Input(title="email" v-model="recoveryForm.email" :value="recoveryForm.email")
								Button(type="button" dark @click="next()").registration-content__button Восстановить пароль
								Button(type="button" white @click="registrationSteps.type = 'login'").registration-content__button Назад
							.registration-content__step(v-else)
								p.bt-medium Мы отправили письмо с инструкцией для подтверждения аккаунта на указанный адрес электронной почты.
								Button(type="button" dark @click="registrationSteps.type = 'login'").registration-content__button Войти

		.registration-footer
			transition(name="fade-right-small" mode="out-in")
				p.registration-footer__link.bt-medium(v-if="registrationSteps.type !== 'login' && registrationSteps.type !== 'recovery'")
					| Уже есть аккаунт?
					button(@click="registrationSteps.type = 'login'; next()").best-link.bt-medium Войти
				p.registration-footer__link.bt-medium(v-else)
					| Еще не присоеднились?
					button(@click="registrationSteps.type = null; registrationSteps.currentStep = 0").best-link.bt-medium Регистрация


</template>

<style scoped lang="scss">
.registration {
	background: url("@/assets/img/overlay.jpg") no-repeat;
	background-size: cover;
	width: 100%;
	display: flex;
	min-height: 100vh;
	padding: 24px;
	position: relative;
	&__container {
		width: 100%;
		max-width: calc(50% - 24px);
		min-width: 464px;
		background: white;
		margin-left: auto;
		padding: 24px 34px 24px 24px;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
	}
	&__logo {
		position: absolute;
		bottom: 24px;
		left: 24px;
		filter: invert(1);
	}
	// &[data-active="registrationChoice"] {
	// 	.registration-header {
	// 		display: none;
	// 	}
	// 	.registration-content {
	// 		&__wrapper {
	// 			.registration-content {
	// 				&__step {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// &[data-active="registrationLogin"] {
	// 	.registration-header {
	// 		&__steps {
	// 			display: none;
	// 		}
	// 	}
	// 	.registration-content {
	// 		&__form:nth-of-type(2) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(1) {
	// 					display: flex;
	// 				}
	// 				&__title {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	.registration-footer {
	// 		&__link {
	// 			&:first-child {
	// 				opacity: 0;
	// 				pointer-events: none;
	// 			}
	// 			&:last-child {
	// 				opacity: 1;
	// 				pointer-events: all;
	// 			}
	// 		}
	// 	}
	// }
	// &[data-active="registrationForgot"] {
	// 	.registration-header {
	// 		&__steps {
	// 			display: none;
	// 		}
	// 	}
	// 	.registration-content {
	// 		&__form:nth-of-type(3) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(1) {
	// 					display: flex;
	// 				}
	// 				&__title {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	.registration-footer {
	// 		&__link {
	// 			&:first-child {
	// 				opacity: 0;
	// 				pointer-events: none;
	// 			}
	// 			&:last-child {
	// 				opacity: 1;
	// 				pointer-events: all;
	// 			}
	// 		}
	// 	}
	// }
	// &[data-active="registrationForgot6"] {
	// 	.registration-header {
	// 		&__steps {
	// 			display: none;
	// 		}
	// 	}
	// 	.registration-content {
	// 		&__form:nth-of-type(3) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(2) {
	// 					display: flex;
	// 				}
	// 				&__title {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 	}
	// 	.registration-footer {
	// 		&__link {
	// 			&:first-child {
	// 				opacity: 0;
	// 				pointer-events: none;
	// 			}
	// 			&:last-child {
	// 				opacity: 1;
	// 				pointer-events: all;
	// 			}
	// 		}
	// 	}
	// }
	// &[data-active="registrationFrilanser"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(1) {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 		&__title:nth-of-type(2) {
	// 			display: flex;
	// 		}
	// 	}
	// }
	// &[data-active="registrationFrilanser1"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(2) {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 		&__button:nth-of-type(2) {
	// 			display: none;
	// 		}
	// 		&__title:nth-of-type(2) {
	// 			display: flex;
	// 		}
	// 	}
	// }
	// &[data-active="registrationFrilanser2"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(3) {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 		&__title:nth-of-type(2) {
	// 			display: flex;
	// 		}
	// 	}
	// }
	// &[data-active="registrationCustomer"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(1) {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 		&__title:nth-of-type(1) {
	// 			display: flex;
	// 		}
	// 	}
	// }
	// &[data-active="registrationCustomer1"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(2) {
	// 					display: flex;
	// 				}
	// 			}
	// 		}
	// 		&__button:nth-of-type(1) {
	// 			display: none;
	// 		}
	// 		&__title:nth-of-type(1) {
	// 			display: flex;
	// 		}
	// 	}
	// }
	// &[data-active="registrationCustomer2"],
	// &[data-active="registrationFrilanser3"] {
	// 	.registration-content {
	// 		&__form:nth-of-type(1) {
	// 			display: flex;
	// 			.registration-content {
	// 				&__step:nth-of-type(4) {
	// 					display: flex;
	// 					.registration-content__title {
	// 						display: flex;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// }
}
.registration-header {
	display: flex;
	justify-content: space-between;
	&__back {
		margin-left: auto;
		width: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		transform: rotate(90deg);
	}
	&__steps {
		color: var(--GREY-400);
		opacity: 0.5;
		font-size: 12px;
		font-weight: 500;
		line-height: 140%; /* 16.8px */
		letter-spacing: 0.48px;
		text-transform: uppercase;
	}
	&.hidden {
		opacity: 0;
		pointer-events: none;
	}
}
.registration-content {
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-template-rows: 1fr;
	transition: .3s ease;
	max-width: 440px;
	width: 100%;
	&__wrapper {
		height: 100%;
		width: 100%;
		transition: .3s ease;
	}
	&__form {
		// display: none;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	&__step {
		// display: none;
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
	&__title {
		// display: none;
		&+.registration-content__subtitle {
			margin-top: -16px;
		}
		&+.registration-card {
			margin-top: 32px;
		}
	}
	&__subtitle {
		opacity: 0.5;
	}
	&__text {
		color: var(--GREY-400, #1C1C19);
		font-size: 12px;
		font-weight: 400;
		line-height: 160%; /* 19.2px */
		a {
			color: #1473e6;
		}
	}
	&__button {
		width: 100%;
		&.button--white {
			margin-top: -16px;
		}
	}
}
.registration-valid {
	display: flex;
	gap: 4px;
	margin-top: 8px;
	flex-direction: column;
	&__title {
		font-family: "Noto Sans";
		font-size: 12px;
		font-style: normal;
		font-weight: 600;
		line-height: 160%;
		margin-bottom: 8px;
	}
	&__item {
		display: flex;
		align-items: center;
		gap: 4px;
		:deep(svg) {
			display: none;
			&:last-child {
				display: block;
			}
		}
		&.valid {
			color: #00FF84;
			:deep(svg) {
				display: none;
				&:first-child {
					display: block;
				}
			}
		}
		&.invalid {
			color: #FF5C00;
			:deep(svg) {
				display: none;
				&:nth-child(2) {
					display: block;
				}
			}
		}
	}
}
.registration-card {
	width: 100%;
	display: flex;
	align-items: flex-end;
	padding: 24px;
	border-radius: 16px;
	position: relative;
	height: 180px;
	background: var(--LIGHT-GREY, #F8F8F8);
	transition: .3s ease;
	&+& {
		margin-top: 16px;
	}
	:deep(svg) {
		position: absolute;
		top: 50%;
		right: 100px;
		transform: translateY(-50%) rotate(-90deg);
		transition: .3s ease;
		opacity: 0;
		path {
			color: white;
		}
	}
	&__wrapper {
		display: flex;
		flex-direction: column;
	}
	&__title {
		white-space: nowrap;
		width: 100%;
		display: flex;
		overflow: hidden;
		&>span {
			color: var(--GREY-400);
			display: block;
			width: 100%;
			text-align: left;
			min-width: 100%;
			transition: .3s ease;
			&>span {
				color: var(--ACCENT);
			}
		}
	}
	@include hover {
		background: var(--GREY-400, #1C1C19);
		:deep(svg) {
			opacity: 1;
			right: 24px;
		}
		.registration-card__title {
			&>span {
				color: white;
				&:first-child {
					margin-left: -100%;
				}
			}
		}
	}
}
.registration-footer {
	max-width: 440px;
	width: 100%;
	margin: 0 auto;
	position: relative;
	&__link {
		display: flex;
		gap: 8px;
		color: #828281;
		pointer-events: all;
	}
}
</style>
