/* Global variables */

let salPerHour;
let flatFixedSalary;
let fixedSalary;
let salaryHourlyRate;
let overTimeHours;
let totalSalary;
let grossSalary;
let deductions;
let deductedSalary;
let netPay;
const masterTeachingAllowance = 1500;
const bachelorTeachingAllowance = 600;
let calculate = document.getElementById(`calcBtn`);

/* Functions */
function CalculateSalary() {
    let employeeId = document.getElementById('empId').value;
    let employeeName = document.getElementById('empName').value;
    let employeeDepartment = document.getElementById('empDep').value;
    let employeeHours = document.getElementById('emphours').value;
    let employeeCode = document.getElementById('empCode').value;
    console.log("Employee Number:" + employeeId);
    console.log("Employee Name:" + employeeName);
    console.log("Employee Department:" + employeeDepartment);
    console.log("Number of hours worked:" + employeeHours);


    if (employeeCode == "F" || employeeCode == "f") {
        console.log("Employee Type:" + " Faculty");
        let qualification_code = prompt("Please Enter Your Qualification Code. Either M or B. M is for masters and B for bachlors");
        if (qualification_code == "M"|| qualification_code == "m") {
            salPerHour = 175;
            fixedSalary = salPerHour * employeeHours + masterTeachingAllowance;
            console.log("Gross Salary:" + fixedSalary);
            if (fixedSalary > 3000) {
                deductions = (fixedSalary * 0.25) - 33;
                netPay = fixedSalary + 2500 - deductions;
                console.log("Deductions:" + deductions);
                console.log("Net Pay:" + netPay);
                document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
            }
            else if (fixedSalary <= 3000) {
                deductions = (fixedSalary * 0.25) - 19.20;
                netPay = fixedSalary + 2500 - deductions;

                document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
                document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
                document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
                document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
                document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;
      
                document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
                document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
                document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
                console.log("Deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
            //console.log(fixedSalary);

        }
        else if (qualification_code == "B"|| qualification_code == "b") {
            salPerHour = 100;
            fixedSalary = salPerHour * employeeHours + bachelorTeachingAllowance;
            console.log("Gross Salary:" + fixedSalary);
            if (fixedSalary > 3000) {
                deductions = (fixedSalary * 0.25) - 33;
                netPay = fixedSalary + 2500 - deductions;
                document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
                console.log("deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
            else if (fixedSalary <= 3000) {
                deductions = (fixedSalary * 0.25) - 19.20;
                netPay = fixedSalary + 2500 - deductions;
                document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
                document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
                document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
                document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
                document.getElementById('employeeType').innerHTML=`Employee Type:Faculty`;
      
                document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
                document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
                document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
                console.log("deductions:" + deductions);
                console.log("Net Pay:" + netPay);
            }
        }
    }
    else if (employeeCode == "R" || employeeCode == "r") {
        console.log("Employee Type:" + " Regular");

        fixedSalary = prompt("Enter Employee's Salary");
        if (employeeHours == 160 && fixedSalary > 3000) {
            flatFixedSalary = fixedSalary;

            deductions = (fixedSalary * 0.25) - 33;
            netPay = parseInt(fixedSalary) + 2500 - deductions;
            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;

            console.log("Gross Salary:" + fixedSalary);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);

        }
        else if (employeeHours == 160 && fixedSalary <= 3000) {
            flatFixedSalary = fixedSalary;
            console.log("Gross Salary:" + fixedSalary);
            deductions = (fixedSalary * 0.25) - 19.20;
            netPay = parseInt(fixedSalary) + parseFloat(2500 - deductions);

            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${fixedSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;

            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }

        else if (employeeHours < 160 && fixedSalary > 3000) {
            salaryHourlyRate = fixedSalary / employeeHours;
            totalSalary = (salaryHourlyRate * employeeHours).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 33).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${totalSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours < 160 && fixedSalary <= 3000) {
            salaryHourlyRate = fixedSalary / employeeHours;
            totalSalary = (salaryHourlyRate * employeeHours).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 19.20).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
            document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
            document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
            document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
            document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;
  
            document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${totalSalary}`;
            document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
            document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours > 160 && fixedSalary > 3000) {
            overTimeHours = employeeHours - 160;
            salaryHourlyRate = fixedSalary / 160;
            totalSalary = (160 * salaryHourlyRate + overTimeHours * salaryHourlyRate * 2).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 33).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);

            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
          document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
          document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
          document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
          document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;

          document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${totalSalary}`;
          document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
          document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;

            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
        }
        else if (employeeHours > 160 && fixedSalary <= 3000) {
            overTimeHours = employeeHours - 160;
            salaryHourlyRate = fixedSalary / 160;
            totalSalary = (160 * salaryHourlyRate + overTimeHours * salaryHourlyRate * 2).toFixed(2);
            console.log("Gross Salary:" + totalSalary);
            deductions = ((totalSalary * 0.25) - 19.20).toFixed(2);
            netPay = (totalSalary + 2500 - deductions).toFixed(2);
            console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);console.log("Deductions:" + deductions);
            console.log("Net Pay:" + netPay);
            document.getElementById('employeeNumber').innerHTML=`<h3>PAY SLIP</h3>Employee Number: ${employeeId}`;
                document.getElementById('employeeName').innerHTML=`Employee Name: ${employeeName}`;
                document.getElementById('employeeDepartment').innerHTML=`Department: ${employeeDepartment}`;
                document.getElementById('employeeHours').innerHTML=`Number of hours worked: ${employeeHours}`;
                document.getElementById('employeeType').innerHTML=`Employee Type:Regular`;
      
                document.getElementById('employeeGrossSalary').innerHTML=`Gross Salary:$ ${totalSalary}`;
                document.getElementById('employeeDeduction').innerHTML=`Deduction:$ ${deductions}`;
                document.getElementById('employeeNetPay').innerHTML=`Net Pay:$ ${netPay}`;
            
        }
    }
}

// Event Listener Click
 calculate.addEventListener("click", CalculateSalary);

