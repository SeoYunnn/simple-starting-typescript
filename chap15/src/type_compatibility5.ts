// #1 - Person 타입에 skill 속성 추가 정의

type Person2 = {
    name: string;
    skill: string;
};

interface Developer {
    name: string;
    skill: string;
}

let choonsik2: Person2 = {
    name: "춘식",
    skill: "고구마 던지기",
};

let capt2: Developer = {
    name: "캡틴",
    skill: "방패 던지기",
};

choonsik2 = capt2;
capt2 = choonsik2;