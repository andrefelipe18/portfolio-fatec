<script setup lang="ts">
defineProps<{
	path: string;
}>();
</script>
<template>
	<nav class="flex items-center justify-center p-6 mx-auto lg:px-8">
		<ul class="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12">
			<NavItem to="/" text="Sobre" :path="path" />
			<NavItem to="/projects" text="Projetos" :path="path" />
			<NavItem to="/contact" text="Contato" :path="path" />
			<NavItem to="/resume" text="Currículo" :path="path" />
			<ResumeDownloadButton v-if="path === '/resume'" />
		</ul>
	</nav>
</template>