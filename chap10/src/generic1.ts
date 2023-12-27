function getText<T>(text: T){
    return text;
}


const myString = getText<string>('hi');
const myNumber = getText<number>(100);