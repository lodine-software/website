<template>
  <div class="container">
    <h1>Do not ship this page to production</h1>
    <div class="components">
      <div class="buttons">
        <a href="#" class="btn">primary</a>
        <a href="#" class="btn secondary">secondary</a>
      </div>
      <div class="dropdowns">
        <select class="dropdown">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <select class="dropdown">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <select class="dropdown">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Do not ship",
})
</script>

<style lang="scss" scoped>
.components {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.buttons,
.dropdowns {
  display: flex;
  gap: 0.5em;
}
</style>
