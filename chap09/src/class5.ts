class Person2 {
    private name: string;
    private skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    private sayHi() {
        console.log('hi');
    }
}

const choonsik2 = new Person2('춘식이', '식빵 굽기');
// console.log(choonsik2.name); -> 접근 불가
// choonsik2.sayHi(); -> 접근 불가