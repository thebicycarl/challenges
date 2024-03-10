# General notes

## for in vs for of:

for in loops iterate through the keys of an object (eg the index in an array)

for of loops iterate through the values of an object (eg the values in an array)

eg: (note the ```js tags style the markdown to show code)

```js
var arr = [3, 5, 7];
    
for (var i in arr) {
  console.log(i); // logs "0", "1", "2"
}
    
for (var i of arr) {
  console.log(i); // logs "3", "5", "7"
}
```

## defer
When adding the script element to the head, just add the keyword 'defer' after the src, this will load it after the html loads.

## Breakpoints:
sm: 640px
md: 768px
lg: 1024px