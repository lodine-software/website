<template>
  <div class="container">
    <h1>Games</h1>
    <template v-for="product in JSON.parse(data)">
      <div class="card" v-if="product.visibility == 'visible'">
        <span class="title">
          {{ product.title }} ({{ product.date_of_release }})
        </span>
        <span class="description">
          {{ product.description }}
        </span>
        <span
          ><a :href="product.website" target="_blank" class="btn"
            >Download</a
          ></span
        >
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-bottom: 1em;
}

.card {
  .btn {
    margin-top: 0.3em;
  }
}
</style>

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
