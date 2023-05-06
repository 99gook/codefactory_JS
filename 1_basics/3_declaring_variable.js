/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선안하면
 * 값을 추후 변경할 수 있다
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';
// 주석처리하고 싶은 줄에 커서를 놓고 command + / 입력하면 주석처리됨

/**
 * 선언과 할당
 * 
 * 1) 선언은 변수를 선언하는 것.
 * 2) 할당은 변수에 값을 넣어주는 것.
 */
var name = '코드팩토리';
console.log(name);

let girlFriend;
console.log(girlFriend);
// 변수의 값을 할당하지 않으면 JS에서는 undefined로 초기값이 할당된다

// const의 경우는 추후에 값을 변경하지 못하기 때문에 undefined로 초기값을 할당할 수 없음