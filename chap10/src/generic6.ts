function printKeys<T extends keyof { name: string; skill: string; }>(value: T) {
    console.log(value);
}
