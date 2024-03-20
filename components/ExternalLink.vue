<template>
  <a :href="to" target="_blank" rel="noopener noreferrer" class="external-link">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  to: String,
})
</script>
