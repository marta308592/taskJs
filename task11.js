//practice 

// const payments = [
// {
// studentId: 1, // Unique identifier for each student
// studentName: "John Doe", // Name of the student
// payedAmount: 1600, // Amount payed with this transaction
// year: 2020, // The payment year
// },
// {
// studentId: 1, // Unique for each student
// studentName: "John Doe",
// payedAmount: 1500,
// year: 2021
// },
// {
// studentId: 1, // Unique for each student
// studentName: "John Doe",
// payedAmount: 1400,
// year: 2022
// },
// {
// studentId: 1, // Unique for each student
// studentName: "John Doe",
// payedAmount: 1300,
// year: 2023
// },
// {
// studentId: 2, // Unique for each student
// studentName: "Lu Kang",
// payedAmount: 1500,
// year: 2020
// },
// {
// studentId: 2, // Unique for each student
// studentName: "Lu Kang",
// payedAmount: 1400,
// year: 2021
// },
// {
// studentId: 2, // Unique for each student
// studentName: "Lu Kang",
// payedAmount: 1300,
// year: 2023
// },
// {
// studentId: 2, // Unique for each student
// studentName: "Lu Kang",
// payedAmount: 1200,
// year: 2023
// }
// ];

// 1 Find the max payment--------------------------------------------

// function findMax(array = []){
//   return array.reduce((aggr , item) =>
//   aggr > item.payedAmount? 
//   aggr : item.payedAmount , -Infinity)
// }
// console.log(findMax(payments))

//2 Calculate the sum of all payments--------------------------------

// function sumOfPayments(array = []){
//    return array.reduce((aggr, item) => aggr + item.payedAmount , 0)
// }
// console.log(sumOfPayments(payments))

//3 Find the count of all payments that are more than 1500------------

// function count(array = []){
//    return  array.reduce((aggr, item) => 
//         aggr + (item.payedAmount > 1500 ? 1 : 0) , 0)
// }
// console.log(count(payments))

//4 Calculate the average of all payments--------------------------------

// function average(array = []){
//    let sum =  array.reduce((aggr, item) => aggr + item.payedAmount , 0)
//    return sum / array.length
// }
// console.log(average(payments))

/*5  Calculate the total sum of payment amounts made by each  -------------
student. We need to return an array that contains a list of
information about students, including the total paid amount by the
student. */

// function information(array = []){
//   let result = [] 
//   let currId = array[0].studentId 
//   const ids = []  
//   let currSum = 0
//   for(let i = 0; i < array.length; i++){
//      if(!ids.includes(array[i].studentId)){
//         ids.push(array[i].studentId)
//         currId = array[i].studentId
//        }
//      else
//         continue
//      for(let j = 0; j < array.length; j++){
//        if(array[j].studentId === currId){
//           currSum += array[j].payedAmount
//         }
//     }
//     result.push({
//     studentId: payments[i].studentId,
//     studentName: payments[i].studentName,
//     payment: currSum
//     })
//   }
//   return result
// }
// console.log(information(payments))


//object homework
const evaluations = [
{
studentId: 1, // Unique identifier for each student
studentName: "John Doe",
courseId: 1, // Unique identifier for each course
courseName: "JS Bootcamp",
score: 70
},
{
studentId: 1, // Unique identifier for each student
studentName: "John Doe",
courseId: 2, // Unique identifier for each course
courseName: "JS Level 0",
score: 60
},
{
studentId: 1, // Unique identifier for each student
studentName: "John Doe",
courseId: 3, // Unique identifier for each course
courseName: "JS Level 1",
score: 50
},
{
studentId: 2, // Unique identifier for each student
studentName: "Tom Colins",
courseId: 1, // Unique identifier for each course
courseName: "JS Bootcamp",

score: 60
},
{
studentId: 2, // Unique identifier for each student
studentName: "Tom Colins",
courseId: 2, // Unique identifier for each course
courseName: "JS Level 0",
score: 50
},
{
studentId: 2, // Unique identifier for each student
studentName: "Tom Colins",
courseId: 3, // Unique identifier for each course
courseName: "JS Level 1",
score: 40
},
{
studentId: 3, // Unique identifier for each student
studentName: "Sarah Conor",
courseId: 1, // Unique identifier for each course
courseName: "JS Bootcamp",
score: 45
},
{
studentId: 3, // Unique identifier for each student
studentName: "Sarah Conor",
courseId: 2, // Unique identifier for each course
courseName: "JS Level 0",
score: 35
},
{
studentId: 3, // Unique identifier for each student
studentName: "Sarah Conor",
courseId: 3, // Unique identifier for each course

courseName: "JS Level 1",
score: 25
}
];

// 1st task

// function lowestScore(evaluations = []){
//   return evaluations.reduce((acc, {score}) => 
//     acc > score? score: acc  , 100)
// }
// console.log(lowestScore(evaluations))


//2nd task

// function lowestScoreStudenName(evaluations = []){
//    let name = ''
//    let min = 100
//   evaluations.forEach(({studentName , score}) => {
//     if(score < min){
//       min = score
//       name = studentName
//     }
//    })
//    return name
// }
// console.log(lowestScoreStudenName(evaluations))






function lowestScore(evaluations = []){
  let object={}
   evaluations.reduce((acc, studentInfo) => { 
      if(acc > studentInfo.score){
        object = studentInfo
        return score}
        else 
        return acc
        })
        return object.studentName
}
console.log(lowestScore(evaluations))


// task 4
// function average(array = []){
//   const  res = []
//   const  ids = []
//   let scores = array.reduce((acc,ev) => {
//         if(!acc.hasOwnProperty(ev.studentId)){
//             acc[ev.studentId] = [ev.score]
//         }
//         else{
//             acc[ev.studentId].push(ev.score)
//         }
//         return acc
//         }, {})
   
//   for(const key in scores){
//       scores[key] = scores[key].reduce((acc,item) =>
//           acc + item , 0) / scores[key].length
//   }
  
//   for(const key in scores){
//      if(scores[key] < 40 )
//          ids.push(key)
//   }

//   return ids.reduce((acc,item) => {
//        acc.push(array.find(stu => stu.studentId === +item).studentName)
//        return acc
//     },[])
//  }

// console.log(average(evaluations))

