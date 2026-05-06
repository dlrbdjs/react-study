// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 콜백 함수를 배열의 길이 만큼 반복
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
// 중복된 요소가 있다면 가장 앞의 인덱스
// 존재하지 않는 요소는 -1 반환
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 존재하지 않는 요소는 -1 반환
let arr4 = [1, 2, 3];
// const findedIndex = arr4.findIndex((item) => {
//     if (item % 2 !== 0) return true;
// });
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex);

// 4-1. findIndex가 필요한 이유 indexOf를 쓰면 안되나요?
let objectArr = [{ name: "이규언" }, { name: "이엉규" }];
// indexOf는 얕은 비교로 동작하기 때문에 (===) 동등 비교 연산자로 비교
// 근데 객체 값은 참조 값으로 비교하기 때문에 프로퍼티를 기준으로 비교가 이루어지지 않음
console.log(objectArr.indexOf({ name: "이규언" }));
console.log(objectArr.findIndex((item) => item.name === "이엉규"));

// 5. find
// findIndex와 굉장히 유사
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "이규언" }, { name: "엥헉헐" }];
const finded = arr5.find((item) => item.name === "엥헉헐");
console.log(finded);
