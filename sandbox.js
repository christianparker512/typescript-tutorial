"use strict";
var greet;
//greet = 'hello';
greet = function () {
    console.log('hello,again');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) {
    return a + b;
};
// let result = minus(10,7);
