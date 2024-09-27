<script setup lang="ts">
const router = useRouter();
const route = useRoute();

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
		<div class="flex flex-col h-full mt-4">
			<HeaderApp />
			<main class="px-12 my-auto max-w-[40rem]" :class="{'!max-w-[48rem]': router.currentRoute.value.path === '/resume'}">
				<slot />
			</main>
			<FooterApp />
		</div>
	</div>
</template>