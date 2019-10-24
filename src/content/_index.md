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

<!-- ## hihi -->
