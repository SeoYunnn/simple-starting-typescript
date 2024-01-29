class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function fetchInfoByProfile(profile: Person | string) {
    if (profile instanceof Person) {
        // 이 블록 안에서는 profile 타입이 Person 타입으로 간주
    }
}