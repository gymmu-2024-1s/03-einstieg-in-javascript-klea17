const input = "einfach nur text..."
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
  }
  console.log(position)
}

console.log(position)
