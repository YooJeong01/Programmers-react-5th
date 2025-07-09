
let multyplier = 2;
function multyply(n:number):number{
    return n*multyplier;
}
console.log(multyply(8));
multyplier = 5;
console.log(multyply(8));

// 입력된 값은 동일한 8을 넣었지만 출력값이 다르다 -> 비순수함 (불순함)




function greet(name:string):string{
    console.log(`Hello ${name}!`);
    
    return `Hello ${name}!`
}

console.log(greet('진우'));
console.log(greet('진우'));

// 출력 결과는 같지만, 내가 해야하는 일 이외의 다른 일까지 처리함 -> 불순한 함수
// 콘솔에 출력이 발생 -> side Effect(부수 효과) 발생!




/**

입력 -> 출력        : 결과는 오직 입력에만 따라야 함
외부 변수 사용 x    : 외부 상태에 의존하면 순수하지 않음
예측 가능성         : 같은 인자 -> 항상 같은 결과

*/


/**

서버 데이터 구조가 바뀌는 경우, 서버가 닫히는 경우는? 
-> fetch도 외부 변수를 참조하는거다

*/
async function fetchUser(userId:string = ''){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!response.ok){ throw new Error('유저 정보를 가져오지 못했습니다.');}

        const user = await response.json();
        console.log(user);

        const userEl = document.getElementById('user-info');
        if(userEl){
            userEl.textContent=`이름 : ${user.name}, 이메일 : ${user.email}`
        }         
    }
    catch(err){
        // type narrowing
        if(err instanceof Error){
            console.error('에러 발생!', err.message);
        }
    }
}


/**

Side Effect 유발하는 코드

DOM 조작 (document.getElementById)
브라우저 API 호출 (setTimeout, setInterval)
로컬 스토리지 접근
서버 요청 (fetch, xhr, axios)
콘솔 출력 (console.log)
상태 저장소에 쓰기/읽기 (contextAPI, Zustand, Redux, RTX)

*/






