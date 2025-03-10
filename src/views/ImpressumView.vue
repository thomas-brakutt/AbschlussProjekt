<template>
  <div class="impressum">
    <h1 class="impressum-header">Impressum</h1>
    <p>Unser Impressum gilt für die Seite www.b-and-a-archery-club.de</p>
    <p>
      B & A - Archery Club e.V. Musterweg 12 / Halle 3 Eingang A , 1. OG, <br />
      12345 Musterhausen
    </p>
    <p>
      Telefon: 0123-4567890 <br />
      E-Mail: info@b&a-archery-club.de
    </p>
    <p>Eingetragen im Vereinsregister Musterhausen unter der Registernummer VR 1234</p>
    <p>Steuernummer: 123456789123</p>
    <p>
      Vertretungsberechtigter Vorstand: <br />
      Max Mustermann (Vorsitzender), Maxi Musterfrau (Stellv. & Schriftführer), Maxima Musterfrau
      (Schatzmeisterin)
    </p>
    <p>Für den Inhalt ist der Vorstand verantwortlich.</p>
    <hr />
    <!-- für den gelben Style unten  -->
  </div>
</template>

<style scoped>
.impressum-header {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

p {
  margin-top: 2rem;
  margin-left: 6rem;
  font-size: 1.3rem;
}

hr {
  border: 5px solid rgb(199, 159, 47);
  margin-top: 2rem;
  margin-bottom: 2px;
}

/* @media (min-width: 1024px) {
  .impressum {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
