 
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

console.log(addWithDelay(0, 1, 2, 3, 4, 5)
  .then(result => console.log(result))
  .catch(error => console.error(error)));