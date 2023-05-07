/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner() {
    try {
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!');
        // 에러가 throw 된 이후는 함수가 중지됨 -> 이후 바디는 출력 x
        // catch가 사용되면 throw에서 에러를 출력하고 바로 catch문으로 이동함

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e); // 에러 구문 출력
    } finally {
        console.log('---finally---'); // 에러가 나든 안나든 무조건 실행되는 부분
    }
}
runner();