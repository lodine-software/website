<template>
  <div class="container">
    <h1>Contact</h1>
    <p>
      You are free to contact us via email if you want ask question or need to
      tell something.
    </p>
    <h4>Developers</h4>
    <div class="d-inline-flex flex-column mb-3">
      <a href="mailto:nitro@team.lodine.xyz">nitro@team.lodine.xyz</a>
    </div>
    <h4>Community Managers</h4>
    <div class="d-inline-flex flex-column mb-3">
      <a href="mailto:mhought@team.lodine.xyz">mhought@team.lodine.xyz</a>
    </div>
    <p class="text-body-secondary">
      * We might read your message but not respond if that's not necessary
    </p>
  </div>
</template>

<script setup>
useHead({
  title: "Contact",
})

useSeoMeta({
  description: "Reliable way to contact team behind Lodine Software",
})
</script>
