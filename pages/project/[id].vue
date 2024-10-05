<script setup lang="ts">
const route = useRoute();

let project = useProjects().getById(Number(route.params.id));

const imageModalIsOpen = ref(false);

function openModal() {
  imageModalIsOpen.value = true;
}

function closeModal() {
  imageModalIsOpen.value = false;
}

onMounted(() => {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});

definePageMeta({
  title: 'Projeto',
});
</script>
<template>
  <div class="">
    <button class="mb-6 -ml-1 rounded-lg btn border-neutral-content" @click="$router.back()">
      Voltar
    </button>
    <h1 class="text-2xl font-bold">{{ project.name }} - {{ project.id }}° Semestre</h1>
    <p class="mt-2 font-thin">{{ project.longDescription }}</p>
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
    <button @click="openModal" class="flex justify-center max-w-[30rem] p-2 mt-12 border rounded-lg border-primary bg-primary-content">
      <NuxtImg :src="`/imgs/projects/${project.image}`" class="w-full rounded-lg" />
    </button>

    <div v-if="imageModalIsOpen" @keydown.esc.window="closeModal" @click.self="closeModal" class="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md lg:p-8" role="dialog" aria-modal="true" aria-labelledby="imageModalTitle">
      <div class="relative w-full max-w-2xl">
        <button type="button" @click="closeModal" class="absolute -top-12 right-0 flex items-center justify-center rounded-full bg-neutral-50 p-1.5 text-neutral-900 hover:opacity-75 active:opacity-100 dark:bg-neutral-900 dark:text-white" aria-label="close modal">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" fill="none" stroke-width="1.4" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img :src="`/imgs/projects/${project.image}`" :alt="`Imagem do Projeto ${project.name}`" class="w-full max-w-2xl rounded-md" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>