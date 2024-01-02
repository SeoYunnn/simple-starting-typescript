interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

// api
// TODO: 아래 함수의 반환 타입 지정
function fetchContacts() {
    // TODO: 아래 속성 타입을 지정
    const contacts = [
        {
            name: "Choonsik",
            address: "Sebu",
            phones: {
                home: {
                    num: 11111111,
                },
                office: {
                    num: 22222222,
                },
            },
        },
        {
            name: "Ryan",
            address: "England",
            phones: {
                home: {
                    num: 33333333,
                },
            },
        },
        {
            name: "Muji",
            address: "서울시 강남구",
            phones: {
                home: {
                    num: 44444444,
                },
                studio: {
                    num: 55555555,
                },
            },
        },
    ];

    return new Promise(resolve => {
        setTimeout(() => resolve(contacts), 2000);
    })
}

class AddressBook {
    // TODO: 아래 속성 타입을 지정
    contacts = [];

    constructor() {
        this.fetchData();
    }

    fetchData() {
        fetchContacts().then(response => {
            this.contacts = response;
        });
    }

    /* TODO: 아래 함수들 파라미터 타입과 반환 타입 지정 */
    findContactByName(name) {
        return this.contacts.filter(contact => contact.name === name);
    }

    findContactByAddress(address) {
        return this.contacts.filter(contact => contact.address === address);
    }

    findContactByPhone(phoneNumber, phoneType: string) {
        return this.contacts.filter(
            contact => contact.phones[phoneType].num === phoneNumber
        );
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayListByName() {
        return this.contacts.map(contact => contact.name);
    }

    displayListByAddress() {
        return this.contacts.map(contact => contact.address);
    }
    /*--------------------------------------------------------*/
}

new AddressBook();
