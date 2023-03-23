console.log("Employee Wage Computation Problem\n")
//UC6 - Calculate daily wage with total wage and save daily wage in an array

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let employeeDailyWageArray = new Array();

function getWorkingHours(employeeCheck){
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
    
        default:
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

while(totalEmployeeHours <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
}

let employeeWage = calculateDailyWage(totalEmployeeHours);
console.log("Total days : " + totalWorkingDays +"\nTotal Working Hours : " + totalEmployeeHours + "\nTotal Employee Wage : " + employeeWage);