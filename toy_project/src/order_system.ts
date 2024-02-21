import { MenuCategory, MenuItem } from "./menu";
import order from "./order";

// 메뉴판
export function showMenu(menu: MenuCategory[]) {
    console.log("메뉴판");
    menu.forEach((category: MenuCategory, index: number) => {
        console.log(`${index + 1}. ${category.category}`);
        category.items.forEach((item: MenuItem, idx: number) => {
            console.log(`   ${idx + 1}. ${item.name} - 가격: ${item.price}원, 설명: ${item.description}`);
        });
    });
}

// 주문한 항목들의 총 가격을 계산
export function calculateTotalPrice(orderedItems: MenuItem[]): number {
    let totalPrice = 0;
    orderedItems.forEach(item => {
        totalPrice += item.price;
    });
    return totalPrice;
}

// 주문 처리
export function placeOrder(menu: MenuCategory[], categoryIndex: number, itemIndex: number): MenuItem | undefined {
    const category = menu[categoryIndex];
    if (category && category.items[itemIndex]) {
        const orderedItem = category.items[itemIndex];
        console.log("\n주문이 완료되었습니다:");
        console.log(`항목: ${orderedItem.name}`);
        console.log(`가격: ${orderedItem.price}원`);
        console.log(`설명: ${orderedItem.description}`);
        return orderedItem;
    } else {
        console.log("주문할 항목을 찾을 수 없습니다.");
        return undefined;
    }
}

// 더 주문할지 물어보는 함수
export function askForMore(readline: any, orderedItems: MenuItem[], menu: MenuCategory[]) {
    readline.question("더 주문하시겠습니까? (y/n): ", (response: string) => {
        if (response.toLowerCase() === 'y') {
            order(menu);
        } else {
            console.log(`주문이 완료되었습니다. 잠시 기다려주세요...`);
            console.log("\n주문 내역:");
            orderedItems.forEach(item => {
                console.log(`${item.name} - 가격: ${item.price}원`);
            });
            console.log(`총 가격: ${calculateTotalPrice(orderedItems)}원`);
            readline.close();
        }
    });
}