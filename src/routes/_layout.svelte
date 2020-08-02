<script>
	import Logo from '../components/Logo.svelte';
	// export let segment;
</script>

<header>
	<a href="/" aria-label="Begin again.">
		<Logo size="2em" />	
	</a>
	<span>isometry</span>
</header>

<main>
	<slot></slot>
</main>

<footer>
	<small>
		A microsite by <a href="https://nicktrombley.design">Nick Trombley</a>.
	</small>
</footer>

<style>
	header {
		margin-bottom: 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	footer {
		margin-top: 4em;
		text-align: center;
		display: none;
	}
</style>