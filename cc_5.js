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


