<template>
  <NuxtLayout>
    <div class="container">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.statusMessage }}</p>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

useHead({
  title: "Oops, error!",
})
</script>
