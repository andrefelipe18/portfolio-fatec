<script setup lang="ts">
const router = useRouter();

const handleKeydown = (event: KeyboardEvent) => {
	navigateWithArrows(event, router);
};

onMounted(() => {
	window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
	window.removeEventListener('keydown', handleKeydown);
});
</script>
<template>
	<div class="flex flex-col items-center h-screen">
		<div class="flex flex-col h-full mt-4 md:w-1/2">
			<HeaderApp />
			<main class="flex min-h-[76%]">
				<slot />
			</main>
			<FooterApp />
		</div>
	</div>
	<!-- <template>
  <div class="flex flex-col items-center h-screen">
    <div class="flex flex-col h-full mt-4 md:w-1/2">
      <Navbar />
      <main class="flex flex-col space-y-10 px-6 font-[Montserrat] py-14">
        <slot />
      </main>
      <div class="mt-auto">
        <Footer />
      </div>
    </div>
    <SpeedInsights />
  </div>
</template> -->
</template>