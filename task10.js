//task 10 
//task1

//version1

// function findLargest(array = []){
//     let max = -Infinity
//     array.forEach((item) => { 
//     if(item > max )
//         max = item
//     })
//     return max
// }
// console.log(findLargest([34, 23, 12, 56, 89])) 

//version 2

// function findLargest(array){
//     const max = array.reduce((accumulator, item) => 
//        accumulator > item ? accumulator : item, -Infinity)
//     return max
// }
// console.log(findLargest([1,2,3,4,14]))

//task2

// function countVowels(string){
//    const array = ['A', 'E', 'I', 'O', 'U']
//    let count = 0
//    for(let i = 0; i < string.length;i++)
//       if(array.includes(string[i].toUpperCase()))
//           count ++
//     return count
// }
// console.log(countVowels("OpenAI")) 

//task3

// function sumArray(array = []){
//  const sum =  array.reduce((accumulator, item) =>
//       accumulator + item)
//  return sum
// }
// console.log(sumArray([-1, -2, -3, -4, -5])); 

//task 4 
let arr = [] 