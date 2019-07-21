function f(power) {
  let result =  Math.pow(10, power) - Math.pow(9, power)
  return result
}

function g({ headNumber, power }) {
  let count = 0

  if (headNumber === 7) { count += 1 }

  for (let i = 1; i <= headNumber; i++) {
    if (i === 8) {
      count += Math.pow(10, power)
    } else if (i > 8) {
      count += f(power)
    } else {
      count += f(power)
    }
  }

  return count
}

function containingSevens(endNumber) {
  const stringLength = String(endNumber).length

  let count = 0

  let has7InFront = false

  String(endNumber).split('').forEach((str, i) => {
    const headNumber = Number(str)
    const power = stringLength - i - 1

    if (!has7InFront) {
      count += g({ headNumber, power })
    } else {
      count += headNumber * Math.pow(10, power)
    }

    if (headNumber === 7) {
      has7InFront = true
    }
  })

  return count
}

console.log(containingSevens(9123) === 3189)
console.log(containingSevens(7070701) === 3350615)
console.log(containingSevens(919391) === 434290)
console.log(containingSevens(8177979) === 4352917)
console.log(containingSevens(717917) === 304575)
console.log(containingSevens(712387) === 299045)

// console.log(containingSevens(72841231312313132313)) // perf test case
