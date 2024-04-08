<template>
  <div class="container">
    <h1>Do not ship this page to production</h1>
    <div class="buttons">
      <a href="#" class="btn">primary</a>
      <a href="#" class="btn secondary">secondary</a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Do not ship",
})
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 0.5em;
}
</style>
