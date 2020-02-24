let happiness = {
  son: 1,
  tree: 2,
  house: 3,
  health: 4,
  money: 5,
}

function happiness_sort(obj) {
  let property_array = [];

  for (let el in obj) {
    property_array.push(el);
  }
  property_array.sort((a, b) => obj[b] - obj[a]);

  return property_array;
}

happiness_sort(happiness);
