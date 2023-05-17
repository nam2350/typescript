{
    // Type Aliases

    type Text = string;
    const name: string = 'text'
    const name2: Text = 'text'

    type Num = number;
    const num: Num = 1;

    type Student = {
        name: string,
        age: number
    }

    const student: Student = {
        name: 'Steve',
        age: 12
    }

    // String Literal Types

    type Name = 'name';
    let SteveName: Name;
    SteveName = 'name';

    
}