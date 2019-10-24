# HTML

## Syntax

* Elemente mit Inhalt (z.B. Paragraph `<p>`)

```html
<tag attribut="wert">Inhalt</tag>
```

* Element ohne Inhalt (z.B. weicher Umbruch `<br />`)

```html
<tag attribut="wert" />
```

* Kommentar

`<!-- Dies ist ein Kommentar -->`

## Semantik

Syntax ist die Regel, wie wir HTML-Code schreiben. Semantik ist das Ziel, dass der Code für Menschen möglichst verständlich ist. Z.B. statt `<div id="xy">`, besser: `<header>`

## Grundgerüst

* Doctype: Welche HTML-Version früher kompliziert; heute nur noch: `<!DOCTYPE html>` (immer auf Zeile 1)
* Der Rest:

```html
<html>
  <head><!-- Hier Metadaten --></head>
  <body><!-- Hier Inhalt der Webseite --></body>
</html>
```

Weitere Themen, die wir angesprochen haben:

* Tipps&Tricks in Visual Studio Code (Editor)
* Inline- vs. Block-Elemente
* IDs, Class und Style Attribute

## Excercise #1

### Ziele

* HTML, CSS und JS (inkl. Animation) besser kennen zu lernen.
* Die Grundkenntnisse erarbeiten, um Online Werbemittel erstellen und anpassen zu können.

### Endergebnis

![](links/01_preview.png);

### Schritt 1: HTML Grundgerüst

#### Ziel

<a class="btn" href="links/01_dokument_ohne_styling.pdf">Vorschau</a>

#### Hilfestellung
Hier eine Starthilfe (zum Kopieren):

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Mein Dokumenten-Name</title>
</head>
<body>

    <main>

        <!-- TODO: Hier die restlichen HTML-Elemente einfügen.

        (Hilfe) Auswahl von Tags:
            'h1' bis 'h6'   -> Überschriften

            'p', 'br'       -> Absätze und weiche Umbrüche

            'ul', 'li'      -> Aufzählungen und Listenelemente

            'a'             -> Hyperlinks

            'div', 'span'   -> neutrale Elemente (Block und Inline)

            'img'           -> Bilder/Grafiken

            'strong', 'em'  -> Auszeichnungen

            'form', 'input', 'textarea', 'button'
                            -> Formular und -elemente

            'header', 'footer',  'main', 'article', 'aside', 'nav', 'section'
                            -> semantische Tags
        -->

        <form action="#">
            <input type="text" placeholder="Name" required>
            <textarea cols="30" rows="10" placeholder="Kommentar" required></textarea>
            <button>Absenden</button>
        </form>

    </main>

</body>
</html>
```

# CSS

## Syntax

* Selektor `{ Eigenschaft: Wert; }`

**Beispiel:**

```css
body {
  font-family: Helvetica;
  font-size: 12px;
}
```

* Kommentare werden mit `/* */` gemacht und können auch über mehrere Zeilen laufen

**Beispiel:**

```css
body {
  font-family: Helvetica;
  /* ich bin ein Kommentar */
}
```

## Selektoren

Die drei meist-verwendeten Selektoren sind:
* HTML-Element
* Class
* ID

**Beispiel HMTL-Element:**

```
// HTML
<p>Ich bin ein Paragraph in grüner Schrift</p>

// CSS
p {
  color: green;
}
```

**Beispiel Class:**

```
// HTML
<p class="special">Ich bin fett</p>
<p>Ich bin normal</p>

<ul>
  <li class="special">Ich bin auch fett</li>
</ul>

// CSS
.special {
  font-weight: bold;
}
```

**Beispiel ID:**

```
// HTML
<h1 id="warning">Ich bin wichtig und einzigartig! … und unterstrichen!</h1>

// CSS
#warning {
  text-decoration: underline;
}
```

## erweiterte Selektoren
* nebst einfachen Selektoren (HTML-Element, Class, ID), gibt es zahlreiche weitere Möglichkeiten mit Selektoren zu arbeiten. Wir haben die folgenden beiden Möglichkeiten besprochen.

**Liste von Selektoren (Komma-getrennt)**

```
p, .class {
  // hier einige CSS-Definitionen
}
```

dies entspricht demselben wie:

```
p {
  // hier einige CSS-Definitionen
}

.class {
  // hier nochmal dieselben CSS-Definitionen
}
```

Man kann also mehrere Selektoren zusammenfassen.

**Selektoren mit Kombinatoren: Nachfahrenselektoren (mit Wortabstand getrennt)**

```
div p {
  // diese CSS-Definitionen betreffen alle <p>-Elemente, die sich innerhalb eines <div>-Elements befinden
  // (muss nicht direkt sein!)
}
```

## Excercise #2

<a class="btn" href="downloads/exercise2/exercise2.zip">Download</a>

## Excercise #3

<a class="btn" href="downloads/exercise3/exercise3.zip">Download</a>

## Excercise #4

<a class="btn" href="downloads/exercise4/exercise4.zip">Download</a>


## Hexadezimale Farbdefinitionen

Habe noch ein gutes Video dazu gefunden: https://www.youtube.com/watch?v=GyXXkVZflnA

## CSS Einbinden

* Inline

```
<p style="color: green;">Dieser Text ist grün</p>
```

* Style-Tag

```
// im HTML-Dokument, innerhalb des <head>-Elements
<style>
p {
    color: green;
}
</style>
```

* Externes Stylesheet

```
// im HTML-Dokument, innerhalb des <head>-Elements
<link rel="stylesheet" href="pfad/zum/style.css">
```

## Shorthands

Gewisse CSS-Definitionen können verkürzt und auf verschiedene Weisen geschrieben werden:

```
// ausführlich
border-width: 1px;
border-style: solid;
border-color: #EFEFEF;


// Shorthand
border: 1px solid #EFEFEF;
```

## Verschachteln

* HTML Elemente können beliebig tief verschachtelt werden:

```
<div>
  <h1>Headline</h1>
  <p>Ein bisschen Text und hier noch etwas <em>kursives</em>.</p>
</div>
```

## Block und Inline Elemente (Refresh)

* die meisten Elemente sind Block-Elemente und verwenden die gesamte Breite, die sie kriegen können (z.B. div- oder p-Element).
* einige wenige Elemente sind Inline-Elemente (z.B. span- oder img-Elemente), die nur so viel Platz einnehmen, wie sie auch wirklich benötigen und somit horizontal Platz freilassen für andere inline Elemente.

## HTML als Baumstruktur

* Ein HTML kann man auch als Baumstruktur betrachten:

![](links/baum.png)

_(Screenshot ist direkt aus Visual Studio Code, wen’s interessiert, dem kann ich’s gerne mal zeigen, wo diese Darstellung zu finden ist)_

## Box Model
* Abstände werden meist mit margin oder padding geregelt:

### margin
Abstand vom Rahmen ( border ) nach Aussen.

### padding
Abstand vom Rahmen ( border ) nach Innen.

https://www.w3schools.com/css/css_boxmodel.asp

![](links/Box_Model.png)

# Visual Studio Code

## Plugins

Wir haben folgene Plugins installiert, um beim Arbeiten Zeit zu sparen.

* Live Server – https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
* Formatter – https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

Einfach melden, wenn ihr Fragen oder Probleme mit den Plugins habt.

## Nützliche Shortcuts

### Kommentar ein-/ausschalten (aktive Zeile(n))

**SHIFT + CMD + 7**

### Dokument formattieren

**SHIFT + ALT + F**

### aktive Stelle formattieren

**CMD + K**, dann **CMD + F**
