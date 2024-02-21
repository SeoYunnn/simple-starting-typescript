import { showMenu, placeOrder, askForMore} from './order_system';
import { MenuCategory, MenuItem } from './menu';

// 주문한 항목들을 저장할 배열
const orderedItems: MenuItem[] = [];

// 주문 함수 실행
function order(menu: MenuCategory[]) {
    console.log("\n=====춘식스시=====");
    console.log("0. 메뉴판 보기");
    console.log("1. 주문");
    console.log("2. 종료");
    console.log("================\n");

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("번호를 선택해주세요:", (choice: string) => {
        switch (choice) {
            case '0':
                showMenu(menu);
                order(menu);
                break;
            case '1':
                readline.question("\n주문할 카테고리 번호를 선택해주세요: ", (categoryIdx: string) => {
                    const categoryIndex = parseInt(categoryIdx) - 1;
                    readline.question("\n주문할 항목 번호를 선택해주세요: ", (itemIdx: string) => {
                        const itemIndex = parseInt(itemIdx) - 1;
                        const orderedItem = placeOrder(menu, categoryIndex, itemIndex); // 주문 처리 함수 호출
                        if (orderedItem) {
                            orderedItems.push(orderedItem); // 주문된 항목 배열에 추가
                        }
                        askForMore(readline, orderedItems, menu); // 더 주문할지 물어보는 함수 호출
                    });
                });
                break;
            case '2':
                console.log("프로그램을 종료합니다.");
                readline.close();
                break;
            default:
                console.log("올바른 번호를 선택해주세요.");
                order(menu);
                break;
        }
    });
}

export default order;
