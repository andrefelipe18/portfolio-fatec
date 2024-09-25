<script setup lang="ts">
const year = new Date().getFullYear();
const router = useRouter();
const { currentRoute } = router;
</script>
<template>
	<footer class="p-4 mt-auto footer footer-center text-base-content">
		<aside>
			<div class="flex gap-2">
				<LogoFatec />
				<ResumeDownloadButton v-if="currentRoute.path === '/resume'" />
			</div>
			<p class="flex items-center gap-2 mt-4">
				Copyright &copy; {{ year }} - All right reserved by André Domingues
				<span>
					<a href="https://github.com/andrefelipe18" target="_blank" rel="noopener noreferrer"><Icon :name="'mdi:github'" class="w-6 h-6 mx-2" /></a>
					<a href="https://www.linkedin.com/in/andr%C3%A9dominguess/" target="_blank" rel="noopener noreferrer"><Icon :name="'mdi:linkedin'" class="w-6 h-6 mx-2" /></a>
				</span>
			</p>
		</aside>
	</footer>
</template>