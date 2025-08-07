"use client";

function validateNumber(input) {
  const numberStr = String(input); // Ensure it's a string
  const onlyDigits = /^\d{1,6}$/; // Must be 1-6 digits

  // Check: only digits, and numeric value must be > 0
  return onlyDigits.test(numberStr) && Number(numberStr) > 0;
}

export default validateNumber;