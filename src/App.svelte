<script>
	function toggleTheme() {
		// Obtains an array of all <link> elements.
		// Select your element using indexing.

		const theme = document.getElementsByTagName('link')[2];

		// Change the value of href attribute to change the css sheet.

		if (theme.getAttribute('href') == 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css') {
			theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css');
		} else {
			theme.setAttribute('href', 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css');
		}
	}
</script>

<main class="container">
	<button on:click={toggleTheme}>Switch Theme</button>
	<h1><span><i class="fas fa-home" /></span>&nbsp;Svelte Playground</h1>
	<p>
		This is a svelte template which comes with <strong
			>normalize.css, water.css, font-awesome 5 & stylelint.</strong>
		<br /><br />

		<strong>
			<span><i class="fas fa-info-circle" /></span>&nbsp; Assumes Prettier is already configured.</strong>
	</p>
</main>

<style>
	.container {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
