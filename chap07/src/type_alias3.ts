// interface 상속
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    skill: string;
}

const choonsikE: Developer = {
    name: '춘식',
    age: 22,
    skill: '개발',
};

// type 상속
type Person2 = {
    name: string;
    age: number;
}

type Developer2 = {
    skill: string;
}

type RyanE = Person2 & Developer2;

const ryanE: RyanE = {
    name: '라이언',
    age: 22,
    skill: '보안'
};
