<template>
  <form @submit.prevent="onSubmit" class="task-input">
    <input v-model="title" type="text" placeholder="Новая задача" required />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const title = ref('');
const store = useStore();

function onSubmit() {
  if (!title.value.trim()) return;
  store.dispatch('addTask', title.value.trim());
  title.value = '';
}
</script>

<style scoped>
.task-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #808080;
  border-radius: 6px;
}
</style>
