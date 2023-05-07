/**
 * Class Keyword
 * 
 *  클래스는 oop에서 특정 객체(인스턴스)를 생성하기 위한 변수와
 *  메소드(함수)를 정의하는 일종의 틀이다.
 *  -> 정보를 일반화해서 정리하는 방법이다!
 */
class IdolModel {
    name;  // JS에서는 프로퍼티를 초기에 정의하지 않아도 constructor 내부에 정의된 값을 통해 class를 사용할 수 있다
    year;

    constructor(name, year) {
        this.name = name;  // 현재 객체의 name에 입력받는 파라미터의 name을 넣어준다는 의미
        this.year = year;
    }

    sayName() {
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

// class도 객체처럼 사용가능
console.log(yuJin.name);
console.log(yuJin.year);

console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel);  // class는 typeof를 하게되면 함수로 인식함
console.log(typeof yuJin); // class로 생성한 인스턴스는 object이다!