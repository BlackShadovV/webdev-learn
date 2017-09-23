function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var length = 10,
  array = [],
  key, i;

for (i = 0; i < length; i++) {
  array[i] = getRandomInt(0, 15);
}

alert("Filled random array " + array.join(' '));

do {
  key = prompt("Enter number for find ");
  key = parseInt(key);
  if ((key == "") || (isNaN(key))) {
    alert("Error!");
  }
} while ((key == "") || (isNaN(key)))

if (array.indexOf(key) !== -1) {
  alert("Element " + key + " is found!");
} else {
  alert("Element " + key + " not found!");
}