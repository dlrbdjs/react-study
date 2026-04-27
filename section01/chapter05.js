// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

// 음/양의 무한대
let inf = Infinity;
let mInf = -Infinity;

// Not a Number
let nan = NaN;
// console.log(1 * "hello")

// 2. String
let myName = "이규언";
let myLocation = "수유";
let introduce = myName + myLocation;
console.log(introduce);

// 백틱 안에서는 동적으로 변수를 넣을 수 있다
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = false;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
// 초기화를 널로 한 느낌
let empty = null;

// 5. Undefined Type
// 변수를 선언하고 할당을 안하면 자동으로 들어감
let none;
console.log(none);