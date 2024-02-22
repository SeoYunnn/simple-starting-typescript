import {MenuCategory, MenuItem} from './menu';
import {showMenu} from "./menu_system";
import {processOrder} from './order_system';
import {log} from './log';
import * as readline from "node:readline";

// Promise 접근해보자
// import * as readline from "node:readline/promises";

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 주문한 항목들을 저장할 배열
const orderedItems: MenuItem[] = [];

// 주문 함수 실행
function order(menu: MenuCategory[]) {
    log("\n=====춘식스시=====");
    log("0. 메뉴판 보기");
    log("1. 주문");
    log("2. 종료");

    rl.question("번호를 선택해주세요:", (choice: string) => {
        switch (choice) {
            case '0':
                showMenu(menu);
                order(menu);
                break;
            case '1':
                processOrder(menu, orderedItems);
                break;
            case '2':
                console.log("프로그램을 종료합니다.");
                rl.close();
                break;
            default:
                console.log("올바른 번호를 선택해주세요.");
                order(menu);
                break;
        }
    });
}

export default order;