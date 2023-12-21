class Person {
    name: string;
    skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }
}

const choonsik = new Person('춘식이', '고구마 던지기');
console.log(choonsik.name); // 춘식이
choonsik.name = '라이언';
console.log(choonsik.name); // 라이언