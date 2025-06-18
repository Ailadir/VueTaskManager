<template>
  <ul class="task-list">
    <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
      <input type="checkbox" :checked="task.completed" @change="toggle(task.id)" />
      <span>{{ task.title }}</span>
      <button @click="remove(task.id)">Удалить</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const tasks = computed(() => store.getters.filteredTasks);

function toggle(id: number) {
  store.dispatch('toggleTask', id);
}
function remove(id: number) {
  store.dispatch('deleteTask', id);
}

onMounted(() => {
  store.dispatch('fetchTasks');
});
</script>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
li.completed span {
  text-decoration: line-through;
  color: #aaa;
}
button {
  margin-left: auto;
  background: #ff4d4f;
  color: #fff;
  border: none;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
}
</style> 