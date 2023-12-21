// resolve WaterPurifier class problem

class WaterPurifier3 {
    private readonly waterAmount: number;

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

const purifier3 = new WaterPurifier3(30);
purifier3.wash(); // 정수기 동작 성공
