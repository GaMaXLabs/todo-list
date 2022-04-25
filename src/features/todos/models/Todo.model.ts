import { TodoStatus } from "./TodoStatus.model";

export interface Todo {
  id: string;
  description: string;
  status: TodoStatus;
  completedDate?: Date;
  createdDate: Date;
}
