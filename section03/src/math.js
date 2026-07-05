// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// CJS 방식
// module.exports = {
//     add,
//     sub,
// };

// ES 방식
export { add, sub };

export function add2(a, b) {
    return a + b;
}

export function sub2(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}
