import { getRandomValue,isHexadecimal } from '.'

test('returns true because the value is a hexadecima;', () => {

    expect(isHexadecimal('#007FFF')).toBe(true);
});

test('returns false because the value is not a hexadecimal', () => {

    expect(isHexadecimal('#00#FFF')).toBe(false);
    expect(isHexadecimal('#00!')).toBe(false);
    expect(isHexadecimal('123#4')).toBe(false);
});

test('returns a valid random color code', () => {

    const hexadecimalRegex = /^#[a-f0-9]/i;

    expect(getRandomValue()).toMatch(hexadecimalRegex);
});