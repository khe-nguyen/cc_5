// Coding Challenge 5

// Step 2: Employee array
const employees = [
  { name: "Havanna Surfside", hourlyRate: 20, hoursWorked: 38 },
  { name: "Mills Cinnamon", hourlyRate: 22, hoursWorked: 45 },
  { name: "Pepe Peroni", hourlyRate: 18, hoursWorked: 42 },
  { name: "Azzurro Maize", hourlyRate: 25, hoursWorked: 40 }
];

// Step 3: Base pay (Up to 40 hours only)
function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return baseHours * rate;
}

// Step 4: Overtime pay (returns 1.5x rate for hours over 40)
function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    const overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
  }
  return 0;
}

// Step 5: Taxes (15% deduction)
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Step 6: Process payroll for employee
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}
