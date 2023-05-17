{
    // Array
    const fruits: string[] = ['🍎','🍌'];

    const scores: number[] = [1, 2, 3];
    const scores2: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]) {}

    // Tuple -> interface, type alias, class로 대체하여 사용
    let student: [string, number];
    student = ['name', 1]
    console.log(student)
    console.log(student[0])
    console.log(student[1])
    const [name, age] = student
}