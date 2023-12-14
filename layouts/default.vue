<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand">
          <img
            src="~/assets/images/brand/wordmark.svg"
            alt="Lodine"
            width="120"
            class="d-inline-block align-text-top"
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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
    <main><slot /></main>
    <footer class="footer bg-body-tertiary pt-1 pb-1">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="d-flex gap-2">
          <img
            src="~/assets/images/brand/lettermark.svg"
            height="35"
            alt="Lodine Logo"
            class="mt-2 pe-none"
          />
          <div class="d-flex flex-column">
            <span
              >Lodine Software © 2021 - {{ new Date().getFullYear() }}</span
            >
            <ul class="d-flex list-unstyled text-secondary gap-1">
              <li><NuxtLink to="/legal/privacy">Privacy Policy</NuxtLink></li>
              <span class="user-select-none"> /</span>
              <li><NuxtLink to="/legal/terms">Terms of Use</NuxtLink></li>
              <span class="user-select-none"> /</span>
              <li>
                <NuxtLink to="/community/guidelines"
                  >Community Guidelines</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
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

.footer {
  a {
    text-decoration: none;
  }
}
</style>
