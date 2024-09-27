<script setup lang="ts">
const skills = shuffleArray(useSkills());
</script>
<template>
	<div class="flex flex-wrap justify-center gap-4 my-6">
		<div v-for="(skill, index) in skills" class="p-2 border rounded-lg border-primary tooltip" :data-tip="skill.name">
			<span v-html="skill.svg"></span>
		</div>
	</div>
</template>