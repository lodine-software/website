<template>
  <div class="product-card">
    <div class="product-name">
      <span>{{ name }}</span>
    </div>
    <div class="product-description">
      <span>{{ description }}</span>
    </div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
  },
}
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(180deg, #2e2e2e, #181818);
  background-size: 100%, cover !important;
  border-radius: 15px;
  padding: 1em;
  width: 350px;
  height: 400px;
  overflow: hidden;
  transition: 200ms;

  @media (max-width: 1000px) {
    width: 100%;
  }

  .product-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    font-size: 2em;
    font-family: "Tilt Warp";
    font-weight: bold;
    text-transform: uppercase;
    z-index: 1;

    @media (max-width: 1000px) {
      font-size: 1.5em;
    }
  }

  .product-description {
    height: 0;
    visibility: hidden;
    color: #9e9e9e;
    transition: 1000ms;
    overflow: hidden;
    z-index: 1;
  }

  .overlay {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 20%;
    backdrop-filter: blur(25px);
    background: rgba($color: #000000, $alpha: 0.1);
    transition: 1000ms;
  }

  &:hover {
    .overlay {
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.8);
    }

    .product-description {
      visibility: visible;
      height: 100%;
      text-align: center;
      overflow: scroll;
    }
  }
}
</style>
