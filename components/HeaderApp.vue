<script setup lang="ts">
const router = useRouter();
const { currentRoute } = router;
const path = ref(currentRoute.value.path);

watch(currentRoute, () => {
	path.value = currentRoute.value.path;
});
</script>
<template>
  	<header class="w-full flex justify-center items-center">
		<Navbar :path />
	</header>
</template>