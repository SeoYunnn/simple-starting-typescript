interface Person {
    name: string;
    age: number;
}

type Adult = {
    old: boolean;
}

type Teacher = Person & Adult;