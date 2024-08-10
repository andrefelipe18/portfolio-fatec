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
	<div class="h-screen">
		<div class="w-full h-full scroll-smooth">
			<HeaderApp />
			<main class="w-full sm:h-[78%] flex justify-center items-center">
				<slot />
			</main>
			<FooterApp />
		</div>
	</div>
</template>