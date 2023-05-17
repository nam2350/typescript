{
    // Enum
    // 상수 값들은 한곳에 모아서 정의할수 있게 하는 타입

    // JavaScript에서는 제공하지 않는 타입니다.
    const MAX_NUM =6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({
        "MONDAY" : 0,
        "TUESDAY" : 1,
        "WEDNSEDAY" : 2,
    })
    // const dayOfToday = DAYS_ENUM.TUESDAY;
    // console.log(DAYS_ENUM.MONDAY, dayOfToday)

    // TypeScript
    enum Days {
        Monday,
        // Monday = 1,
        // Monday = '월요일',
        Tuesday ,
        Wednseday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    // console.log(Days.Friday, Days.Satarday)
    let day: Days = Days.Sunday;
    day = Days.Friday;
    day = 3;
    console.log(day)
    
    // 타입스크립트에서는 enum 사용을 자제하는게 좋다.

    // Union 타입을 사용하여 대체 가능하다.
    type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday';
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
    
}