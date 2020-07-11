//slice()
const foods = ["pizza","burger","fingerChips","donuts","springRoll"];
console.log(foods);
const modifiedFoods = foods.slice(1,4);
console.log(modifiedFoods);

//splice()
// const foods = ["pizza","burger","fingerChips","donuts","springRoll"];
// console.log(foods);
 const modifiedFoods1 = foods.splice(2,0,"noodles","icecream");
console.log(foods);

//filter()
const numberArray =[12,324,213,4,2,3,45,4234];
function isEven(array)
{
    const even = array.filter(function (num)
    {
    return num % 2 == 0;
    });
    console.log(even);
}
isEven(numberArray);

//reject
function isPrime(array1)
{
    const prime = array1.filter((num) => {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return true;
      }
      return false;
    });
    
    console.log(prime);
}
isPrime(numberArray);

//lambda
function isEven(numberArray)
{
    const evenNum = numberArray.filter((num) => num % 2 == 0);
    console.log(evenNum); 
}
isEven(numberArray);

//map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(array2)
{
    const sqr = array2.map(function(index){
        return index*index;
    });
    console.log(sqr);
}
findSquareOfNumbers(numberArray);

//reduce
myArray1 = [2,3,5,20];
function multiply(array3)
{
    const product = array3.reduce(function(initial,index)
    {
        return initial*index;
    },1);
    console.log(product);
}
multiply(myArray1)