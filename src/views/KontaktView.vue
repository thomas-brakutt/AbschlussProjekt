<template>
  <header>
    <h1>Kontakt</h1>
  </header>
  <main class="main-container">
    <div class="div-container">
      <form @submit.prevent="submitForm" class="contact-form">
        <label for="firstName">Vorname</label>
        <input type="text" id="firstName" v-model="form.firstName" required />

        <label for="lastName">Nachname</label>
        <input type="text" id="lastName" v-model="form.lastName" required />

        <label for="email">E-Mail-Adresse</label>
        <input type="email" id="email" v-model="form.email" required />

        <label for="subject:">Betreff</label>
        <input type="text" id="subject" v-model="form.subject" required />

        <label for="message:">Nachricht</label>
        <textarea class="message-input" id="message" v-model="form.message" required></textarea>

        <button type="submit">Absenden</button>
      </form>
    </div>
    <div class="adress-div">
      <h2>B & A Archery-Club e.V.</h2>
      <address>
        <p>
          Musterweg 12 / Halle 3 Eingang A, <br />
          1. OG, 12345 Musterhausen
        </p>
      </address>
      <hr class="hr-address" />
      <address>
        <p>Telefon: <a href="tel: 01234567890">0123-4567890</a></p>
        <p>Email: <a href="mailto:info@b&a-archery-club.de">info@b&a-archery-club.de</a></p>
      </address>
    </div>
  </main>
  <footer>
    <hr class="hr-footer" />
    <!-- für den gelben Style unten  -->
  </footer>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  methods: {
    submitForm() {
      console.log('Formulardaten:', this.form)
      alert('Formular erfolgreich gesendet!')
      // Hier könnte z. B. eine API-Anfrage gesendet werden

      // Formulardaten zurücksetzen
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      }
    },
  },
}
</script>

<style scoped>
h1 {
  background-color: rgb(199, 159, 47);
  padding-block: 1.2rem;
  text-align: center;
}

.main-container {
  display: flex;
  justify-content: space-around;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  font-size: 1.3rem;
}

label {
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}

label::after {
  content: ' *';
  color: red;
}

input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 2.5rem;
  font-size: 1.3rem;
}

.message-input {
  width: 700px;
  height: 200px;
  font-size: 1.3rem;
  resize: vertical;
  padding: 10px;
}

button {
  margin-block: 10px;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

button:hover {
  background-color: rgba(255, 0, 0, 0.501);
}

.adress-div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid;
  height: max-content;
  margin-top: 1.5rem;
  padding: 1rem;
}

.adress-div > address > p {
  font-size: 1.3rem;
  line-height: 2rem;
}

.hr-address {
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
  .kontakt {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
