<script setup lang="ts">
const router = useRouter();
const { currentRoute } = router;
const { path } = currentRoute.value;

</script>
<template>
  	<header class="w-full flex justify-center items-center">
		<Navbar :path />
	</header>
</template>