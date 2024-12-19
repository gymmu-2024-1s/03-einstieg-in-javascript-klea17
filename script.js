import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "a") {
      // do nothing
    } else if (currentElement === "i") {
      // auch i ignorieren
    } else {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseLetter = currentElement.toUpperCase()
    result.push(upperCaseLetter)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //überprüfe ob mindestens ein Großbuchstabe vorhanden ist.
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0 // Zähler, der die Anzahl der gefundenen "e" und "E" speichert.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Überprüft, ob das aktuelle Element "e" ist (kleingeschrieben).
    if (currentElement === "e") {
      count = count + 1 // Zähler wird um 1 erhöht.
    } else if (currentElement === "e") {
      count = count + 1
      // Überprüft, ob das aktuelle Element "E" ist (großgeschrieben).
    } else if (currentElement === "E") {
      count++
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe08(args) {
  const input = args
  const result = []
  // Schleife durchläuft jedes Zeichen der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      // hänge jetzt eine 3 an
      result.push("3")
    } else {
      //sonst hänge das ürsprüngliche Zeichen einfach an
      result.push(currentElement)
    }
  }
  // Hier wandelt es das Ergebnis in eine Zeichenkette um und gibt es zurück.
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe12(args) {
  const input = args
  const result = []
  let position = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Überprüft, ob das aktuelle Zeichen "e" oder "E" ist.
    if (currentElement === "e") {
      position = i // Speichert die Position des gefundenen "e".
      break // Bricht die Schleife ab, da die erste Übereinstimmung gefunden wurde.
    } else if (currentElement === "E") {
      position = i
      break
      // Mit break wird die Schleife beendet,damit es nicht weiter gesucht wird.
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe22(args) {
  const input = args
  const result = []

  let foundK = false // das anzeigt, ob ein "k" gefunden wurde.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn das K noch nicht gefunden wurde, hànge unterstriche an result an
    if (foundK === false) {
      result.push("_")
    } else {
      result.push(currentElement)
    }

    // Wenn das aktuelle Zeichen ein K ist, setze foundK auf true
    if (currentElement === "k") {
      foundK = true // das anzeigt, dass ein "k" gefunden wurde
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe13(args) {
  const input = args
  const result = []
  let position = -1 // Startet die Position mit -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      position = i
    } else if (currentElement === "E") {
      position = i // Speichert die aktuelle Position von "E".
    }
  }

  return position // Gibt die Position des letzten "e" oder "E" zurück.
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe16(args) {
  const input = args
  const result1 = [] // Speichert die Zeichen links vom ersten "$".
  const result2 = [] // Speichert auch, aber die Zeichen rechts von dem
  let dollarFound = false // Das anzeigt, ob das Zeichen "$" gefunden wurde.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (dollarFound === false) {
      result1.push(currentElement) // alle Zeichen vor "$" werden in `result1` gespeichert.
    } else {
      result2.push(currentElement)
    }
    // Wenn das aktuelle Zeichen ein "$" ist, wird das Wort `dollarFound` auf `true`gesetzt
    if (currentElement === "$") {
      dollarFound = true
    }
  }
  return [result1.join(""), result2.join("")]
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // überprüft ob nach jedem `.` ein Leerschlag kommt.
    if (currentElement === ".") {
      // Überprüft, ob das nächste Zeichen ein Leerzeichen ist.
      if (input[i + 1] === " ") {
        return true
      }
      return false // Gibt `false` zurück, wenn es kein Leerzeichen nach dem Punkt findet.
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    // Fügt das aktuelle Zeichen am Ende des Strings hinzu.
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false // das anzeigt, ob ein Sonderzeichen gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) // Gibt den ASCII-Wert vom Zeichen an.
    // Überprüft, ob der Wert zwischen 33 und 47 liegt .
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true
    }
  }
  // Gibt `true` zurück, wenn ein Sonderzeichen gefunden wurde, sonst gibt es `false`zurück.
  return hasSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      // Überprüft, ob das nächstes Zeichen 'n' ist.
      if (input[i + 1] === "n") {
        if (input[i + 2] === "d") {
          return true // Gibt `true` zurück, wenn es "und" findet.
        }
      }
    }
  }
  // Gibt `false` zurück, wenn es nicht gefunden wurde.
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe04(args) {
  const input = args
  const result = []

  // Wir filtern die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Wenn das Zeichen eine Großbuchstabe  oder Kleinbuchstabe oder ein Leerzeichen ist, fügen wir es in `result` ein.
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt müssen wir sicher sein, dass es keine andere Leerzeichen in `result` drin gibt.
  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    // Wenn das aktuelle Zeichen ein Leerzeichen ist und das nächste Zeichen ebenfalls ein Leerzeichen ist, überspringen wir das aktuelle Zeichen.
    if (currentElement === " " && nextElement === " ") {
      // Hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  // Jetzt zählen wir die Wörter und die Leerzeichen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    // Wenn das aktuelle Zeichen ein Leerzeichen ist, machen wir den Zähler grösser.
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein wort mehr wie Leerzeichen gibt, geben wie Leerzeichen +1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe18(args) {
  const input = args
  //Wir können die Aufgabe 17 verwenden um eine Liste zu bekommen
  const nameAndAge = aufgabe17(input)

  //Wir generieren unsere Ausgabeliste
  const result = []

  //Hier schreiben wir ganze Wörte in die Liste, auch das ist möglich
  result.push("Sie heissen")

  //Hier setzen wir die Liste so, dass der Name und das Alter an der // richtigen Stelle eingefügt werden
  result.push(nameAndAge[0])
  result.push("und sind")
  result.push(nameAndAge[1])
  result.push("Jahre alt")

  //Wie immer geben wir das Resultat als Text zurück
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe23(args) {
  const input = args
  const result = []

  // Das erste Element von `input` wird in `firstElement`gespeichert.
  const firstElement = input[0]

  // Hängt das erste Element an "result" an
  result.push(firstElement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Fügt das Zeichen an "result" an
    result.push(currentElement)
  }

  // Hängt das erste Element von "result" an
  result.push(firstElement)
  // Gibt das "result" zurück,fügt alle Elemente von `result` zusammen.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn das aktuelle Zeichen das erste Zeichen  ist, füge das letzte Zeichen an.
    if (i === 0) {
      result.push(input[input.length - 1])
      // Sonst wenn das aktuelle Zeichen das letzte Zeichen (i === input.length - 1) ist, füge das erste Zeichen an.
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Hier wirds überprüft, ob die Länge der Eingabe gerade ist
  if (input.length % 2 === 0) {
    // Es berechnet den Index der beiden mittleren Zeichen
    const middleIndex = Math.floor(input.length / 2) - 1
    const middlePlusOneIndex = middleIndex + 1

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Wenn der Index des aktuellen Zeichens den beiden mittleren Zeichen entspricht, wird es übersprungen
      if (i === middleIndex || i === middlePlusOneIndex) {
      } else {
        result.push(currentElement)
      }
    }
  } else {
    // Es wird den Index des mittleren Zeichens bei ungerade Länge berechnet
    const middleIndex = Math.floor(input.length / 2)
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      // Falls der Index des momentanen Zeichens den mittleren Zeichen gleich ist, wird es übersprungen
      if (i === middleIndex) {
        // Überspringe das mittlere Element
      } else {
        result.push(currentElement) // Anderfalls, füge das Zeichen hinzu
      }
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []

  // Speichert das erste und das zweite Element der Eingabe in getrennte Variablen
  const firstElement = input[0]
  const secondElement = input[1]

  // Vergleicht die ASCII-Werte der beiden Elemente
  if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
    // Wenn der ASCII-Wert des ersten Elements größer ist, vertausche die beide
    result.push(secondElement)
    result.push(firstElement)
  } else {
    // Sonst füge die Elemente in der anfanglichen Reihenfolge hinzu
    result.push(firstElement)
    result.push(secondElement)
  }
  // Fügt den Rest der Elemente ab dem dritten Element hinzu
  for (let i = 2; i < input.length; i++) {
    const currentElement = input[i]

    result.push(currentElement) // Fügt jedes weitere Element zum Ergebnis hinzu
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe11(args) {
  const input = args

  //Erstellt eine Variable um den ASCII- Code zu speichern
  let asciiCode = null

  //Speichert den Code vom ersten Zeichen in der Variable
  asciiCode = input.charCodeAt(0)

  //Gibt den ASCII-Code zurück
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe09(args) {
  const input = args
  const result = []

  // Erstellt eine Zählvariable
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Erhöht den Zähler um 1 für jedes Element
    count = count + 1
  }
  // Wenn die Anzahl der Elemente 6 ist, gibt es "true" zurück
  if (count === 6) {
    return true
  }
  // Andernfalls gibt es "false" zurück
  return false
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

// export function aufgabe12(args) {
//   const input = args
//   const result = []
//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]

//     //Suche die Position des letzten `e`s in einem Text.

//     if (currentElement === "e") {
//       return i
//     }
//   }

//   return -1
// }
// linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)
//
export function aufgabe10(args) {
  const input = args
  const result = []

  //Testet , ob das erste Zeichen ein # ist
  if (input[0] === "#") {
    return false // Gibt `false` zurück, wenn das erste Zeichen kein `#` ist
  }

  // Testet,  ob die Eingabe genau 7 Zeichen lang ist.
  if (input.length !== 7) {
    // Gibt `false` zuruck, wenn die Eingabe nicht genau 7 Zeichen lang ist
    return false
  }

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i] // Holt das aktuelle Zeichen
    const ascii = currentElement.charCodeAt(0) // Holt den ASCII-Wert des Zeichens

    // Testet ob das Zeichen zwischen 48 und 57 ist
    if (ascii >= 48 && ascii <= 57) {
    } else {
      return false
    }

    // Testet ob ascii zwischen 65 und 70 ist
    if (ascii >= 65 && ascii <= 70) {
    } else {
      return false
    }
  }

  return true
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Erstellt eine Variable, um zu erkennen, ob ein Leerzeichen (" ") im String gefunden wurde.
  let leerzeichenErkannt = false

  for (let i = 0; i < input.length; i++) {
    // Speichert das aktuelle Zeichen in "currentElement".
    const currentElement = input[i]

    if (currentElement === " ") {
      // Wenn ein Leerzeichen gefunden wurde, setzt es die Variable "leerzeichenErkannt" auf "true".
      leerzeichenErkannt = true
    }
    // Fügt das Zeichen zu "result" hinzu, wenn bis dann kein Leerzeichen erkannt wurde.
    if (leerzeichenErkannt === false) {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe27(args) {
  const input = args
  const result = []
  // Überprüft, ob die Eingabe leer ist. Wenn ja, gibt die Funktion "false" zurück.
  if (input.length === 0) {
    return false
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Holt den ASCII-Wert des Zeichens
    const ascii = currentElement.charCodeAt(0)

    if (48 <= ascii && ascii <= 57) {
      // Testet ob das Zeichen zwischen 48 und 57 ist
      // Wenn das Zeichen eine Zahl ist, wird die Schleife fortgesetzt.
    } else {
      // Wenn ein nicht-Zahl Zeichen gefunden wird, gibt die Funktion "false" zurück.
      return false
    }
  }
  // Wenn die Schleife komplett durchgegangen wurde, gibt die Funktion "true" zurück
  return true
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function Insertionsort(args) {
  const text = args
  const list = text.split("") // Wandelt den Text in eine Liste um, um die Elemente zu sortieren.

  // Geht durch das Array, beginnent mit dem zweiten Element.
  for (let i = 1; i < list.length; i++) {
    const currentElement = list[i]
    let j = i - 1

    // Verwendet eine "for"-Schleife, um das aktuelle Element mit den sortierten Elementen zu vergleichen
    for (
      ;
      j >= 0 && list[j].charCodeAt(0) > currentElement.charCodeAt(0);
      j--
    ) {
      // Verschiebt das größere Element nach rechts
      list[j + 1] = list[j]
    }

    // Setzt das aktuelle Element an die richtige Stelle
    list[j + 1] = currentElement
  }

  // Fügt die sortierte Liste wieder zu einem String zusammen und gebt diese zurück
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=Insertionsort]", Insertionsort)

export function Selectionsort(args) {
  const text = args
  // Wandelt den Text in ein Array um, um mit den einzelnen Elementen arbeiten zu können.
  const list = text.split("")

  for (let i = 0; i < list.length - 1; i++) {
    // Setzt den Index des kleinsten Elements auf den aktuellen Index (i).
    let minIndex = i

    // Durchläuft den restlichen Teil des Arrays und sucht das kleinste Element.
    for (let j = i + 1; j < list.length; j++) {
      // Vergleicht das aktuelle Element mit dem bis jetzt kleinsten Element
      // Wenn das aktuelle Element kleiner ist, aktualisiert es minIndex.
      if (list[j].charCodeAt(0) < list[minIndex].charCodeAt(0)) {
        minIndex = j // Setzt den Index des kleineren Elements
      }
    }

    // Wenn minIndex nicht gleich i ist, bedeutet das, dass das kleinste Element nicht bereits an der Position i ist.
    // In diesem Fall tauschen wir das Element an Position i mit dem Element an Position minIndex.
    if (minIndex !== i) {
      const temp = list[i] // Speichert das Element an der aktuellen Position i.
      list[i] = list[minIndex] // Setzt das kleinste Element an die Position i.
      list[minIndex] = temp // Setzt das frühere kleinste Element an die Position minIndex.
    }
  }

  // Wandelt das Array nach der Sortierung wieder in einen String um und gibt diesen zurück.
  const result = list.join("")
  return result
}

linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Wenn wir auf ein Leerzeichen treffen, dann schreiben wir alles war wir bis// jetzt haben, in die totalList
    if (currentElement === " ") {
      totalList.push(currentList.join())
      currentList.lenght = 0
    } else {
      currentList.push(currentElement)
    }
  }
  //Wir schreiben alles was wir noch bis zum Ende gelesen haben, in die Liste
  totalList.push(currentList.join())

  return totalList
}

linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)
export function aufgabe19(args) {
  const input = args
  const result = [] // Leeres Array für das Ergebnis

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] // Aktuelles Zeichen

    // Verdoppelt das aktuelle Zeichen und fügt es zum Ergebnis-Array hinzu
    result.push(currentElement, currentElement)
  }

  // Gibt das Ergebnis als zusammengefügten String zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe14(args) {
  const input = args
  let count = 0 // Zähler für das Vorkommen von "e"

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++ // Erhöht den Zähler, wenn "e" gefunden wird
      if (count === 3) {
        return i // Gibt die Position des dritten "e" zurück
      }
    }
  }

  return -1 // Gibt -1 zurück, wenn weniger als 3 "e"s vorhanden sind
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)
