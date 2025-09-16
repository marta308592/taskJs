//proto

//task1

// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// const Pagination = {
//     array:[],
//     currentPage: 0,

//     init: (array=[], pageSize) => {
//          Pagination.array =  array.reduce((acc , item , index) => {
//              if(index % pageSize === 0)
//                  acc.push([])
//                  acc[acc.length - 1].push(item)

//              return acc
//           }, [])

//          Pagination.currentPage = 0
//          return Pagination.array
//      },

//     getPageItems: () => {
//         console.log(Pagination.array[Pagination.currentPage])
//         return Pagination
//     },

//     prevPage: () => {
//         if(Pagination.currentPage > 0 && Pagination.currentPage <= Pagination.array.length - 1)
//                   Pagination.currentPage -= 1
//         return Pagination
//     },
//     nextPage: () => {
//        if(Pagination.currentPage < Pagination.array.length - 1 && Pagination.currentPage >= 0)
//               Pagination.currentPage += 1
//         return Pagination
//     },
//     firstPage: () => {
//         Pagination.currentPage = 0
//         return Pagination
//     },
//     lastPage: () => {
//          Pagination.currentPage = Pagination.array.length - 1
//          return Pagination
//     },
//     goToPage: (page) => {
//          if(page >= 0 && page < Pagination.array.length)
//             Pagination.currentPage = page 
//        return Pagination
//     }

// }

// console.log(Pagination.init(alphabetArray, 4))
// Pagination.getPageItems(); // ["a", "b", "c", "d"]
// Pagination.nextPage().getPageItems().nextPage(); // add the current page by one
// Pagination.getPageItems(); // ["e", "f", "g", "h"]
// Pagination.nextPage().nextPage(); // the ability to call chainable
// Pagination.getPageItems();
// Pagination.goToPage(3); // current page must be set to 3
// Pagination.getPageItems();

//task 2
// const airplane = {
//     name: '',
//     isFlying: false,
//     init: (name) => {
//      airplane.name = name
//      return airplane
//     },
//     takeOff: () => {
//         airplane.isFlying = true
//         return airplane
//     },
//     land: () => {
//         airplane.isFlying = false
//         return airplane
//     }
// }

// const plane = Object.create(airplane).init("The Thud")
// plane.takeOff()
// console.log(plane.name,'\n',plane.isFlying)