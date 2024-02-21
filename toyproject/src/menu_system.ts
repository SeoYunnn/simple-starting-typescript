import {MenuCategory, MenuItem} from "./menu";
import {log} from "./log";

export function showMenu(menu: MenuCategory[]) {
    log("메뉴판");
    menu.forEach((category: MenuCategory, index: number) => {
        log(`${index + 1}. ${category.category}`);
        category.items.forEach((item: MenuItem, idx: number) => {
            log(`   ${idx + 1}. ${item.name} - 가격: ${item.price}원, 설명: ${item.description}`);
        });
    });
}
