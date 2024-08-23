<script setup>
import FilterDirection from '~/components/Filters/FilterDirection.vue';
import FilterCity from '~/components/Filters/FilterCity.vue';
import FilterKeyword from '~/components/Filters/FilterKeyword.vue';
import FilterRange from '~/components/Filters/FilterRange.vue';
import FilterToggler from '~/components/Filters/FilterToggler.vue';
import FilterIcon from '~/components/Icons/FilterIcon.vue';
import ChevronIcon from '~/components/icons/ChevronIcon.vue';

const searchCategory = ref('Заказы')

const PLACEHOLDER_REQUESTS = [
	{
		title: "Гид на куда-то, чтобы сделать что-то",
		description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
		price: "$40",
		city: "Шэньчжень",
		tags: ["Гид", "Посредник", "Инспектор"],
		createdAt: "2 ч 42 мин назад",
		deadline: '1-3 месяца',
		responses: 12,
	},
	{
		title: "Гид на куда-то, чтобы сделать что-то",
		description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
		price: "$40",
		city: "Шэньчжень",
		tags: ["Гид", "Посредник", "Инспектор"],
		createdAt: "2 ч 42 мин назад",
		deadline: '1-3 месяца',
		responses: 12,
	},
	{
		title: "Гид на куда-то, чтобы сделать что-то",
		description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
		price: "$40",
		city: "Шэньчжень",
		tags: ["Гид", "Посредник", "Инспектор"],
		createdAt: "2 ч 42 мин назад",
		deadline: '1-3 месяца',
		responses: 12,
	},
	{
		title: "Гид на куда-то, чтобы сделать что-то",
		description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
		price: "$40",
		city: "Шэньчжень",
		tags: ["Гид", "Посредник", "Инспектор"],
		createdAt: "2 ч 42 мин назад",
		deadline: '1-3 месяца',
		responses: 12,
	},
	{
		title: "Гид на куда-то, чтобы сделать что-то",
		description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
		price: "$40",
		city: "Шэньчжень",
		tags: ["Гид", "Посредник", "Инспектор"],
		createdAt: "2 ч 42 мин назад",
		deadline: '1-3 месяца',
		responses: 12,
	},
]

const PLACEHOLDER_EXECUTORS = [
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
	{
		name: "Иван Иванов",
		city: "Москва",
		rating: 4.94,
		feedback: 10,
		tags: ["Гид", "Посредник", "Инспектор"]
	},
]

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

const CURRENT_DIRECTION = ref([])
const DIRECTION_LIST = ["Байер","Гид","Инспектор","Переводчик","Посредник","Экспедитор"]

const CURRENT_CITY = ref([])
const CITY_LIST = ["Шэньчжень","Чунцин","Шанхай","Пекин","Тяньцзинь","Гуанчжоу"]

const CURRENT_KEYWORD = ref([])

const MIN_BUDGET_VALUE = ref(null)
const MAX_BUDGET_VALUE = ref(null)
const POSTFIX_BUDGET = ref('₽')

const MIN_TARIFF_VALUE = ref(null)
const MAX_TARIFF_VALUE = ref(null)
const POSTFIX_TARIFF = ref('₽/час')

const MIN_AGE_VALUE = ref(null)
const MAX_AGE_VALUE = ref(null)
const POSTFIX_AGE = ref('лет')

const TOGGLER_RESPONSES_COUNT = ref(false)
const TOGGLER_WITH_RESPONSES = ref(false)
const TOGGLER_WITH_GOOD_RESPONSES = ref(false)

const SORT_REQUESTS = ref('Новые')
const SORT_EXECUTORS = ref('Новые')
const SORT_ARTICLES = ref('Новые')

const FILTERS_REQUESTS = ref(false)
const FILTERS_EXECUTORS = ref(false)

</script>

<template lang="pug">
Block.search
	.search-header
		input.search-input(placeholder="Я ищу...")
		.search-dropdown
			p.search-dropdown__title в разделе
			SingleDropdown(:list="['Заказы','Исполнители','Статьи']" :value="searchCategory" @update:modelValue="searchCategory = $event")
	.search-content
		template(v-if="searchCategory === 'Заказы'")
			.search-content-requests
				.search-content__header
					.search-content__header-row
						p.search-content-results.bt Результатов: <span class="medium">{{ PLACEHOLDER_REQUESTS.length }}</span>
						SingleDropdown(:list="['Новые','Сначала дешевле','Сначала дороже']" :value="SORT_REQUESTS" @update:modelValue="SORT_REQUESTS = $event")
					button.search-content__filters.subtitle(@click="FILTERS_REQUESTS = !FILTERS_REQUESTS")
						| Фильтры
						FilterIcon(size="17")
				.search-content-requests__column
					Request(v-for="request in PLACEHOLDER_REQUESTS" :info="request")
			.search-aside(:class="{ 'active': FILTERS_REQUESTS }")
				.search-aside__wrapper
					.search-aside__header
						p.search-aside__title.subtitle(@click="FILTERS_REQUESTS = !FILTERS_REQUESTS")
							ChevronIcon
							| Фильтры
						button.search-aside__button.st(@click="CURRENT_DIRECTION = []; CURRENT_CITY = []; CURRENT_KEYWORD = []; MIN_BUDGET_VALUE = 0; MAX_BUDGET_VALUE = 0") Сбросить
					.search-aside__content
						SearchAccordion
							template(#header) специализация <span v-if="CURRENT_DIRECTION.length > 0">{{ CURRENT_DIRECTION.length }}</span>
							FilterDirection(:list="DIRECTION_LIST" :current="CURRENT_DIRECTION" @change="CURRENT_DIRECTION = $event")
						SearchAccordion
							template(#header) город <span v-if="CURRENT_CITY.length > 0">{{ CURRENT_CITY.length }}</span>
							FilterCity(:list="CITY_LIST" :current="CURRENT_CITY" @change="CURRENT_CITY = $event")
						SearchAccordion
							template(#header) Ключевые слова <span v-if="CURRENT_KEYWORD.length > 0">{{ CURRENT_KEYWORD.length }}</span>
							FilterKeyword(:current="CURRENT_KEYWORD" @change="CURRENT_KEYWORD = $event")
						SearchAccordion
							template(#header)
								| Бюджет
								<span v-if="MIN_BUDGET_VALUE && MAX_BUDGET_VALUE">{{ MIN_BUDGET_VALUE }}{{POSTFIX_BUDGET}} - {{ MAX_BUDGET_VALUE }}{{POSTFIX_BUDGET}}</span>
								<span v-else-if="MIN_BUDGET_VALUE">{{ MIN_BUDGET_VALUE }}{{POSTFIX_BUDGET}}+</span>
								<span v-else-if="MAX_BUDGET_VALUE">0{{POSTFIX_BUDGET}} - {{ MAX_BUDGET_VALUE }}{{POSTFIX_BUDGET}}</span>
							FilterRange(
								@update:min="MIN_BUDGET_VALUE = $event"
								@update:max="MAX_BUDGET_VALUE = $event"
								@update:postfix="POSTFIX_BUDGET = $event"
								:min="MIN_BUDGET_VALUE"
								:max="MAX_BUDGET_VALUE"
								:postfix="POSTFIX_BUDGET"
							)
						SearchAccordion(alwaysOpen)
							template(#header) Менее двух откликов
							FilterToggler(:value="TOGGLER_RESPONSES_COUNT" @update:value="TOGGLER_RESPONSES_COUNT = $event") Показать заказы с 2-мя откликами <br> и меньше

		template(v-if="searchCategory === 'Исполнители'")
			.search-content-executors
				.search-content__header
					.search-content__header-row
						p.search-content-results.bt Результатов: <span class="medium">{{ PLACEHOLDER_EXECUTORS.length }}</span>
						SingleDropdown(:list="['Новые','Сначала дешевле','Сначала дороже']" :value="SORT_EXECUTORS" @update:modelValue="SORT_EXECUTORS = $event")
					button.search-content__filters.subtitle(@click="FILTERS_EXECUTORS = !FILTERS_EXECUTORS")
						| Фильтры
						FilterIcon(size="17")
				.search-content-executors__row
					User(v-for="executor in PLACEHOLDER_EXECUTORS" :info="executor")
			.search-aside(:class="{ 'active': FILTERS_EXECUTORS }")
				.search-aside__wrapper
					.search-aside__header
						p.search-aside__title.subtitle(@click="FILTERS_EXECUTORS = !FILTERS_EXECUTORS")
							ChevronIcon
							| Фильтры
						button.search-aside__button.st Сбросить
					.search-aside__content
						SearchAccordion
							template(#header) специализация <span v-if="CURRENT_DIRECTION.length > 0">{{ CURRENT_DIRECTION.length }}</span>
							FilterDirection(:list="DIRECTION_LIST" :current="CURRENT_DIRECTION" @change="CURRENT_DIRECTION = $event")
						SearchAccordion
							template(#header) город <span v-if="CURRENT_CITY.length > 0">{{ CURRENT_CITY.length }}</span>
							FilterCity(:list="CITY_LIST" :current="CURRENT_CITY" @change="CURRENT_CITY = $event")
						SearchAccordion
							template(#header)
								| Тариф
								<span v-if="MIN_TARIFF_VALUE && MAX_TARIFF_VALUE">{{ MIN_TARIFF_VALUE }}{{ POSTFIX_TARIFF }} - {{ MAX_TARIFF_VALUE }}{{ POSTFIX_TARIFF }}</span>
								<span v-else-if="MIN_TARIFF_VALUE">{{ MIN_TARIFF_VALUE }}{{ POSTFIX_TARIFF }}+</span>
								<span v-else-if="MAX_TARIFF_VALUE">0{{ POSTFIX_TARIFF }} - {{ MAX_TARIFF_VALUE }}{{ POSTFIX_TARIFF }}</span>
							FilterRange(
								@update:min="MIN_TARIFF_VALUE = $event"
								@update:max="MAX_TARIFF_VALUE = $event"
								@update:postfix="POSTFIX_TARIFF = $event"
								:min="MIN_TARIFF_VALUE"
								:max="MAX_TARIFF_VALUE"
								:postfix="POSTFIX_TARIFF"
							)
						SearchAccordion
							template(#header)
								| Возраст
								<span v-if="MIN_AGE_VALUE && MAX_AGE_VALUE">{{ MIN_AGE_VALUE }}{{ POSTFIX_AGE }} - {{ MAX_AGE_VALUE }}{{ POSTFIX_AGE }}</span>
								<span v-else-if="MIN_AGE_VALUE">{{ MIN_AGE_VALUE }}{{ POSTFIX_AGE }}+</span>
								<span v-else-if="MAX_AGE_VALUE">0{{ POSTFIX_AGE }} - {{ MAX_AGE_VALUE }}{{ POSTFIX_AGE }}</span>
							FilterRange(
								@update:min="MIN_AGE_VALUE = $event"
								@update:max="MAX_AGE_VALUE = $event"
								@update:postfix="POSTFIX_AGE = $event"
								:min="MIN_AGE_VALUE"
								:max="MAX_AGE_VALUE"
								:postfix="POSTFIX_AGE"

								minPlaceholder="16"
								maxPlaceholder="62"
							)
						SearchAccordion(alwaysOpen)
							template(#header) Отзывы
							FilterToggler(:value="TOGGLER_WITH_RESPONSES" @update:value="TOGGLER_WITH_RESPONSES = $event") Показать исполнителей только <br> с отзывами
							FilterToggler(v-if="TOGGLER_WITH_RESPONSES" :value="TOGGLER_WITH_GOOD_RESPONSES" @update:value="TOGGLER_WITH_GOOD_RESPONSES = $event") Показать исполнителей только <br> с положительными отзывами

		template(v-if="searchCategory === 'Статьи'")
			.search-content-articles
				.search-content__header
					p.search-content-results.bt Результатов: <span class="medium">{{ PLACEHOLDER_ARTICLES.length }}</span>
					SingleDropdown(:list="['Новые','Сначала дешевле','Сначала дороже']" :value="SORT_ARTICLES" @update:modelValue="SORT_ARTICLES = $event")
				.search-content-articles__row
					Article(v-for="article in PLACEHOLDER_ARTICLES" :info="article")
			.search-aside
				.search-aside__wrapper
					.search-aside__header
						p.search-aside__title.subtitle Избранные статьи
					FavoriteArticles(:list="PLACEHOLDER_ARTICLES" :count="3")
</template>

<style scoped lang="scss">
.search {
	padding: 40px 0px 60px;
}
.search-input {
	color: var(--WHITE, #FFF);
	font-size: 24px;
	font-weight: 700;
	width: 100%;
	&::placeholder {
		opacity: 0.3;
	}
	@include r(768px) {
		font-size: 14px;
	}
}
.search-header {
	display: flex;
	padding: 18px 0px;
	align-items: center;
	gap: 16px;
	border-bottom: 1px solid var(--WHITE, #FFF);
	@include r(768px) {
		padding: 2px 0;
	}
}
.search-dropdown {
	display: flex;
	align-items: center;
	gap: 12px;
	&__title {
		color: #FFF;
		font-size: 12px;
		font-weight: 100;
		white-space: nowrap;
		text-transform: uppercase;
	}
	@include r(768px) {
		&__title {
			display: none;
		}
	}
}
.search-content {
	padding-top: 60px;
	display: flex;
	position: relative;
	gap: 24px;
	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 45px;
		&-row {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
	&__filters {
		display: none;
	}
	@include r(768px) {
		flex-direction: column-reverse;
		padding-top: 40px;
		&__header {
			height: auto;
			align-items: flex-start;
			&-row {
				gap: 12px;
				align-items: flex-start;
				flex-direction: column-reverse;
			}
		}
		&__filters {
			display: flex;
			gap: 24px;
			padding: 14px 0px;
			color: #fff;
		}
	}
}
.search-content-results {
	@include r(768px) {
		opacity: 0.5;
	}
}
.search-aside {
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
	&__content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__title {
		:deep(svg) {
			display: none;
		}
	}
	@include r(768px) {
		max-width: 100vw;
		width: 100vw;
		padding: 0px 16px;
		height: calc(100vh - 55px);
		position: fixed;
		top: 55px;
		left: 0px;
		z-index: 99;
		background: #161614;
		transform: translateX(100%);
		transition: .3s ease;
		&.active {
			transform: translateX(0px);
		}
		&__title {
			display: flex;
			align-items: center;
			:deep(svg) {
				display: block;
				transform: rotate(90deg);
			}
		}
	}
}
// REQUESTS
.search-content-requests {
	&__column {
		margin-top: 24px;
	}
}
// EXECUTORS
.search-content-executors {
	&__row {
		margin-top: 24px;
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		&>* {
			flex: 1 1 250px;
		}
	}
}
// ARTICLES
.search-content-articles {
	&__row {
		display: flex;
		gap: 24px;
		margin-top: 24px;
		flex-wrap: wrap;
		&>*:nth-child(4n - 3) {
			max-width: calc(66.66% - 12px);
		}
		&>*:nth-child(4n - 2) {
			max-width: calc(33.33% - 18px);
		}
		&>*:nth-child(4n - 1) {
			max-width: calc(33.33% - 18px);
		}
		&>*:nth-child(4n - 0) {
			max-width: calc(66.66% - 12px);
		}
	}
	@include r(1024px) {
		&__row {
			& > * {
				max-width: 100% !important;
			}
		}
	}
}
</style>
