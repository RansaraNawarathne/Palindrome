export const naivePalindrome = (inp: string): void => {
    console.log ('Algorithm: Naive Algorithm');

    let revInp: string = '';
    for (let index: number = inp.length; index > 0; index--) {
        revInp += inp.charAt(index - 1);
    }

    if (inp.localeCompare(revInp, undefined, { sensitivity: 'accent'}) === 0) {
        console.log (`'${inp}' is a palindrome`);
        return;
    }

    console.log (`'${inp}' is not a palindrome`);
}