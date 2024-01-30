type Person = {
    name: string;
}

interface Developer {
    name: string;
    skill: string;
}

let choonsik: Person = {
    name: "춘식",
};

let capt: Developer = {
    name: "캡틴",
    skill: "방패 던지기"
};

choonsik = capt;
