<template>
  <div class="layout">
    <nav>
      <div class="inner">
        <div class="branding">
          <NuxtLink to="/">
            <img
              src="~/assets/images/brand/wordmark_monochrome.svg"
              alt=""
              height="40"
            />
          </NuxtLink>
        </div>
        <div class="actions">
          <NuxtLink to="/" active-class="active">Home</NuxtLink>
          <NuxtLink to="/software" active-class="active">Software</NuxtLink>
          <NuxtLink to="/games" active-class="active">Games</NuxtLink>
          <NuxtLink to="/support" active-class="active">Support</NuxtLink>
          <NuxtLink to="/contact" active-class="active">Contact</NuxtLink>
        </div>
        <button class="burger">
          <div class="bar"></div>
        </button>
      </div>
    </nav>
    <div class="mobile-nav">
      <NuxtLink to="/" class="btn" active-class="active">Home</NuxtLink>
      <NuxtLink to="/software" class="btn" active-class="active"
        >Software</NuxtLink
      >
      <NuxtLink to="/games" class="btn" active-class="active">Games</NuxtLink>
      <NuxtLink to="/support" class="btn" active-class="active"
        >Support</NuxtLink
      >
      <NuxtLink to="/contact" class="btn" active-class="active"
        >Contact</NuxtLink
      >
    </div>
    <main>
      <slot />
    </main>
    <footer>
      <div class="inner">
        <div class="cols">
          <div class="col">
            <span class="title">Software</span>
            <span>Fill this space!</span>
          </div>
          <div class="col">
            <span class="title">Games</span>
            <span>Fill this space!</span>
          </div>
          <div class="col">
            <span class="title">Community</span>
            <NuxtLink to="/community/guidelines">Guidelines</NuxtLink>
            <NuxtLink to="/community/faq">FAQ</NuxtLink>
          </div>
          <div class="col">
            <span class="title">Legal</span>
            <NuxtLink to="/legal/terms">Terms of Use</NuxtLink>
            <NuxtLink to="/legal/privacy">Privacy Policy</NuxtLink>
          </div>
        </div>
        <div class="row">
          <div class="copyright-notice">
            <span
              >Copyright © {{ new Date().getFullYear() }} Lodine Software</span
            >
          </div>
          <div class="social-media">
            <NuxtLink to="https://go.lodine.xyz/discord" target="_blank">
              <img src="~/assets/icons/discord.svg" alt="" />
            </NuxtLink>
            <NuxtLink to="https://go.lodine.xyz/github" target="_blank">
              <img src="~/assets/icons/github.svg" alt="" />
            </NuxtLink>
            <NuxtLink to="https://go.lodine.xyz/instagram" target="_blank">
              <img src="~/assets/icons/instagram.svg" alt="" />
            </NuxtLink>
            <NuxtLink to="https://go.lodine.xyz/itch" target="_blank">
              <img src="~/assets/icons/itchdotio.svg" alt="" />
            </NuxtLink>
            <NuxtLink to="https://go.lodine.xyz/twitter" target="_blank">
              <img src="~/assets/icons/x.svg" alt="" />
            </NuxtLink>
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
  height: 100dvh;
}

nav {
  top: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #f08, rgb(172, 2, 92));
  box-shadow: 0 0 10px 3px #5a5a5a;
  z-index: 9999;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 64px;
    padding: 0 1em;
    gap: 1em;

    .branding a {
      display: flex;
    }

    .actions {
      display: flex;
      gap: 1em;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid #fff;
        }

        &.active {
          font-weight: bold;
        }
      }

      @media (max-width: 800px) {
        display: none;
      }
    }

    .burger {
      position: relative;
      display: block;
      width: 45px;
      cursor: pointer;
      appearance: none;
      background: none;
      outline: none;
      border: none;

      @media (min-width: 800px) {
        display: none;
      }

      .bar,
      &:after,
      &::before {
        content: "";
        display: block;
        widows: 100%;
        height: 5px;
        background: #fff;
        margin: 6px 0;
        transition: 400ms;
      }

      &.is-active {
        &::before {
          transform: rotate(-45deg) translate(-9px, 6px);
        }
        .bar {
          opacity: 0;
        }
        &::after {
          transform: rotate(45deg) translate(-9px, -6px);
        }
      }
    }
  }
}

.mobile-nav {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 80px;
  transition: 200ms;

  &.is-active {
    left: 0;
  }

  a {
    background: #fff;
    color: #000;
    padding: 1em;

    &:hover {
      background: #eeeeee;
    }

    &.active {
      background: #ccc;
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 auto;
}

footer {
  display: flex;
  justify-content: center;
  background: #ccc;

  .inner {
    display: flex;
    flex-direction: column;
    width: 1200px;
    padding: 1em 1em;
    gap: 1em;

    .cols {
      display: flex;
      justify-content: space-between;

      .col {
        display: flex;
        flex-direction: column;
        gap: 0.3em;

        .title {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.1em;
        }

        a {
          text-decoration: none;
          color: inherit;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    .row {
      display: flex;
      justify-content: space-between;

      .social-media {
        display: flex;
        gap: 1em;

        a {
          &:hover {
            transform: scale(1.3);
          }
          transition: 200ms;

          img {
            width: 1.3em;
            height: 1.3em;
          }
        }
      }
    }
  }
}
</style>

<script setup>
onMounted(() => {
  const menu_btn = document.querySelector(".burger");
  const mob_nav = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mob_nav.classList.toggle("is-active");
  });
});
</script>
