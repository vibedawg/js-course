// const userName1 = {
//     name: "Akniet",
//     password: "070710",
//     id: 70710601011,
//     email: "lolkekakniet@mail.ru",
//     cart:[],
//     purchases:[],
//     purchase:function(product){
//         this.purchases.push(product)
//     },
//     addToCart:function(product){
//         this.cart.push(product)
//     }
// }
// // console.log(userName.name) // "Akniet"
// // console.log(userName.id) // 70710601011


// // userName.address = 'Maulenova 92'
// // console.log(userName.address); // қосу

// // userName.password = "111223344"
// // console.log(userName.password); // өзгерту

// // delete userName.name;

// const userName2 = {
//     name: "Symbat",
//     password: "030640",
//     id: 72310651014,
//     email: "lolkeksymbat@mail.ru",
//     cart:[],
//     purchases:[],
//     purchase2:function(product){
//         this.purchases.push(product)
//     },
//     addToCart:function(product){
//         this.cart.push(product)
//     }
// }


// const product = {
//     name: "Air Pods Pro",
//     id: 3456789,
//     price: 119990,
//     description: "Беспроводная зарядка, Быстрая зарядка, Голосовой помощник, Отслеживания движений головы, Защита от пота",
//     credit:'yes',
//     review:["Good job",'Very good','Nice']

// }

// userName1.purchase(product)
// userName1.addToCart(product)
// console.log(userName1.purchases);
// console.log(userName1.cart);
// const math ={
//     className:"math",
//     teacher:"Mr.Islam",
//     timetable:[{
//         day:'Monday',
//         time:"15:00"
//     },
//     {
//         day:'Wednesday',
//         time:'9:00'
//     }
// ]
// }

// const english ={
//     className:"math",
//     teacher:"Mr.Islam",
//     timetable:[{
//         day:'Monday',
//         time:"15:00"
//     },
//     {
//         day:'Wednesday',
//         time:'9:00'
//     }
// ]
// }

// const student1 = {
//     id:234,
//     university: "Some university",
//     year: 1,
//     firstname: "John",
//     lastname:"John",
//     classes: [
//         {
//         class: math,
//         grades:[4,5,4,4,4,5],
//         attendance: [
//             { date: new Date (2024,0,18), attended:false},
//             { date: new Date (2024,0,18), attended:false},
//             { date: new Date (2024,0,18), attended:false}
//         ]

//     },
// {
//     class: english,
//     grades:[5,5,5,4,4,5],
//     attendance: [
//         { date: new Date (2024,0,10), attended:false},
//         { date: new Date (2024,0,12), attended:false},
//         { date: new Date (2024,0,14), attended:false}
//     ]
// }
//     ]
// }
// console.log(student1.classes[0].attendance);
// console.log(student1.classes[1].grades);

// english.timetable.push({day:'Saturday',time:"12:00"})
// console.log(english);

// english.classroom=307
// console.log(english);

// english.teacher = "Mr.Aikhan"
// console.log(english);

// english.studentsNumber  = 20
// console.log(english);

// english.studentsNumber +=1
// console.log(english);
 
// for(let timetableItem  of english.timetable){
//     timetableItem.time = "10:00"
//     console.log(timetableItem);
// }

// for(let attendanceItem  of student1.classes[0].attendance){
//       attendanceItem.attended = true
//     console.log(attendanceItem);
// }


// let sum = 0
// for(let x  of student1.classes[1].grades){
//     sum += x
// }
// console.log(sum/student1.classes[1].grades.length);


// for(let i of student1.classes[1].attendance){
//     console.log(i);
// }


// for(let i of student1.classes[1].attendance){
//     i.topic='Loops'
//     console.log(i);
// }


