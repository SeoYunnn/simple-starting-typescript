class Person3 {
    protected name: string;
    protected skill: string;

    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }

    protected sayHi(): void {
        console.log('hi');
    }
}

class Developer extends Person3 {
    constructor(name: string, skill: string) {
        super(name, skill);
        this.sayHi();
    }

    coding(): void {
        console.log('fun doing ' + this.skill + ' by ' + this.name);
    }
}

// const choonsik3 = new Person3('춘식이', '츄르 먹기');
// choonsik3.sayHi();

const ryan = new Developer('라이언', '고구마 수확');
ryan.coding();