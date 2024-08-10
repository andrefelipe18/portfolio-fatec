<script setup lang="ts">
defineProps<{
	path: string;
	to: string;
	text: string;
}>();
</script>
<template>
	<li>
		<NuxtLink :to="to" :class="{ 'text-primary underline': path === to }">
			{{ text }}
		</NuxtLink>
	</li>
</template>