/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY -> 좋은 코드를 작성하기 위한 방법
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고한다.
 * number는 파라미터, 밑에 입력하는 직접적인 숫자는 argument라고 한다
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */
console.log('---------------');
function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));
/**
 * multiply5는 x파라미터를 받는 함수가 y를 파라미터로 받는 함수를 리턴하고
 * 또 그 함수가 z를 파라미터로 받는 함수를 리턴하는데
 * z를 파라미터로 받는 함수라 x,y,z를 차례대로 출력하는 결과값을 리턴한다
 * 따라서 2,5,7을 넣으면 그대로 2,5,7을 출력하는 것이다
 */

function multiply6(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));
//5와 6은 결과적으로 같은 함수

const multiplyTwo = function (x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log('-----------------');
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
/**
 * ...argument는 argument를 무한하게 받기 위해서 사용
 * object.values(arguments)는 사실 argument 그 자체임
 * 배열에서 key값은 index이고, value값이 argument 그 자체이기 때문임
 * 따라서 4,5,6의 key(index)는 0,1,2 / values(arguments)는 4,5,6
 * 추가적으로 reduce(a,b) => a * b 는 argument들을 다 곱하라는 의미
 */

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function (x, y) {
    console.log(x * y);
})(4, 5)
/**
 * 함수의 이름을 정의하지않으면 에러가 나는데,
 * 즉시 실행법을 사용해서 에러를 해결할 수 있음
 * 함수를 ()로 감싸고, 함수에서 필요로하는 argument를 옆에 ()로 바로 정의해주면
 * 에러를 해결할 수 있음
 */

console.log(typeof multiply);
console.log(multiply instanceof Object);

/**
 * instanceof는 좌 우측이 같은 타입인지 비교하는 것으로 이해하면 좋다
 * JS에서 모든 것들은 object이기 때문에 true가 출력된다
 */