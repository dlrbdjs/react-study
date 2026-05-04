// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이규언",
    age: 25,
    hobby: "잠자기",
    job: "백수",
    extra: {},
    10: 20,
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 존재하지 않는 프로퍼티에 접근하면 undefined
let name = person.name;
console.log(name);

// 존재하지 않는 프로퍼티에 접근하면 undefined
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.addr = "수유";
person["favoriteFood"] = "고기";
console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "be developer";
person["favoriteFood"] = "삼겹살";
console.log(person);

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
delete person.abc; // 없는 프로퍼티를 해도 오류가 나지 않음
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1);
let result2 = "abc" in person;
console.log(result2);
