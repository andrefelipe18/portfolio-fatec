<script setup lang="ts">
const router = useRouter();
const { currentRoute } = router;
const { path } = currentRoute.value;



</script>
<template>
  <div class="w-full h-full scroll-smooth">
	<!-- <header class="w-full flex justify-center items-center">
		<ul class="w-full flex justify-center items-center gap-32 p-8">
			<li>
				<NuxtLink 
				to="/"
				:class="{'text-primary underline': path === '/'}"
				>Sobre</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/projects"
				:class="{'text-primary underline': path === '/projects'}"
				>Projetos</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/contact"
				:class="{'text-primary underline': path === '/contacts'}"
				>Contato</NuxtLink>
			</li>
			<li>
				<a>Currículo</a>
			</li>
		</ul>
	</header> -->
	<HeaderApp />
    <slot />
	<footer class="w-full flex justify-center items-center">
		
	</footer>
  </div>
</template>