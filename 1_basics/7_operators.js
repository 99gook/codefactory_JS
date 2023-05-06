/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-----------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let number = 1;

number++;
console.log(number);

number--;
console.log(number);
console.log('----------');


/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

/**
 * 위 console의 결과로 1과 2가 출력되는데, 
 * ++는 후위연산자로서
 * result에 number를 할당하고, 이후에 number에 ++(+1)을 한다는 의미임
 * 결과적으로 1과 2가 출력되는 것
 */

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 연산자가 앞으로 온다면 연산을 먼저 실시한다는 의미이기 때문에 
 * 두 값이 같은 값이 되는 것을 알 수 있음
 */

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진'
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 99는 작은따옴표 안에 있기 때문에 string이지만, number로 볼 수 있다
 * 따라서 '99'로 선언된 sample에 +를 붙여주면 number로 볼 수 있다
 * 하지만 선언된 변수의 타입이 변하는 것은 아님을 유의한다.
 * 또한 bool값의 경우 true는 1, false는 0을 의미하는 것 또한 알 수 있다.
 */

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 연산자와 등호를 같이 써주면 할당연산자의 기능을 하는데,
 * 연산자를 계산한 값을 반영하는 것이다
 */

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

// 위 값은 모두 true가 나옴 (값만 비교하기 때문에)

console.log(5 === 5);
console.log(5 === '5');

// 위 값은 위는 true, 밑은 false가 나옴

// 같지 않다는 != 로 표현할 수 있음

console.log('-------------');

// !== 는 ===의 반대로써, 타입까지 비교하여 같지 않다는 의미임

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);

/**
 * 삼항 비교 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다')
//만약 제일 처음 항이 true이면 중간 항이 출력되고, false라면 삼항이 출력됨

/**
 * 논리 연산자
 *
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다
// or 조건은 하나만 true여도 true를 반환한다

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 * 
 * 결론: &&인데 좌측이 false면 좌측 값(false) 반환 / ||인데 좌측이 true면 좌측 값(true) 반환
 * -> and + false = false / or + true = true 
 */

console.log('-----------');

console.log(true || '아이브');
console.log(false || '아이브');

console.log(true && true && '아이브');
/**
 * 처음 true와 우측 true && '아이브' 를 통채로 우항으로 보고 비교한다.
 * &&는 true면 우측을 출력하니 true && '아이브' 가 남음
 * 그럼 다시 true && '아이브' 를 풀면
 * 마지막으로 '아이브'가 출력되는 것을 알 수 있음
 * */

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

/**
 * name이 undefined로 선언되었는데
 * ?? 연산자는 좌측 값이 null이거나 undefined면 우측 값을 출력함
 * 따라서 name = name ?? '코드팩토리';는
 * 코드팩토리가 출력된다
 */

/**
 * name = name ?? '코드팩토리'; 와
 * name ??= '코드팩토리'; 는 서로 같은 코드이다.
 * 
 * name ??= '코드팩토리' 는 name이 null, undefined면 우측을 할당해라로 이해 ㄱ
 */

