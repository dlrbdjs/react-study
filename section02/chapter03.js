// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 원소들이 각각 순서대로 변수에 할당이 된다
let [one, two, three] = arr;
console.log(one, two, three);

let [one1, two1] = arr;
console.log(one1, two1);

let [one2, two2, three2, four2 = 4] = arr;
console.log(one2, two2, three2, four2);

// 2. 객체의 구조 분해 할당
let person = {
    name: "이규언",
    age: 25,
    hobby: "game",
};

// 무조건 프로퍼티 이름이 동일해야 하기 때문에 age를 myAge로 꺼내고 싶으면 밑에 처럼 입력
let { name, age: myAge, hobby, carry = true } = person;
console.log(name, myAge, hobby, carry);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, carry }) => {
    console.log(name, age, hobby, carry);
};
func(person);
func();
