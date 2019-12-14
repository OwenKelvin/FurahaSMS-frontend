import { digitsMatcher } from './digits.matcher';
import { UrlSegment } from '@angular/router';

describe('DIGITS MATCHER', () => {
  it('should return false when null', () => {
    expect(digitsMatcher([])).toBeFalsy();
  });
  it('should return false when item not digit', () => {
    const urlSegmentDigit = new UrlSegment('qwerty', {});
    expect(digitsMatcher([urlSegmentDigit])).toBeFalsy();
  });
  it('should return when item is digit', () => {
    const urlSegmentDigit = new UrlSegment('4', {});
    expect(digitsMatcher([urlSegmentDigit])).toBeTruthy();
  });
});
