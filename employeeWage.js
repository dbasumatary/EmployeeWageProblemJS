console.log("Employee Wage Computation Problem\n")
//UC5 - Calculate wages for a month till 160 max hours or 20 days is reached

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;

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

while(totalEmployeeHours <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours += getWorkingHours(employeeCheck);
}

let employeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("Total days : " + totalWorkingDays +"\nTotal Working Hours : " + totalEmployeeHours + "\nTotal Employee Wage : " + employeeWage);