<template>
  <div
    class="banner d-flex align-items-center text-center text-white w-100 h-100"
  >
    <img
      class="bg pe-none user-select-none"
      src="~/assets/images/landing/landing-bg.webp"
      alt=""
    />
    <div class="inner w-100 py-3">
      <div class="container">
        <h1 class="fw-bold">We're Lodine Software!</h1>
        <h4>A self-funded software company</h4>
        <div class="d-inline-flex gap-2 mt-2">
          <a
            href="https://go.lodine.xyz/twitter"
            target="_blank"
            class="btn btn-light"
            >Twitter</a
          >
          <a
            href="https://go.lodine.xyz/instagram"
            target="_blank"
            class="btn btn-light"
            >Instagram</a
          >
          <a
            href="https://go.lodine.xyz/itch"
            target="_blank"
            class="btn btn-light"
            >Itch.io</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  img {
    animation: 1.5s fade-in;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .inner {
    background: rgba($color: #000000, $alpha: 0.8);
    backdrop-filter: blur(3px);
  }
}
</style>

<script setup>
useHead({
  title: "Home",
})
</script>
