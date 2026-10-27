# B & A Archery Club – fiktive Vereinswebsite

**Abschlussprojekt · Vue 3 · JavaScript · CSS**

> **Hinweis:** Dies ist ein **fiktives Abschlussprojekt**, keine Website eines echten Vereins. Der „B & A Archery Club“, die Vereinsangaben, Termine und Kontaktdaten dienen ausschließlich der Demonstration. **Über das Kontaktformular werden keine Nachrichten verschickt.**

## Über das Projekt

Im Rahmen meines Abschlussprojekts habe ich eine Vereinswebsite für einen erfundenen Bogensportverein entwickelt. Ziel war es, eine mehrseitige Webanwendung mit **Vue 3** umzusetzen und dabei die Arbeit mit Komponenten, Routing und einer eigenständigen Benutzeroberfläche zu vertiefen.

Die Website stellt typische Bereiche einer Vereinspräsenz dar: Informationen über den Verein und das Training, Neuigkeiten, eine Bildergalerie und eine Kontaktseite.

## Funktionen

- Navigation zwischen Startseite, „Über uns“, „Aktuelles“, „Verein“, „Bilder“, „Kontakt“ und „Impressum“ mithilfe von Vue Router
- Wiederverwendbare Komponenten für Navigation, Header und Footer
- Vereinsinformationen, darunter Trainingszeiten, Trainerteam und Probetraining
- Bildergalerie mit vergrößerbarer Bildansicht (Lightbox)
- Mobiles Navigationsmenü als erster Schritt in Richtung Responsive Design
- **Kontaktformular als reine Demo:** Die Eingaben werden im Browser geprüft, aber nicht an einen Server gesendet oder dauerhaft gespeichert. Die derzeitige Erfolgsmeldung ist nur eine Simulation.

## Verwendete Technologien

- **Vue 3** – komponentenbasierte Benutzeroberfläche
- **JavaScript**, **HTML** und **CSS**
- **Vue Router** – Navigation zwischen den Ansichten
- **Vue Easy Lightbox** – vergrößerte Bildergalerie
- **Vite** – Entwicklungsserver und Build-Werkzeug
- **ESLint** und **Prettier** – Werkzeuge zur Codequalität und Formatierung

*Pinia ist im Projekt eingerichtet, wird für die bisher gezeigten Funktionen aber nicht wesentlich benötigt.*

## Lokal starten

**Voraussetzung:** Node.js und npm sind installiert.

```bash
git clone https://github.com/thomas-brakutt/AbschlussProjekt.git
cd AbschlussProjekt
npm install
npm run dev
```

Die lokale Adresse zeigt Vite nach dem Start im Terminal an.

Für einen Produktions-Build:

```bash
npm run build
npm run preview
```

## Projektstruktur

```text
src/
├── assets/       # Styles, Bilder und Schriftdateien
├── components/   # Wiederverwendbare UI-Bestandteile
├── router/       # Routen der Anwendung
├── views/        # Einzelne Seitenansichten
├── App.vue       # Wurzelkomponente
└── main.js       # Einstiegspunkt der Anwendung
```

## Aktueller Stand und nächste Schritte

Das Projekt befindet sich noch in der Überarbeitung. Insbesondere sind folgende Verbesserungen geplant:

- [ ] Layouts für Smartphone, Tablet und Desktop konsequent responsiv gestalten
- [ ] Bildpfade für den Produktions-Build überprüfen und gegebenenfalls korrigieren
- [ ] Das Kontaktformular auch in der Benutzeroberfläche eindeutig als Demo kennzeichnen
- [ ] Bedienbarkeit und Barrierefreiheit verbessern, insbesondere bei Navigation und Formular
- [ ] Anwendung auf verschiedenen Bildschirmgrößen und im Produktions-Build testen

## Autor

Entwickelt von [Thomas Brakutt](https://github.com/thomas-brakutt) als Abschlussprojekt.
