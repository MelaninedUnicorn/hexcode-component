/**
 * 
 * @returns A random color code as a string
 */
const getRandomValue = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    return '#' + randomColor;
}

export {
    getRandomValue
}