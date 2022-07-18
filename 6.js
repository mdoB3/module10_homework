const sameElementsArray = [12, 12, 12, 12];
const diffElArray = [12, 1, 234, 5];

const checkIfAllValuesAreSameInArray = (array) => {
    if(array.length) {
      return new Set(array).size === 1 ? true : false;
    }
}
console.log(checkIfAllValuesAreSameInArray(sameElementsArray), checkIfAllValuesAreSameInArray(diffElArray))
