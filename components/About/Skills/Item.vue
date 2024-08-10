<script setup lang="ts">
defineProps<{
	name: string;
	icon: string;
	size: string;
}>();
</script>
<template>
	<div class="flex justify-start items-center gap-4">
		<div class="btn btn-circle btn-primary text-neutral border-primary">
			<Icon :name="icon" :size /> 
		</div>
		{{ name }}
	</div>
</template>