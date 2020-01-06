export function flatten<T>(arr: Array<Array<T>>): Array<T> {
    return arr.reduce((memo, val) => memo.concat(val), []);
}