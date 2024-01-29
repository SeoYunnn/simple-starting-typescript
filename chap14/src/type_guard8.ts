interface Hero {
    name: string;
    nickname: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer2 {
    name: string;
    age: string;
    skill: string;
}

function isPerson2(someone: Hero | Person | Developer2): someone is Person {
    return typeof (someone as Person).age === "number";
}

function greet2(someone: Hero | Person | Developer2) {
    if (isPerson2(someone)) {
        console.log(someone.age);
    }
}