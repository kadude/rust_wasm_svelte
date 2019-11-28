// the Sieve of Eratosthenes
pub fn sieve_of_eratosthenes(value: usize) -> usize {
    let mut primes = vec![true; value + 1];
    primes[0] = false;
    primes[1] = false;
    for i in 2..=f64::sqrt(value as f64).floor() as usize {
        if primes[i] {
            let mut teller = 0;
            loop {
                let j = i.pow(2) + (i * teller);
                if j > value { break; }
                primes[j] = false;
                teller += 1;
            }
        }
    }

    primes.iter().filter(|x| **x).count()
}
