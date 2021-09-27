console.log(this); // global??
console.log(this === module.exports) 

/*
    this.odd = odd;
    this.even = even;
    exports.odd = odd;
    exports.even = even;
    이런것도 가능 근데 1번 2번의 경우는 헷깔리기 때문에 사용하지 않는다.!!!!
 */

function a() {
    console.log(this === global); //function안의 this는 전역객체가 맞다.
}

a();