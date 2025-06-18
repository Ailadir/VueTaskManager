<template>
  <div class="filters">
    <button :class="{ active: filter === 'all' }" @click="set('all')">Все</button>
    <button :class="{ active: filter === 'active' }" @click="set('active')">Активные</button>
    <button :class="{ active: filter === 'completed' }" @click="set('completed')">Выполненные</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const filter = computed(() => store.state.filter);

function set(f: 'all' | 'active' | 'completed') {
  store.dispatch('setFilter', f);
}
</script>

<style scoped>
.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background: #eee;
  cursor: pointer;
}
button.active {
  background: #42b983;
  color: #fff;
}
</style> 