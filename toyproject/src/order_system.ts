import {MenuCategory, MenuItem} from "./menu";
import order from "./order";
import {log} from "./log";
import * as readline from "node:readline";

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 주문
export function processOrder(menu: MenuCategory[], orderedItems: MenuItem[]) {
    rl.question("\n주문할 카테고리 번호를 선택해주세요: ", (categoryIdx: string) => {
        const categoryIndex = parseInt(categoryIdx) - 1;
        rl.question("\n주문할 항목 번호를 선택해주세요: ", (itemIdx: string) => {
            const itemIndex = parseInt(itemIdx) - 1;
            const orderedItem = placeOrder(menu, categoryIndex, itemIndex); // 주문 처리 함수 호출
            if (orderedItem) {
                orderedItems.push(orderedItem); // 주문된 항목 배열에 추가
            }
            askForMore(orderedItems, menu); // 더 주문할지 물어보는 함수 호출
        });
    });
}

// 주문 처리
// 수정 전
// function placeOrder(menu: MenuCategory[], categoryIndex: number, itemIndex: number): MenuItem | undefined {
//     const category = menu[categoryIndex];
//     if (category && category.items[itemIndex]) {
//         const orderedItem = category.items[itemIndex];
//         log("\n주문이 완료되었습니다:");
//         log(`항목: ${orderedItem.name}`);
//         log(`가격: ${orderedItem.price}원`);
//         log(`설명: ${orderedItem.description}`);
//         return orderedItem;
//     } else {
//         log("주문할 항목을 찾을 수 없습니다.");
//         return undefined;
//     }
// }

// 수정 후
function placeOrder(menu: MenuCategory[], categoryIndex: number, itemIndex: number): MenuItem | undefined {
    const category = menu[categoryIndex];
    const orderedItem = category?.items[itemIndex];
    if(orderedItem) {
        log("\n주문이 완료되었습니다:");
        log(`항목: ${orderedItem.name}`);
        log(`가격: ${orderedItem.price}원`);
        log(`설명: ${orderedItem.description}\n`
        );
    } else {
        log("주문할 항목을 찾을 수 없습니다.");
    }
    return orderedItem;
}

// 더 주문할지 물어보는 함수
function askForMore(orderedItems: MenuItem[], menu: MenuCategory[]) {
    rl.question("더 주문하시겠습니까? (y/n): ", (response: string) => {
        const isMoreOrder = response.toLowerCase() === 'y';
        if (isMoreOrder) {
            order(menu);
        } else {
            completeOrder(orderedItems);
            rl.close();
        }
    });
}

// 주문한 항목들의 총 가격을 계산
// 수정 전
// function calculateTotalPrice(orderedItems: MenuItem[]): number {
//     let totalPrice = 0;
//     orderedItems.forEach(item => {
//         totalPrice += item.price;
//     });
//     return totalPrice;
// }

// 수정 후
function calculateTotalPrice(orderedItems: MenuItem[]): number {
    return orderedItems.reduce((totalPrice, item) => totalPrice + item.price, 0);
}

// 모든 주문이 완료되었을 경우
function completeOrder(orderedItems: MenuItem[]) {
    log(`\n주문이 완료되었습니다. 잠시 기다려주세요...\n주문 내역:`);
    orderedItems.forEach(item => {
        log(`${item.name} - 가격: ${item.price}원`);
    });
    log(`\n총 가격: ${calculateTotalPrice(orderedItems)}원`);
}
