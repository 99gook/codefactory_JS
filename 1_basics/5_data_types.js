/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 * 
 */

/**
 * Number 타입
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity;
const nInfinity = -infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * String 타입
 */
const codefactory = '코드팩토리';
console.log(typeof codefactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면된다.
 */
const iveYujin = '아이브\n안유진';
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);

/**
 * 숫자 1키의 왼쪽에 있는 원 표시를 누르면 작은따옴표 2개가 출력됨(글자가 영어일 때)
 * 그럼 그 작은따옴표안에서 내가 엔터, 탭, 백슬래쉬를 입력한 대로 출력됨
 * -> Escaping Character들을 사용해서 복잡하게 작성할 필요가 없다는 뜻
 */

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('------------------');
//Template Literal은 작은따옴표가 아니다! 1왼쪽에 있는 원표시를 정확하게 사용해주어야함!

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용한다.
 */
let init = null;
console.log(init);
console.log(typeof init);
console.log('----------');


/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 
 * 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);
// symbol은 유일무이한 값이기 때문에 같은 값이더라도 false가 출력된다

/**
 * Object 타입
 * 
 * Map
 * 키:밸류의 쌍으로 이루어져있다.
 * key:value
 */
const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */
const iveMenbersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMenbersArray);

/**
 * index
 * 
 * 0부터 시작한다.
 * 1씩 올라갑니다.
 */
console.log(iveMenbersArray[0]);
console.log(iveMenbersArray[5]);

iveMenbersArray[0] = '코드팩토리';
console.log(iveMenbersArray);
console.log(typeof iveMenbersArray);

/**
 * static typing - > 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * ex) C언어
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * Js -> dynamic typing
 */









