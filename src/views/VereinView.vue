<template>
  <header>
    <h1>Verein</h1>
  </header>
  <main class="container">
    <h2>Trainingszeiten</h2>
    <section class="container-öffnungszeiten">
      <article class="container-zeiten">
        <h2>Sommersaison</h2>

        <p class="opening-hours">Mo 15:00 - 17:30</p>
        <p class="opening-hours">Di 17:00 - 22:00</p>
        <p class="opening-hours">Mi 15:00 - 17:30</p>
        <p class="opening-hours">Do 17:00 - 22:00</p>
        <p class="opening-hours">Fr 17:00 - 22:00</p>
        <p class="opening-hours">Sa 12:00 - 15:00</p>
        <p class="opening-hours">So 12:00 - 15:00</p>
      </article>
      <article class="container-zeiten">
        <h2>Wintersaison</h2>

        <p class="opening-hours">Mo</p>
        <p class="opening-hours">Di 16:00 - 22:00</p>
        <p class="opening-hours">Mi</p>
        <p class="opening-hours">Do</p>
        <p class="opening-hours">Fr 16:00 - 22:00</p>
        <p class="opening-hours">Sa</p>
        <p class="opening-hours">So 12:00 - 16:00</p>
      </article>
    </section>

    <hr class="hr-styler" />

    <section class="trainer-container">
      <h2>Trainerteam</h2>
      <div class="pic-container">
        <div class="trainer-pic">
          <img src="@/assets/pictures/Profil_Trainer1.jpg" alt="Picture of Max Mustermann" />
          <p>Max Mustermann</p>
        </div>
        <div class="trainer-pic">
          <img src="@/assets/pictures/Profil_Trainer2.jpg" alt="Picture of Maxi Musterfrau" />
          <p>Maxi Musterfrau</p>
        </div>
        <div class="trainer-pic">
          <img src="@/assets/pictures/Profil_Trainer3.jpg" alt="Picture of Maxima Musterfrau" />
          <p>Maxima Musterfrau</p>
        </div>
      </div>
    </section>

    <hr class="hr-styler" />

    <section class="Probetraining">
      <h2>Probetraining</h2>
      <article>
        <h3>Allgemein</h3>
        <p>
          F​ür alle, die Interesse am Bogenschießen haben aber noch nicht so richtig wissen, ob es
          wirklich das Richtige ist, bieten wir Probetraining mit durchgehender Betreuung eines
          lizenzierten Trainers an. Wir starten ein Probetraining nach Eingang ausreichender
          Meldungen ab 3 bis maximal 6 Teilnehmern. So wollen wir gewährleisten, dass jeder die
          nötige Aufmerksamkeit erhält, die besonders in den Anfängen nötig ist.
        </p>
        <p>
          Allgemein sind Kinder ab einem Alter von 10 Jahren in der Lage, den komplexen
          Bewegungsabläufen des Bogensports zu folgen. In einigen Fällen sind vielleicht auch schon
          8 Jahre ausreichend. Die Teilnahme von Minderjährigen ist nur mit Begleitung möglich (muss
          nicht selbst teilnehmen).
        </p>
      </article>

      <article>
        <h3>Inhalt</h3>
        <p>
          Einführung anhand eines Olympischen Recurvebogens in die elementaren Schritte des
          Bogenschießens nach dem vom DSB-Bundestrainer empfohlenen Positionsphasenmodell. Nach und
          nach führen wir die Teilnehmer auf kurze Distanz an die Grundtechnik heran. Themen, von
          der grundlegenden Körperhaltung bis hin zu einem Ausblick auf kleine Details, z.B. wo den
          nun der Sehnenschatten genau sein muss, werden behandelt. Wer danach diesen Sport bei uns
          betreiben möchte, dem stellen wir gerne kurz unser Training für Mitglieder vor.
        </p>
      </article>

      <article>
        <h3>Ort</h3>
        <p>
          B & A - Archery Club e.V. <br />
          Musterweg 12 <br />
          Halle 3 Eingang A , 1. OG, <br />
          12345 Musterhausen
        </p>
      </article>
      <article>
        <h3>Zeit</h3>
        <p>In der Regel Sonntag, 2 Stunden, 15 - 17 Uhr</p>
      </article>
      <article>
        <h3>Kosten</h3>
        <p>40 Euro</p>
      </article>
      <article>
        <h3>Materialien</h3>
        <p>
          Bogenausrüstung wird von uns komplett gestellt. Bitte bequeme Sportkleidung mitbringen.
          Wichtig sind Sportschuhe und anliegende Oberbekleidung.
        </p>
      </article>

      <article>
        <p class="registration-link-text">
          Zum Anmelden für ein Probetraining, könnt ihr gern das
          <RouterLink to="/kontakt" class="contact-link">Kontaktformular</RouterLink> ausfüllen!
        </p>
      </article>
    </section>

    <hr class="hr-styler" />

    <section class="Beitraggsordnung">
      <article>
        <h3>Beitragsordnung</h3>
        <p>
          Die Mitgliederversammlung des Vereins B & A Archery-Club e.V. hat am 22.01.2025 folgende
          Beitragsordnung beschlossen:
        </p>
        <br />
        <h4>Beitragsordnung des B & A Archery-Club</h4>

        <dl>
          <dt>1. Mitgliedsbeitrag</dt>
          <dd>
            Alle Vereinsmitglieder zahlen einen Mitgliedsbeitrag. Der Mitgliedsbeitrag wird jährlich
            erhoben. Ehrenmitglieder sind von der Beitragszahlung befreit.
          </dd>

          <dt>2. Zahlungsmodalitäten</dt>
          <dd>
            Die Jahresbeiträge werden jeweils zum ersten Werktag des jeweiligen Monats des im
            Aufnahmeantrag angegebenen Datums „Beginn der Mitgliedschaft“ eingezogen.
          </dd>

          <dt>3. Ratenzahlung</dt>
          <dd>
            Nach Rücksprache mit dem Kassenwart oder der Mitgliederverwaltung kann eine Ratenzahlung
            vereinbart werden.
          </dd>

          <dt>4. Jahresbeiträge</dt>
          <dd>
            <ul>
              <li>Erwachsene: 180 €</li>
              <li>Ermäßigt (Schüler, Studenten, Azubis, Rentner): 110 €</li>
              <li>Behinderte (ab 20% Behinderungsgrad): 110 €</li>
              <li>Ehrenmitglieder: kostenfrei</li>
              <li>Passive Mitglieder: 50 €</li>
              <li>Juristische Personen: 200 €</li>
              <li>Funktionäre (Vorstand/Präsidium): 40 €</li>
              <li>Gastbeitrag: 5 €</li>
            </ul>
          </dd>

          <dt>5. Aufnahmegebühr</dt>
          <dd>
            Die Aufnahmegebühr beträgt 30,00 €. Falls ein Vereins-T-Shirt gewünscht wird, beträgt
            die Gebühr 65,00 €.
          </dd>

          <dt>6. Juristische Personen</dt>
          <dd>
            Diese können ein Basispaket für 200,00 € buchen, welches eine Veröffentlichung auf der
            Webseite und Nachlässe für Events umfasst.
          </dd>

          <dt>7. Teilnahme an Vereinsveranstaltungen</dt>
          <dd>
            Mitglieder verpflichten sich, an Veranstaltungen oder Maßnahmen des Vereins freiwillig
            oder ehrenamtlich teilzunehmen.
          </dd>

          <dt>8. Änderungen der Beitragsordnung</dt>
          <dd>
            Diese Beitragsordnung kann vom Vorstand per Beschluss geändert werden und muss der
            nächsten Mitgliederversammlung vorgelegt werden.
          </dd>

          <dt>9. Gastbeitrag</dt>
          <dd>
            Der Gastbeitrag gilt für eine Trainingseinheit und kann nur bei geleiteten Trainings des
            Vereins genutzt werden.
          </dd>
        </dl>

        <p>Die Beitragsordnung tritt ab sofort in Kraft.</p>
      </article>
    </section>
  </main>
  <hr class="hr-footer" />
</template>

<style scoped>
p {
  font-size: 1.3rem;
}

h1 {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

h3,
h2 {
  margin: 1rem 0 1rem 1rem;
  font-size: 2rem;
  margin-left: 6rem;
}

/* ----------------------------------------------------------------------------- */

.container-öffnungszeiten {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}

.container-öffnungszeiten > article > p {
  margin-left: 6rem;
}

.container-zeiten > p {
  border-top: 2px solid;
  border-image: linear-gradient(to right, transparent, rgb(199, 159, 47), transparent) 1;
  padding: 10px 0; /* Abstand zum Text */
}

.container-zeiten p:nth-of-type(odd) {
  background-color: rgb(242, 242, 242);
}

/* ----------------------------------------------------------------------------- */

.trainer-container {
  margin-block: 2rem;
}

.pic-container {
  display: flex;
  margin-left: 6rem;
}

img {
  width: 150px;
  height: 170px;
  object-fit: contain;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
}

.trainer-pic {
  margin-right: 2rem;
}

/* ----------------------------------------------------------------------------- */

.Probetraining {
  margin-block: 2rem;
}

.Probetraining > article > p {
  line-height: 2rem;
  margin-inline: 6rem;
}

.Probetraining > article > h3 {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

.registration-link-text {
  font-weight: 1000;
  margin-top: 2rem;
}

.contact-link {
  color: red;
  text-decoration: underline;
}

/* ----------------------------------------------------------------------------- */

.Beitraggsordnung {
  margin-block: 2rem;
}

.Beitraggsordnung > article > h4 {
  margin-inline: 6rem;
  font-size: 1.3rem;
  margin-top: 1rem;
}

.Beitraggsordnung > article > p {
  margin-left: 6rem;
  margin-top: 1rem;
}

ul > li {
  list-style: initial;
  margin-left: 1.5rem;
}

dl {
  margin-left: 6rem;
  font-size: 1.3rem;
}

dt {
  font-weight: bold; /* Überschrift fett machen */
  margin-top: 1rem;
  font-size: 1.3rem;
}

dd {
  margin-left: 1.5rem; /* Einrücken, damit es optisch klarer ist */
  list-style: initial; /* Falls `dd` wie eine Liste aussehen soll */
  font-size: 1.1rem;
  margin-top: 0.8rem;
}

/* ----------------------------------------------------------------------------- */

.hr-styler {
  border: none; /* Standardlinie entfernen */
  height: 2px; /* Höhe der Linie */
  background: linear-gradient(to right, transparent, rgb(199, 159, 47), transparent);
}

.hr-footer {
  border: 5px solid rgb(199, 159, 47);
  margin-top: 2rem;
  margin-bottom: 2px;
}

/* @media (min-width: 1024px) {
  .verein {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
