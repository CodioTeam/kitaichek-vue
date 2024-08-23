<script setup>
import Request from '~/components/Request.vue'

definePageMeta({
  layout: "orders-layout",
  middleware: 'load-user-details',
})

import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const user = userStore.userDetails;
const PLACEHOLDER_REQUEST = {
	title: "Гид на куда-то, чтобы сделать что-то",
	description: "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
	price: "$40",
	city: "Шэньчжень",
	tags: ["Гид", "Посредник", "Инспектор"],
	createdAt: "2 ч 42 мин назад",
	deadline: '1-3 месяца',
	responses: '12'
}
</script>

<template lang="pug">
Request(:info="PLACEHOLDER_REQUEST" isRefused)
</template>

<style scoped lang="scss">

</style>
