<script setup lang="ts">
const route = useRoute();

let project = useProjects().getById(Number(route.params.id));
</script>
<template>
  <div class="">
    <button class="mb-6 -ml-1 rounded-lg btn border-neutral-content" @click="$router.back()">
      Voltar
    </button>
    <h1 class="text-2xl font-bold">{{ project.name }} - {{ project.id }}° Semestre</h1>
    <p class="mt-2 font-thin">{{ project.description }}</p>
    <div class="divider divider-primary"></div>
    <div class="flex flex-col gap-4 mt-4">
      <div class="">
        <h2 class="text-xl font-bold">Áreas de conhecimento abordadas:</h2>
        <ol class="flex gap-4 mt-2">
          <li v-for="(area, index) in project.knowledgeAreas" :key="index">
            <div class="p-4 badge badge-primary badge-outline rounded-xl">{{ area }}</div>
          </li>
        </ol>
      </div>
      <div class="">
        <h2 class="text-xl font-bold">Tecnologias usadas:</h2>
        <ol class="flex gap-4 mt-2">
          <li v-for="(skill, index) in project.skills" :key="index">
            <div class="p-4 badge badge-secondary badge-outline rounded-xl">{{ skill }}</div>
          </li>
        </ol>
      </div>
    </div>
    <div class="flex max-w-[36rem] mt-12 border border-primary p-2 rounded-lg bg-primary-content">
      <NuxtImg :src="`/imgs/projects/${project.image}`" class="w-full rounded-lg" />
    </div>
  </div>
</template>
<style scoped></style>