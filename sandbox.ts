// //const character = 'Christian';
// let character = 'Christian';
// let age = 50;
// let isProgrammer = false;
//
// //character = 20;
// character = 'parker';
//
// age = 30;
//
// isProgrammer = true;
//
// const circ = (diameter:number) => {
//     return diameter * Math.PI
// }
//
// console.log(circ(7.5));
// console.log(character);
//
// const inputs = document.querySelectorAll('input');
//
// inputs.forEach(input => {
//     console.log(input);
// });

let names = ['chris', 'parker', 'lisa'];

names.push('abby');

let numbers = [10,20,30,40];
numbers.push(25);

let mixed = ['baxter', 3, 'quincy', 8, 9];
mixed.push('zeke');
mixed.push(10);
mixed[0] = 3;
// the below will not compile due to them not being strings
// names.push(3);
// names.push[0];

//Cant add new properties or change only a few
let parkers = {
    name: 'chris',
    color: 'blue',
    age: 50
}
