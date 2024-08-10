<script setup lang="ts">
</script>
<template>
  <div class="w-full h-full scroll-smooth">
	<HeaderApp />
	<main class="w-full">
		<slot />
	</main>
	<FooterApp />
  </div>
</template>