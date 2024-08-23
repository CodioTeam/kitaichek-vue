// middleware/loadUserDetails.js

import { useOrderStore } from '~/stores/order';

export default async function ({ params }) {
  const orderStore = useOrderStore();

  // Проверяем, если данные пользователя уже загружены, не загружаем их снова
  if (!orderStore.orderDetails) {
    // Выполняем запрос для получения данных пользователя
    const orderDetails = await fetchOrderDetails(params.orderId);

    // Сохраняем данные в Pinia Store
    orderStore.setOrderDetails(orderDetails);
  }
}

async function fetchOrderDetails(orderId) {
  // Замените этот код на реальный запрос к вашему API
  // Пример запроса:
  // const response = await fetch(`/api/users/${userId}`);
  // const data = await response.json();

  // Для примера используем фиктивные данные
  return {
    "title": "Выполнение раздела НВК для поликлиники",
    "description": "Гид на куда-то, чтобы сделать что-то. Таким образом, глубокий уровень погружения напрямую зависит от инновационных методов управления процессами. Не следует, однако, забывать, что консультация с широким активом, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов. Сложно сказать, почему элементы политического процесса ограничены исключительно образом...",
    "neededSpecialization": ["Гид", "Переводчик"],
    "createdAt": "2023-08-01T10:00:00Z",
    "responses": ["user1"],
    "city": "Москва",
    "id": "1",
    "views": "1231",
    "todayViews": "123",
    "budget": {
      "min": 1000,
      "max": 2000
    },
    "deadline": {
      "min": "2",
      "max": "20"
    },
    "published": true,
  }
}
