<template>
  <div class="container">
    <h1>Games</h1>
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
        <span>Published by {{ product.publisher }}</span>
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
  "https://raw.githubusercontent.com/lodinesoftware/store_repo/main/games.json",
)

useSeoMeta({
  title: "Games",
  description:
    "Skip the tutorials, jump into the fun! Easy-to-learn arcade games for casual gamers. Play solo or with friends, no complicated mechanics, just pure enjoyment.",
})
</script>
