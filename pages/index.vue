<template>
  <div
    class="banner d-flex align-items-center text-center text-white w-10 h-100"
  >
    <img
      class="bg pe-none user-select-none"
      src="~/assets/images/landing/landing-bg.webp"
      alt=""
    />
    <div class="inner w-100 py-3">
      <div class="container">
        <h1 class="fw-bold">Lodine Software</h1>
        <h4>A software development company</h4>
      </div>
    </div>
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
