interface NotEmpty<T> {
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// Error
// notempty1 = notempty2;
// notempty2 = notempty1;