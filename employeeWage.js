console.log("Employee Wage Computation Problem\n")
//UC4 - Calculate wages for a month assuming 20 working days

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let employeeHours = 0;

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

for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours += getWorkingHours(employeeCheck);
}

let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Total Working Hours = "+ employeeHours + "\nTotal Employee Wage = " + employeeWage);