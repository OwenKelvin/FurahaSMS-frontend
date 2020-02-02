import { FormControl } from '@angular/forms';

export const validateISBN = (c: FormControl) => {
  /* tslint:disable-next-line:max-line-length */
  const ISBN_REGEXP = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
  const subject = c.value;
  if (ISBN_REGEXP.test(subject)) {
    // Remove non ISBN digits, then split into an array
    const chars = subject.replace(/[- ]|^ISBN(?:-1[03])?:?/g, '').split('');
    // Remove the final ISBN digit from `chars`, and assign it to `last`
    const last = chars.pop();
    let sum = 0;
    let check;
    let i;

    if (chars.length === 9) {
      // Compute the ISBN-10 check digit
      chars.reverse();
      for (i = 0; i < chars.length; i++) {
        sum += (i + 2) * parseInt(chars[i], 10);
      }
      check = 11 - (sum % 11);
      if (check === 10) {
        check = 'X';
      } else if (check === 11) {
        check = '0';
      }
    } else {
      // Compute the ISBN-13 check digit
      for (i = 0; i < chars.length; i++) {
        sum += (i % 2 * 2 + 1) * parseInt(chars[i], 10);
      }
      check = 10 - (sum % 10);
      if (check === 10) {
        check = '0';
      }
    }

    if (check === last) {
      return null;
    } else {
      return {
        validateISBN: {
          valid: false
        }
      };
    }
  } else {
    return {
      validateISBN: {
        valid: false
      }
    };
  }
};
