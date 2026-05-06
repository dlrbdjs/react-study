console.log(1);

// 특정 시간이 지난 이후에 비동기적으로 실행해주는 기능
// 두 번째 인수만큼 대기했다가, 첫번째 인수의 콜백 함수를 실행해준다
setTimeout(() => {
    console.log(2);
}, 3000); // 3초 대기
console.log(3);
