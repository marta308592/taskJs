//Primitive Type Coercion
/*
//task 1. 
// Please try to guess, test, and then understand following examples:
 Number('0x77') === 0x77 //true
 Number('077') === 077   // false or SyntaxError in strict mode
 Number(' 12')           //12
 isNaN(' ')              //false
 +''                     //0
 .1 + .2 == .3           //false
 9007199254740992 + 1 == 9007199254740992  //true
 9007199254740992 + 2 == 9007199254740992  //false
 0 === +0               //true
 +0 === -0              //true
 1 / '2'                //.5
 1 / 0                  //Infinity
 1 / -0                 //-Infinity
 Infinity / 6           //Infinity
 Infinity / -256        //-Infinity
 Infinity / Infinity    //NaN
 0 / 0                  //NaN
 +true                  // 1
 +false                 //0
 +null                  //0
 +undefined             // NaN

 parseInt('.2') ,                                    //NaN
 parseInt('077a'),                                   //77
 parseInt('0x77a'),                                  //1914
 parseInt('I’m the best value - said Infinity.'),    //NaN
 parseFloat('I’m the best value - said Infinity.'),  //NaN
 parseInt('Infinity is the best value!'),            //NaN
 parseFloat('Infinity is the best value!'),          //Infinity
 parseFloat('12.78ff')                               //12.78

 //task 2
 "" + 1 + 0  // '10'
 "" - 1 + 0  //-1
 true + false   //1
 6 / "3"     //2
 "2" * "3"    //6
 4 + 5 + "px"   // '9px'
 "$" + 4 + 5 // '$45'
 "4" - 2   //2
 "4px" - 2   //NaN
 7 / 0  //Infinity
 " -9 " + 5  //' -95 5'
 " -9 " - 5  // -14
 null + 1   // 1
 undefined + 1  // NaN
 */

 //task 3.1
//  const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     toString(){
//       return  `Name: ${person.firstName} ${person.lastName} , Age: ${person.age}`
//     }
// }
// console.log(String(person))

//task 3.2
// const obj = {
//   price: 1000,
//   valueOf(){
//      return obj.price
//   },
// }
// let result = 500 + obj
// console.log(result)

//task 3.3
// const object = {
//     day: 8,
//     month: 18,
//     year: 2024,
//     toString(){
//         const date = new Date(object.year, object.month, object.day);
//         const d = date.getDate() / 10 < 1 ? `0${date.getDate()}` : `${date.getDate()}`
//         const m = date.getMonth() / 10 < 1 ? `0${date.getMonth()}` : `${date.getMonth()}`

//         return `${d}/${m}/${object.year}`
//     },
//     valueOf(){
//         const date = new Date(object.year, object.month, object.day)
//         return date.getTime()
//     }
// }
// console.log(String(object), Number(object))

//task 3.4
// const obj = {
//     0 : 'item1',
//     1 : 'item2',
//     2 : 'item3',
//     toString(){
//         let str = ''
//         for(let key in obj){
//             if (!isNaN(Number(key)))
//             str += `${obj[key]},`
//         }
//         return str.slice(0,-1)
//     }
// }

// console.log(String(obj))

//task 3.5
// const obj = {
//     balance: 1000,
//     interestRate: 0.05,
//     valueOf(){
//         return obj.balance * (1 + obj.interestRate)
//     }
// }
// console.log(Number(obj))

//task 4
//parseInt

// function parseInt(string = '', radix ){
//     string = String(string) 
//     let sign = 1
//     string = string.replaceAll('\n', ' ')
//                    .replaceAll('\t', ' ')
//                    .replaceAll('\r', ' ')
//                    .replaceAll('\f', ' ')
//                    .replaceAll('\v', ' ')

//     let i = 0;
//     while (i < string.length && string[i] === ' ') {
//         i++;
//     }
//     string = string.slice(i);
 
//     if (string.length === 0) return NaN;

//     if (string[0] === '-') {
//         sign = -1;
//         string = string.slice(1);
//     } else if(string[0] === '+') {
//         string = string.slice(1);
//     }

//     if(string[0] === '0' && (string[1] === 'x' || string[1] === 'X') &&
//       (radix === 16 || radix === undefined )){
//                string = string.slice(2)
//                radix = 16
//     }
        
//     if (radix === undefined || radix === 0) {
//         radix = 10;
//     }

//     if (radix < 2 || radix > 36) return NaN; 

//     let value = 0
//     let checkDigit = false
//     for(let i = 0; i < string.length; i++){
//         let digitCode = string.charCodeAt(i)
//         let digit = 0

//         if (digitCode >= 48 && digitCode <= 57) {       
//             digit = digitCode - 48
//         } else if (digitCode >= 65 && digitCode <= 90) {  
//             digit = digitCode - 65 + 10
//         } else if (digitCode >= 97 && digitCode <= 122) {
//             digit = digitCode - 97 + 10
//         } else {
//             break 
//         }

//         if(digit >= radix)  break

//         checkDigit = true
//         value = value * radix + digit
//     }
//     if(!checkDigit)
//        return NaN

//     return sign * value

// }
 
// console.log(parseInt('077a'))

//task 5
//parseFloat

// function parseFloat(string = ''){
//     string = String(string) 
//     let sign = 1
//     string = string.replaceAll('\n', ' ')
//                    .replaceAll('\t', ' ')
//                    .replaceAll('\r', ' ')
//                    .replaceAll('\f', ' ')
//                    .replaceAll('\v', ' ')

//     let i = 0;
//     while (i < string.length && string[i] === ' ') {
//         i++;
//     }
//     string = string.slice(i);
 
//     if (string.length === 0) return NaN;

//     if (string[0] === '-') {
//         sign = -1;
//         string = string.slice(1);
//     } else if(string[0] === '+') {
//         string = string.slice(1);
//     }

//     if(string.indexOf('Infinity') === 0)
//       return Infinity * sign

//     let value = 0
//     let checkDigit = false
//     let hasDecimal = false
//     let decimalCount = 0
//     let exponent = 0
//     let pointCount = 0 
//     let expSign = 1

//     for(let i = 0; i < string.length; i++){
//         let digit = 0
//         let digitCode = string.charCodeAt(i)
//         if (digitCode >= 48 && digitCode <= 57 && !hasDecimal) {       
//             digit = digitCode - 48 
//             value = value * 10 + digit
//             checkDigit = true
//         } 
//         else if(string[i] === '.' && pointCount === 0){
//             pointCount++;
//             hasDecimal = true;
//             checkDigit = false;
//         } 
//         else if(string[i] === '.' && pointCount > 0){
//             break; 
//         }
//         else if((string[i] === 'e' || string[i] === 'E') && checkDigit){
//             i++
//             if (string[i] === '+') i++;
//             else if (string[i] === '-') {
//               expSign = -1;
//               i++; 
//             }
//             let expFound = false;
//             while(i < string.length){
//               let expCode = string.charCodeAt(i)
//               if (expCode >= 48 && expCode <= 57 ) {       
//                 exponent = exponent * 10 + ( expCode - 48 ) 
//                 i++
//                 expFound = true
//               }
//               else  break
//             }
//          if (!expFound) break; 
//             break;
//       }
//         else if(hasDecimal && digitCode >= 48 && digitCode <= 57){
//             decimalCount++
//              digit = digitCode - 48
//              value += digit / 10 ** decimalCount
//              checkDigit = true
//         }
//         else {
//             break 
//         }
//     }
   
//     if(!checkDigit)
//        return NaN

//     return sign * value * 10 ** (expSign * exponent)

// }

// console.log(parseFloat('314e-2'))
   
//task 6
var a = {
    valueOf: function() {
        return 'hello';
    }
};
var b = {
    valueOf: function() {
        return 3;
    }
};
var c = {
    valueOf: function() {
        return new Number(3);
    }
};
var d = {
    toString: function() {
        return 123;
    }
};
var e = {
    toString: function() {
        return new Number(3);
    }
};
console.log()

// null + undefined // NaN
// null + true //1
// null + false //0
// null + 3 //3
// null + NaN //NaN
// null + 'hello' //'nullhello'
// null + a + b + c + d + e + f  // TypeError because of e
// undefined + true // NaN
// undefined + false //NaN
// undefined + 5 //NaN
// undefined + NaN  //NaN
// undefined + 'hello' //'undefinedhello'
// undefined + a + b + c + d + e + f //TypeError because of e
// true + false //1
// true + 2 //3
// true + NaN //NaN
// true + 'hello' //'truehello'
// true + a + b + c + d + e + f // TypeError because of e
// false + 4 //4
// false + NaN //NaN
// false + 'hello' //'falsehello'
// false + a + b + c + d + e + f // TypeError because of e
// 5 + 3 //8
// 5 + NaN //NaN
// 5 + 'hello' //'5hello'
// 5 + a + b + c + d + e + f // TypeError because of e
// 'hello' + NaN //'helloNaN'
// 'hello' + a + b + c + d + e + f // TypeError because of e


// -null // -0
// -undefined //NaN
// -true // -1
// -false // -0
// -5 // -5
// -'hello' //NaN
// -'234' //-234
// -'234.32e3' // -234320
// -new Number(NaN) // NaN
// -new String('hello') // NaN
// -(/google.com/) //NaN
// -([]) // -0
// -([2]) // -2
// -([2, 3]) //NaN
// -(function() { }) //NaN
// -(a) // NaN
// -(b) // -3
// -(c) // NaN
// -(d) // -123
// -(e) //TypeError because of e
// -(f) // ReferenceError because of f

// console.log(a, a++, a) // { valueOf: [Function: valueOf] } NaN NaN 
// console.log(a, ++a, a) // NaN NaN NaN
// console.log(b, b++, b) // { valueOf: [Function: valueOf] } 3 4
// console.log(b, ++b, b) // 4 5 5
// console.log(c, c++, c) //{ valueOf: [Function: valueOf] } NaN NaN
// console.log(c, ++c, c) //NaN NaN NaN
// console.log(d, d++, d) // { toString: [Function: toString] } 123 124
// console.log(d, ++d, d) // 124 125
// console.log(e, e++, e) //TypeError because of e
// console.log(e, ++e, e) //TypeError because of e
// console.log(f, f++, f) //ReferenceError because of f
// console.log(f, ++f, f) //ReferenceError because of f


// 23.23 % 2 === 1.23, //false (1.2299999999999969)
// 234.23 % 2.223 //0.8150000000000039

console.log(~null)

~null              // -1
~undefined         // -1
~true              // -2
~false             // -1
~5                 // -6
~'hello'           // -1 (because Number('hello') is NaN, ~NaN is -1)
~'234'             // -235
~'234.32e3'        // -1 (Number('234.32e3') is NaN, ~NaN is -1)
~new Number(NaN)   // -1
~new String('hello') // -1
~(/google.com/)    // -1
~([])              // -1
~([2])             // -3
~([2, 3])          // -1
~(function() { })  // -1
~(a)               // -1
~(b)               // -4
~(c)               // -1
~(d)               // -124
~(e)               // TypeError (cannot convert object to primitive)
~(f)               // ReferenceError

!null              // true
!undefined         // true
!true              // false
!false             // true
!5                 // false
!'hello'           // false
!'234'             // false
!'234.32e3'        // false
!new Number(NaN)   // false (object is truthy)
!new String('hello') // false (object is truthy)
!(/google.com/)    // false (object is truthy)
!([])              // false (object is truthy)
!([2])             // false (object is truthy)
!([2, 3])          // false (object is truthy)
!(function() { })  // false (object is truthy)
!(a)               // false (object is truthy)
!(b)               // false (object is truthy)
!(c)               // false (object is truthy)
!(d)               // false (object is truthy)
!(e)               // false (object is truthy)
!(f)               // ReferenceError

typeof null              // "object"
typeof undefined         // "undefined"
typeof true              // "boolean"
typeof false             // "boolean"
typeof 5                 // "number"
typeof 'hello'           // "string"
typeof '234'             // "string"
typeof '234.32e3'        // "string"
typeof new Number(NaN)   // "object"
typeof new String('hello') // "object"
typeof /google.com/      // "object"
typeof []                // "object"
typeof [2]               // "object"
typeof [2, 3]            // "object"
typeof function() { }    // "function"
typeof a                 // "object"
typeof b                 // "object"
typeof c                 // "object"
typeof d                 // "object"
typeof e                 // "object"
typeof f                 // ReferenceError

void null              // undefined
void undefined         // undefined
void true              // undefined
void false             // undefined
void 5                 // undefined
void 'hello'           // undefined
void '234'             // undefined
void '234.32e3'        // undefined
void new Number(NaN)   // undefined
void new String('hello') // undefined
void /google.com/      // undefined
void []                // undefined
void [2]               // undefined
void [2, 3]            // undefined
void function() { }    // undefined
void a                 // undefined
void b                 // undefined
void c                 // undefined
void d                 // undefined
void e                 // undefined
void f                 // ReferenceError