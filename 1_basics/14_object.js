/**
 * Object / 객체
 */

// key : value pair(쌍)
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () {
        return `${this.name}이 춤을 춥니다.`;
    }
};

/**
 * JS에서 this는 함수가 정의되어 있는 객체를 가리킨다
 * this.name이 의미하는 것은
 * 함수가 정의되어 있는 객체(this)에서 name을 불러오겠다는 뜻
 */

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

/**
 * key값에 변수를 넣고 싶으면 [] 안에 변수를 넣으면 됨
 */
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function () {
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

//해당하는 키 값에 새로운 value 값을 할당
yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

//존재하지 않는 키값을 넣으면 새로 생성됨
yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

//해당하는 key값의 value 값을 삭제
delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; -> 위에서 wonYoung은 name과 group을 가지는 객체로 정의되었는데
// 밑에서 wonYoung을 아무값도 가지지 않는 객체로 정의하면 에러가 발생
// wonYoung은 const로 선언되었기 때문에!

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);
// 이렇게 프로퍼티값은 변경가능


/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

/**
 * 만약 key값과 value의 String이 동일하면 value의 String을 생략할 수 있음
 * 그럼 해석할 때, 해당하는 String의 key값, : 해당하는 String의 value 값으로 해석하면 된다
 */
const yuJin3 = {
    name: name,
    name,
};
console.log(yuJin3);