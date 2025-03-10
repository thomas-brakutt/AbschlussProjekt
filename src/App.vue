<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
import EndFooterComponent from '@/components/EndFooterComponent.vue'
</script>

<template>
  <body>
    <header>
      <HeaderComponent />
      <NavComponent />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <EndFooterComponent />
    </footer>
  </body>
</template>

<style scoped></style>
