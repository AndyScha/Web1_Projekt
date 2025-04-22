# Webprojekt 2025 - Meilenstein 1

## Übersicht
Dies ist der **erste Meilenstein** eines Projekts im Rahmen der **Web1-Prüfung** im **SOSE 2025**. Ziel des Projekts ist es, einen **Klick-Prototyp** einer Web-Anwendung zu erstellen, die eine **Landing-Page**, eine **Start-Seite**, ein **Impressum**, und eine **User-Management-Seite** umfasst.

Das Projekt wurde unter Verwendung von **HTML**, **CSS (Tailwind CSS)** und **JavaScript** erstellt und ist **responsiv**, d. h. es funktioniert sowohl auf Desktop- als auch auf mobilen Geräten.

## Anforderungen
- **Landing-Page** mit Login und Registrierung
- **Start-Seite** mit Begrüßungstext und Links zum User Management
- **Impressum-Seite** mit rechtlichen Angaben
- **User-Management-Seite** mit der Möglichkeit, einen Benutzer hinzuzufügen und zu verwalten
- **Navigationsleiste** mit Links zu den einzelnen Seiten
- **Responsive Design** für Desktop und mobile Geräte
- **Automatisierte Tests**: Alle relevanten Seiten und Buttons müssen **IDs** enthalten, um die Funktionalität zu testen

## Projektstruktur
/Web1Projekt
│
├── /public
│   ├── /assets
│   │   ├── /pictures           # Bilder (z. B. Logo, etc.)
│   │   ├── /video              # Videos
│   ├── /index.html             # Landing-Page
│   ├── /start.html             # Start-Seite nach dem Login
│   ├── /impressum.html         # Impressum-Seite
│   ├── /user-management.html  # User-Management-Seite
│   ├── /registrierung.html     # Registrierung-Seite
│   └── /style.css              # Styling für die Seiten
│
├── /node_modules               # Node.js Module (z. B. für Tailwind CSS)
│
├── .gitignore                  # Gitignore-Datei
├── package.json                # NPM-Pakete und Skripte
└── README.md                   # Projektbeschreibung

## Funktionsweise

### Landing-Page (`index.html`):
- **Top-Menü** mit einem Logo und Navigationslinks
- **Login-Formular** zur Anmeldung
- **Registrierungs-Button**, der zur Registrierungs-Seite führt
- **Responsives Design** für Desktop und Mobilgeräte

### Start-Seite (`start.html`):
- **Begrüßungstext**: Zeigt den Namen des Benutzers und die Matrikelnummer
- **Links zum User Management** und **Impressum**
- **Logout-Button**, der den Benutzer zurück zur Landing-Page führt
- **Responsives Design**

### Impressum-Seite (`impressum.html`):
- **Angaben gemäß § 5 TMG** mit Adresse und Kontakt
- **Haftungsausschluss und Verlinkungen** zu externen Webseiten
- **Responsives Design**

### User-Management-Seite (`user-management.html`):
- **Tabelle** mit einem Admin-User und der Möglichkeit, Benutzer hinzuzufügen
- **Bearbeiten** und **Löschen** Buttons (nur designtechnisch, ohne funktionale Implementierung)
- **Responsive Tabelle** zur Anzeige von Benutzerdaten

### Technologie-Stack:
- **HTML**: Struktur der Seiten
- **CSS**: Styling der Seiten mit **Tailwind CSS**
- **JavaScript**: Interaktive Funktionen wie Navigation und dynamische Inhalte
- **Responsive Design**: Alle Seiten sind auf **mobile Geräte** optimiert.

### Tailwind CSS:
Das Projekt nutzt **Tailwind CSS** für das Styling. Tailwind ermöglicht es, schnell und effizient Designs zu erstellen, die flexibel und anpassbar sind. Alle **UI-Komponenten** wie Buttons, Navigation und Formulare wurden mit **Tailwind** gestaltet.

### IDs für den automatisierten Test:
Alle wichtigen **Formulare**, **Buttons**, **Links** und **Tabellen** wurden mit **IDs** versehen, um den **automatisierten Test** zu ermöglichen. Diese IDs sind entscheidend, um sicherzustellen, dass die Funktionalität korrekt überprüft wird.

## Installation

### Voraussetzungen:
- **Node.js** und **npm** sollten auf deinem System installiert sein. Falls noch nicht geschehen, lade sie hier herunter:
  - [Node.js herunterladen](https://nodejs.org/)

### Schritte zur Installation:
1. Klone das Repository:
   ```bash
   git clone <URL des Repositories>
   cd Web1Projekt

2.	Installiere alle Abhängigkeiten:
    ```bash
    npm install

3. Baue das CSS mit Tailwind
    ```bash
    npm run build:css

4.Starte den Server:
    ```bash
    npm start

5.Öffne deinen Browser und gehe zu http://localhost:80, um die Anwendung zu testen.

Testen

Stelle sicher, dass alle Seiten die richtigen IDs für den automatisierten Test enthalten. Dies wird durch den Test-Skript überprüft, der sicherstellt, dass die Navigationslinks und Interaktionen korrekt funktionieren.

Automatisierte Tests:

Die IDs, die im HTML verwendet werden, ermöglichen es, sicherzustellen, dass die Benutzeroberfläche und die Interaktionen gemäß den Anforderungen der Übung funktionieren.

Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz - siehe die LICENSE Datei für Details.
