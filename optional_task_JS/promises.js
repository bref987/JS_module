function addWithDelay(...args) {
  let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      args.length == args.filter(a => a >= 0).length ?
      resolve(args.reduce((a, b) => a + b)) :
      reject("Error! Some parameter is a negative number!");
    }, 1000);
  });
  return promise;
}

addWithDelay(1, 2, 3, 40, 0)
  .then(result => console.log(result),
        error => console.error(error));
