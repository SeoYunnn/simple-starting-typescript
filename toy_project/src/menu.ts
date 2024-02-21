export type MenuItem = {
    name: string;
    price: number;
    description: string;
};

export type MenuCategory = {
    category: string;
    items: MenuItem[];
};

export const menu: MenuCategory[] = [
    {
        category: "식사",
        items: [
            {name: "모듬 초밥 12pcs + 우동", price: 13000, description: "각종 모듬 초밥 특선 메뉴"},
            {name: "연어 초밥 10pcs + 우동", price: 15000, description: "싱싱한 연어가 올라간 초밥"},
            {name: "활어회 초밥 10pcs + 우동", price: 13500, description: "싱싱한 활어회가 올라간 초밥"},
            {name: "장어 초밥 10pcs + 우동", price: 14500, description: "장어에 간장 양념을 올려 구운 초밥"},
            {name: "간장 새우 초밥 10pcs + 우동", price: 15000, description: "싱싱한 새우 회에 간장 소스를 첨가한 초밥"},
            {name: "1인 모듬 숙성 사시미 세트", price: 19900, description: "각종 맛있는 사시미들이 포함되어 있는 메뉴"},
        ]
    },
    {
        category: "주류",
        items: [
            {name: "[사케] 간바레 오또상", price: 18000, description: "도수: 14.5"},
            {name: "[사케] 준마이750", price: 17000, description: "도수: 15.6"},
            {name: "청하", price: 6000, description: "도수: 13"},
        ]
    },
    {
        category: "음료",
        items: [
            {name: "콜라/사이다/환타", price: 1500, description: "탄산음료"},
            {name: "뽀로로 음료수", price: 2000, description: "뽀롱뽀롱 뽀로로"},
        ]
    }
];
