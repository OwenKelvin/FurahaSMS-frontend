import { FormControl } from '@angular/forms';

const validateISBNSum = (a: any) => {
  let b = 0;
  let i = 0;
  let r = false;
  const t = 10;
  const l = a.length;
  if (l === t) {
    for (i; i < 9; i++){b += a[i] * (t - i);} r = (b + (a[9] === 'X' ? t : a[9])) % 11 === 0;
  }
  if (l === 13) {
    for (i; i < 12; i++){b += (i + 1) % 2 ? +a[i] : a[i] * 3;} r = b % t === t - (+a[12] || t);
  } return r ? a : 0;
};


export const validateISBN = (c: FormControl) => {
  /* eslint-disable-next-line max-len */
  const ISBN_REGEXP = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
  const subject = c.value;
  if (ISBN_REGEXP.test(subject)) {
    // Remove non ISBN digits, then split into an array
    const chars = subject.replace(/[- ]|^ISBN(?:-1[03])?:?/g, '').split('');
    // Remove the final ISBN digit from `chars`, and assign it to `last`
    if (validateISBNSum(chars) === 0) {
      return {
        validateISBN: {
          valid: false
        }
      };
    }
    return null;
  } else {
    return {
      validateISBN: {
        valid: false
      }
    };
  }
};

