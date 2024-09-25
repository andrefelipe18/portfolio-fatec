<script setup lang="ts">
const router = useRouter();
const { currentRoute } = router;
const path = ref(currentRoute.value.path);

watch(currentRoute, () => {
	path.value = currentRoute.value.path;
});
</script>
<template>
	<header class="mx-auto">
		<Navbar :path />
	</header>
</template>