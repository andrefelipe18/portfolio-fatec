<script setup lang="ts">
const {getAll} = useProjects();

const projects = getAll();
</script>
<template>
  <div class="flex flex-col gap-6 my-auto">
    <h2 class="text-2xl">Projetos:</h2>
    <NuxtLink v-for="(project, index) in projects" :to="`project/${project.id}`" class="p-6 transition-all border rounded-lg cursor-pointer border-primary hover:transform hover:scale-105 group">
      <p class="flex items-center gap-2 text-[1.10rem] font-bold group group-hover:text-primary transition">
        <span>{{ project.name }}</span>
      </p>
      <p class="mt-2 text-sm font-thin">{{ project.description }}</p>
      <div class="flex justify-between mt-2 text-sm">
        <p>{{ project.id }}° semestre </p>
        <div class="">

        </div>
      </div>
    </NuxtLink>
  </div>
</template>