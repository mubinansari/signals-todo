import { Task } from "@/types";
import { signal } from "@preact/signals-react";

export const tasks = signal<Task[]>([
  {
    id: "1",
    title: "Buy milk",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Walk the dog",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Do laundry",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "Clean the house",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "5",
    title: "Finish project",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "6",
    title: "Read a book",
    completed: false,
    createdAt: new Date(),
  },
]);
