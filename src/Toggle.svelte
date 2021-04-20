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

<button on:click={toggleTheme}>Switch Theme</button>
