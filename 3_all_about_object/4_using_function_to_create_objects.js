/**
 * Using function to create objects
 */
function IdolModel(name, year) {
    if (!new.target) { // new.target 사용 시 new 선언된 함수는 함수를 return 하고, new로 선언 x 는 undefined가 return
        return new IdolModel(name, year); // 이렇게 if 안에서 new를 return 할 수도 있음 -> 함수 안에서 같은 함수 실행
    }

    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name);


/**
 * 위 처럼 함수를 정의하면 new를 사용하던 사용하지 않던 원하는 함수를 return 할 수 있는 장점이 있음
 */


/**
 * arrow 함수에서는 생성자 함수 사용 불가능함
 */

const IdolModelArrow = (name, year) => {
    this.name = name;
    this.year = year;
};

const yuJin3 = new IdolModelArrow('안유진', 2003);
