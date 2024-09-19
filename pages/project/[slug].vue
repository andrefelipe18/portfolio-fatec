<script setup lang="ts">
type Project = {
	id: number;
	name: string;
	slug: string;
	description: string;
};
const project = ref<Project>({
	id: 0,
	name: '',
	slug: '',
	description: '',
});

onMounted(() => {
	const slug = useRoute().params.slug;

	project.value = useProjects().find((project) => project.slug === slug) || project.value;
	if (!project.value) {
		useRouter().push('/404');
	}
});
</script>
<template>
	<div class="">
		<h1 class="text-2xl font-bold">{{ project.name }}</h1>
		<p class="text-lg">{{ project.description }}</p>
	</div>
</template>