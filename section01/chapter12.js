function funcA() {
    console.log("funcA");
}

// 함수 자체를 변수에 담는다
let varA = funcA;
console.log(funcA);

// 1. 함수 표현식
// 호이스팅의 대상이 되지 않음
// 익명 함수
let varB = function funcB() {
    console.log("funcB");
};

varB();
// funcB(); // 선언되지 않았으므로 실행 안됨

// 2. 화살표 함수
let varC = () => {
    return 1;
};
// 위와 동일한 표현식
let varD = () => 1;

console.log(varC());
console.log(varD());

let varE = (value) => value + 1;
console.log(varE(1));

let varF = (value) => {
    console.log(value);
    return value + 1;
};
console.log(varF(10));
