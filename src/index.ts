import * as readline from 'node:readline/promises'
import { naivePalindrome } from './Naive';
import { twoPointesPalindrome } from './TwoPointers';

const readlineObj: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

try {
    const userInp: string = await readlineObj.question('Please type a word: ', {
        signal: AbortSignal.timeout(10_000)
    });

    naivePalindrome (userInp);
    twoPointesPalindrome (userInp);

} finally {
    readlineObj.close();
}