interface Dropdown<T> {
    title: string;
    value: T;
}

let shoppingItem: Dropdown<number> = {
    title: '길벗 책',
    value: 1
}