import React from 'react'

export const ValidatePassword = (password) => {
    const re = {
        capital: /(?=.*[A-Z])/,
        small: /(?=.*[a-z])/,
        length: /(?=.{7,40}$)/,
        specialChar: /[ -\/:-@\[-\`{-~]/,
        digit: /(?=.*[0-9])/,
    };
    return (
        re.capital.test(password) &&
        re.small.test(password) &&
        re.length.test(password) &&
        re.specialChar.test(password) &&
        re.digit.test(password)
    );
}


