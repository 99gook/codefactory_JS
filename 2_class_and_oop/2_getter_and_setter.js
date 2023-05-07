/**
 * Getter and Setter
 * 
 * 둘의 주된 사용처는 private으로 선언된 값에 access하는 역할
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * get
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     * 
     * get은 무조건 return이 있어야함
     */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }
    /**
     * set은 get의 반대 기능, 값을 저장할 때 사용
     */
    set setName(name) {
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //get은 함수처럼 정의하지만, 함수는 아니기 때문에 함수처럼 정의하면 안됨


yuJin.setName = '장원영';
console.log(yuJin);

/**
 * private 값은 우리가 정의는 하고 있는 값이지만, 외부에서 접근(수정)이 불가능한 값을 의미
 */
class IdolModel2 {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

/**
 * get과 set을 사용하면 private으로 선언되어서 외부의 접근이 불가한 값들도
 * 출력이 될 수 있음
 */
const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);