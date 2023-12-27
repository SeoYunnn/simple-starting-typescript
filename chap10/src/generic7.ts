function printTextLength<T extends { length: number }>(text: T) {
    console.log(text.length);
}

printTextLength<string>('hello')