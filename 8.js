const fruits = new Map([ ["apple", "green"], ["strawberry", "red"],["blueberry",    "blue"]]);

fruits.forEach(function (value, key, map) {
  console.log(`Key: ${key}. Value: ${value}`)
})
