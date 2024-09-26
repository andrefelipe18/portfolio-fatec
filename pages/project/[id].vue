<script setup lang="ts">
const route = useRoute();
const project = useProjects().find((project) => project.id === Number(route.params.id)) || {
  id: 0,
  name: 'Projeto não encontrado',
  description: 'O projeto que você está tentando acessar não existe.',
  skills: [],
};
</script>
<template>
  <div class="">
    <h1 class="text-2xl font-bold">{{ project.name }} - {{ project.id }}° Semestre</h1>
    <p class="mt-4 font-thin">{{ project.description }}</p>
    <div class="divider divider-primary"></div>
    <p></p> <!-- Skills -->
  </div>
</template>
<style scoped></style>