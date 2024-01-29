interface Person {
    name: string;
    age: number;
    industry: "common";
}

interface Developer3 {
    name: string;
    age: string;
    industry: "tech";
}

function greet4(someone: Person | Developer3) {
    switch (someone.industry) {
        case "common":
            console.log(someone.age.toFixed(2));
            break;
        case "tech":
            console.log(someone.age.split(""));
            break;
    }
}