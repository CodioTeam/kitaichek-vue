// middleware/loadUserDetails.js

import { useUserStore } from '~/stores/user';

export default async function ({ params }) {
  const userStore = useUserStore();

  // Проверяем, если данные пользователя уже загружены, не загружаем их снова
  if (!userStore.userDetails) {
    // Выполняем запрос для получения данных пользователя
    const userDetails = await fetchUserDetails(params.userId);

    // Сохраняем данные в Pinia Store
    userStore.setUserDetails(userDetails);
  }
}

async function fetchUserDetails(userId) {
  // Замените этот код на реальный запрос к вашему API
  // Пример запроса:
  // const response = await fetch(`/api/users/${userId}`);
  // const data = await response.json();

  // Для примера используем фиктивные данные
  return {
    "firstName": "John",
    "lastName": "Doe",
    "id": "user1",
    "createdAt": "2023-08-01T10:00:00Z",
    "rate": 4.8,
    "reviews": ["review1", "review2"],
    "age": 30,
    "specialization": ["Plumbing", "Electrical"],
    "description": "Experienced handyman with over 10 years of experience.",
    "city": "New York",
    "responses": ["order1"],
    "orders": ["order2"],
    "headerImage": "https://example.com/images/user1.jpg"
  }
}
