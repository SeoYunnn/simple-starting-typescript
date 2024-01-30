type Captain = {
    name: string;
}

interface Antman {
    name: string;
}

let c: Captain = {
    name: "캡틴",
};

let d: Antman = {
    name: "앤트맨",
};

d = c;