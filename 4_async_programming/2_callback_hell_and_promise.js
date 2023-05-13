/**
 * Callback - 특정 작업이 끝나고 다시 불리는 함수(정의가 되고 바로 실행되지 않음)
 */
function waitAndRun() {
    setTimeout(() => {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

function waitAndRun2() {
    setTimeout(
        () => {
            console.log('1번 콜백 끝');
            setTimeout(() => {
                console.log('2번 콜백 끝');
                setTimeout(() => {
                    console.log('3번 콜백 끝');
                }, 2000);
            }, 2000);
        }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});
// resolve는 파라미터를 반환하는데, then을 사용하면 파라미터 반환 이후에 콜백을 사용할 수 있게 함

// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        // if(xxx){
        //     resolve('성공')
        // }else{
        //     reject('에러');
        // }
        resolve('에러');
    }, seconds * 1000);
});

// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('--- finally ---');
//     });

Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res) => {
    console.log(res);
});
// 가장 느린 함수 기준으로 then이 불림(일단 실행은 동시임)

/**
 * resolve를 실행하면 then을 실행할 수 있고,
 * reject를 실행하면 catch를 실행할 수 있다.
 */