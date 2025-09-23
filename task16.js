// task  1 
//version 1
// function Calculator() {}
//   Calculator.prototype={
//   add(a, b) {
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     return a / b;
//   }
// };


// const calculator = new Calculator();
// console.log(calculator.add(10, 5));
// calculator.subtract(10, 5);
// calculator.multiply(10, 5);
// calculator.divide(10, 5);

//version 2
// Function.prototype.createMethods = function(objectOfMethods) {
//   for(const method in objectOfMethods) {
//     this.prototype[method] = objectOfMethods[method]
//   }
// } 
// function Calculator(){
// }

// const object = {
//     add(a, b) { 
//     return a + b;
//   },
//   subtract(a, b) {
//     return a - b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     return a / b;
//   }
// }
// Calculator.createMethods(object)
// const calculator = new Calculator();
// console.log(calculator.add(1,5))



//task 2
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.stomach = []
// }
//     Person.prototype.eat = function(food){
//         if(this.stomach.length < 10) {
//             this.stomach.push(food)
//             return this.stomach
//         }
//     }
//     Person.prototype.poop = function () {
//         this.stomach = []
//         return this.stomach 
//     }
//     Person.prototype.toString = function (name,age)  {
//         return `${this.name}, ${this.age}`
//     }
//     Person.prototype.compareAge = function (other) {
//        if(other.age > this.age) {
//         return `${other.name} is older than me.`}
//        else if(other.age < this.age) {
//         return `${other.name} is younger than me.`}
//        else {
//         return `${other.name} is the same age as me.`
//        }
//     }

// const p1 = new Person("Samuel", 24)
// const p2 = new Person("Joel", 36)
// const p3 = new Person("Lily", 24)
// console.log(p1.compareAge(p2), // "Joel is older than me."
// p2.compareAge(p1), // "Samuel is younger than me."
// p1.compareAge(p3), // "Lily is the same age as me."
// p1.eat("apple"),
// p1.toString())// "Name, Age"

//task 3

// function Car(model, milesPerGallon){
//     this.model = model
//     this.milesPerGallon = milesPerGallon
//     this.tank = 0
//     this.odometer = 0
// }

//     Car.prototype.fill = function(gallons){
//       this.tank += gallons;
//       return this.tank
//     }

//      Car.prototype.drive = function(distance){
//       const driveableMiles = this.tank * this.milesPerGallon;
//       if (distance <= driveableMiles) {
//         this.odometer += distance;
//         this.tank -= distance / this.milesPerGallon;
//         return this.odometer
//       } else {
//         this.odometer += driveableMiles;
//         this.tank = 0;
//         return `I ran out of fuel at ${this.odometer} miles!`;
//       }
//     }
  

// const car1 = new Car("Toyota", 25);
// console.log(car1.fill(2)); // tank = 2 gallons
// console.log(car1.drive(30)); // drives 30 miles, uses 1.2 gallons
// console.log(car1.odometer);  // 30
// console.log(car1.tank);      // 0.8

// console.log(car1.drive(100)); // "I ran out of fuel at 80 miles!"

//task 4 
// function Person(name, age) {
//    this.name = name
//    this.age = age 
// }

// function Baby(name, age, favoriteToy) {
//   Person.call(this, name, age); 
//   this.favoriteToy = favoriteToy;
// }

//   Baby.prototype.play = function() {
//   return `Playing with ${this.favoriteToy}`;
// }

// const baby = new Baby("Tommy", 2, "ball");
// console.log(baby.play()); 

//task 5
//version 1
// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
//   this.isPlaying = false;
// }

// Song.prototype.play = function() {
//   this.isPlaying = true;
//   return ${this.title} started to play;
// };

// Song.prototype.stop = function() {
//   this.isPlaying = false;
//   return ${this.title} stopped;
// };

// function Playlist() {
//   this.songs = [];
//   this.currentIndex = 0;
// }

// Playlist.prototype.add = function(song) {
//   this.songs.push(song);
// };

// Playlist.prototype.play = function() {
//   if (this.currentIndex < this.songs.length) {
//     return this.songs[this.currentIndex].play();
//   }
// };

// Playlist.prototype.stop = function() {
//   if (this.currentIndex < this.songs.length) {
//     return this.songs[this.currentIndex].stop();
//   }
// };

// Playlist.prototype.next = function() {
//   if (this.currentIndex < this.songs.length - 1) {
//     this.songs[this.currentIndex].stop();
//     this.currentIndex = this.currentIndex + 1
//     return this.songs[this.currentIndex].play();
//   }
// };

// const playlist = new Playlist();
// const heyJude = new Song("Hey Jude", "The Beatles");
// const jaded = new Song("Jaded", "Aerosmith");

// playlist.add(heyJude);
// playlist.add(jaded);

// console.log(playlist.play());  
// console.log(playlist.next());  
// console.log(playlist.next());  
// console.log(playlist.stop());  
// console.log(playlist.play());

//version 2

// Function.prototype.createMethods = function(objectOfMethods) {
//   for(const method in objectOfMethods) {
//     this.prototype[method] = objectOfMethods[method]
//   }
// } 

// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
//   this.isPlaying = false;
// }

// const objectSong = {
//   play: function() {
//     this.isPlaying = true;
//     return `${this.title} started to play`;
//    },

//   stop: function() {
//     this.isPlaying = false;
//     return `${this.title} stopped`;
//   }
// }

// Song.createMethods(objectSong)

// function Playlist() {
//       this.songs = [];
//       this.currentIndex = 0;
//     }

//  const objectPlaylist = {
//     add: function(song) {
//       this.songs.push(song);
//     },

//     play: function() {
//       if (this.currentIndex < this.songs.length) {
//         return this.songs[this.currentIndex].play();
//       }
//     },

//     stop: function() {
//       if (this.currentIndex < this.songs.length) {
//         return this.songs[this.currentIndex].stop();
//       }
//     },

//     next: function() {
//       if (this.currentIndex < this.songs.length - 1) {
//         this.songs[this.currentIndex].stop();
//         this.currentIndex = this.currentIndex + 1;
//         return this.songs[this.currentIndex].play();
//       }
//     }
    
//    };

// Playlist.createMethods(objectPlaylist)

// const playlist = new Playlist();
// const heyJude = new Song("Hey Jude", "The Beatles");
// const jaded = new Song("Jaded", "Aerosmith");

// playlist.add(heyJude);
// playlist.add(jaded);

// console.log(playlist.play());  
// console.log(playlist.next());  
// console.log(playlist.next());  
// console.log(playlist.stop());  
// console.log(playlist.play()); 
