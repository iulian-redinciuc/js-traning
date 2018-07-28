/** ES5 */

/**
 * Ex #1
 * 
 * Write a function which receives a scheduler object as a param and returns an array of all your activities
 * in that week.
 * 
 * ❗ Caution: the scheduler may not have all week days.
 */


var scheduler = {
    "monday": ["Gym", "Work", "Drinks"],
    "tuesday": ["Gym", "Road-trip"],
    "wednesday": ["Late-morning", "Brunch", "Movies"]
}


function getActivities(scheduler) {
    let arr = [];
    let arr2 = [];

    let keys = Object.keys(scheduler);
    // (3)['monday', 'tuesday', 'wednesday']
    keys.forEach(function (key) {
        arr = arr.concat(scheduler[key]);
        arr2.push(scheduler[key]);
    });

    return { arr, arr2 };
}



function getActivities(scheduler) {
    let arr = [];
    let keys = Object.keys(scheduler); // obj

    keys.forEach(function (element) {
        arr = arr.concat(scheduler[element]);
    });
    // arr.concat(scheduler[keys])
    return arr;
}
getActivities(scheduler); // ["Gym", "Work", "Drinks", "Gym", "Road-trip", "Late-morning", "Brunch", "Movies"]


/**
 * Ex #2
 * 
 * Write a function which receives a scheduler object as a param (one above) and returns an array 
 * with only the activities that are part of days with at least 3 activities
 */
var scheduler = {
    "monday": ["Gym", "Work", "Drinks"],
    "tuesday": ["Gym", "Road-trip"],
    "wednesday": ["Late-morning", "Brunch", "Movies"]
}
function filterActivities(scheduler) {
    return Object.keys(scheduler)
                .filter(key => scheduler[key].length >= 3)
                .reduce(function (arr, element) {
                    arr = arr.concat(scheduler[element]);
                }, []);
}

filterActivities(scheduler); // ["Gym", "Work", "Drinks", "Late-morning", "Brunch", "Movies"]

/**
 * Ex #3
 * 
 * Input: an array of numbers
 * Output: true/false - wheather the array contains at least an even number
 */
function checkEven(arr) {
    some
}
checkEven([1, 2, 3]); // true
checkEven([1, 3, 5]); // false

/**
 * Ex #4
 * 
 * Input: an array of numbers
 * Output: true/false - wheather the array contains only even numbers
 */
function checkAllEven(arr) {
    every
}
checkAllEven([1, 2, 3]); // false
checkAllEven([2, 4, 6]); // true

/**************************************************************************** */

/** ES6 */

/**
 * Ex #1
 * 
 * Build a simple page with 3 buttons and attach an event listener to each button so that, when clicking
 * them, a message specifying the order of the btn will be printed to the console.
 * 
 * Ex: 
 *  when clicking the 2nd button the message "I'm nr 2" will be printed.
 *  when clicking the 1st button the message "I'm nr 1" will be printed
 */


/**
 * Ex #2
 * 
 * Modify the function below so that, if a userID is not passed as param, a random one is created 
 * by default.
 */

function createUser(userID, name) {
    return {
        id: userID,
        name: name,
        age: 0,
        greet: function () {
            console.log(`${name} says hi!`);
        }
    }
}


/**
 * Ex #3
 * 
 * Input: an array or arrays
 * Output: the items in the inner arrays concatenated into just one array
 * 
 */

flatten([
    [1, 2],
    [3, 4],
    [9, 10]
]); // [1,2,3,4,9,10]


/** Ex #4 
 * 
 * Input: variable number of parameters
 * Output: the sum of only the odd params
 */

variableSum(2, 11, 21, 33, 5); // 70