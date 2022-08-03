"use strict";

// CODING CHALLENGE #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

GOOD LUCK 😀
*/

const dolphinsScore1 = 17;
const dolphinsScore2 = 37;
const dolphinsScore3 = 13;

const koalasScore1 = 58;
const koalasScore2 = 67;
const koalasScore3 = 83;

const calcAverage = (score1, score2, score3) =>
  ((score1 + score2 + score3) / 3).toFixed(2);

const dolphinsAverage = calcAverage(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3
);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

const checkWinner = function (avgDolphins, avgKoalas) {
  let higherValue = 0;
  avgDolphins > higherValue
    ? (higherValue = avgDolphins)
    : (higherValue = 9999);
  avgKoalas > higherValue
    ? (higherValue = avgKoalas)
    : (higherValue = avgDolphins);

  if (higherValue === avgDolphins && higherValue >= avgKoalas * 2) {
    return `Dolphins win!(${avgDolphins} vs. ${avgKoalas})`;
  } else if (higherValue === avgKoalas && higherValue >= avgDolphins * 2) {
    return `Koalas win!(${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "No team wins!";
  }
};

const winner = checkWinner(dolphinsAverage, koalasAverage);
console.log(winner);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CODING CHALLENGE #6

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

GOOD LUCK 😀
*/

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CODING CHALLENGE #7

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    return (mark.BMI = (this.weight / (this.height * this.height)).toFixed(2));
  },
};

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    return (john.BMI = (this.weight / (this.height * this.height)).toFixed(2));
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullName}'s(${john.BMI})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullName}'s(${mark.BMI})!`
  );
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CODING CHALLENGE #8

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals = [];

for (let i = 0; i < bills1.length; i++) {
  tips1.push(calcTip(bills1[i]));
}
console.log(tips1);

for (let i = 0; i < bills1.length; i++) {
  totals.push(bills1[i] + tips1[i]);
}
console.log(totals);

const calcAverage1 = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
};

const averageTotalsPrice = calcAverage1(totals);
console.log(averageTotalsPrice);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CODING CHALLENGE #9

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const maxTemps = [12, 5, -5, 0, 4];

let forecast = "";

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    forecast += `...${arr[i]}ºC in ${i + 1} days`;
  }
  return forecast;
};

const forecastStatement = printForecast(maxTemps);
console.log(forecastStatement);
