
export interface UserData {
  firstName: string;
  lastName: string;
  id: string;
  createdAt: Date;
  rate: number;
  reviews: string[];  // Array of review IDs
  age: number;
  specialization: string[];
  description: string;
  city: string;
  responses: string[];  // Array of order IDs
  orders: string[];  // Array of order IDs
  headerImage: string;
}
export interface UserDisplay {
  id: string;
  fullName: string;
  createdAt: string;
}
export interface User {
  data: UserData;
  display: UserDisplay;
}

export interface Review {
  author: string;  // User ID
  order: string;   // Order ID
  images: string[];
  description: string;
}
