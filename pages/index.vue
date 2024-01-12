<template>
  <PageHero class="mb-3">
    <h1 class="fw-bold">Lodine Software</h1>
    <h4>A software development company</h4>
  </PageHero>
  <div class="d-flex flex-column gap-3">
    <section class="container">
      <h2>About</h2>
      <p>
        Lodine Software was founded in the 2021 in the Kazakhstan, we have small
        but friendly team :)
      </p>
    </section>
    <section class="container">
      <h2>Our Vision</h2>
      <p>
        We want to build non-irritating, beautiful, fast and convenient products
        for our users!
      </p>
    </section>
    <section class="container">
      <h2>Main Goal</h2>
      <p>
        Our main goal is to create products that are different from others, we
        do not want to create paid subscriptions, unclear plans, sell personal
        data, etc., we prefer to create free and open source products.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .inner {
    background: rgba($color: #000000, $alpha: 0.7);
    backdrop-filter: blur(3px);
  }
}
</style>

<script setup>
useHead({
  title: "Home",
})
</script>
