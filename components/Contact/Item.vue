<script setup lang="ts">
defineProps<{
	username: string;
	link: string;
	icon: string;
	social: string;
}>();
</script>
<template>
	<a :href="link" target="_blank" rel="noopener noreferrer" class="transition-all hover:transform hover:scale-105 hover:ml-2">
		<div class="flex gap-4">
			<div
				class="flex items-center p-2 transition-all border border-primary rounded-xl text-neutral-content">
				<Icon :name="icon" class="w-8 h-8" />
			</div>
			<div class="">
				<p class="text-lg">{{ social }}</p>
				<p class="text-md">{{ username }}</p>
			</div>
		</div>
	</a>
</template>