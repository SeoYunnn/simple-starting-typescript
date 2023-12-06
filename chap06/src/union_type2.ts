interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    skill: string;
}

function introduce(someone: Person | Developer) {
    if ('age' in someone) {
        console.log(someone.age);
        return;
    }

    if('skill' in someone) {
        console.log(someone.skill);
        return;
    }
}