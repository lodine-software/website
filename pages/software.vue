<template>
  <div class="container">
    <h1>Software</h1>
    <div v-for="product in JSON.parse(data)" class="card">
      <span class="title">
        {{ product.title }} ({{ product.date_of_release }})
      </span>
      <span class="description">
        {{ product.description }}
      </span>
      <details>
        <summary>More...</summary>
        <span>Developed by {{ product.developer }}</span>
      </details>
      <span
        ><a :href="product.website" target="_blank" class="btn"
          >Download</a
        ></span
      >
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://raw.githubusercontent.com/lodinesoftware/store_repo/main/software.json",
)

useSeoMeta({
  title: "Software",
  description:
    "Boost your experience with Lodine's software! Explore our comprehensive list of tools for productivity, creativity, entertainment, and more. Find the perfect apps to meet your needs!",
})
</script>
