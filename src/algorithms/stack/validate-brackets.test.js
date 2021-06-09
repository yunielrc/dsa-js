const validateBrackets = require('./validate-brackets');

describe('validateBrackets', () => {
  it('should return false when string empty', () => {
    expect(validateBrackets('')).toBe(false);
  });
  it('should return true when string is ok', () => {
    expect(validateBrackets('(){}[{()}]')).toBe(true);
  });
  it('should return false when a closing parenthesis is missing ', () => {
    expect(validateBrackets('[{(]}]')).toBe(false);
  });
  it('should return false when a opening square bracket is missing', () => {
    expect(validateBrackets('[abc = 1 {()}]')).toBe(true);
  });
});
