<script setup lang="ts">
import TaskInput from './componentsFormer/TaskInput.vue';
import TaskFilters from './componentsFormer/TaskFilters.vue';
import TaskList from './componentsFormer/TaskList.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Спиок задач</h1>
      <TaskInput />
      <TaskFilters />
      <TaskList />
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
