// #2 - Developer 타입의 skill 속성을 옵셔널로 변경

type Person3 = {
    name: string;
};

interface Developer2 {
    name: string;
    skill?: string;
}

let choonsik3: Person3 = {
    name: "춘식",
};

let capt3: Developer2 = {
    name: "캡틴",
    skill: "방패 던지기",
};

choonsik3 = capt3;
capt3 = choonsik3;