<script>
	import Toggle from './Toggle.svelte';
</script>

<main class="container">
	<Toggle />
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
