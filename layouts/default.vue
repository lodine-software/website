<template>
  <div class="layout">
    <nav class="navbar navbar-expand-lg fixed-top w-100 bg-body-tertiary">
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
    <footer class="footer mt-auto bg-body-tertiary">
      <div class="container d-flex justify-content-between py-3">
        <div class="d-flex align-items-center user-select-none gap-2">
          <span
            >Copyright {{ new Date().getFullYear() }} © Lodine Software</span
          >
        </div>
        <div class="d-flex align-items-center gap-2">
          <ul class="d-flex list-unstyled text-secondary gap-1 m-0">
            <li><NuxtLink to="/legal/privacy">Privacy Policy</NuxtLink></li>
            <span class="user-select-none">/</span>
            <li><NuxtLink to="/legal/terms">Terms of Use</NuxtLink></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100dvh;
}

main {
  padding-top: 60px;
}

.footer {
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1000px) {
    .container {
      flex-direction: column;
    }
  }
}
</style>
