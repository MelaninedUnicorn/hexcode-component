import { getRandomValue } from './hexadecimal'
test('returns a valid random color code', () => {

    const hexadecimalRegex = /^#[a-f0-9]/i;

    expect(getRandomValue()).toMatch(hexadecimalRegex);
});