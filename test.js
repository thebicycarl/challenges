var arr = [3, 5, 7];

for (var i in arr) {
  console.log(i); // logs "0", "1", "2"
}

for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
}