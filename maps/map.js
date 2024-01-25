// const nums =[1,2,3,4,5]
// let doubleNums =nums.map((num) =>{
//     return num * 2
// })
// console.log(doubleNums);

// const names=['akniet','symbat','maga','jiba']
// let upperName = names.map((name) => {
//     return name.toUpperCase()

// }
// )
// console.log(upperName);

// const names=['akniet','symbat','maga','jiba']
// let NameLength = names.map((name) => {
//     return name.length

// }
// )
// console.log(NameLength);

// const names=['akniet','symbat','maga','jiba']
// let NameShift = names.map((name) => {
//     return name.slice(0,1)

// }
// )
// console.log(NameShift);

// const names=['akniet','symbat','maga','jiba']
// let NameShift = names.map((name) => {
//     return name.slice(0,3)

// }
// )
// console.log(NameShift);


// const users = [
//     {
//       name: 'Akniet',
//       age:16
//     },
//     {
//       name:'Symbat',
//       age:15
//     },
//     {
//       name:'Maga',
//       age:17
//     }
//   ]

// let age = users.map((x) =>{
//     return x.age
// }
// )
// console.log(age);

// let info = users.map((a)=>{
//     return {name: .name}
// }
// )
// console.log(info);



// const users = [
//     {
//       name: 'Akniet',
//       birthYear: 2007
//     },
//     {
//       name:'Symbat',
//       birthYear:2008
//     },
//     {
//       name:'Maga',
//       birthYear: 2006
//     }
//   ]

//   let info = users.map((a)=>{
//     return {name: a.name, age: 2024 - a.birthYear}
// }
// )
// console.log(info);



// HW 25.01.2024
// lvl 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// ex 3
countries.forEach((country)=>{
    console.log(country);
})

// ex 4
names.forEach((name)=>{
    console.log(name);
})

// ex 5
numbers.forEach((number)=>{
    console.log(number);
})

// ex 6
let Uppercountries = countries.map((country)=>{
    return country.toUpperCase()
})
console.log(Uppercountries);

// ex 7
let countriesLength = countries.map((country)=>{
    return country.length
})
console.log(countriesLength);

// ex 8
let sqrnumber = numbers.map((number)=>{
    return number**2
}) 
console.log(sqrnumber);

// ex 9
let UpperNames = names.map((name)=>{
    return name.toUpperCase()
})
console.log(UpperNames);

// ex 10
let info = products.map((fullInfo)=>{
    return fullInfo.price

})
console.log(info);






