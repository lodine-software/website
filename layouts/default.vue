<template>
  <div class="layout">
    <nav>
      <div class="inner">
        <NuxtLink to="/" class="logo">
          <img src="~/assets/images/textlogo.svg" alt="">
        </NuxtLink>
        <div class="links">
          <NuxtLink to="#about">about</NuxtLink>
          <NuxtLink to="#products">products</NuxtLink>
          <NuxtLink to="#contact">contact</NuxtLink>
        </div>
      </div>
    </nav>
    <main>
      <slot />
    </main>
    <footer>
      <div class="inner">
        <div class="logo">
          <img src="~/assets/images/logo.svg" alt="">
        </div>
        <div class="columns">
          <div class="column">
            <span class="title">Social</span>
            <div class="social-buttons">
              <a
                href="https://twitter.com/ldnsoft"
                target="_blank"
                class="button"
              >
                <NuxtIcon name="twitter" filled />
              </a>
              <a
                href="https://youtube.com/@colsoftofficial"
                target="_blank"
                class="button"
              >
                <NuxtIcon name="youtube" filled />
              </a>
              <a
                href="https://instagram.com/ldnsoft"
                target="_blank"
                class="button"
              >
                <NuxtIcon name="instagram" filled />
              </a>
            </div>
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

nav {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 60px;
  background: rgba($color: #0c0c0c, $alpha: 0.7);
  backdrop-filter: blur(25px);
  z-index: 100;

  .inner {
    display: inherit;
    align-items: inherit;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    padding: 0 1em;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      user-select: none;

      img {
        height: 60px;
      }
    }

    .links {
      display: inherit;
      align-items: inherit;
      gap: 1em;

      a {
        color: inherit;
        text-decoration: none;
        transition: 200ms;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

main {
  flex: 1 1 auto;
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  backdrop-filter: blur(25px);

  .inner {
    display: inherit;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    padding: 2.5em 1em;

    .logo {
      font-size: 1.5em;
      user-select: none;
      pointer-events: none;

      img {
        height: 90px;
        filter: grayscale(1);
      }
    }

    .columns {
      display: flex;
      gap: 7em;

      .column {
        display: flex;
        flex-direction: column;

        .title {
          color: #555;
          font-size: 1.2em;
          margin-bottom: 1em;
        }

        .social-buttons {
          display: flex;
          gap: 0.5em;
        }
      }

      @media (max-width: 700px) {
        margin-top: 1em;
        gap: 1em;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0 2em;
  }
}
</style>
