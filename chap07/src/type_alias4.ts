// 제네릭
type Dropdown<T> = {
    id: string;
    title: T;
}

// 유틸리티 타입
type Admin2= {
    name: string;
    age: number;
    role: string;
}

// 맵드 타입
type Picker<T, K extends keyof T> = {
    [P in K]: T[P];
};
