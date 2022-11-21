///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

//Let's sume each of the individual types of acres in case we need it. 

let sumFujiAcres = 0;
let sumGalaAcres = 0;
let sumPinkAcres = 0;


for (let index = 0; index < fujiAcres.length; index++) {
  sumFujiAcres += fujiAcres[index];
}

console.log(`Total Fuji Acres picked:`, sumFujiAcres); // should be 15

for (let index = 0; index < galaAcres.length; index++) {
    sumGalaAcres += galaAcres[index];
  }
  
  console.log(`Total Gala Acres picked:`, sumGalaAcres); // should be 26


for (let index = 0; index < pinkAcres.length; index++) {
    sumPinkAcres += pinkAcres[index];
  }
  
  console.log(`Total Pink Acres picked:`, sumPinkAcres); // should be 22



//Let's add them all up

let totalAcres = (sumFujiAcres + sumGalaAcres + sumPinkAcres)

console.log(`Total Acres picked for the week:`, totalAcres) // should be 63



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

//Average Daily acres will be total acres divided by 7 days. Days referenced by the array length. 

var averageDailyAcres = (totalAcres / fujiAcres.length) 

console.log(`Average # of acres picked per day:`, averageDailyAcres) //should be 9



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days += 1; acresLeft = (acresLeft - averageDailyAcres);
  }

  console.log(`Number of days of work left:`, days) //should be 20 as a whole #, 19.33 as manual math fraction (based on original data)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// let fujiTons =
// let galaTons =
// let pinkTons =

let acreYield = 6.5

// Making the fujiTons array with a slice method
// the forEach was an interesting Google find for modifying an array, but had some warnings that 
// more experienced developers avoid modifying an actual array

var fujiTons = fujiAcres.slice(0, 8)

fujiTons.forEach((element, index) => {
    fujiTons[index] = element * acreYield;
  });
  
  console.log(`Fuji tons/acre`, fujiTons); // manually should be ['13', '19.5', '19.5', '13', '13', '13', '6.5']


// Making the galaTons using a push method.

var galaTons = []

// Some of my work trying to get to a push function. 
// for (let index = 0; index < galaAcres.length; index++) {
//     galaTons[index] = galaAcres[index] * acreYield;

//   }

//   console.log(`Gala tons/acre`, galaTons); 

for (let index = 0; index < galaAcres.length; index++) {
    let tempvar1 = (galaAcres[index] * acreYield)
    galaTons.push(tempvar1)
  }

  console.log(`Gala tons/acre`, galaTons); // Gala tons/acre [32.5, 13, 26, 19.5, 39, 13, 26]
  

// Pink tons array. In the interest of time; I decided to use my work from above to get it complete.
// The iteration before getting the push function to work. 

var pinkTons = []

for (let index = 0; index < pinkAcres.length; index++) {
    pinkTons[index] = pinkAcres[index] * acreYield;

  }

  console.log(`Pink tons/acre`, pinkTons);


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// let fujiPounds =
// let galaPounds =
// let pinkPounds =

// Getting these variables out front, and then teh assignment ones below the code. 
let sumFujiTons = 0
let sumGalaTons = 0
let sumPinkTons = 0



// I reused my method here to sum the Tons array that I used for the Acres. 

for (let index = 0; index < fujiTons.length; index++) {
    sumFujiTons += fujiTons[index];
  }
  
  console.log(`Total Fuji Tons:`, sumFujiTons); // should be 97.5
  
  for (let index = 0; index < galaTons.length; index++) {
      sumGalaTons += galaTons[index];
    }
    
    console.log(`Total Fuji Tons:`, sumGalaTons); // should be 169
  
  
  for (let index = 0; index < pinkTons.length; index++) {
      sumPinkTons += pinkTons[index];
    }
    
    console.log(`Total Pink Tons:`, sumPinkTons); // should be 143



let fujiPounds = (sumFujiTons * 2000) //should be 195,000  Googled enought to realize that getting the number to add a comma in the console log was way beyond scope here. :D
let galaPounds = (sumGalaTons * 2000) //should be 338,000
let pinkPounds = (sumPinkTons * 2000)  // should be 286,000

console.log(`There are`, fujiPounds, `pounds of Fuji`) 
console.log(`There are`, galaPounds, `pounds of Gala`)
console.log(`There are`, pinkPounds, `pounds of Pink`)



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// Multiplying pounds by profit will get us to the sales price totals for each type

let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)



console.log(`Total Fuji profit:`, fujiProfit)
console.log(`Total Gala profit:`, galaProfit)
console.log(`Total Pink profit:`, pinkProfit)





// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// Math function to accomplish this. 
let totalProfit = (fujiProfit + galaProfit + pinkProfit)

console.log(`Total All apples profit:`, totalProfit)