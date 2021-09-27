const {odd, even}= require('./var.js') //현재 폴더에서 var.js를 가져오겠다. 구조할당 방식.ㅊ

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }

}

module.exports = checkOddOrEven; // 다시 받은걸 넘겨 줄수도 있다.

