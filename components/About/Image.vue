<script setup lang="ts">

</script>
<template>
	<section id="image" class="flex justify-center mt-6">
    <NuxtImg 
      src="/imgs/me.jpg" 
      alt="me" 
      class="max-w-[34rem] w-full rounded-xl" 
      width="544" 
      height="408" 
			sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
      format="webp"
    />
  </section>
</template>