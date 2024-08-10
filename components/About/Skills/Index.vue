<script setup>
const skills = useSkills();
</script>
<template>
	<Swiper :scrollbar="{ hide: true }" :navigation="true" :breakpoints="{
		320: { slidesPerView: 2 },
		768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 },
		
	}" :modules="[SwiperScrollbar, SwiperNavigation]"
		class="max-w-[25%] xs:max-w-[35%] sm:max-w-[70ch] my-12" :spaceBetween="100" :loop="true">
		<SwiperSlide v-for="skill in skills" :key="skill.name">
			<AboutSkillsItem :name="skill.name" :icon="skill.icon" :size="skill.size" />
		</SwiperSlide>
	</Swiper>
</template>
<style>
.swiper-button-next,
.swiper-button-prev {
	top: 50%;
}

.swiper-button-next {
	right: 0;
}

.swiper-button-prev {
	left: 0;
}

.swiper-button-next::before,
.swiper-button-prev::before {
	font-size: 2rem;
}

@media (min-width: 768px) {
	.swiper-wrapper {
		@apply px-16;
	}
}
</style>