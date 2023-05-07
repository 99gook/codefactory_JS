/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다 -> object를 빼고 생성되는 모든 데이터타입은 primitive
 * 2) 객체는 copy by reference다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('--------------');
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('----------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

/**
 * 위에서 A변수에 B변수를 할당하고 B변수에만 String을 추가해줬다.
 * 이후 두 변수를 출력하면 B변수에만 변경사항이 반영되어 출력된다.
 * 그런데 객체의 경우는 A객체에 B객체를 할당하고 B객체의 value 값을 변경해주고
 * 두 객체를 출력하면 변경사항이 두 객체 모두에 반영되는 것을 알 수 있다.
 * 이를 통해 primitive는 copy by value, 객체는 copy by reference인 것을 알 수 있다.
 */

originalObj = {
    name: '최지호',
    group: '코드팩토리',
};
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};
console.log(originalObj === cloneObj);

/**
 * 포인터 개념으로 이해하면 편할듯
 * copy bu value는 값 자체에 접근하지만 copy by reference는 주소에 접근하기 때문에 변경사항이 모두에게 영향을 주는 것
 */

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator -> copy by value(object를 새로 선언하는 것이기 때문에)
 * 그냥 객체를 복사하면 객체의 주소를 복사하는 것이기 때문에 같은 객체가 됨
 * 하지만 spread Operator로 array를 펼쳐서 새로운 array에 저장하면 새로운 객체가 탄생하기 때문에
 * 값 비교시에 false가 나오는 것을 알 수 있다
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
}
console.log(yuJin7);

//선언하는 순서가 중요함, 프로퍼티 선언 시점에 따라 값이 덮어씌워져서 출력되기 때문에

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);