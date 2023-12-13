export const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    while (code.length < length) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters.charAt(randomIndex);

        if (code.indexOf(randomChar) === -1) {
            code += randomChar;
        }
    }

    return code.toUpperCase();
}