interface Avenger {
    name: string;
}

interface Hero {
    skill: string;
}

function introduce2(someone: Avenger & Hero) {
    console.log(someone.name);
    console.log(someone.skill);
}

introduce2({ name: '춘식', skill: '어셈블' })