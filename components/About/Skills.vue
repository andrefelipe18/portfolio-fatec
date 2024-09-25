<script setup lang="ts">
const skills = shuffleArray(useSkills());

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>
<template>
	<div class="flex flex-wrap justify-center gap-4 my-6">
		<div v-for="(skill, index) in skills" class="p-2 border rounded-lg border-primary">
			<span v-html="skill.svg"></span>
		</div>
	</div>
</template>