<template>
  <section :class="'section ' + size">
    <div class="section-body">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    size: String,
    image: String
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-body {
    width: 100%;
    max-width: 1000px;
    padding: 0 1em;
  }

  // Section sizes
  &.medium {
    padding: 1em 0;
  }

  &.large {
    padding: 3em 0;
  }

  &.big {
    padding: 5em 0;
  }
}
</style>