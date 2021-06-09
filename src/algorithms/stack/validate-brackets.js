/**
 * This solution also works mixed with other characters,
 * eg: [const abc = 1 {(var a = 0)}]
 * @param {string} str
 * @return {boolean}
 */
module.exports = (str) => {
  if (!str) return false;
  const map = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
  const stack = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const b of str) {
    if ('({['.includes(b)) stack.push(b);
    else if (')}]'.includes(b) && map.get(stack.pop()) !== b) return false;
  }
  return stack.length === 0;
};
