<template>
  <NuxtLayout>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>
  </NuxtLayout>
</template>

<script setup>
const error = useError()

useHead({
  title: "Oops, error!"
})
</script>