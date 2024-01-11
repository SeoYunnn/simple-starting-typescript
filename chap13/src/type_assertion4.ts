interface Books {
    shuffle: Function
}

function shuffleBooks(books: Books | null) {
    let result = books!.shuffle();
    return result;
}