// 함수
// 호이스팅
// -> 선언문을 호출문보다 아래에 두어도 호이스팅(끌어올리기) 되어서 실행이 잘 된다
function getArea(width, height) {
    function another() {
        // 중첩 함수
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);

another(); // 실행 안됨

console.log(getArea(30, 20));

getArea(120, 200);
