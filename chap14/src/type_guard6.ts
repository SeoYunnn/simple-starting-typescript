interface Book {
    name: string;
    rank: number;
}

interface OnlineLecture {
    name: string;
    url: string;
}

function learnCourse(material: Book | OnlineLecture) {
    if ("rank" in material) {
        // 이 블록 안에서는 material 타입이 OnlineLecture 타입으로 간주됨
        material
    }
}
