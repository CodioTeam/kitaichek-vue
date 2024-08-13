<script setup>
	
</script>
	
<template lang="pug">
section.section
	.container
		slot
</template>
	
<style scoped lang="scss">
.section {
	background: #161614;
	&--light {
		background: var(--LIGHT-GREY);
	}
	&+& {
		padding-top: 80px;
	}
	&__suptitle {
		color: var(--WHITE);
		max-width: 760px;
	}
	&__title {
		color: var(--WHITE);
		max-width: 760px;
	}
	&__suptitle + &__title {
		margin-top: 24px;
	}
	&:not(&--light) {
		p, h1, h2, h3, h4, h5, h6, span {
			color: var(--WHITE);
		}
		svg {
			color: var(--WHITE);
		}
	}
	@include r(768px) {
		&+& {
			padding-top: 60px;
		}
	}
}
</style>