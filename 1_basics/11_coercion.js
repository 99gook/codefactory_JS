/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
//toString은 String으로 변환해주는 함수

// 암묵적
let test = age + '';
console.log(typeof test, test);
//'' 아무것도 없는 String을 더해주면 String으로 타입이 바뀜

console.log('98' + 2);
console.log(98 * 2);
console.log('98' - 2);
/**
 * String에는 더하기 개념 밖에 없음
 * 그런데 '98'과 2를 더하는 것은 String과 number를 더하는 것이기 때문에
 * 계산할 수 없음, 그래서 2를 String화 시켜서 98과 2의 문자 더하기? 로 이해하면 됨
 * 그래서 982가 출력되고
 * 밑에 *와 -는 String에 존재하지 않는 개념이기 때문에 number로 계산되는것임
 */

console.log('------------');
/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
//parseInt -> 정수로 변환해라
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
//parseFloat -> 실수로 변환해라
console.log(typeof +'1', +'1');

console.log('-------------------_');
/**
 * Boolean 타입으로의 변환
 */
console.log(!!'asdkfjhalksdfjasdfx');

console.log(!!'');
/**
 * String값은 bool 값으로 봤을 때
 * '' 안에 값이 있는 경우를 true로 보고
 * '' 안에 값이 없는 경우를 false로 본다
 * !는 부정, !!는 긍정
 */

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);
/**
 * array, object는 안에 값이 있든 없든 무조건 true가 나옴
 */

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우(null, undefined)
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */