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
  return /[A-Z]/.test(args) //üperfrüfe ob mindestens ein Großbuchstabe vorhanden ist.
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "e") {
      count = count + 1
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
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //wenn das aktuelle Zeichen ein e ist
    if (currentElement === "e") {
      // hànge jetzt eine 3 an
      result.push("3")
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe12(args) {
  const input = args
  const result = []
  let position = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      position = i
      break
    } else if (currentElement === "E") {
      position = i
      break
      //mit break habe ich die Schleife gebrochen, damit man nicht weiter sucht//
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe22(args) {
  const input = args
  const result = []

  let foundK = false

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
      foundK = true
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe13(args) {
  const input = args
  const result = []
  let position = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      position = i
    } else if (currentElement === "E") {
      position = i
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe16(args) {
  const text = args
  let switchFirst = true
  const listFirst = []
  const listSecond = []
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "$") {
      switchFirst = false
    } else {
      if (switchFirst === true) {
        listFirst.push(text[i])
      } else {
        listSecond.push(text[i])
      }
    }
  }
  return [listFirst.join(""), listSecond.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe20(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Prüfen Sie ob nach jedem `.` ein Leerschlag kommt.
    if (currentElement === ".") {
      if (input[i + 1] === " ") {
        return true
      }
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    // Kehren Sie die Eingabe um.
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true
    }
  }
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
      if (input[i + 1] === "n") {
        if (input[i + 2] === "d") {
          return true
        }
      }
    }
  }
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
    if (ascii >= 65 && ascii <= 90) {
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      result.push(currentElement)
    } else if (ascii === 32) {
      result.push(currentElement)
    }
  }
  // Jetzt könnten wir noch mehrere Leerzeichen am Stück haben, die müssen wir noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // hier sind 2 Leerzeichen hintereinander, wir ignorieren das erste
    } else {
      result2.push(currentElement)
    }
  }
  // jetzt können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // da es ein wort mehr wie leerzeichen gibt, geben wie leerzeichen +1 zurück
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

  //Hier setze ich die Liste so, dass der Name und das Alter an der // richtigen Stelle eingefügt werden
  result.push(nameAndAge[0])
  result.push("und sind")
  result.push(nameAndAge[1])
  result.push("Jahre alt")

  //Wie immer gebe ich das Resultat als Text zurück
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe23(args) {
  const input = args
  const result = []
  // erstelle mir eine neue variable die das erste zeichen von input speichert
  const firstElement = input[0]

  // hänge das erste element an result an
  result.push(firstElement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // hange das current element an result an
    result.push(currentElement)
  }

  // hänge das erste element nochmals ganz hinten an result an¨
  result.push(firstElement)

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)
