<script setup lang="ts">
defineProps<{
	path: string;
}>();
</script>
<template>
	<nav class="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
		<ul class="flex items-center gap-x-6 sm:gap-x-12">
			<NavItem to="/" text="Sobre" :path="path" />
			<NavItem to="/projects" text="Projetos" :path="path" />
			<NavItem to="/contact" text="Contato" :path="path" />
			<li>
				<a>Currículo</a>
			</li>
		</ul>
	</nav>
</template>