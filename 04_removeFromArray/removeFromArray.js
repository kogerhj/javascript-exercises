// let testArray = [1, 2, 3, 4, 5, 6];


const removeFromArray = function(...args) {
    let arr = args[0];
    return arr.filter(item => !args.includes(item))
}

// console.log(removeFromArray(testArray, 2));

// Do not edit below this line
module.exports = removeFromArray;
