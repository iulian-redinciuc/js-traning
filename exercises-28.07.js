function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

function map(arr, cb) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr[i] = cb(arr[i]);
        // resultArr.push(cb(arr[i]));
    }
    return resultArr;
}

function filter(arr, cb) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) === true) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

function some(arr, cb) {
    if (arr.length == 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) === true) return true;
    }

    return false;
}

function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i]) !== true) return false;
    }
    return true;
}

function cb(acc, current){
    return acc*current;
}

function reduce(arr, cb, start) {
    for (let i = 0; i < arr.length; i++) { 
        start = cb(start,  arr[i]);
    }
    return start;
}

let names = ['alex', 'alex', 'radu', 'diana', 'iulian', 'ema'];
names.reduce(function (acc, curr) {
    if (acc.hasOwnProperty(curr)) {
        acc[curr] += 1;
    }
    else {
        acc[curr] = 1;
    }
    return acc;
}, {});