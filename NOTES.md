# General notes

## inspiration websites
https://vercel.com/
https://afterschoolmaths.co.nz/ 
watch James' video 


Practice css: https://jankcss.com  

## Best practices

Always design mobile first.

### Optimising Javascript
Minimise DOM manipulations. Batch updates where possible
Use only necessary event listeners
Optimise loops - only have what's necessary within the loop, keep as much as possible outside. Use breaks and skips
Choose correct data structure. Arrays typically better for listing, use a dictionary/object when keys are necessary
Chaching data. Eg squaring a list of numbers - for the duplicates, store the squared value in a dictionary as it is more efficient to look it up
Monitior performance. Especially of web API's and libraries. Rule of least power

### Clean and maintanable code  
Name variables and functions appropriately
Only one utility per function
Include code comments describing what's going on. Could use comments to plan out the code before writing it
Break down convoluted code blocks into steps

### Big O notation
Number of inputs vs time taken

#### O(n2)
Exponential increase of time with additional inputs
Eg a nested for loop

#### O(n)
Direct corelation of input to time taken

#### O(log n)
Diminishing time requirement with additional inputs

#### O(1)
Same time taken irrespective of number of inputs

## Breakpoints:
sm: 640px
md: 768px
lg: 1024px

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

