<script setup lang="ts">
defineProps<{
	path: string;
}>();
</script>
<template>
	<ul class="w-full flex justify-center items-center gap-32 p-8">
		<!-- <li>
			<NuxtLink to="/" :class="{ 'text-primary underline': path === '/' }">Sobre</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/projects" :class="{ 'text-primary underline': path === '/projects' }">Projetos</NuxtLink>
		</li>
		<li>
			<NuxtLink to="/contact" :class="{ 'text-primary underline': path === '/contacts' }">Contato</NuxtLink>
		</li> -->
		<NavItem to="/" text="Sobre" :path="path" />
		<NavItem to="/projects" text="Projetos" :path="path" />
		<NavItem to="/contact" text="Contato" :path="path" />
		<li>
			<a>Currículo</a>
		</li>
	</ul>
</template>