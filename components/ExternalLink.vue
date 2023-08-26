<template>
  <a :href="to" class="external-link" target="_blank" rel="noopener noreferer">
    <span>
      <slot />
    </span>
    <nuxt-icon name="external-link" filled v-if="!hideIcon" />
  </a>
</template>

<script>
export default {
  props: {
    to: String,
    hideIcon: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.external-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  color: inherit;
  text-decoration: none;
}
</style>
