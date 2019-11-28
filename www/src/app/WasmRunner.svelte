<script>
    import { countWasm, value } from './stores';
    import * as wasm from "my-wasm-test";

	const runWasm = () => {
		countWasm.update(() => wasm.get_number_of_primes($value));
	}
</script>

<button on:click={runWasm}>
    Run wasm
</button>
