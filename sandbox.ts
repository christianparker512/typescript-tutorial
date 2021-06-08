//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//AGE cant be a string because we've declared it as a number
// age = 'Christian';
age = 50;


//isLoggedIn=25
isLoggedIn = true;

let ninjas: string[] = [];
ninjas.push('chris')

//union types
let mixed: (string | number)[] = []
mixed.push('hello');
mixed.push('20');
//error because boolean is mentioned but not number or string
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {name: 'chris', age: 50};

let ninjaTwo: {
    name: string,
    age: number;
    beltColor: string
}
ninjaTwo = {name: 'abby', age: 19, beltColor: 'black'}
