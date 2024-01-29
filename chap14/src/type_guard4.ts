function updateInput4(textInput: number | string | boolean) {
    if (typeof textInput === "number") {
        textInput.toFixed(2);
        return;
    }
    if (typeof textInput === "string") {
        console.log(textInput.length);
        return;
    }
}

// updateInput4("hello");
updateInput4(1.0345);