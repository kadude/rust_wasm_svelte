<script>
	import { countJS, countWasm } from './stores';

	const reset = () => {
		countJS.set(0);
		countWasm.set(0);
	}
</script>

<button on:click={reset}>
	Reset
</button>
