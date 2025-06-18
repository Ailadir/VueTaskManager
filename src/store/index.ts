import { createStore } from 'vuex';
import type { ActionContext } from 'vuex/types/index.js';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

interface State {
  tasks: Task[];
  filter: Filter;
}

const state: State = {
  tasks: [],
  filter: 'all',
};

const mutations = {
  setTasks(state: State, tasks: Task[]) {
    state.tasks = tasks;
  },
  addTask(state: State, task: Task) {
    state.tasks.push(task);
  },
  deleteTask(state: State, id: number) {
    state.tasks = state.tasks.filter(task => task.id !== id);
  },
  updateTask(state: State, id: number) {
    const task = state.tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
  },
  setFilter(state: State, filter: Filter) {
    state.filter = filter;
  },
};

const actions = {
  async fetchTasks({ commit }: ActionContext<State, State>) {
    try {
      const tasks = await import('../api/tasks').then(m => m.getTasks());
      commit('setTasks', tasks);
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  },
  async addTask({ commit }: ActionContext<State, State>, title: string) {
    try {
      const task = await import('../api/tasks').then(m => m.addTask(title));
      commit('addTask', task);
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  },
  async deleteTask({ commit }: ActionContext<State, State>, id: number) {
    try {
      await import('../api/tasks').then(m => m.deleteTask(id));
      commit('deleteTask', id);
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  },
  async updateTask({ commit }: ActionContext<State, State>, id: number) {
    try {
      await import('../api/tasks').then(m => m.updateTask(id));
      const tasks = await import('../api/tasks').then(m => m.getTasks());
      commit('setTasks', tasks);
    } catch (error) {
      console.error('Ошибка при переключении задачи:', error);
    }
  },
  setFilter({ commit }: ActionContext<State, State>, filter: Filter) {
    commit('setFilter', filter);
  },
};

const getters = {
  filteredTasks(state: State): Task[] {
    if (state.filter === 'all') return state.tasks;
    if (state.filter === 'active') return state.tasks.filter(t => !t.completed);
    if (state.filter === 'completed') return state.tasks.filter(t => t.completed);
    return state.tasks;
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
