
export function sieve_of_eratosthenes(value) {
    let primes = Array(value + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (const i of [...Array(Math.floor(Math.sqrt(value)) + 1).keys()]) {
        if (primes[i] === true) {
            let teller = 0;
            while (true) {
                let j = Math.pow(i, 2) + (i * teller);
                if (j > value) break;
                primes[j] = false;
                teller++;
            }
        }
    }

    return primes.filter(x => x === true).length;
}
