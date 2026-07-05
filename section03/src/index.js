// CJS 방식
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 객체의 구조 분해 할당
// CJS 방식
// const { add, sub } = require("./math");

// console.log(add(1, 2));
// console.log(sub(1, 2));

// ES 방식
import { add, sub, add2, sub2 } from "./math.js";
console.log(add(1, 2));
console.log(sub(1, 2));

console.log(add2(1, 2));
console.log(sub2(1, 2));

// 디폴트는 마음대로 이름을 바꿔도 된다 (파일 당 한 개만 가능)
import mul from "./math.js";
console.log(mul(1, 2));

// 이렇게 같은 경로를 공유하는 경우에는 한 번에 가능
// import mul, { add, sub, add2, sub2 } from "./math.js";

// randomcolor 라이브러리 사용해 보기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
