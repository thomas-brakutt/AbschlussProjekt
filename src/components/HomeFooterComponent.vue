<template>
  <footer class="container">
    <adress class="anfahrt">
      <h2>Anfahrt</h2>
      <p>Musterweg 12 Halle 3,</p>
      <p>Eingang A, 1. OG</p>
      <p>12345 Musterhausen</p>
    </adress>
    <section class="kontakt">
      <h2>Kontakt</h2>
      <address>
        <p>Telefon: <a href="tel: 01234567890">0123-4567890</a></p>
        <p>Email: <a href="mailto:info@b&a-archery-club.de">info@b&a-archery-club.de</a></p>
      </address>
    </section>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.anfahrt {
  margin-inline: auto;
  margin-top: 1.5rem;
}

.kontakt {
  margin-inline: auto;
  margin-top: 1.5rem;
}

h1 {
  line-height: 1.5; /* Erhöht den Zeilenabstand */
}
p {
  line-height: 1.6; /* Erhöht den Zeilenabstand */
}
</style>
