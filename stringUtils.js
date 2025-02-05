export function reverseString(str) {
    return str.split('').reverse().join('');
}
function addStrings(...strings) {
    return strings.join('');
}

module.exports = {
    addStrings: addStrings
};