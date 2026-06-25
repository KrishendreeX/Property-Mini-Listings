<script setup>
import Listings from './Listings.vue'
</script>

<template>
  <div class="app-background">
    <Listings />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

.app-background {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #f3f8fa, #eef3f6);
  padding: 2rem 1rem;
}

.listings-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>