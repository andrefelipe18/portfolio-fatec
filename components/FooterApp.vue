<script setup lang="ts">
const year = new Date().getFullYear();
</script>
<template>
	<footer class="footer footer-center text-base-content p-4">
		<aside>
			<LogoFatec />
			<p class="mt-4 flex gap-2 items-center">
				Copyright &copy; {{ year }} - All right reserved by André Domingues
				<span>
					<a href=""><Icon :name="'mdi:github'" class="w-6 h-6 mx-2" /></a>
					<a href=""><Icon :name="'mdi:linkedin'" class="w-6 h-6 mx-2" /></a>
				</span>
			</p>
		</aside>
	</footer>
</template>