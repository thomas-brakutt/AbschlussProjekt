<template>
  <h1 class="aktuelles-header">Aktuelles</h1>

  <section class="container">
    <article>
      <h2>‼️ Mitgliederversammlung</h2>
      <p class="font-background">23.03.25 um 15 Uhr</p>
    </article>
    <article>
      <h2>🎯 Arbeitseinsatz - Scheibenständerbau</h2>
      <p class="font-background">30.03.25 um 15 Uhr</p>
      <p>
        Wir brauchen Deine Unterstützung beim Bau eines neuen Scheibenständers. Es wird gesägt,
        gebohrt, geschliffen, lackiert und geschraubt. Wer Lust hat Teil dieses tollen Projektes zu
        sein, der ist herzlich eingeladen mitzumachen.
      </p>
    </article>

    <article>
      <h2>🎯 Come together/ Bundesligafinale stream</h2>
      <p class="font-background">13.04.25 um 13 Uhr</p>
      <p>
        Als Abschluss der Ligasaison wollen wir mit euch gemeinsam abhängen und das Bundesligafinale
        streamen. Dazu laden wir euch herzlich ein und der "B & A Archery-Club" möchte als kleines
        Dankeschön für eure Mühen in der Ligasaison, Speisen und Getränke kostenlos zur Verfügung
        stellen.
      </p>
    </article>

    <article>
      <h2>‼️ Arbeitseinsatz Frühjahrsputz</h2>
      <p class="font-background">20.04.25 um 10 Uhr</p>
      <p>
        1. Bodenpflege <br />
        2. Fangnetzte reparieren <br />
        3. Fensterputzen <br />
        4. Scheibenstämnder warten
      </p>
    </article>

    <article>
      <h2>🥇 Vereinsmeisterschaften</h2>
      <p class="font-background">26.04.25 um 13 Uhr</p>
    </article>
    <article>
      <h2>🥇 Kreismeisterschaften</h2>
      <p class="font-background">07.06.25 um 11 Uhr</p>
    </article>
    <article>
      <h2>🥇 Landesmeisterschaften</h2>
      <p class="font-background">12.07.25 um 11 Uhr</p>
    </article>

    <article>
      <h2>🎯 Summerfinals Family and Friends 2025</h2>
      <p class="font-background">30.08.25 um 11 Uhr</p>
      <p>Auch in diesem Jahr lädt der "B & A Archery-Club" wieder zu den Summer Finals ein.</p>
    </article>
    <br />
    <article><h3>... weitere Termine folgen ...</h3></article>
  </section>

  <hr />
  <!-- für den gelben Style unten  -->
</template>

<style scoped>
.aktuelles-header {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

.container {
  margin-left: 6rem;
}

article {
  margin-block: 2rem;
}

article > p {
  margin-inline: 2rem;
  margin-block: 0.5rem;
  font-size: 1.3rem;
}

.font-background {
  _background-color: rgb(242, 242, 242);
  _width: max-content;
  color: red;
}

hr {
  border: 5px solid rgb(199, 159, 47);
  margin-top: 2rem;
  margin-bottom: 2px;
}

/* @media (min-width: 1024px) {
  .aktuelles {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
