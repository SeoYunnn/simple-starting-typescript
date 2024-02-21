import {MenuCategory, MenuItem} from "./menu";
import order from "./order";
import {log} from "./log";

// 주문
export function processOrder(readline: any, menu: MenuCategory[], orderedItems: MenuItem[]) {
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
}

// 주문 처리
function placeOrder(menu: MenuCategory[], categoryIndex: number, itemIndex: number): MenuItem | undefined {
    const category = menu[categoryIndex];
    if (category && category.items[itemIndex]) {
        const orderedItem = category.items[itemIndex];
        log("\n주문이 완료되었습니다:");
        log(`항목: ${orderedItem.name}`);
        log(`가격: ${orderedItem.price}원`);
        log(`설명: ${orderedItem.description}`);
        return orderedItem;
    } else {
        log("주문할 항목을 찾을 수 없습니다.");
        return undefined;
    }
}

// 더 주문할지 물어보는 함수
function askForMore(readline: any, orderedItems: MenuItem[], menu: MenuCategory[]) {
    readline.question("더 주문하시겠습니까? (y/n): ", (response: string) => {
        const isMoreOrder = response.toLowerCase() === 'y';
        if (isMoreOrder) {
            order(menu);
        } else {
            completeOrder(orderedItems);
            readline.close();
        }
    });
}

// 주문한 항목들의 총 가격을 계산
function calculateTotalPrice(orderedItems: MenuItem[]): number {
    let totalPrice = 0;
    orderedItems.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}

// 모든 주문이 완료되었을 경우
function completeOrder(orderedItems: MenuItem[]) {
    log(`주문이 완료되었습니다. 잠시 기다려주세요...`);
    log("\n주문 내역:");
    orderedItems.forEach(item => {
        log(`${item.name} - 가격: ${item.price}원`);
    });
    log(`총 가격: ${calculateTotalPrice(orderedItems)}원`);
}

