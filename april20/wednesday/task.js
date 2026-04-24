// Sort array without using .sort() (using forEach)

let array = [6, 4, 5, 3, 1, 2];
let ascending = [...array];

ascending.forEach(() => {
  ascending.forEach((num, index) => {
    if (index < ascending.length - 1) {
      if (ascending[index] > ascending[index + 1]) {
        let temp = ascending[index];
        ascending[index] = ascending[index + 1];
        ascending[index + 1] = temp;
      }
    }
  });
});

console.log("Ascending:", ascending);

let descending = [...array];

descending.forEach(() => {
  descending.forEach((num, index) => {
    if (index < descending.length - 1) {
      if (descending[index] < descending[index + 1]) {
        let temp = descending[index];
        descending[index] = descending[index + 1];
        descending[index + 1] = temp;
      }
    }
  });
});

console.log("Descending:", descending);