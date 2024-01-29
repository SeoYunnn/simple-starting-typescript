interface Person {
    name: string;
    age: number;
    industry: "common";
}

interface Developer {
    name: string;
    skill: string;
    industry: "tech";
}

function greet3(someone: Person | Developer) {
    if (someone.industry === "common") {
        // someone 타입은 Person 타입으로 추론
        someone
    }
}