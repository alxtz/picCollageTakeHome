function containingSevens(endNumber) {
  let i = 1
  let count = 0

  while (true) {
    if (i > endNumber) {
      break
    } else {
      if (String(i).includes(7)) count++

      i++
    }
  }

  return count
}

console.log(containingSevens(9123))
console.log(containingSevens(7070701))
console.log(containingSevens(919391))
console.log(containingSevens(8177979))
console.log(containingSevens(717917))
console.log(containingSevens(712387))
