<script>
	let name = "";
</script>

<main>
	<div class="container">
		<label class="lead text-primary" for="name">Enter your name: </label>
		<input placeholder="Your name" id="name" type="text" bind:value={name} />
	</div>
	<h1>Hello {name}!</h1>
</main>

<style>
	.text-primary {
		color: #ff3e00;
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
