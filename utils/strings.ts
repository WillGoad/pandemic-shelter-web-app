export const shortenString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '..';
    }
    return str;
}

export const formatNumber = (num: number) => {
    //Add a leading zero to numbers less than 10;
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}