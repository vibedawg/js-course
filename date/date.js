// const now = new Date()
// console.log(now)

// console.log(now.getFullYear())

// console.log(now.getMonth())

// console.log(now.getDate())

// console.log(now.getDay())

// console.log(now.getHours())

// console.log(now.getMinutes())

// console.log(now.getSeconds())

// console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41


// const bd = new Date(2007,6,10)
// console.log(bd)

// let date1 = new Date(2023, 11, 19, 17)
// let date2 = new Date()
// let difference_in_time = date2.getTime() - date1.getTime();
// console.log(Math.round(difference_in_time/(1000 * 3600)))


//HW
//lvl 2

// ex 5
// let x = prompt('Enter x')
// let y = 2*x-2
// alert(y)

// // ex 6
// let a = prompt('Enter x')
// let b = a**2 + 6*a + 9 
// alert(b)

// ex 7
// if (y == b){
//     console.log("Two answers are equal")
// }
// else if(y < b){
//     console.log("The first answer is less than the second")
// } 
// else if(y > b){
//     console.log("The second answer is less than yhe first")
// }
// else{
//     console.log("ERROR")
// }

// ex 8 
// let x = -3
// let y = x**2 + 6 * x + 9
// alert(Y: ${y})

// ex 9
// let hours = new Date (Number(prompt("Enter hours: ")))
// let ratePerHour = new Date (Number(prompt("Enter rate per hour: ")))
// let earning = hours * ratePerHour
// alert(`Your weekly earning is ${earning}`)

// ex 10
// let USERname = prompt("Enter your name: ")
// let nameLength = USERname.length
// if (nameLength > 7){
//     alert("Your name is long")
// }else{
//     alert("Your name is short")
// }

// ex 11
// let firstName = 'Akniet'
// let lastName = 'Rakhymbai'
// let firstName_length = firstName.length
// let lastName_length = lastName.length
// if (firstName_length == lastName_length){
//     console.log(`Your first and last name are the same length`)
// } else if( firstName_length > lastName_length){
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// } else if(firstName_length < lastName_length){
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// } else{
//     console.log("ERROR")
// }

// ex 12 
// let myAge = 250
// let yourAge = 25
// let older = myAge - yourAge
// console.log(`I am ${older} years older than you.`)

// ex 13
// let birthYear = new Date (Number(prompt("Enter birth year: ")))
// let age = new Date().getFullYear()
// let driveAge = age - birthYear
// if(driveAge >= 18){
//     alert(`You are ${driveAge}. You are old enough to drive`)
// }else{
//     let yearstoWaitm = 18 - driveAge
//     alert(`You are ${driveAge}. You will be allowed to drive after ${yearstoWaitm} years.`)
// }

// ex 14
// let userAge = new Date (Number(prompt("Enter number of years you live: ")))
// let seconds = new Date()
// let difference_in_time = seconds.getTime() - userAge.getTime()
// alert(`You lived ${difference_in_time} seconds.`)

// ex 15
// let nowDate = new Date()
// let year = nowDate.getFullYear()
// let month = nowDate.getMonth() + 1
// let day = nowDate.getDate()
// let hours = nowDate.getHours()
// let minutes = nowDate.getMinutes()

// console.log(`1: ${year}-${month}-${day} ${hours}:${minutes}`)
// console.log(`2: ${day}-${month}-${year} ${hours}:${minutes}`)
// console.log(`3: ${day}/${month}/${year} ${hours}:${minutes}`) 





// let date1 = new Date(2007, 7, 10, 17)
// let date2 = new Date()
// let difference_in_time = date2.getTime() - date1.getTime();
// console.log(Math.round(difference_in_time/(1000 * 3600 * 24)))


// let date1 = new Date(2007, 7, 10, 17)
// let date2 = new Date()
// let difference_in_time = date2.getTime() - date1.getTime();
// console.log(Math.round(difference_in_time/(1000 * 3600 * 24 * 7)))


// let date1 = new Date(2007, 7, 10, 17)
// let date2 = new Date()
// let difference_in_time = date2.getTime() - date1.getTime();
// console.log(Math.round(difference_in_time/(1000 * 3600 * 24 * 365)))