# B & A Archery Club – Fiktive Vereinswebsite

**Abschlussprojekt | Vue 3 · JavaScript · CSS · Vite**

> **Hinweis:** Dies ist eine fiktive Vereinswebsite, die ich als Abschlussprojekt entwickelt habe. Der „B & A Archery Club“ existiert nicht. Vereins-, Kontakt-, Register- und Steuerangaben sowie Termine sind ausschließlich Beispielinhalte. Das Kontaktformular ist eine Demo: Es werden **keine Nachrichten verschickt oder dauerhaft gespeichert**.

## Über das Projekt

Für mein Abschlussprojekt habe ich eine mehrseitige Website für einen erfundenen Bogensportverein mit **Vue 3** umgesetzt.

Im Mittelpunkt standen die Arbeit mit wiederverwendbaren Komponenten, die Navigation über Vue Router und die Gestaltung einer übersichtlichen Benutzeroberfläche.

Nach dem ursprünglichen Projektabschluss habe ich die Anwendung weiter überarbeitet, insbesondere im Hinblick auf **Responsive Design**, Bedienbarkeit und die Darstellung der Bilder.

## Funktionen

- **Mehrseitige Navigation:** Startseite, Über uns, Aktuelles, Verein, Bilder, Kontakt und Impressum
- **Responsive Layouts:** Anpassungen für Smartphone, Tablet und Desktop
- **Mobiles Navigationsmenü:** Auf- und zuklappbar, mit automatischem Schließen nach der Auswahl eines Menüpunkts
- **Vereinsinformationen:** Trainingszeiten, Trainerteam, Probetraining und Beitragsordnung als fiktive Beispielinhalte
- **Bildergalerie:** Indoor-, Wettkampf- und Outdoor-Bilder mit vergrößerbarer Ansicht (Lightbox)
- **Demo-Kontaktformular:** Formularvalidierung im Browser und transparente Rückmeldung, ohne tatsächlichen Versand
- **Wiederverwendbare Komponenten:** Unter anderem für Header, Navigation und Footer

## Verwendete Technologien

| Technologie       | Verwendung                                  |
| ----------------- | ------------------------------------------- |
| Vue 3             | Komponenten und Benutzeroberfläche          |
| JavaScript        | Interaktion und Formularlogik               |
| HTML & CSS        | Struktur, Gestaltung und responsive Layouts |
| Vue Router        | Navigation zwischen Seiten                  |
| Vue Easy Lightbox | Vergrößerte Ansicht der Galeriebilder       |
| Vite              | Entwicklungsserver und Produktions-Build    |
| ESLint & Prettier | Codeprüfung und Formatierung                |

_Pinia ist im Projekt eingerichtet, spielt für die derzeitigen Funktionen aber keine wesentliche Rolle._

## Lokal starten

**Voraussetzung:** Node.js und npm sind installiert.

```bash
git clone https://github.com/thomas-brakutt/AbschlussProjekt.git
cd AbschlussProjekt
npm install
npm run dev
```

Die lokale URL wird anschließend im Terminal angezeigt.

### Produktions-Build testen

```bash
npm run build
npm run preview
```

Der Produktions-Build und die Vorschau wurden nach den Überarbeitungen lokal getestet.

Eine automatisierte Testsuite ist derzeit nicht eingerichtet.

## Projektstruktur

```text
src/
├── assets/       # Bilder, Schriftdateien und globale Styles
├── components/   # Wiederverwendbare Vue-Komponenten
├── router/       # Definition der Anwendungsrouten
├── views/        # Einzelne Seitenansichten
├── App.vue       # Hauptkomponente
└── main.js       # Einstiegspunkt der Anwendung
```

## Überarbeitung und Projektstand

Nach der ursprünglichen Entwicklung habe ich folgende Verbesserungen vorgenommen:

- Responsive Gestaltung der Navigation und der Seitenlayouts
- Verbesserte Bedienbarkeit des mobilen Navigationsmenüs
- Kennzeichnung des Kontaktformulars als Demo ohne Nachrichtenversand
- Austausch ausgewählter Galeriebilder
- Korrektur der Bildimporte für den Vite-Produktions-Build
- Prüfung der wichtigsten Seiten auf unterschiedlichen Bildschirmgrößen

### Projektstatus

Das Abschlussprojekt ist als demonstratives Portfolio-Projekt aufbereitet.

Es handelt sich **nicht um eine produktiv betriebene Vereinswebsite**.

Weitere Verbesserungen, etwa zusätzliche automatisierte Tests und eine vertiefte Barrierefreiheitsprüfung, sind möglich.

## Autor

Entwickelt von [Thomas Brakutt](https://github.com/thomas-brakutt) im Rahmen eines Abschlussprojekts.
