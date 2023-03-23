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
console.log("UC6 - Total days = " + totalWorkingDays +";\tTotal Working Hours = " + totalEmployeeHours + ";\tTotal Employee Wage = " + employeeWage);

//Using Array Helper Functions

// UC7A - Calculate total Wage using Array forEach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
employeeDailyWageArray.forEach(sum);
console.log("\nUC7A - Total days = " + totalWorkingDays + ";\tTotal Working Hours = " + totalEmployeeHours + ";\tTotal Employee Wage = " + totalEmpWage);
function totalWage(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("\nUC7A - Employee Wage with reduce method: "+ employeeDailyWageArray.reduce(totalWage,0));


//UC7B - Show the day along with daily wage using array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +" : " + dailyWage;
}
let mapDayWithWageArr = employeeDailyWageArray.map(mapDayWithWage);
console.log("\nUC7B - Daily Wage Map: ");
console.log(mapDayWithWageArr);


//UC7C - Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("\nUC7C - Daily wage filter When full time wage is earned : ");
console.log(fullDayWageArr);


// UC7D - Find the first occurrence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC7D - First time full time wage was earned on day: " + mapDayWithWageArr.find(findFulltimeWage));


//UC7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("\nUC7E - Check if all element have full time wage: "+ fullDayWageArr.every(isAllFulltimeWage));


//UC7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("\nUC7F - Check if there is any part time wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));


//UC7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("\nUC7G - Number of days the employee worked: " + employeeDailyWageArray.reduce(totalDaysWorked,0));
