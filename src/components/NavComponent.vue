<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/überuns">Über uns</RouterLink>
    <RouterLink to="/aktuelles">Aktuelles</RouterLink>
    <RouterLink to="/verein">Verein</RouterLink>
    <RouterLink to="/bilder">Bilder</RouterLink>
    <RouterLink to="/kontakt">Kontakt</RouterLink>
    <RouterLink to="/impressum">Impressum</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #333;
  border-bottom: 2px solid white;
}

a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

a:hover {
  color: rgb(199, 159, 47);
}

.router-link-active {
  color: rgb(199, 159, 47);
  text-decoration: underline;
  text-underline-offset: 7px;
}
</style>
