<template>
  <div class="container">
    <h1>Games</h1>
    <section class="content">
      <template v-for="product in JSON.parse(data)">
        <div class="game_card" v-if="product.visibility == 'visible'">
          <ExternalLink :to="product.website">
            <img :src="product.img_card" :alt="product.slug" />
            <div class="overlay">
              <span>{{ product.title }}</span>
              <p>{{ product.description }}</p>
              <p>Release Date: {{ product.date_of_release }}</p>
              <p>Developer: {{ product.developer }}</p>
            </div></ExternalLink
          >
        </div>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-bottom: 1em;
}

.content {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.game_card {
  position: relative;
  display: inline-block;
  width: 213px;
  text-align: center;
  margin-bottom: 1em;
  box-shadow: 0 0 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    height: 100%;

    p {
      display: block;
    }
  }

  .overlay {
    position: absolute;
    width: 100%;
    transition: 200ms;
    bottom: 0;
    color: #fff;
    padding: 0.3em;
    backdrop-filter: blur(15px);
    background: rgba($color: #000, $alpha: 0.6);
    overflow: hidden;

    p {
      margin: 0;
      font-size: 0.8em;
      display: none;
    }
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
