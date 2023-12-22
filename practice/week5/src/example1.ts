//  "Hello my name is .... 2023" 을 입력 받아 slug 형식으로 출력하는 프로그램을 작성
function slug(input: string): string {
    return input
        .toLowerCase()
        .replace(/\s+/g, '-')
}

const example1: string = "Hello my name is Choonsik 2023";

const result: string = slug(example1);
console.log(`${result}`)
