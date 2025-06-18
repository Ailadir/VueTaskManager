import type { Task } from '../store';

let tasks: Task[] = [
  { id: 1, title: 'Изучить Vue 3', completed: false },
  { id: 2, title: 'Сделать тестовое задание', completed: false },
  { id: 3, title: 'Порадоваться результату', completed: false },
];

function timeout<T>(result: T, ms = 500): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
}

export function getTasks(): Promise<Task[]> {
  return timeout([...tasks]);
}

export function addTask(title: string): Promise<Task> {
  const newTask: Task = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  return timeout(newTask);
}

export function deleteTask(id: number): Promise<void> {
  tasks = tasks.filter(task => task.id !== id);
  return timeout(undefined);
}

export function toggleTask(id: number): Promise<Task | undefined> {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    return timeout(task);
  }
  return timeout(undefined);
} 