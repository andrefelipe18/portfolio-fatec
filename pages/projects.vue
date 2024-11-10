<script setup lang="ts">
const { getAll } = useProjects();

const projects = getAll();

definePageMeta({
  title: 'Projetos',
});
</script>
<template>
  <div class="flex flex-col gap-6 my-auto">
    <h2 class="text-2xl">Projetos:</h2>
    <NuxtLink v-for="(project, index) in projects" :to="`project/${project.id}`"
      class="p-6 transition-all border rounded-lg cursor-pointer border-primary hover:transform hover:scale-105 group">
      <p class="flex items-center gap-2 text-[1.10rem] font-bold group group-hover:text-primary transition">
        <span>{{ project.name }}</span>
      </p>
      <p class="mt-2 text-sm font-thin">{{ project.shortDescription }}</p>
      <div class="flex justify-between mt-2 text-sm">
        <p>{{ project.id }}° semestre </p>
        <div class="">
        </div>
      </div>
    </NuxtLink>

    <h2 class="text-2xl">
      Iniciações Científicas:
    </h2>

    <div class="p-6 transition-all border rounded-lg border-primary hover:transform hover:scale-105 group">
      <p class="flex items-center gap-2 text-[1.10rem] font-bold group group-hover:text-primary transition">
        <span>
          Desenvolvimento de Ambiente Virtual em um Site Web para o Auxílio do Desenvolvimento da Visão Espacial
        </span>
      </p>
      <div class="flex justify-between mt-2 text-sm">
        <p>1 e 2° semestre </p>
        <div class="">
        </div>
      </div>
    </div>

    <div class="p-6 transition-all border rounded-lg border-primary hover:transform hover:scale-105 group">
      <p class="flex items-center gap-2 text-[1.10rem] font-bold group group-hover:text-primary transition">
        <span>
          Smart Home Control: Desenvolvimento do back-end de um sistema web com AdonisJS e MySQL para gerenciamento
          e integração de dispositivos inteligentes.
        </span>
      </p>
      <div class="flex justify-between mt-2 text-sm">
        <p>4° semestre </p>
        <div class="">
        </div>
      </div>
    </div>
  </div>
</template>