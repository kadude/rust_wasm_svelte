mod utils;
mod primes;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn init_panic_hook() {
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, my-wasm-test!");
}

#[wasm_bindgen]
pub fn get_number_of_primes(to_and_including: usize) -> usize {
    primes::sieve_of_eratosthenes(to_and_including)
}
