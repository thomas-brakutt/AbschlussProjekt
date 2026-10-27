<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Steuert, ob das mobile Menü geöffnet ist.
const navVisible = ref(false)

// Schließt das Menü nach der Navigation.
function closeMenu() {
  navVisible.value = false
}
</script>

<template>
  <nav aria-label="Hauptnavigation" @keydown.esc="closeMenu">
    <!-- Hamburger-Button für mobile Geräte -->
    <button
      type="button"
      class="menu-button"
      :aria-expanded="navVisible"
      :aria-label="navVisible ? 'Menü schließen' : 'Menü öffnen'"
      aria-controls="nav-links"
      @click="navVisible = !navVisible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>

    <!-- Navigationslinks -->
    <div id="nav-links" class="nav-links" :class="{ visible: navVisible }">
      <RouterLink to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/überuns" @click="closeMenu">Über uns</RouterLink>
      <RouterLink to="/aktuelles" @click="closeMenu">Aktuelles</RouterLink>
      <RouterLink to="/verein" @click="closeMenu">Verein</RouterLink>
      <RouterLink to="/bilder" @click="closeMenu">Bilder</RouterLink>
      <RouterLink to="/kontakt" @click="closeMenu">Kontakt</RouterLink>
      <RouterLink to="/impressum" @click="closeMenu">Impressum</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background-color: #333;
  border-bottom: 2px solid white;
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
}

.nav-links a:hover {
  color: rgb(199, 159, 47);
}

.router-link-active {
  color: rgb(199, 159, 47) !important;
  text-decoration: underline !important;
  text-underline-offset: 7px;
}

/* Auf Desktop ist der Hamburger-Button versteckt. */
.menu-button {
  display: none;
  background: transparent;
  border: 1px solid #aaa;
  border-radius: 6px;
  color: white;
  padding: 0.4rem;
  cursor: pointer;
}

.menu-button:hover {
  color: rgb(199, 159, 47);
}

.menu-button:focus-visible,
.nav-links a:focus-visible {
  outline: 2px solid rgb(199, 159, 47);
  outline-offset: 3px;
}

/* Mobile Navigation */
@media screen and (max-width: 768px) {
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;
  }

  .menu-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0;
    margin-top: 0.75rem;
  }

  .nav-links.visible {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
  }
}
</style>
