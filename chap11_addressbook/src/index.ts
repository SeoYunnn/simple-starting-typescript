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

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Choonsik',
      address: 'Sebu',
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
      name: 'Ryan',
      address: 'England',
      phones: {
        home: {
          num: 33333333,
        },
      },
    },
    {
      name: 'Muji',
      address: '서울시 강남구',
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
  });
}

// main
class AddressBook {
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name: string): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map(contact => contact.address);
  }
}

const book = new AddressBook();
// book.findContactByPhone(11111111, 'home');
// book.findContactByPhone(11111111, 'homee');
book.findContactByPhone(123, PhoneType.Home);
