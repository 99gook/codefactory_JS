/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------');

// console.log(name);
// var name = '코드팩토리'
// console.log(name);
// 다른 언어라면 변수 출력이 선언보다 위에 있어서 에러가 난다고 생각하지만
// JS는 hoisting 때문에 에러가 안남

// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */

// console.log(yujin);
// let yujin = '안유진';

/**
 * 25, 26행은 에러가 발생한다
 * 그 이유가 undefined라면 let은 호이스팅이 되지 않는 것이지만
 * 에러 문구를 확인해보면 before initialization인데
 * let은 var과 달리 초기값 undefined 할당 후 값을 재설정할 수 없기 때문이다.
 * const도 이와 같은 이유로 에러가 발생함
 * -> 호이스팅은 되지만, 에러가 발생함
 * 그래서 var말고 let과 const를 사용하는 것이다.
 * 호이스팅은 버그 발생을 유발할 수 있기 때문에
 */






