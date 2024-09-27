<script setup lang="ts">
definePageMeta({
  title: 'Currículo',
});
</script>
<template>
	<section class="">
  <ResumeHeader />
  <ResumeText />
  <div class="divider divider-primary"></div>
  <ResumeAcademicBackground />
  <div class="divider divider-primary"></div>
  <ResumeProfessionalExperience />
  <div class="divider divider-primary"></div>
  <ResumeScientificInitiation />
</section>
</template>