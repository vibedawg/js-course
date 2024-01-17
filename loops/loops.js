// from small to large: positive step &&(<= || <)
// for(let i = 0 ; i<=10; i++){
//     console.log(i)
// } 

// for(let i = 0; i<=10; i+= 2){
//     console.log(i) // [0,2,4,6,8,10]
// }
// 
// for(let i = 0; i<=10; i+= 3){
//     console.log(i) // [0,3,6,9]
// }

// from small to large: negative step && (>= || >)
// for(let i = 50; i>=0; i--){
//     console.log(i) // [50,49,48,47 .....,0]
// }

// for(let i = 0 ; i<=100; i+=5){
//         console.log(i)
//     }
    
//  for(let i = 50; i>=0; i-=2){
//         console.log(i) 
//     }

// for(let i = 1; i<=20; i++){
//     console.log(i*3) 
// }

// for(let i = 0; i<=30; i+=2){
//     console.log(i*4) 
// }

// let sum1 = 0
// for(let i = 0; i<=20; i++){
//     sum1+= i
// } console.log(sum1)


// let sum = 0
// for(let i = 0; i<=20; i+=2){
//     sum+= i
// } console.log(sum)

// HW 
// lvl 1
// ex 1

// for(let i = 0; i<=10; i++){
//     console.log(i) 
// }

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 10)

// let i = 0
// while (i <= 10) {
//   console.log(i)
//   i++
// }
 
// ex 2
// for(let i = 10; i>=0; i--){
//         console.log(i)
// }

// let i = 10
// do {
//   console.log(i)
//   i--
// } while (i >= 0)

// let i = 10
// while (i >= 0) {
//   console.log(i)
//   i--
// }

// ex 3
// let i = 0
// let n = prompt("Enter number: ")
// for(let i = 0; i<=n; i++){
//     console.log(i)
// }

// ex 4
// for (i = 1; i <= 7; i++) {
//      line = '';
//     for (j = 1; j <= i; j++) {
//         line += '#';
//     }
//     console.log(line);
// }
// for (i = 1; i <= 7; i++){
//     console.log(`#`.repeat(i));
// }
// ex 5
// for ( let i = 0; i <= 10; i++) {
//      result = i * i;
//     console.log(i + " x " + i + " = " + result);
// }

// ex 6


// ex 7
// for(let i = 0; i<=100; i+=2){
//     console.log(i) 
// }

// ex 8
// for (i = 1; i <= 100; i += 2) {
//     console.log(i);
// }
// ex 9

// ex 10
// let sum1 = 0
// for(let i = 0; i<=100; i++){
//     sum1+= i
// } console.log(`The sum of all numbers from 0 to 100 is ${sum1}.`)


// for (i = 1; i <= 7; i+=2){
//     console.log(' '.repeat(7-i/2)+'*'.repeat(i));
// }

// for (i = 0; i < 4; i++){
//     console.log(`*`.repeat(4));
// }

// let numbers=[34,56,23,89,24]
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%2==0){
//         numbers[i]=numbers[i]*2
//         console.log(numbers[i]*2) 
//     }
//     else{
//         numbers[i]=numbers[i]*3
//         console.log(numbers[i]*3);
//     }
// }
// console.log(numbers);

// let numbers = []
// for(let i = 1; i <= 10; i++){
//      numbers.push(i)
// } console.log(numbers);

// let num = []
// for(let i = 0; i <= 100; i+=2){
//     num.push(i*3);
// }
// console.log(num);

// let A =[]
// for(let i = 0; i < 5  ; i++){
//   A.push(Math.round(Math.random()*25))
// }
// console.log(A)


// let i = 0
// while(i<100){
//     console.log(i);
//     i+=2;
// }


// let sum = 0;
// let i = 0
// while(i <=100){
//     sum += i
//     i++;
// }  
// console.log(sum);

// let i  = 1
// let sumOdd = 0
// let sumEven = 0
// while(i<=100){
//     sumOdd+=i;
//     sumEven+=i+1;
//     i+=2
// }
// console.log(sumEven);
// console.log(sumOdd)


// let i = 0
// while (i<=100){
//     if (i%2==1){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }


// let i = 0
// while (i<=100){
//     if (i%2==0){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

// let i = 100
// while (i>=0){
//     if (i%2==1){
//         i--
//         continue
//     }
//     console.log(i);
//     i--
// }

// let num = [7,10,21,6,10]
// let i = 0 
// let sum = 0
// while(i < num.length){
//     sum+=num[i]
//     i++
// }
// console.log(sum);

// 5.7 
// for (let i = 2; i <=20; i++){
//     console.log(i*20.4);
// }


