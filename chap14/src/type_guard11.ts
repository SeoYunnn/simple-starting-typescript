function sayHi(message: string | null) {
    // if 구문을 쓰는 경우
    if (message === null) {
        return;
    }

    message

    if (message!.length >= 3) {
        console.log(message);
    }
}
