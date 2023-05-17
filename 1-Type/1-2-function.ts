// {
//     // JavaScript
//     function jsAdd(num1, num2) {
//         return num1 + num2;
//     }
// }

// {
//     // TypeScript
//     function tsAdd(num1: number, num2: number): number {
//         return num1 + num2;
//     }
// }

// {
//     // JavaScript
//     function jsFetchNum(id) {
//         // code....
//         // code....
//         // code....
//         return new Promise((resolve, reject) => {
//             resolve(100)
//         })
//     }
// }

// {
//     // TypeScript
//     function tsFetchNum(id: string): Promise<number> {
//         // code...
//         // code...
//         // code...
//         return new Promise((resolve, reject) => {
//             resolve(100)
//         })
//     }
// }

{
    // JavaScript => TypeScript
    // Optional Parameter
    function printName(firstNmae: string, lastNmae?: string){
        console.log(`${firstNmae} ${lastNmae}`);
    }

    printName("Steve", "Jobs");
    printName("Steve");

    // Default Parameter
    function printMessage(message: string = 'Hello') {
        console.log(message)
    }
    printMessage()

    // Rest Parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumbers(1,2))
    console.log(addNumbers(1,2,3))
    console.log(addNumbers(1,2,3,4))
}