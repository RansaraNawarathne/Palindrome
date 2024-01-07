export const twoPointesPalindrome = (inp: string): void => {
    console.log ('Algorithm: Two Pointers Algorithm');

    let index: number = 0;
    let revIndex: number = inp.length - 1;

    while (index < revIndex) {
        if (inp.charAt(index).localeCompare(inp.charAt(revIndex), undefined, { sensitivity: 'accent' }) !== 0) {
            console.log (`'${inp}' is not a palindrome`);
            return;
        }

        index++;
        revIndex--;
    }

    console.log(`'${inp}' is a palindrome`)
}