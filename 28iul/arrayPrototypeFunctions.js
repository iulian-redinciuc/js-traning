Array.prototype.myMap = function myMap(cb) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray[i] = cb(this[i]);
    }
    return resultArray;
}
[1, 2, 3].myMap(x => x * 2);

Array.prototype.myFilter = function myFilter(cb) {
    let resultArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) === true) {
            resultArr.push(this[i]);
        }
    }
    return resultArr;
}
[1, 2, 3].myFilter(x => !(x % 2))
[1, 2, 3].myFilter(x => x % 2 === 0);

Array.prototype.myForEach = function myForEach(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}
[1, 2, 3, 4].myForEach(x => 3 * x);

Array.prototype.mySome = function mySome(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) === true) return true;
    }
    return false;
}
[1, 2, 3, 4].mySome(x => x % 4 === 0);

Array.prototype.myEvery = function myEvery(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) !== true)
            return false;
    }
    return true;
}
[1, 2, 3, 4].myEvery(x => x % 2 === 0);

Array.prototype.myReduce = function myReduce(cb, start) {
    for (let i = 0; i < this.length; i++) {
        start = cb(start, this[i]);
    }
    return start;
}
[1, 2, 3, 4].myReduce((acc, curr) => acc * curr, 1);