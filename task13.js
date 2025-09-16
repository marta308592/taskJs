//Closure

//task 1
// const counter = createCounter();
// function createCounter(){
//     let count = 0
//     return function foo(){
//         count++
//         return count
//     }
// }
// console.log(counter()); 
// console.log(counter()); 

// creation phase
/*
  lexicalEnv: {
    globalEnv: {
      environmentRecord: {
        counter: <uninitialized>,
        createCounter: <function>
      }
      outer: null
    },
    createCounterEnv: {
      arguments: {},
      environmentRecord: {
        count: <uninitialized>
      },
      outer: globalEnv
    },
    fooEnv: {
      arguments: {},
      environmentRecord: {},
      outer: createCounterEnv
    }
  }
*/
// execution phase
/*
  lexicalEnv: {
    globalEnv: {
      environmentRecord: {
        counter: createCounter()
      }
      outer: null
    },
    createCounterEnv: {
      arguments: {},
      environmentRecord: {
      count: 0 
      },
      outer: globalEnv
    },
    fooEnv: {
      arguments: {},
      environmentRecord: {},
      outer: createCounterEnv
    }
  }
*/

//task 2

// const secretValue = privateVariable(42);
// function  privateVariable(a){
//     let value = a
//     return  {
//        get(){
//             return value
//         },
//         set (b){
//             value = b
//         }
//     }
// }
// console.log(secretValue.get()); // Output: 42
// secretValue.set(100);
// console.log(secretValue.get()); // Output: 100

//task 3
// const cachedCalculation = createCachingFunction();
// function createCachingFunction(){
//   const cashed = {}
//   return (num) => {
//      if(!cashed.hasOwnProperty(num)){
//         cashed[num] = num * 2
//         return `Output: ${cashed[num]} (calculated)`
//       }
//       return `Output: ${cashed[num]} (cached)`
//   }
// }
// console.log(cachedCalculation(5)); 
// console.log(cachedCalculation(5)); 

//task 4 
// const person = createPerson("Alice", 30);
// function createPerson(name = '', age = 0){
//     let _name =  name
//     let _age = age
//   return  {
//      getName(){
//       return _name 
//      },
//      getAge(){
//       return _age
//      },
//      setName(newName){
//       _name  = newName
//      },
//      setAge(newAge){
//      _age = newAge
//      }
//   }
// }

// console.log(person.getName()); // Output: "Alice"
// console.log(person.getAge()); // Output: 30
// person.setName("Bob");
// person.setAge(25);
// console.log(person.getName()); // Output: "Bob"
// console.log(person.getAge()); // Output: 25

//task 5
// function add(a, b, c) {
// return a + b + c;
// }
// function partial(callBack , ...fixedParam){
//     return (...param) => callBack(...fixedParam,...param)
// }
// const add5 = partial(add, 5);
// console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)
