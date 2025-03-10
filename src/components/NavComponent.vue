<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <svg
      :class="navVisible === true ? 'active' : ''"
      @click="navVisible = !navVisible"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
    <div :class="navVisible === true ? 'visible' : 'hidden'">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/überuns">Über uns</RouterLink>
      <RouterLink to="/aktuelles">Aktuelles</RouterLink>
      <RouterLink to="/verein">Verein</RouterLink>
      <RouterLink to="/bilder">Bilder</RouterLink>
      <RouterLink to="/kontakt">Kontakt</RouterLink>
      <RouterLink to="/impressum">Impressum</RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navVisible: false,
    }
  },
}
</script>

<style scoped>
nav {
  padding: 1rem;
  background-color: #333;
  border-bottom: 2px solid white;
}

div {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

svg {
  display: none;
  cursor: pointer;
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

@media screen and (max-width: 768px) {
  div {
    flex-direction: column;
    align-items: center;
  }

  nav {
    text-align: center;
  }

  svg {
    display: inline;
    color: white;
  }

  .active,
  svg:hover {
    color: rgb(199, 159, 47);
  }

  .hidden {
    display: none;
  }

  .visible {
    display: flex;
  }
}
</style>
