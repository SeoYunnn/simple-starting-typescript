interface Dropdown<T> {
    title: string;
    value: T;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    tag: string;
    description: string;
}

let shoppingDetailItem: DetailedDropdown<number> = {
    title: '길벗 책',
    description: '쉽고 유용',
    tag: '타입스크립트',
    value: 1
}