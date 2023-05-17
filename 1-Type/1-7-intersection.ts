{
    // Intersection Type : &

    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: (workType: string) => void
    }

    // function internWork(person: Student & Worker) {
    //     console.log(person.name, person.employeeId, person.work('Development'));
    // }

    // internWork({
    //     name: 'Steve',
    //     score: 1,
    //     employeeId: 2,
    //     work: (workType) => {console.log(`${workType} Hard working!`)}
    // })
    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work('Development'));
    }
    
    internWork({
        name: 'Steve',
        score: 1,
        employeeId: 2,
        work: (workType) => {return `${workType} Hard working!`}
    })
}