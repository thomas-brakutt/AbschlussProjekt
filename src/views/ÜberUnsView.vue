<template>
  <header>
    <h1 class="ueber-uns-header">Über uns</h1>
  </header>
  <main class="container">
    <section>
      <img
        src="@/assets/pictures/Bogen_und_Pfeil_stehend.jpg"
        alt="Bogen und Pfeil im Wald"
        class="Bild"
      />
    </section>
    <section>
      <p>
        Der 2020 gegründete Verein bietet jedem Bogensport-Interessierten eine Gemeinschaft, in der
        er seiner Leidenschaft des Bogensports nachgehen kann. Ganz gleich ob einfach als
        Freizeitausgleich oder mit dem Ziel seine persönliche Leistung stetig zu verbessern und das
        eigene Können in Wettkämpfen unter Beweis zu stellen. Egal ob Recurve-, Compound- oder
        Blankbogen, bei uns sind alle Bogensport-Fans herzlich willkommen.
      </p>
      <br />
      <p>
        Jeder Interessierte kann bei uns Bogenschießen oder es lernen. Es stehen Bögen
        unterschiedlicher Stärke für Anfänger und geübte Schützen, Kinder und Jugendliche zur
        Verfügung. Passende Pfeile und sonstige Ausrüstung halten wir natürlich auch bereit.
      </p>
      <br />
      <p>
        Der B & A -Archery-Club e.V. wurde 2020 von einer kleinen Gruppe leidenschaftlicher
        Bogenschützen gegründet, die sich das Ziel gesetzt haben in Musterhausen eine neue
        Gemeinschaft aufzubauen. Unser Herz schlägt für den Bogensport in all seinen Formen.
      </p>
    </section>
  </main>
  <hr />
</template>

<style scoped>
.ueber-uns-header {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

.Bild {
  width: 500px;
  height: auto;
  margin: 2rem 0 0 1rem;
}

p {
  text-align: justify;
  width: 500px;
  margin-inline: auto;
  line-height: 2rem;
  font-size: 1.3rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

hr {
  border: 5px solid rgb(199, 159, 47);
  margin-top: 2rem;
  margin-bottom: 2px;
}
</style>
