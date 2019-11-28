<script>
    import { countJS, value } from './stores';
    import { sieve_of_eratosthenes } from "./prime";

	const runWasm = () => {
		countJS.update(() => sieve_of_eratosthenes($value));
	}
</script>

<button on:click={runWasm}>
    Run JS
</button>
