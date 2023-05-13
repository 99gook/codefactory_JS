/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//     showHidden: true,
// });

// circular reference -> 서로가 서로를 참조하고 있는 상태
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype); // IdolModel의 부모는 function이고
console.log(Function.prototype.__proto__ === Object.prototype); // function의 prototype의 부모는 object이다
console.log(IdolModel.prototype.__proto__ === Object.prototype);

// 모든 값들의 최상위 값은 object.prototype이다

/**
 * yujin 객체를 생성하면 yujin 객체의 __proto__는 IdolModel.prototype을 참조함
 * 그리고 IdolModel.prototype의 constructor는 IdolModel 함수를 가르키는데
 * IdolModel 함수의 prototype은 IdolModel.prototype을 가르키고
 * IdolModel 함수에서 생성자 함수를 통해 yujin 객체를 생성한 것이다
 * 
 * 정리: new 키워드로 함수의 객체를 생성할 떄는
 * 함수의 prototype 값을 객체의 __proto__에 집어넣는다
 * 그리고 그 것이 상속 체인의 바로 위 역할을 한다 로 이해
 */

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false -> 유진과 원영에 있는 프로퍼티는 각각 고유한 값이기 때문에 다른 메모리 공간에 있음

console.log(yuJin2.hasOwnProperty('sayHello')); // 상속받은 프로퍼티인지 고유의 프로퍼티인지 알 수 있는 기능

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello); // true -> 실제로 sayhello가 한 공간에 선언되어 있는 것을 알 수 있음

console.log(yuJin3.hasOwnProperty('sayHello'));

IdolModel3.sayStaticHello = function () {
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function () {
    return '안녕하세요 저는 prototype 메서드입니다!';
}

const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); //즉 object의 getprototypeof가 gaeul.__proto__를 가져온다는 것을 알 수 있음

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(ray.sayHello());

Object.setPrototypeOf(ray, IdolModel.prototype); // ray의 프로토타입을 IdolModel의 프로토타입으로 변경한다는 의미
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel); // 프로퍼티를 바꿔서 constructor도 바뀜!
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

/**
 * 결과적으로 ray 객체를 생성하고 getPrototypeOf로 ray 객체의 프로토타입을 변경시키는 것과
 * FemaleIdolModel.prototype을 IdolModel.prototype 아예 바꾸는 것은 차이가 있음
 */
