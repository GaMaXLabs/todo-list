import { TodoStatus } from "./TodoStatus.model";

export interface Todo {
  id: string | null;
  description: string;
  status: TodoStatus;
  completedDate?: Date;
  createdDate: Date;
}
