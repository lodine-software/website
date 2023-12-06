<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img
            src="~/assets/images/brand/wordmark.svg"
            alt="Lodine"
            width="120"
            class="d-inline-block align-text-top"
            v-if="colorMode.value == 'light'"
          />
          <img
            src="~/assets/images/brand/wordmark_light.svg"
            alt="Lodine"
            width="120"
            class="d-inline-block align-text-top"
            v-else
          />
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" active-class="active"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/products" class="nav-link" active-class="active"
                >Products</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link" active-class="active"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container pt-2"><slot /></main>
    <footer class="footer bg-body-tertiary pt-3 pb-3">
      <div class="container d-flex align-items-center justify-content-between">
        <span
          >Copyright © 2021 - {{ new Date().getFullYear() }} Lodine
          Software</span
        >
        <select class="w-auto form-select" v-model="colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100svh;
}

main {
  flex: 1 1 auto;
}
</style>

<script setup>
const colorMode = useColorMode()
</script>
