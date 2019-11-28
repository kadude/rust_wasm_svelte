<script>
  import { countJS, countWasm } from "./stores";
  import WasmRunner from "./WasmRunner.svelte";
  import JSRunner from "./JSRunner.svelte";
  import Input from "./Input.svelte";
  import Resetter from "./Resetter.svelte";
</script>

<style>
  h1.test {
		color: darkkhaki;
		font-family: 'Comic Sans MS', cursive;
		font-size: 1em;
	}
</style>

<div id="main">
<h1 class="test">Find number of primes</h1>
  <Input />
  <br />
  <br />
  <WasmRunner />
  {#if $countWasm}
    <p>Result wasm: {$countWasm}</p>
  {:else}
    <p>Press button to run!</p>
  {/if}
  <JSRunner />
  {#if $countJS}
    <p>Result JS: {$countJS}</p>
  {:else}
    <p>Press button to runs!</p>
  {/if}
  <Resetter />
</div>
