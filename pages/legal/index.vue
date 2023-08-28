<template>
  <section class="banner">
    <div class="content">
      <h1>Legal</h1>
      <h1>Legal</h1>
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Tilt Warp";
  background: #f08;
  font-size: 3em;
  height: 5em;
  user-select: none;
  transition: 200ms;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: title 2s;

    h1 {
      position: absolute;

      &:nth-child(1) {
        color: transparent;
        -webkit-text-stroke: 0.01em #fff;
      }

      &:nth-child(2) {
        color: #fff;
        animation: animate 4s ease-in-out infinite;
      }
    }
  }

  @keyframes title {
    0% {
      opacity: 0;
      transform: translateY(1em);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        15% 40%,
        32% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
}

section:not(:nth-child(1)) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  max-width: 1000px;
  margin: auto;

  h1 {
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
useHead({
  title: "Legal",
})
</script>
