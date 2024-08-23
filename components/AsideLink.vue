<script setup>
</script>

<template lang="pug">
nuxt-link.aside-link(:to="$attrs.to")
	.aside-link__header
		p.aside-link__title
			slot
			span.aside-link__count(v-if="$attrs.count") {{ $attrs.count }}
</template>

<style scoped lang="scss">
.aside-link {
	&__header {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
    transition: .3s ease;
		border-bottom: 1px solid var(--GREY-100, #333);
		padding: 12px 0;
	}
	&__count {
		color: inherit !important;
		font-feature-settings: 'sups' on;
		font-family: "Noto Sans";
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 140%; /* 19.6px */
		opacity: 0.5;
	}
	&__title {
		color: var(--WHITE, #FFF);
		font-size: 12px;
		font-weight: 500;
		line-height: 140%;
		letter-spacing: 0.48px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	&.router-link-active {
		.aside-link__title {
			color: var(--ACCENT);
		}
	}
  @include hover {
    .aside-link__header {
      border-color: var(--ACCENT);
    }
  }
}
</style>
