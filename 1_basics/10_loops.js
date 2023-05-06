/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//중첩 루프 -> 안에서부터 풀면됨

console.log('---------------')

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력해라
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square)

/**
 * for...in
 */
const yujin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}

console.log('-------------')

for (let key in yujin) {
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMembersArray) {
    console.log(key);
    //key 값을 불러옴
    console.log(iveMembersArray[key]);
    //key에 해당하는 Array 값을 불러옴
}

//Array에서는 key값이 index 값인 것을 알 수 있다

/**
 * for...of
 */
for (let value of iveMembersArray) {
    console.log(value);
}

//for in 은 key 값을 for of 는 value 값을 불러올 수 있다

/**
 * While
 */
let number = 0;

while (number < 10) {
    number++;
}
//while의 조건이 참이면 body를 계속 실행함

console.log(number);

/**
 * do...while
 */
number = 0;

do {
    number++;
} while (number < 10);

console.log(number);

/**
 * 둘의 차이는 while은 선 조건 후 실행
 * do_while은 선 실행 후 조건 임
 * 하지만 do_while은 잘 사용하지 않는다
 */

/**
 * break
 */

console.log('--------------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('-------------');
number = 0;

while (number < 10) {
    if (number === 5) {
        break;
    }

    number++;
    console.log(number);
}

/**
 * 위 루프는 0 1 2 3 4 가 출력되는데
 * 아래 루프는 1 2 3 4 5 가 출력됨
 * 
 * 위 루프는 0부터 시작해서 0부터 출력하는데
 * 아래 루프는 0부터 시작하지만 break에 걸리지 않으면
 * ++로 1을 더한 상태로 출력함
 * 따라서 아래 루프는 1부터 출력되는 것이다.
 * 만약 루프를 실행하다가 break 조건에 걸리면 가장 가까운 루프를 종료한다
 */

/**
 * continue
 */
console.log('---------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}


console.log('----------------');
number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }

    console.log(number);
}

/**
 * continue는 continue의 조건에 걸리는 루프만 빼고
 * 나머지는 그대로 실행하는 조건이다
 */


