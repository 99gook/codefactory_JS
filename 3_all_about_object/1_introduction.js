/**
 * All about objects
 * 
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {} 이런 형태로
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(yuJin);

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

// 생성자 함수
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}

/**
 * 클래스는 파라미터를 컨스트럭터에서 받을 수 있지만
 * 함수는 컨스트럭트가 없기 때문에 파라미터를 함수에 정의해준다
 */

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);

/**
 * 생성자 함수에서 파라미터들을 this.name = name 형태로 정의하면
 * new 키워드를 써서 함수를 만들고 이를 출력할 수 있음
 */