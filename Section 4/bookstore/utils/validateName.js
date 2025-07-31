"use client"
function validateName(name) {
  const re = {
    capital: /(?=.*[A-Z])/,
    small: /(?=.*[a-z])/,
    length: /(?=.{2,40}$)/,
    specialChar: /[-\/:-@\[-\`{-~]/,
    digit: /(?=.*[0-9])/,
  };
  return (
    (re.capital.test(name) || re.small.test(name)) &&
    re.length.test(name) &&
    (!re.specialChar.test(name) && !re.digit.test(name))
  );
}

export default validateName
