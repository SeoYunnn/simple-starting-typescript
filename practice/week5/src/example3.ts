type ProfessorNumber = string;
type EmployeeNumber = string;
type StudentNumber = string;
type Locate = string;
type Rank = string;

type PrintType<T> = Professor<T> | Employee<T> | Student<T>;

class Member<T> {
    protected id: T;
    protected name: string;
    protected phoneNumber: string;
    protected email: string;

    constructor(
        id: T,
        name: string,
        phoneNumber: string,
        email: string,
    ) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getInfo() {
        return {
            id: this.id,
            name: this.name,
            phoneNumber: this.phoneNumber,
            email: this.email,
        };
    }
}

class Professor<T> extends Member<T> {
    #lab: Locate;

    constructor(
        id: T,
        name: string,
        phoneNumber: string,
        email: string,
        lab: Locate,
    ) {
        super(id, name, phoneNumber, email);
        this.#lab = lab;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            lab: this.#lab,
        };
    }
}

class Employee<T> extends Member<T> {
    #office: Locate;

    constructor(
        id: T,
        name: string,
        phoneNumber: string,
        email: string,
        office: Locate,
    ) {
        super(id, name, phoneNumber, email);
        this.#office = office;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            office: this.#office,
        };
    }
}

class Student<T> extends Member<T> {
    #academicRecord: Rank;

    constructor(
        id: T,
        name: string,
        phoneNumber: string,
        email: string,
        academicRecord: Rank,
    ) {
        super(id, name, phoneNumber, email);
        this.#academicRecord = academicRecord;
    }

    getInfo() {
        return {
            ...super.getInfo(),
            academicRecord: this.#academicRecord,
        };
    }
}

function printInfo<T>(info: PrintType<T>): void {
    console.log(info);
}

const professor = new Professor
(
    "1",
    "Kim",
    "010-1234-1234",
    "Kim@wisoft.io",
    "N5-503",
);


const employee = new Employee
(
    "2",
    "Hong",
    "010-1234-4567",
    "Hong@wisoft.io",
    "N5-511",
);

const student = new Student
(
    "3",
    "Bae",
    "010-1234-5678",
    "Bae@wisoft.io",
    "학부생",
);

const student2 = new Student
(
    "4",
    "Ahn",
    "010-1324-5670",
    "Ahn@wisoft.io",
    "대학원생",
);

printInfo(professor.getInfo() as unknown as PrintType<ProfessorNumber>);

// Class 구조 그대로 출력
printInfo(professor);