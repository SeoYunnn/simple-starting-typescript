function logText2(text: string | number) {
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }

    if (typeof text === 'number') {
        console.log(text.toLocaleString());
    }
}