<template>
  <NuxtLayout>
    <section>
      <h1>An error occured! ({{ error.statusCode }})</h1>
      <p>{{ error.statusMessage }}</p>
      <NuxtLink to="/" class="button primary">Go home</NuxtLink>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  max-width: 1000px;
  margin: auto;

  h1,
  h2 {
    margin: 0;
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.5em;
  }
}
</style>

<script setup>
const error = useError();

useHead({
  title: "An error occured!",
});
</script>
