/**
 * 
 * @returns A random color code as a string
 */
const getRandomValue = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return '#' + randomColor;
}

/**
 * Function that verifies if the passed value is a hexadecimal
 * @param value 
 * @returns 
 */
const isHexadecimal = (value:string) : boolean => {
    var regex = /^#[0-9A-Fa-f]{6}/g;

return regex.test(value);

}

export {
    getRandomValue,
    isHexadecimal
}