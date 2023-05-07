/**
 * Super and Override
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤 
    part;
    // part라는 프로퍼티를 추가해서 정의해주고 싶으면 자식 class에 새롭게 constructor를 넣어주면 됨
    constructor(name, year, part) {
        super(name, year); //super 클래스는 부모 클래스!
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`; -> super.name이 아니라 this.name임을 기억!
        // constructor가 아닌 곳에서는 this를 사용해야 한다!
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
        // 그러나 부모 클래스의 함수를 불러올때 ``안에서 super.함수로 함수를 불러올 수 있음!(변수는 안되지만 함수는 가능)
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());