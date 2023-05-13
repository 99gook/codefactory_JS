/**
 * Async / Await
 * 
 * await을 했을 때 쓰레드는 막히지 않는다!
 * 
 * + await은 promise에만 사용할 수 있다
 */
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('에러');
    }, seconds * 1000)
});

async function runner() {
    try {
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    } catch (e) {
        console.log('---catch e---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}

runner();