/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
    console.log(numberOne);
}

// levelOne();

function levelOne() {
    var numberOne = 40;

    console.log(numberOne);
}

// levelOne();

console.log(numberOne);

// 모든 선언은 가장 가까운 scope에 영향을 받음

function levelOne() {
    var numberOne = 40;

    function levelTwo() {
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numberTwo); -> 하위 scope에는 접근 x

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
    var numberThree = 100;

    functionTwo();
}

function functionTwo() { // Js는 lexical scope 이기 때문에 global scope인 numberThree = 3 에 접근함
    console.log(numberThree);
}

functionOne();

var i = 999;

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`) // i 값이 10으로 변경됨

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`i in global scope : ${i}`); // i 갑이 999임

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
