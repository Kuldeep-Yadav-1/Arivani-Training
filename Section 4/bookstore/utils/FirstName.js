"use client"
function FirstName(firstName) {
  const re = {
    capital: /(?=.*[A-Z])/,
    small: /(?=.*[a-z])/,
    length: /(?=.{2,40}$)/,
    specialChar: /[ -\/:-@\[-\`{-~]/,
    digit: /(?=.*[0-9])/,
  };
  return (
    (re.capital.test(firstName) || re.small.test(firstName)) &&
    re.length.test(firstName) &&
    (!re.specialChar.test(firstName) && !re.digit.test(firstName))
  );
}

export default FirstName
