
export interface Order {
  createdAt: Date;
  published: boolean;
  status: "atWork" | "personality" | "completed";
  customer: string;  // User ID
  executors: string[];  // Array of User IDs
  title: string;
  description: string;
  specialization: string[];
  city: string;
  budget: Budget;
  deadlines: Deadlines;
}

export interface Budget {
  min: number;
  max: number;
}

export interface Deadlines {
  min: Date;
  max: Date;
}
