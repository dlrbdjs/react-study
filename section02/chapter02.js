function returnFalse() {
    console.log("False 함수");
    // return false;
    return undefined;
}

function returnTrue() {
    console.log("True 함수");
    // return true;
    return 123;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
// function printName(person) {
//     if (!person) {
//         console.log("person에 값이 없음");
//         returnFalse;
//     }
//     console.log(person.name);
// }

function printName(person) {
    const name = person && person.name;
    // A가 truthy면 B 반환
    // A가 falsy면 A 반환

    console.log(name || "person의 값이 없음");
    // A가 truthy면 A 반환
    // A가 falsy면 B 반환
    // 따라서 name이 undefined면 String 반환
}
printName();
printName({ name: "이규언" });
