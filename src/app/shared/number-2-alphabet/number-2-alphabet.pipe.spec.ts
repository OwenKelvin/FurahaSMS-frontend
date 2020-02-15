import { Number2AlphabetPipe } from './number-2-alphabet.pipe';

describe('Number2AlphabetPipe', () => {
  it('create an instance', () => {
    const pipe = new Number2AlphabetPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return "A" when value is 0', () => {
    const pipe = new Number2AlphabetPipe();
    expect(pipe.transform(0)).toBe('A');
  });
  it('should return "E" when value is 4', () => {
    const pipe = new Number2AlphabetPipe();
    expect(pipe.transform(4)).toBe('E');
  });

});
