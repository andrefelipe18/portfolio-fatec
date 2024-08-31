<script setup lang="ts">
defineProps<{
	username: string;
	link: string;
	icon: string;
	social: string;
}>();
</script>
<template>
	<a :href="link">
		<div class="flex gap-4">
			<div
				class="flex items-center p-2 transition-all border border-primary rounded-xl hover:bg-neutral-content text-neutral-content hover:text-primary hover:border-neutral-content">
				<Icon :name="icon" class="w-8 h-8" />
			</div>
			<div class="">
				<p class="text-lg">{{ social }}</p>
				<p class="text-md">{{ username }}</p>
			</div>
		</div>
	</a>
</template>