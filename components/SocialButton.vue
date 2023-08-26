<template>
  <a :href="to" target="_blank" rel="noreferrer noopener" class="button">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>
