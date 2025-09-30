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

//version 1
// function reverseString(str = ''){
//     let newStr = ''
//     for(let i = 0; i < str.length; i++){
//         newStr += str[str.length - i - 1]
//     }
//   return newStr
// }
// console.log(reverseString("hello"));

//version 2
// function reverseString(str = ''){
//     const arr = str.split('')
//     return arr.reverse().join('')
// }

//  console.log(reverseString("hello"));

//task 5

// function isPrime(num){
//     if(num <= 1)
//         return false
//     for(let  i = 2; i < num**1/2 ; i++){
//         if(num % i === 0)
//             return false
//     }
//     return true
// }

// console.log(isPrime(7), // Output: true
// isPrime(10), // Output: false
// isPrime(13)) // Output: true

//task 6

// function sumArray(array = []){
//  const sum =  array.reduce((accumulator, item) =>
//       accumulator + item)
//  return sum
// }

// function findAverage(array = []){
//   const sum = sumArray(array)
//   return sum / array.length
// }

// console.log(findAverage([10, 20, 30, 40, 50]));

//task 7

// function generateFibonacci(num){
//     const res = []
//     let a = 0
//     let b = 1
//     res.push(a,b)
//     for(let i = 0; i <= num; i++){
//       let curr = a + b
//       a = b
//       b = curr
//       if(b <= num)
//          res.push(b)
//       else
//          break
//     }
//     return res
// }

// console.log(generateFibonacci(15));

//task 8

// function findLongestWord(str = ''){
//     str = str.replaceAll(',', '')
//              .replaceAll('!', '')
//   const arr = str.split(' ')
//   return arr.reduce((acc , item) => {
//     return item.length >= acc.length ? item : acc
//   },'')
// }

// console.log(findLongestWord("The quick brown fox jumps over the lazy dog"),
// // Output: "jumps"
// findLongestWord("JavaScript is awesome"), // Output: "JavaScript"
// findLongestWord("Hello world!")) // Output: "world"

//task 9

// function isPalindrome(str = ''){
//     str = str.replaceAll(',' , '')
//              .replaceAll(' ', '') 
//              .replaceAll('.' ,'')
//     str = str.toLowerCase()   
//    const array = str.split('').reverse()
//    let check = true
//    str.split('').forEach((item,index) => {
//     if(item !== array[index])
//         check = false
//    })
//    return check    

// }
// console.log(isPalindrome("A man, a plan, a canal, Panama"), // Output: true
// isPalindrome("Racecar"), // Output: true
// isPalindrome("Hello")) // Output: false

//task 10
// function toTitleCase(str = '') {
//     str = str.toLowerCase()
//     let arr = str.split(' ')
//     arr = arr.map(
//         item => item[0].toUpperCase() + item.slice(1)
//     )
//     return arr.join(' ')

// }
// console.log(toTitleCase("hello world"), // Output: "Hello World"
// toTitleCase("javascript is fun"), // Output: "JavaScript Is Fun"
// toTitleCase("OPENAI")); // Output: "Openai"

//task 11

// function mostFrequentItem(array = []){
//   const obj = array.reduce((acc, item) => {
//     if(acc.hasOwnProperty(item))
//         acc[item]++
//     else
//         acc[item] = 1
//     return acc
//   },{})
//   let maxCount = 0
//   let MaxItem = ''
//   for(let key in obj){
//     if(maxCount < obj[key]){
//         maxCount = obj[key]
//         MaxItem = key
//     }
//   }
//   return MaxItem
// }

// console.log(mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), // Output: 4
// mostFrequentItem([
// "apple",
// "banana",
// "apple",
// "orange",
// "banana",
// "banana",
// ]), // Output: 'banana'
// mostFrequentItem([10, 20, 10, 30, 20, 10]))// Output: 10

// task 12

// function sortObjects(array = [] , string = ''){
//     let obj = {}
//  for(let i = 0; i < array.length ; i++){
//     for(j = i + 1; j < array.length;j++){
//       if(array[i][string] > array[j][string]){
//         obj = array[i]
//         array[i] = array[j]
//         array[j] = obj
//       }
//     }
//  }
//  return array
// }

// console.log(sortObjects(
// [
// { name: "Alice", age: 25 },
// { name: "Bob", age: 30 },
// { name: "Charlie", age: 20 },
// ],
// "age"
// ),
// // Output:
// //  [{ name: "Charlie", age: 20 },
// //   { name: "Alice", age:25 },
// //   { name: "Bob", age: 30 }]
// sortObjects(
// [
// { name: "Zara", salary: 50000 },
// { name: "John", salary: 70000 },
// { name: "Doe", salary: 60000 },
// ],
// "salary"
// ),
// // Output: [{ name: "Zara", salary: 50000 }, 
// //          { name: "Doe",salary: 60000 }, 
// //          { name: "John", salary: 70000 }]
// sortObjects(
// [
// { name: "Alice", score: 85 },
// { name: "Bob", score: 90 },
// { name: "Charlie", score: 80 },
// ],
// "score"
// ))
// // Output: [{ name: "Charlie", score: 80 },
// //          { name: "Alice",score: 85 },
// //          { name: "Bob", score: 90 }]

//task 13

// function findIntersection(array1 = [] , array2 = []){
//     const res = []
//     array1.forEach(item => {
//       for(let i = 0; i < array2.length; i++){
//         if(item === array2[i])
//             res.push(item)
//       }
//   })
//   return res
// }

// console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]), 
// Output: [3, 4]
// findIntersection(["a", "b", "c"], ["b", "c", "d"]), 
// Output: ['b', 'c']
// findIntersection([7, 8, 9], [9, 10, 11]))
// Output: [9])

//task 14

// function flattenArray(array = []){
//     let newArray = []
//     array.forEach(item => {
//       if(Array.isArray(item))
//          newArray.push(...flattenArray(item))
//       else
//         newArray.push(item)
     
//     })
//      return newArray
// }

// console.log(
// flattenArray([[1, 2, [3]], [4, 5], [6]]),
//  // Output: [1, 2, 3, 4, 5, 6]
// flattenArray([1, [2, [3, [4]]], 5]),
//  // Output: [1, 2, 3, 4, 5]
// flattenArray([["a", "b"], ["c", ["d", "e"]], "f"]))
// // Output: ['a', 'b', 'c', 'd', 'e', 'f']