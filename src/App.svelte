<script>
	let name = '';
	let count = 0;
	const add = () => count++;
	const subs = () => count--;
</script>

<main>
	<div class="container">
		<label class="lead text-primary" for="name">Enter your name: </label>
		<input class="text-secondary" bind:value={name} placeholder="Your name" id="name" type="text" />
	</div>
	<h1>Hello {name} !</h1>
	<button class="btn" on:click={add}>Add</button>
	<button class="btn" on:click={subs}>Subtract</button>
	<button class="btn" on:click={() => (count = 0)}>Reset</button>
</main>
<div class="container">
	<p class="text-secondary">This is current count: {count}</p>
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		padding: 1rem;
		border: #ccc 1px dotted;
	}

	.text-primary {
		color: #ff3e00;
		padding: 1em;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: 100;
	}

	.text-secondary {
		font-size: 1em;
		font-weight: 100;
		font-family: Overpass;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
