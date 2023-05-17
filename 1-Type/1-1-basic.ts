// number
const num: number = 5;

// string
const str: string = 'hello';

// boolean
const bool: boolean = false;

// undefined 값이 있는지 없는지 결정되지 않은 상태
// let name: undefined; // 💩 이렇게 사용되지 않는다

let age: number | undefined // number 타입 또는 undefined가 될 수 있다.
age = undefined;
age = 1;

function find(): number | undefined{
	return 1;
}

// null 명확하게 값이 없다고 나타내주는 상태
let person: null // 💩 이렇게 사용되지 않는다.

let person2: string | null; 

// unknown 💩 어떤 타입인지 알수 없을때 사용 가능 -> 자바스크립트와 연동하여 사용하기 때문에
let notSure: unknown = 0;
notSure = 'hello';
notSure = true;

// any 💩 어떤 타입이던지 저장 가능하다
let anything: any = 0;
anything = 'hello';

// void
function print(): void {
	console.log('hello')
	return;
}

// never
function throwError(message: string): never {
    // message -> server(log)
    throw new Error(message);
    while(true) {
        // .....
    }
}