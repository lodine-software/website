<template>
  <div class="error-page">
    <NuxtLink to="/">
      <img :src="'https://http.cat/' + error.statusCode + '.jpg'" alt="" />
    </NuxtLink>
    <p>Pro Tip: Click on cat to get out from here.</p>
  </div>
</template>

<script setup>
const error = useError()
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background: #000;
  color: #fff;
  text-align: center;

  img {
    user-select: none;
    pointer-events: none;
    max-width: 700px;
    width: 100%;
  }
}
</style>
