let add = function (a: number, b: number) {
    return a + b;
};

let sum = function (x: number, y: number) {
    return x + y;
};

add = sum;
sum = add;