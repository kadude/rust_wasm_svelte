<script>
	import { value } from './stores';
</script>

<label for="input-number">Find number of primes to and including: </label>
<input id="input-number" type="number" bind:value={$value} />
