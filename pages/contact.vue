<script setup lang="ts">
const socials = useSocial;

definePageMeta({
  title: 'Contato',
});
</script>
<template>
  <div class="flex flex-col gap-6 my-auto">
    <h2 class="mb-4 text-2xl">Social:</h2>
    <div class="flex flex-col gap-6 ml-2">
      <ContactItem v-for="social in socials" :key="social.username" :username="social.username" :link="social.link"
        :icon="social.icon" :social="social.social" />
    </div>
  </div>
</template>