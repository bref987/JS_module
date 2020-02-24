function mult_three_gratest_values() {
  let array = [];
  let array_length = 10;
  let random_number_range = 11;
  let mult_values;

  for (let i = 0; i < array_length; i++) {
    array.push(Math.floor(Math.random() * random_number_range));
  }

  array.sort((a, b) => b - a);

  mult_values = array.slice(0, 3).reduce((a, b) => a * b);

  return mult_values;
}

mult_three_gratest_values();
