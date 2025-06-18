import { createStore } from 'vuex';

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
  toggleTask(state: State, id: number) {
    const task = state.tasks.find(task => task.id === id);
    if (task) task.completed = !task.completed;
  },
  setFilter(state: State, filter: Filter) {
    state.filter = filter;
  },
};

const actions = {
  async fetchTasks({ commit }: any) {
    const tasks = await import('../api/tasks').then(m => m.getTasks());
    commit('setTasks', tasks);
  },
  async addTask({ commit }: any, title: string) {
    const task = await import('../api/tasks').then(m => m.addTask(title));
    commit('addTask', task);
  },
  async deleteTask({ commit }: any, id: number) {
    await import('../api/tasks').then(m => m.deleteTask(id));
    commit('deleteTask', id);
  },
  async toggleTask({ commit }: any, id: number) {
    await import('../api/tasks').then(m => m.toggleTask(id));
    const tasks = await import('../api/tasks').then(m => m.getTasks());
    commit('setTasks', tasks);
  },
  setFilter({ commit }: any, filter: Filter) {
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
