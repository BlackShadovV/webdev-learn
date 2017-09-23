function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrLength = 10,
  array = [],
  searchKey, i;

for (i = 0; i < arrLength; i++) {
  array[i] = getRandomInt(0, 15);
}

alert("Filled random array " + array.join(' '));

do {
  searchKey = prompt("Enter number for find ");
  searchKey = parseInt(searchKey);
  if ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null)) {
    alert("Error!");
  }
} while ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null));

if (array.indexOf(searchKey) !== -1) {
  alert("Element " + searchKey + " is found!");
} else {
  alert("Element " + searchKey + " not found!");
}