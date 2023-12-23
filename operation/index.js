// lvl 1
// let firstName = 'Akniet'
// console.log(typeof firstName)

// let country = 'Kazakhstan'
// console.log(typeof country)

// let city = 'Almaty'
// console.log(typeof city)

// let age = 16
// console.log(typeof age)

// let isMarried = false
// console.log(typeof isMarried)

// ex 2
// console.log(10 == 10)

// ex  3
// console.log(9.8 == 10)

// ex 4
// let IsGirl = false
// console.log(typeof IsGirl)
// let isRaining = false
// console.log(typeof isRaining)
// let isMarried = false
// console.log(typeof isMarried)

// let IsAnimal = true
// console.log(typeof IsAnimal)
// let IsHungry = true
// console.log(typeof IsHungry)
// let IsPregnant = true
// console.log(typeof IsPregnant)

// ex 5
// alert(4 > 3)
// alert(4 >= 3)
// alert(4 < 3)
// alert(4 <= 3)
// alert(4 == 4)
// alert(4 === 4)
// alert(4 != 4)
// alert(4 !== 4)
// alert(4 != '4')
// alert(4 == '4')
// alert(4 === '4')


// console.log(4 > 3)
// console.log(4 >= 3)
// console.log(4 < 3)
// console.log(4 <= 3)
// console.log(4 == 3)
// console.log(4 === 3)
// console.log(4 != 4)
// console.log(4 !== 4)
// console.log(4 != '4')
// console.log(4 == '4')
// console.log(4 === '4')

// lvl 2
// ex 1 
// let base = 0.5
// let height = prompt('Enter height')
// let weight = prompt('Enter weight')
// let area = base*height*weight
// alert(`The area of the triangle is ${area}`)

// ex 2
// let a = prompt('Enter a')
// let b = prompt('Enter b')
// let c = prompt('Enter c')
// let p = a+b+c
// alert(`The perimeter of the triangle is ${p}`)

// ex 3
// let x = prompt('Enter side x')
// let y = prompt('Enter side y')
// alert(Number(x*y))
// alert(Number(2*(x+y))

// ex 4 
// let r = prompt('Enter side r')
// const pi = 3.14
// let area = r*r*pi
// alert(area)
// let c = 2*pi*r
// alert(c)

// ex 5
// let x = prompt('Enter x')
// let y = 2*x-2
// alert(y)

// ex 6
// let x1 = 2
// let x2 = 2
// let y1 = 6
// let y2 = 10
// let m = (y2-y1)/(x2-x1)
// console.log(m)

// let x = prompt('Enter x')
// let y = x**2 + 6*x + 9 
// alert(y)


// console.log(!(9<3) || 12 !=6 && 27 % 5 <= 18 || 2**3 % 2==2 && 13>=4)
// true || true && true ||false && true
// true || true || false 
// true
// console.log(!(4<7) && 5!= 9 || 30 % 7 <= 14 || 2**3 % 2 ==2 || 16 >=4 )
// false && true || true || false || true
// false || true
// true

// let e = 6
// let c = 2
// let i = 9
// let h = 5
// console.log(++e / c++ + ++i * --h)
// 7 / 2 + 10 * 4 
// 3,5 + 40
// 43,5


// let f = 4
// let g = 1
// let a = 3
// console.log(++f % g++ - ++a  / --c)
// 5 % 1 - 4 / 0 
// 0 - 2
// -2


// let x = Number (prompt("Enter x number: "))
// let y = Number(prompt("Enter y number: "))
// let result = x + y
// let iscorrect = confirm(`This task is correct ${result} `)
//  iscorrect ? alert("I'm good at math") : alert("I'm sorry")


 let x = Number (prompt("Enter x number: "))
 let y = Number(prompt("Enter y number: "))
 let USERoperation= prompt("Enter operation: ")
 if (USERoperation == '+'){
    alert(`${x}+${y}=${x+y}`)
 }else if(USERoperation == '-'){
    alert(`${x}-${y}=${x-y}`)
 }else if(USERoperation == '*'){
    alert(`${x}*${y}=${x*y}`)
 }else if(USERoperation=='/'){
    alert(`${x}/${y}=${x/y}`)
 }else{
    alert('ERROR')
 }
