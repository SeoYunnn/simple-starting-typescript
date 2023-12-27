function printTextLength2<T>(text: T[]) {
    console.log(text.length)
}

printTextLength2<string>(['a', 'b', 'c']); // 3
printTextLength2<number>([100]); // 1
printTextLength2([true, false]); // 2