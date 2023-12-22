// 정규 표현식을 사용하지 않고 메서드를 사용할 때

const log = console.log

function stringToSlug(message: string): string {
    return message.split(" ").join("-").toLowerCase();
}

const result_: string = stringToSlug('Hello my name is Choonsik 2023');
log(result_);