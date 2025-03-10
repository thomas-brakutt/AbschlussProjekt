<template>
  <div class="container">
    <h1>Bogenschießen in gemütlicher Atmosphäre</h1>

    <h2>
      Herzlich willkommen beim <span>"Bow & Arrow Archery Club"</span>!
      <br />
      Bogenschießverein steht allen offen, ob Einsteiger oder ambitionierter Schütze.
    </h2>

    <div class="listContainer">
      <h4>Wir bieten:</h4>
      <ul>
        <li>regelmäßiges Training und Fachsimpeln mit Gleichgesinnten</li>
        <li>Einführungsstunden oder Kurse (individuell oder in der Gruppe)</li>
        <li>Veranstaltungen wie Firmenevents oder Geburtstage</li>
      </ul>
    </div>
    <RouterLink to="/kontakt">
      <button>Komm uns besuchen</button>
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  background-image: url('/src/assets/pictures/Bogen_und_Pfeil.jpg'); /* Stelle sicher, dass der Pfad korrekt ist */
  background-size: cover; /* Bild füllt den gesamten Body */
  background-position: center; /* Bild bleibt zentriert */
  background-repeat: no-repeat; /* Kein wiederholtes Bild */
  margin: 0; /* Entfernt Standard-Margin, um weiße Ränder zu vermeiden */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: red;
  font-size: 4rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
}

h2 {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  font-weight: normal; /* Setzt die Schrift auf normal (nicht fett) */
  line-height: 1.5; /* Erhöht den Zeilenabstand */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
}

h4 {
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
  justify-items: flex-start;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
}

span {
  font-weight: 700;
}

ul {
  list-style-type: disc; /* Setzt standardmäßig Punkte */
  margin-left: 1.5rem; /* Optional, damit die Liste eingerückt wird */
  color: white;
  font-size: 1.5rem;
  font-weight: normal;
}

li {
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
}

button {
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin-block: 2rem;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.954); /* Schatten nur rechts und unten */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
}

button:hover {
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3); /* Schatten bei Hover-Effekt */
  background-color: rgba(255, 0, 0, 0.501);
}

.listContainer {
  margin-top: 6rem;
}
</style>
