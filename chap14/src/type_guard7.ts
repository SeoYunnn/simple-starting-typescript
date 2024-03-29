interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function isPerson(someone: Person | Developer): someone is Person {
    return (someone as Person).age !== undefined;
}

function greet(someone: Person | Developer) {
    if ("age" in someone) {
        console.log("사람의 나이는 ", someone.age);
    } else {
        console.log("개발자의 스킬은 ", someone.skill);
    }
}