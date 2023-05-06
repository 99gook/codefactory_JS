/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push() -> array 맨 끝에 추가함 + 리턴 값으로 추가한 다음의 array 길이를 리턴함
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------_');
// pop() -> 마지막 elements를 삭제, 리턴 값은 삭제한 elements 이다
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------_');
// shift() -> 첫번째 elements를 삭제, 리턴 값은 삭제한 elements 이다
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() -> push()의 거꾸로임, array 첫번째에 추가하고 array의 길이를 리턴
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------_');

// splice() 첫번째 argument는 삭제하고 싶은 array의 시작 index, 두번째 argument는 삭제하고 싶은 array의 길이
// 리턴하게 되면 잘라진 array와 잘린 array 두 array가 리턴됨
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() -> push와 같아보이지만, push는 원래 array를 변경, concat은 원래 array를 변경x 이다
// 따라서 concat은 리턴하면 array에 변경사항이 없음
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

// slice() -> splice의 원래 array 변경 x 버전
// 유의할 점은 slice에서 두번째 argument는 그 index를 제외한 바로 앞까지 자르는 것임
// 그래서 3이면 index 2인 0,1,2만 자른다고 보면 됨
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator -> ...을 사용하면 array를 벗기고, 펼쳐서 저장한다고 보면 됨
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);
//이렇게 저장하면 array 안에 array를 저장한 형태로 출력된다


console.log('--------------');
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);
/**
 * 이렇게 펼쳐서 저장하면 아예 새로운 array로 저장된다(메모리가 다르다는 뜻
 * 그래서 비교해보면 true가 아니라 false가 출력되는 것을 알 수 있음
 */

// join() -> array 안에 있는 애들을 string으로 리턴
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() -> 오름차순 정렬, 원래 array 변경
// 오름차순
iveMembers.sort();
console.log(iveMembers);

// reverse는 내림차순
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

//sort에 argument를 정의해주면 오름차순 말고 새로운 정렬법으로 사용할 수 있다
// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);
//number의 마구잡이로 있는 숫자들이 sort에 의해 작은 숫자부터 정렬된다

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map() -> array에 있는 모든 값들을 순회하면서, 각각의 값들을 변형시키는 역할, 원래 array 변경 x
console.log('--------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers);

// filter() -> 조건에 부합하는 녀석들만 필터링되어 출력됨
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find() -> 필터를 하는데, 해당하는 첫번째 값만 리턴됨
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() -> 해당하는 index를 리턴
console.log(numbers.reduce((p, n) => p + n, 0));


//일단 여기까지 푸쉬 ---3시간 24분부터

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0))