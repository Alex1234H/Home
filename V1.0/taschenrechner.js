const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg-anzeige";
const RECHNEN_BUTTON_ID = "rechnen-button";
const TASTE_KLASSE = "taste";
const FEHLER_KLASSE = "fehler";

const LEERZEICHEN_ERFORDERLICH_REGEX = /(\d|\))\s*(\+|\-|\*|\/)\s*/g;
const GUELTIGE_EINGABE_REGEX = /^[\d .,\(\)\+\-\*\/]*$/;

const anzeige = document.getElementById(ANZEIGE_ID);
const eingabefeld = document.getElementById(EINGABEFELD_ID);
const rechenwegAnzeige = document.getElementById(RECHENWEG_ANZEIGE_ID);
const rechnenButton = document.getElementById(RECHNEN_BUTTON_ID);
const tasten = document.getElementsByClassName(TASTE_KLASSE);

const formatierer = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 15,
  useGrouping: false,
});

let aktuelleEingabe = "";

// Die Liste der Tasten durchgehen
for (const taste of tasten) {
  // Jeder Taste sagen, was passieren soll, wenn man auf sie klickt
  taste.addEventListener("click", function (ereignis) {
    // 1. Rechenweg-Anzeige leeren
    rechenwegAnzeige.textContent = "";

    // 2. Herausfinden, welches Zeichen auf der angeklickten Taste abgebildet ist
    const angeklicktesZeichen = ereignis.target.textContent;
	

    // Je nach angeklickter Taste unterschiedliche Dinge tun
    switch (angeklicktesZeichen) {
		case "Riesling - 0,2":
		eingabefeld.value = eingabefeld.value + "3";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Grauer Burgunder - 0,2":
		eingabefeld.value = eingabefeld.value + "3";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cabernet Blanc - 0,2":
		eingabefeld.value = eingabefeld.value + "5";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cuvée No4 - 0,2":
		eingabefeld.value = eingabefeld.value + "4";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Chardonnay - 0,2":
		eingabefeld.value = eingabefeld.value + "4,50";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Silvaner - 0,2":
		eingabefeld.value = eingabefeld.value + "3,50";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "PFAND":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Traubensaft":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Wasser":
		eingabefeld.value = eingabefeld.value + "2,50";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Spätburgunder - 0,2":
		eingabefeld.value = eingabefeld.value + "4";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Karlswein - 0,2":
		eingabefeld.value = eingabefeld.value + "4";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Pinot Noir - 0,2":
		eingabefeld.value = eingabefeld.value + "4";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		// 0,1
		case "Riesling - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Grauer Burgunder - 0,1":
		eingabefeld.value = eingabefeld.value + "2,50";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cabernet Blanc - 0,1":
		eingabefeld.value = eingabefeld.value + "2,50";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cuvée No4 - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Chardonnay - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Silvaner - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
			
		case "Spätburgunder - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Karlswein - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Pinot Noir - 0,1":
		eingabefeld.value = eingabefeld.value + "2";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		//Flaschen
		case "Riesling":
		eingabefeld.value = eingabefeld.value + "12";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Grauer Burgunder":
		eingabefeld.value = eingabefeld.value + "12";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cabernet Blanc":
		eingabefeld.value = eingabefeld.value + "15";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Cuvée No4":
		eingabefeld.value = eingabefeld.value + "16";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Chardonnay":
		eingabefeld.value = eingabefeld.value + "15";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Silvaner":
		eingabefeld.value = eingabefeld.value + "17";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Spätburgunder":
		eingabefeld.value = eingabefeld.value + "16";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Karlswein":
		eingabefeld.value = eingabefeld.value + "15";
		aktuelleEingabe = eingabefeld.value;
		break;
		
		case "Pinot Noir":
		eingabefeld.value = eingabefeld.value + "16";
		aktuelleEingabe = eingabefeld.value;
		break;
		
      case "ENTF":
        // Das letzte Zeichen aus dem Eingabefeld entfernen
        eingabefeld.value = eingabefeld.value.trimEnd().slice(0, -1).trimEnd();

        // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
        aktuelleEingabe = eingabefeld.value;
        break;

      case "AC":
        // Das gesamte Eingabefeld leeren
        eingabefeld.value = "";
        aktuelleEingabe = "";
        break;

      case "=":
        try {
          // Das Ergebnis der eingegeben Rechnung ermitteln
          const ergebnis = new Function("return " + eingabefeld.value.replaceAll(",", "."))();

          // Das Ergebnis formatieren und in das Eingabefeld schreiben
          eingabefeld.value = formatierer.format(ergebnis);

          // Die Rechnung, die zum Ergebnis geführt hat, in das Rechenweg-Feld schreiben
          rechenwegAnzeige.textContent = aktuelleEingabe;

          // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
          aktuelleEingabe = eingabefeld.value;

          // Fehlerklasse von der Rechenweg-Anzeige nehmen
          rechenwegAnzeige.classList.remove(FEHLER_KLASSE);
        } catch {
          // Fehlermeldung in die Rechenweg-Anzeige schreiben
          rechenwegAnzeige.textContent = "Ungültige Eingabe!";
          rechenwegAnzeige.classList.add(FEHLER_KLASSE);
        }

        break;

      default:
        // Das Zeichen der angeklickten Taste an die Eingabe anhängen
        eingabefeld.value += angeklicktesZeichen;

        // Die Operatoren mit Leerzeichen umschließen
        eingabefeld.value = eingabefeld.value.replaceAll(LEERZEICHEN_ERFORDERLICH_REGEX, "$1 $2 ");

        // Wert der aktuelleEingabe-Variablen aktualisieren
        aktuelleEingabe = eingabefeld.value;
        break;
    }
  });
}

eingabefeld.addEventListener("input", function (ereignis) {
  // 1. Prüfen, ob es sich um eine gültige Eingabe handelt
  if (GUELTIGE_EINGABE_REGEX.test(eingabefeld.value)) {
    // Wert der aktuelleEingabe-Variablen aktualisiern
    aktuelleEingabe = eingabefeld.value;
  } else {
    // Ungültige Eingabe -> Eingabe ablehnen!
    eingabefeld.value = aktuelleEingabe;
  }
});

eingabefeld.addEventListener("keydown", function (ereignis) {
  // Wurde die Enter-Taste gedrückt?
  if (ereignis.key === "Enter") {
    // Das tun, was auch beim Klick auf die = Taste geschieht
    rechnenButton.click();
  }
});	
