/**
 * Static Keyword
 * 
 * static은 객체에 귀속이 되는 것이 아니라 클래스에 귀속시킬 수 있음
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 * 
 * static 패턴이 가장 많이 쓰이는 형태인데
 * 단순히 하나의 constructor 형태로 인스턴스들을 반환받지 않고,
 * 미리 어떠한 데이터를 받아 인스턴스를 만들지 정의해놓을 수 있다
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel(
            object.name,
            object.year,
        );
    }
    //object.name / year 를 세팅

    static fromList(list) {
        return new IdolModel(
            list[0],
            list[1],
        );
    }
    //list[0] / [1] 을 세팅
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);