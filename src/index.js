
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix && matrix.reduce((acc, el, index) => {
        if (index % 2) {
            acc.push(...el.reverse());
        } else {
            acc.push(...el);
        }
        return acc;
    }, []) || [];
}
