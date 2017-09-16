function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
var N = 10,
    a = [],
    k, isFound, i;


for (i = 0; i < N; i++) {
    a[i] = getRandomInt(0, 15);
}

alert("Filled random array " + a.join(' '));

var k = prompt('Введите число для поиска', '');
for (i = 0; i < N; i++) {
    if (a[i] == k) {
        isFound = true;
        break;
    }
}

if (isFound) {
    alert("Element " + k + " is found!");
} else {
    alert("Element " + k + " not found!");
}