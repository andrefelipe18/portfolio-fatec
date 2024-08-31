<script setup lang="ts">
defineProps<{
	name: string;
	icon: string;
	size: string;
}>();
</script>
<template>
	<div class="flex items-center justify-start gap-4">
		<div class="cursor-default btn btn-circle btn-primary text-neutral border-primary">
			<Icon :name="icon" :size /> 
		</div>
		{{ name }}
	</div>
</template>