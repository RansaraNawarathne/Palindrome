export const recursivePalindrome = (inp: string): void => {
    console.log ('Algorithm: Recursive Algorithm');

    recursiveAlgorithm (inp, 0, (inp.length - 1));
}

const recursiveAlgorithm = (inp: string, index: number, revIndex: number): void => {

    if (index >= revIndex) {
        console.log (`'${inp}' is a palindrome`);
        return;
    }

    if (inp.charAt(index).localeCompare(inp.charAt(revIndex), undefined, { sensitivity: 'accent' }) !== 0) {
        console.log(`'${inp}' is not a palindrome`);
        return;
    }

    recursiveAlgorithm(inp, ++index, --revIndex);
}