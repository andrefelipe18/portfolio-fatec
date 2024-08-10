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
	<div class="w-full h-full scroll-smooth">
		<HeaderApp />
		<main class="w-full">
			<slot />
		</main>
		<FooterApp />
	</div>
</template>