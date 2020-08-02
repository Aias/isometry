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

<style>
	header {
		margin-bottom: 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>