interface ProductDropdown {
    value: string;
    selected: boolean;
}

interface StockDropdown {
    value: number;
    selected: boolean;
}

interface AddressDropdown {
    value: { city: string; zipCode: string };
    selected: boolean;
}

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
