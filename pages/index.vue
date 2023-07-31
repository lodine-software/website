<template>
  <Section size="big" class="page-header">
    <div class="content">
      <h1>Self-funded Tech Company</h1>
      <h1>Self-funded Tech Company</h1>
    </div>
  </Section>

  <section>
    <h1 id="products">Our Products</h1>
    <div class="product-cards">
      <ProductCard
        id="safebrowsing-card"
        name="SafeBrowsing"
        description="A storage of flagged potential malicious, phishing or suspicious websites"
        links="docs.lodine.xyz/safebrowsing"
      />
    </div>
  </section>
  <section>
    <h1 id="about">About Us</h1>
    <p>
      We're self-funded tech building company based in the Kazakhstan.
      Lodine is established in 2021, firstly we are planned to create
      only games, but nearly to 2023 our plans changed, now we want
      create not only games but also an apps & software products.
      We want that people love our products and our products will be
      high-quality, modern and "other cool words".
    </p>
  </section>
  <section>
    <h1 id="contact">Contact Us</h1>
    <p>
      You are free to contact our Tech Support using our email (support@lodine.freshworks.com)
      or by mentioning us on X (@ldnsoft)
    </p>
  </section>
</template>

<style lang="scss" scoped>
.page-header {
  align-items: center;
  justify-content: center;
  font-family: "Tilt Warp";
  background: #f08;
  font-size: 2.5em;
  height: 3em;
  user-select: none;
  transition: 200ms;

  @media (max-width: 900px) {
    font-size: 2em;
  }

  @media (max-width: 700px) {
    font-size: 1.2em;
  }

  @media (max-width: 430px) {
    font-size: 1.1em;
  }

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

section:not(.page-header) {
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

.product-cards {
  display: flex;
  flex-direction: row;
  gap: 2em;
  margin-top: 1em;
}

#safebrowsing-card {
  background: url("~/assets/products/safebrowsing/background.jpeg");
}
</style>
