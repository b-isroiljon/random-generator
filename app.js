'use strict';
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('min')
    const maxEl = document.getElementById('max')
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || max.value === '' ) {
        alert("error");
        return;
    }

    if (min > max) {
        alert("Error: min > max");
        return;
    }

    const placeholderEl = document.querySelector('#placeholder');
    placeholderEl.textContent = getRandomNumber(min, max);
}

const btnEl = document.getElementById('generate');
btnEl.addEventListener('click', generate);
























// let ism = 'Bor\'uev';
// console.log(ism);

// let familiya = "Bor\"uev";
// console.log(ism);

// let ism ='ulugbek';
// let message = 'salom ' + ism + ' !';
// console.log(message);

// const yosh = 10 ;
// const a = yosh > 18;
// const b = yosh < 20;

// console.log(a && b);

// console.log(a || b);
 
// console.log(!a);
// console.log(!b);

// const htmlPassed = true;
// const cssPassed = true;
// let  message = '';

// if (htmlPassed && cssPassed) {
//     message = 'Six bootstrap kursini boshlashingiz mumkun!';
// }   else if (htmlPassed || cssPassed) {
//     message = 'iltimos ikinchi kursni ham tugating';
// }   else {
//     message = 'iltimos birinchi ikalla kursniyugatib chiking';
// }

// console.log(message);

// falsy qiymatlar
// console.log('men ' +  1997 + 'chi yilda tavalud topkan')
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// truthy qiymatlar
// console.log(Boolean('Isroiljon'))
// console.log(Boolean(20))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean('0'))
// console.log(Boolean('falsy'))

// const ism = '0';
// if (ism) {
//     console.log('sizning ismingiz: ' + ism);
// } else {
//     console.log('iltimos ism kiriting !')
// }

// functions 
// console.log(kvadrat(2));

// console.log(kvadrat(10));

// function kvadrat(son) {
//  return son + son;
// }

// const kvadrat = function(son) {
//     return son * son;
// }

// console.log(kvadrat(10))

// const kvadrat = (son) => {
//     return son * son;
// }

// console.log(kvadrat(137));

// const print = () => console.log("printing...");
// print();

// const volume = (a, b, c) => a * b * c;
// console.log(volume(1, 2, 3));

// function declaration
// function evenOrOddDec(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddDec(554)

// function expression
// const evenOrOddDec = function(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
// evenOrOddDec(4)

// arrow function
// const evenOrOddDec = number => {
//     if (number % 2 === 0) {
//         console.log(`${number} is even`);
//     } else {
//         console.log(`${number} is odd`);
//     }
// }
//  evenOrOddDec(9)

// function declaration
// function maxDek (number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDek(2, 4))

// function expression
// const maxDec = function(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDec(2, 4))

// Arrow function
// const maxDec = (number1, number2) => {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }
// console.log(maxDec(2, 4))

// function declaration которая меняет цифры местами
// function reverseDec(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseDec(1234))

// function expression 
// const reverseExp = function(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseExp(123));

// arrow function
// const reverseArrow = number => {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }
// console.log(reverseArrow(1884))

// const mixedArray = ['java', 2, false, null];
// console.log(mixedArray);

// const helloArray = ['h', 'e', 'l', 'l', 'o'];

// // birinchi element
// console.log(helloArray[0]); //"h"

// console.log(helloArray[4]); //""

//  let languages = ['js', 'java'];

//     languages.push('go');
//     languages.push('goood');
//     languages.push('god');

//     console.log(languages); 

// unshift metod

// const languages = ['js', 'go'];
// languages.unshift('good');
// console.log(languages)

// const languages = ['js', 'go', 'good'];
// console.log(languages)
// const deletedLanguage = languages.shift();

// console.log(languages);
// concat
// const array1 = [1, 4];
// const array2 = [2, 3, 4];
// const result = array1.concat(array2);
//  console.log(result);
// // finde
//  const findeValue = (number) => number === 2;
//  const foundValue = result.find(findeValue);
//  console.log(foundValue);
// //  filter
// const filterValue = number => number > 5;
// const filteredValue = result.filter(filterValue);
// console.log(filteredValue);

// const dasturchi = {
//     ism: 'jony',
//     yosh: 20,
//     salomlash: function() {
//         console.log('Salom!');
//     }
// }
// console.log(dasturchi.salomlash());

// const dasturchi = {
//     ism: 'jony',
//     yosh: 20,
//     salomlash: function() {
//         console.log('Salom! mening ismim ' + this.ism);
//     }
// }
// console.log(dasturchi.salomlash());

// object methods
// console.log(Object.keys(dasturchi));
// console.log(Object.values(dasturchi));
// console.log(Object.entries(dasturchi));

// const number = 2;
// let output;

// switch (number) {
//     case 1:
//         output = 'one';
//         break;
//   case 2:
//         output = 'two';
//         break;
//     default:
//         output = 'undefined';
//        break;
// }
// console.log(`number: ${output}`); 

// for (let i = 0; i < 10; i++) {
//     console.log(i) 

//     console.assert(i)
//     consolw.log(i)
// }

// let i = 0;

// while ( i < 10) {
//     console.log('hello');
//     i++;
// }

// const paragraph = document.createElement('p');
// console.log(paragraph);

// const paragraph = document.createElement('p');
// const text = document.createTextNode('jnkkkj kkjk kjksvd dfdf');

// paragraph.appendChild(text);
// console.log(paragraph);

// box.appendChild(paragraph);

// const changeHeading = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'New content';
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.addEventListener('click', changeHeading);