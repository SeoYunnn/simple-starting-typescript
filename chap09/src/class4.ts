class WaterPurifier2 {
    public waterAmount: number;

    constructor(waterAmount: number) {
        this.waterAmount = waterAmount;
    }

    public wash() {
        if (this.waterAmount > 0) {
            console.log('정수기 동작 성공');
        } else if (this.waterAmount <= 0) {
            console.log('정수기 동작 실패');
        }
    }
}

const purifier2 = new WaterPurifier2(50);
console.log(purifier2.waterAmount); // 50
purifier2.wash(); // 정수기 동작 성공