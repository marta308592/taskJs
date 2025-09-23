//task 14 
// Error Tasks

//task 1.1

// function reverseString(s = ''){
//    try{
//      return s.split('').reverse().join('') 
//    }
//    catch(err){
//      console.log(`\nError: ${err.message}`)
//      return s
//    }
// }
// console.log(reverseString(Number(1234)))


//task 2
// function isPositive(a){
// try{
//     if(a > 0)
//         return 'YES'
//     else if (a === 0)
//         throw new Error('Zero Error.')
//     else 
//         throw new Error('Negative Error.')
// }catch(err){
//    return err.message
// }
// }
// console.log(isPositive(0))

//task 3

// function reverseString1(s) {
// typeof s !== "string"
// ? console.log("s.split is not a function")
// : (s = s.split("").reverse().join(""));
// console.log(s);
// }
// reverseString(5)


// function reverseString2(s){
//     try{
//     if(typeof s !== 'string' )
//         throw new Error('Error: s.split is not a function') 
//     else
//         return  s.split("").reverse().join("")
//     }
//     catch(err){
//         return  err.message
//     }
// }
// console.log(reverseString2(14))

//task 4

// function gradeLabs(labs) { 
//    for (let i = 0; i < labs.length; i++) {
//       try{
//           let lab = labs[i];
//           let result = lab.runLab(3);
//           console.log(`${lab.student} code worked: ${result === 27}`);

//       }catch(error){
//            console.log(`${labs[i].student} code worked: Error thrown.`)
//         }
//     }
// }

// let studentLabs2 = [
//     {
//     student: "Blake",
//     myCode: function (num) {
//     return Math.pow(num, num);
//     },
//     },
//     {
//     student: "Jessica",
//     runLab: function (num) {
//     return Math.pow(num, num);
//     },
//     },
//     {
//     student: "Mya",
//     runLab: function (num) {
//     return num * num;
//     },
//     },
// ];
// gradeLabs(studentLabs2);