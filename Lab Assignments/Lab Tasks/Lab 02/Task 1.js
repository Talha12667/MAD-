function Person(name = "Unknown", age = 0, gender = "Not specified") {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function Employee(name, age, gender, department = "General", designation = "Employee", salary = 10000) {
    this.person = new Person(name, age, gender); // Composition instead of inheritance
    this.department = department;
    this.designation = designation;
    this.salary = salary;
}

function Student(name, age, gender, rollNo = "000", program = "CS") {
    this.person = new Person(name, age, gender);
    this.rollNo = rollNo;
    this.program = program;
    this.courses = []; 
}


function Teacher(name, age, gender, department, designation, salary, subject = "Unknown") {
    this.employee = new Employee(name, age, gender, department, designation, salary);
    this.subject = subject;
    this.courses = []; 
}

function Staff(name, age, gender, department, designation, salary, shift = "Morning") {
    this.employee = new Employee(name, age, gender, department, designation, salary);
    this.shift = shift;
}

function Course(courseId, courseName, creditHours) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.creditHours = creditHours;
}

function printInfo(obj) {
    console.log(JSON.stringify(obj, null, 2));
}

let course1 = new Course("CS101", "Intro to Programming", 3);
let course2 = new Course("CS102", "Data Structures", 4);

let student1 = new Student("Ali", 20, "Male", "S123", "BSCS");
let student2 = new Student("Sara", 21, "Female", "S124", "BSSE");

student1.courses.push(course1, course2);
student2.courses.push(course2);

let teacher1 = new Teacher("Dr. Ahmed", 40, "Male", "CS", "Professor", 80000, "Programming");
let teacher2 = new Teacher("Dr. Ayesha", 35, "Female", "CS", "Assistant Professor", 60000, "Algorithms");

teacher1.courses.push(course1);
teacher2.courses.push(course2);

let staff1 = new Staff("Hamza", 30, "Male", "Admin", "Clerk", 25000, "Evening");
let staff2 = new Staff("Nadia", 28, "Female", "Library", "Librarian", 30000, "Morning");

console.log("\n--- Students ---");
printInfo(student1);
printInfo(student2);

console.log("\n--- Teachers ---");
printInfo(teacher1);
printInfo(teacher2);

console.log("\n--- Staff ---");
printInfo(staff1);
printInfo(staff2);
