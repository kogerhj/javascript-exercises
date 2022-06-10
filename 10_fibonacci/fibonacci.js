const fibonacci = function (num) {
    num.toString();
    if(num < 0) return "OOPS";
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
    arr[i] = arr[i -2] + arr[i - 1];
}
return arr.slice(-1)[0];
}
// Do not edit below this line
module.exports = fibonacci;
