{
    // Type Assertions 💩
    
    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log(<string>result.length);

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers?.push(2)

    console.log(numbers)
}