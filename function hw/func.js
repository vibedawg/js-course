// HW 16.01.2024
// lvl 1
// ex 1
//  function fullName(a,b){
//     console.log(`Hello, ${a} ${b}`)
//  }
//  fullName("Akniet","Rakhymbai")

// ex 2  
// let firstName= prompt('Enter your first name: ')
// let lastName= prompt('Enter your  last name: ')
//  function Fullname(a,b){
//     console.log(`Hello, ${a} ${b}`)
//  }
//  Fullname(firstName,lastName)

// ex 3
// let a = Number(prompt('Enter first number: '))
// let b = Number(prompt('Enter last number: '))
// function addNumbers(a,b){
//    console.log(a+b);
// }
// addNumbers(a,b)

// ex 4
// let length = Number(prompt('Enter length: '))
// let width = Number(prompt('Enter width: '))
// function areaOfRectangle(num1,num2){
//     console.log(num1*num2)
// }
// areaOfRectangle(length,width)

// ex 5 
// let length = Number(prompt('Enter lendth: '))
// let width = Number(prompt('Enter width: '))
// function perimeterOfRectangle(num1,num2){
//     console.log(2*(num1+num2));
// }
// perimeterOfRectangle(length,width)

// ex 6
// let  height = Number(prompt('Enter height: '))
// let length = Number(prompt('Enter lenght: '))
// let width = Number(prompt('Enter width: '))
// function volumeOfRectPrism(num1,num2,num3){
//     console.log(num1*num2*num3);
// }
// volumeOfRectPrism(height,length,width)

// ex 7 circumOfCircle  areaOfCircle
// let r = Number(prompt('Enter r : '))
// function  areaOfCircle(num){
//     console.log(3.14*num**2);
// }
// areaOfCircle(r)

// ex 8 
// let r = Number(prompt('Enter r : '))
// function  circumOfCircle(num){
//     console.log(2*3.14*num);
// }
// circumOfCircle(r)

// function sum(num1,num2){
//   return num1+num2; 
// }

// function mult(num1,num2){
//  return  num1*num2;
// }
// mult(5,7);
// mult(9,3);
// sum(mult(5,7),mult(9,3))
// console.log(sum(mult(5,7),mult(9,3)));


// function a(num1,num2){
//     return num1 * num2;
// }

// function b(num1,num2){
//     return num1 / num2; 
// }

// function c(num1,num2){
//     return num1 + num2
// }

// function d(num1,num2){
//     return num1 - num2
// }
// a(65,34)
// a(23,67)
// b(78,56)
// c(a(65,34),b(78,56))
// let res = d(c(a(65,34),b(78,56)),a(23,67))
// console.log(res);


// function a(num1,num2){
//     return num1 * num2;
// }

// function b(num1,num2){
//     return num1 / num2;
// }

// function c(num1,num2){
//     return num1 - num2;
// }

// a(345,524)
// b(987,578)
// console.log(c(b(987,578),a(345,524)));


// function mult(num1,num2){
//     return num1 * num2;
// }

// function sum(num1,num2){
//     return num1 + num2
// }


// function q (num1,num2){
//     return mult(sum(num1,num2),2);
// }
// console.log(q(2,4));

// ex 11
// function weigth(mass){
//     const gravity = 9.8;
//     return mass*gravity
// }
// console.log(weigth(100));

// ex 12

// function oC(num){
//     const a = 9/5
//     const b = 32
//     return (num * a)+32
// }
// console.log(oC(32));


// ex 13
// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         return "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         return "Normal weight";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         return "Overweight";
//     } else {
//         return "Obese";
//     }
// }
// let result = calculateBMI(65, 180);
// console.log(`The person is categorized as ${result}`);


// function evens(...nums) {
//     let arrEvens = []
//     for (let num of nums) {
//         if (num % 2 == 0) {
//             arrEvens.push(num)
//         }
//     }
//     return arrEvens
// }
// console.log(evens(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 

// HW 17.01.2024
// lvl 1 
// ex 14 
// let season = prompt(Enter season: )
// function checkSeason(enterSeason) {
//     if (enterSeason ==  1 || 2 || 12 || December || January || February) {
//         return "Winter"
//     }
//     else if (enterSeason == 3 || 4 || 5 || March ||  April || May ) {
//         return "Spring"    }
//     else if (enterSeason == 6 || 7 || 8 || June || July || August) {
//         return "Summer"    }
//     else  {
//         return "Autumn"    }

// }
// console.log(checkSeason(season))


// ex 15 
// let num1 = prompt(Enter number one: )
// let num2 = prompt(Enter number two: )
// let num3 = prompt(Enter number three: )

// function findMax(a,b,c) {

//     if (a > b && a > c) {
//     console.log(a)
// }

// else if (b > c && b > a) {
//     console.log(b)
// }

// else {
//     console.log(c)
// }
// }
// findMax(num1, num2, num3)


// lvl 2
// ex 1
// function mult(num1, num2) {
//     return num1 * num2
// }

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(mult(a,x), (mult(b,y) , c)))

// ex 2 
// function solveQuadEquation(a, b, c) {
//     const d = b ** 2 - 4 * a * c
//     const x1 = (-b + Math.sqrt(d)) / (2 * a);
//     const x2 = (-b - Math.sqrt(d)) / (2 * a);
//    return[x1,x2]
// }
// console.log(solveQuadEquation(1, 7, 12));

// ex 3
// function printArray(...nums) {
//     let NewMassiv = [];
//     for (let num of nums) {
//         NewMassiv.push(num)
//     }
//     return NewMassiv;
// }
// console.log(printArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))



// expression function
// let solveQuadEquation = function(a, b, c) {
//     const d = b ** 2 - 4 * a * c
//     const x1 = (-b + Math.sqrt(d)) / (2 * a);
//     const x2 = (-b - Math.sqrt(d)) / (2 * a);
//    return[x1,x2]
// }
// console.log(solveQuadEquation(1, 7, 12));

// arrow function
// let solveQuadEquation = (a, b, c) => {
//     const d = b ** 2 - 4 * a * c
//     const x1 = (-b + Math.sqrt(d)) / (2 * a);
//     const x2 = (-b - Math.sqrt(d)) / (2 * a);
//    return[x1,x2]
// }
// console.log(solveQuadEquation(1, 7, 12));


// lvl 2 
// ex 13
// let evensAndOdds = (number) => {

//     let Evens = 0 
//     let Odds = 0
//     for(let i = 0; i <= number; i++){
//         if(i % 2 == 0){
//             Evens += i
//         }
//         else{
//             Odds += i
//         }
//     }
//     return `${Evens},${Odds}`
//   }
  
// console.log(evensAndOdds(100));

// ex 14
// let SumNum =(...nums) => {
//     let sum = 0;
//     for(let num of nums) {
//         sum+=num
//     }
//     return sum
// }
// console.log(SumNum(1,2,3))

// ex 15
// let randomUserIp = () => {
//     const a = () => Math.floor(Math.random() * 255);
//     return `${a()}.${a()}.${a()}.${a()}`;
// }

// const randomUserIP = randomUserIp();
// console.log(randomUserIP);

// ex 16
// let randomMacAddress = () => {
//     const b = () => Math.floor(Math.random() * 255);
//     return `${b()}.${b()}.${b()}.${b()}`;
// }

// const randomUserIP = randomMacAddress();
// console.log(randomUserIP);

// ex 17
// let randomHexaNumberGenerator= () => {
//     const randomHexa = Math.floor(Math.random() * 5165196).toString(16);
//     return `#${randomHexa}`;
// }
// console.log(randomHexaNumberGenerator());


// lvl 13
// ex 13
// let array = [1,2,3,4,5]
// let sum = 0
// for(let i=0;i <= array.length - 1; i++){
//     sum += array[i];
// }
// return sum/array.length;

// ex 16
// let array = [1,2,3,4,5]
// for(let i = 0; i< array.length; i++){
//     for(let j =0; j< array.length;j++){ 
//         if(i==j){
//             continue
//         }
//         console.log(array[i]*array[j])
//     }
// }


// for(let i = 1; i<= 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }


// for(let i = 1; i <= 10; i ++ ){
//     for(let j =1;j<=10; j++){
//         if(j%2==0){
//             console.log(`${i} x ${j} = ${i*j}`);
//         }
//     }
// }


// let nestedArray = [
//     [1,2,3,4,5],
//     [6,7,8,9,0],
//     [10,11,12,13,14],
//     [15,16,17,18,19]
// ]

// console.log(nestedArray[0]); //   [1,2,3,4,5]
// console.log(nestedArray[3]); //  [15,16,17,18,19]
// console.log(nestedArray[2][3]); // 13

// for(let i = 0; i < 4; i++){
//     // console.log(nestedArray[i]);
//     for(let j = 0; j < 5;j++){
//         console.log(nestedArray[i][j]);
//     }
// }


// let nestedArray = [
//     [1,2,3,4,5],
//     [6,7,8,9,0],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]

// ]
// for(let i = 0; i< 5;i++){
//     for(let j = 0; j< 6;j++){
//        if(i==j){
//         console.log(nestedArray[i][j]);
//        } 
//     }
// } // 1,7,13,19,25


// for(let i = 0; i< 5;i++){
//     for(let j = 0; j< 6;j++){
//        if(i+j==4){
//         console.log(nestedArray[i][j]);
//        } 
//     }
// } // 5,9,13,17,21

// for(let i = 0; i< 5;i++){
//     for(let j = 0; j< 6;j++){
//        if(i+j==4){
//         console.log(nestedArray[i][j]);
//        } 
//     }
// }  // 21,17,13,9,5


// for(let i = 3; i >= 0;i--){
//     for(let j = 4; j>=0;j--){
//         console.log(nestedArray[i][j]);
//     }
// } // 25,24,23,......1


// for(let i = 0; i < 5;i++){
//     for(let j = 0; j< 6;j++){
//         nestedArray[i][j]=0
//        if(i==j || i+j==4){
//         nestedArray[i][j]= 1
//        } 
//        else{
//         nestedArray[i][j]=0
//        }
//     }
// }
// console.log(nestedArray);



// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
  
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
  
//     if (isPrime) {
//       console.log(i);
//     }
//   }