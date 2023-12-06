<template>
  <div>
    <h1>Products</h1>
    <p>List of available products</p>
    <div class="list-group">
      <a
        href="https://github.com/lodine-software/aerocss"
        target="_blank"
        class="list-group-item list-group-item-action"
      >
        AeroCSS - Simple CSS framework that we using in our projects.
      </a>
      <a
        href="https://github.com/lodine-software/skeuocss"
        target="_blank"
        class="list-group-item list-group-item-action"
        >SkeuoCSS - Skeuomorphistic CSS Framework
      </a>
      <a
        href="https://github.com/lodine-software/imagetool"
        target="_blank"
        class="list-group-item list-group-item-action"
        >ImageTool -  A useful image resize tool for Windows 
      </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Products",
})
</script>
