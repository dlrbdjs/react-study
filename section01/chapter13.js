// 1. 콜백 함수
function main(value) {
    console.log(1);
    console.log(value);
    console.log(2);
    value();
    console.log("end");
}

function sub() {
    console.log("I am sub");
}
// main(() => {
//     console.log("I am subbbbb");
// });

main(sub);

// 2. 콜백 함수의 활용
// 구조가 흡사한 함수를 만들어야할 때
// function repeat(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx);
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});
