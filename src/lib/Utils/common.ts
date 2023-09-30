export const convertImageJsonToArray = function (json) {
    if (json) {
        return JSON.parse(json);
    }
    return [];
}