# Basic idea for the o(logn) solution

1. first define a function f(n), which n is the power of 10, outputing the 7s in that range

```javascript
// Ex:
f(1) = 1 // containingSevens(10)
f(2) = f(1) * 9 + 10^(1) // containingSevens(100)
f(3) = f(2) * 9 + 10^(2) // containingSevens(1000)
```

2. but still, f(n) can be optimize into a o(1) function (took me 2hrs)

```javascript
f(n) = 10^n - 9^n
```

the idea is that all the numbers inside 1000(or 000 to 999), is the combination of [0~6, 8, 9] * [0~6, 8, 9] * [0~6, 8, 9]

minus all numbers in that range (000 ~ 999) is the result that contains 7

3. reprogram containingSevens(97531) to be something like

```javascript
function containingSevens(97531) {
  return 9*f(4) + 7*f(3) + ...
}
```

still, there's some cases that if a number starts with 7, the remaining range would all be 7s

function g() is for extracting this logic, the input should be 90000, 7000, 500, 30, 1
