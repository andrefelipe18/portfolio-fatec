<script setup lang="ts">
const projects = useProjects()


</script>
<template>
  <div class="w-full">
    <ul class="flex flex-col items-center justify-center gap-4">
      <li v-for="(project, index) in projects"
        class="flex items-center p-4 border rounded-md cursor-pointer hover:bg-base-200 border-primary w-96">
        <NuxtLink :to="`project/${project.slug}`" class="flex items-center">
          <div class="flex-1 space-y-1" bis_skin_checked="1">
            <h3 class="text-base font-medium md:text-lg">
              {{ index + 1 }}° Semestre
            </h3>
            <p class="text-sm text-base-content">
              {{ project.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>