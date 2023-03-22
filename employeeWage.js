console.log("Employee Wage Computation Problem\n")
//UC1 - Check employee present or absent

const IS_ABSENT = 0
let employeeCheck = Math.floor(Math.random() * 10) % 2;

if (employeeCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");
}