'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};







const arr = [7, 8, 9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]]
console.log(badNewArr);


const newArr = [1, 2, ...arr];
console.log(newArr);


console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);


//copy array
const mainMenuCopy =[...restaurant.mainMenu];

// joining two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//iterables: arrays, strings, maps, ssets not objects
const str = 'jonas'
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str)


//real world example
const ingredients = [
  // prompt("let's' make pasta! ingridient 1"),
  // prompt("let's' make pasta! ingridient 2"),
  // prompt("let's' make pasta! ingridient 3")
]

  console.log(ingredients);
  restaurant.orderPasta(...ingredients)


  // objects
const newRestaurant = {foundIn:1998, ...restaurant, founder:'gusieppe'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristarant roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '22:30',
//   address:'via de sole, 21',
//   mainIndex: 2,
//   starterIndex:2,
// })

// restaurant.orderDelivery({
//   address:'via de sole, 21',
//   starterIndex: 1,
// })


// const {name, openingHours, categories} =restaurant;
// console.log(name, openingHours, categories)


// const {name: restaurantName, openingHours:hours, categories:tags,} = restaurant;
// console.log(restaurantName, hours, tags)

// //default values
// const{menu = [], starterMenu: starters =[] } = restaurant;
// console.log(menu, starters);


// //mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = {a:23, b: 7, c:14 }

// // ({ a, b } = obj);
// // console.log(a, b)

// //nested objects
// const {fri: {open:0, close:c}} = openingHours;
// console.log(o, c);







// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const[x, y, z] = arr;
// console.log(x, y, z);


// let[main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


// //nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const[i, , [j, k]] = nested;
// console.log(i, j, k)

// //default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);