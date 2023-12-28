// 부모 클래스
class Person {
    #name: string;
    #tel: string;
    #email: string;

    constructor(name: string, tel: string, email: string) {
        this.#name = name;
        this.#tel = tel;
        this.#email = email;
    }

    protected info():string {
        return " , 이름: " + this.#name + " , 전화번호: " + this.#tel + " , 이메일: " + this.#email
    }
}

// Professor 클래스
class Professor extends Person {
    #professorNumber: number;
    #lab: string;

    constructor(professorNumber: number, name: string, phoneNumber: string, email: string, lab: string) {
        super(name, phoneNumber, email);
        this.#professorNumber = professorNumber;
        this.#lab = lab;
    }

    public professorinfo() {
        console.log("교수번호:  " + this.#professorNumber + this.info() + " ,연구실: " + this.#lab);
    }

}

// Employee 클래스
class Employee extends Person {
    #employeeNumber: number;
    #office: string;

    constructor(employeeNumber: number, name: string, phoneNumber: string, email: string, office: string) {
        super(name, phoneNumber, email);
        this.#employeeNumber = employeeNumber;
        this.#office = office;
    }

    public employeeinfo() {
        console.log("직원번호: " + this.#employeeNumber + this.info() + " ,사무실: " + this.#office);
    }
}

// Student 클래스
class Student extends Person {
    #studentNumber: number;
    #status: string;

    constructor(studentNumber: number, name: string, phoneNumber: string, email: string, status: string) {
        super(name, phoneNumber, email);
        this.#studentNumber = studentNumber;
        this.#status = status;
    }

    public studentinfo() {
        console.log("학번: " + this.#studentNumber + this.info() + " , 학적: " + this.#status);
    }
}

// 객체 생성 및 출력
const professor = new Professor(1, "라이언", "010-1234-1234", "ryan@kakao.com", "kakao");
professor.professorinfo();

const employee = new Employee(2, "춘식이", "010-1234-4567", "choonsik@kakao.com", "kakaofriends");
employee.employeeinfo();

const student = new Student(3, "프로도", "010-1234-5678", "prodo@kakao.com", "학부생");
student.studentinfo();

const student2 = new Student(4, "무지", "010-1234-5678", "muji@kakao.com", "대학원생");
student2.studentinfo();