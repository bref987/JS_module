const arr = [
  [ 'id', '45', '78' ],
  [ 'name', 'rick', 'morty' ],
]

const obj = {};

const objA = {
	name: 'oleg',
	surname: 'slutski',
	age: '33',
	status: 'not married'
}

Object.values(objA) = ["maks", "korj", 33, "hz"];



//arr[0].forEach(a => obj[a] = arr[1][arr[0].indexOf(a)]);

console.log(objA);




/*const obj = {
	name: 'oleg',
	surname: 'slutski',
	age: '33',
	status: 'not married'
}

for (let key in obj) {
	obj[key] = obj[key] + 'fffffff';
}

console.log(obj);*/