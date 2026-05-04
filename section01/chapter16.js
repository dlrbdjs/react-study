// 1. 상수 객체

const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 저장되어 있는 프로퍼티를 생성하거나, 수정, 삭제하는 것은 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;

// 새로운 값을 할당하지 못하는 것
// animal = 123;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "이규언",
    // 프로퍼티 값으로 익명 함수
    sayHi: function () {
        console.log("안녕");
    },
    // 화살표 함수
    sayBye: () => {
        console.log("잘가");
    },
    // 메서드 축약 문법
    sayYes() {
        console.log("에쓰");
    },
};

person.sayHi();
person.sayBye();
person.sayYes();
