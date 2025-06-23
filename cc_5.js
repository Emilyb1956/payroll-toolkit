// Declaring an array of employees 
const employees = [
  { name: "Emily", hourlyRate: 20, hoursWorked: 38 },
  { name: "Jada", hourlyRate: 17, hoursWorked: 40 },
  { name: "Zosha", hourlyRate: 10, hoursWorked: 42 },
  { name: "Jenique", hourlyRate: 14, hoursWorked: 47 }
];

// Function to calculate employee’s base pay 
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  const basePay = rate * baseHours;
  console.log(`Base Pay: ${basePay}`);
  return basePay;
}

// Function to calculate employee overtime pay
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  const overtimePay = overtimeHours * rate * 1.5;
  console.log(`Overtime Pay: ${overtimePay}`);
  return overtimePay;
}

// Function to calculate net pay and  gross pay
function calculateTaxes(basePay, overtimePay) {
  const grossPay = basePay + overtimePay;
  const netPay = grossPay * 0.85;

  console.log(`Gross Pay: ${grossPay}`);
  console.log(`Net Pay: ${netPay}`);

  return netPay;
}

// Function to process employee's payroll
function processPayroll(employee) {
 
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const netPay = calculateTaxes(basePay, overtimePay);
  const grossPay = basePay + overtimePay;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

// Process all employees and output their full payroll reports
employees.forEach(employee => {
  const payroll = processPayroll(employee);
  console.log("Final payroll summary:", payroll);
});
