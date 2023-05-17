{
    // Type Inference

    let text = 'hello'
    text = 'hi';
    
    function print(message: string): void {
        console.log(message)
    }
    print("hi")

    function add(x:number, y:number): number {
        return x + y;
    }

    const result: number = add(1,2);
    console.log(result);

    // 타입 추론이 가능하지만 되도록 명시하는편이 좋다.
}