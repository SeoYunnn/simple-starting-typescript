class WaterPurifier4 {
    #waterAmount: number;

    constructor(amount: number) {
        this.#waterAmount = amount;
    }

    public wash() {
        if (this.#waterAmount > 0) {
            console.log('정수기 동작 성공');
        }
    }
}

const purifier4 = new WaterPurifier4(30);
purifier4.wash(); // 정수기 동작 성공
// purifier4.#waterAmount = 0;
purifier4.wash(); // 정수기 동작 성공