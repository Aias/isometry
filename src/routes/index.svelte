<article>
	<h1>walled city</h1>
	<div class="assembly">
		<div class="faces">
			<div class="face face--left">
				<blockquote>
					<p>“But when we give up symbols and opinions, aren’t we left in the utter nothingness of being?”</p>
					<p>Yes.</p>
				</blockquote>
			</div>
			<div class="face face--right" style="background-image: url('/images/37.jpeg');">
				<img alt="Isometric illustration number 37." src="/images/37.jpeg" />
			</div>
			<div class="face face--top"></div>
		</div>
		<aside class="info">
			<code>
				Fineliner on mixed-media paper.<br />
				July 2020.
			</code>
		</aside>
	</div>
</article>

<style>
	article {
		--cos30: 0.86602540378;
		--angle: 30deg;
		--separation: 1.5px;
		--iso-left: scaleX(var(--cos30)) skewX(var(--angle)) rotate(var(--angle)) scaleY(calc(1 / var(--cos30)))
			translate(calc(-1 * var(--separation)), var(--separation));
		--iso-right: scaleX(var(--cos30)) skewX(calc(-1 * var(--angle))) rotate(calc(-1 * var(--angle)))
			scaleY(calc(1 / var(--cos30))) translate(var(--separation), var(--separation));
		--iso-top: translate(-200%, -50%) scaleY(var(--cos30)) rotate(calc(-1 * var(--angle))) skewX(var(--angle))
			scaleX(calc(1 / var(--cos30))) translate(var(--separation), calc(-1 * var(--separation)));
	}

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	article h1 {
		order: 2;
	}

	.assembly {
		max-width: 600px;
		display: grid;
		grid-template-rows: 0.75fr 1fr;
		padding: 1em;
	}

	.info {
		grid-row: 1;
		opacity: 0;
		background-color: rgba(0, 0, 0, 0.03);
		transition: opacity 0.5s;
		margin: 0 0 1em 0;
		padding: 1em;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.assembly:hover {
		cursor: pointer;
	}

	.assembly:hover .info {
		opacity: 1;
	}

	.assembly:hover .face--left,
	.assembly:hover .face--right {
		transform: none;
		margin: 0 var(--separation);
	}

	.assembly:hover .face--top {
		transform: translate(-200%, -100%) scaleY(var(--cos30)) rotate(calc(-1 * var(--angle))) skewX(var(--angle))
			scaleX(calc(1 / var(--cos30))) translate(var(--separation), calc(-1 * var(--separation)));
		opacity: 0;
	}

	.faces {
		display: flex;
		width: 150%;
	}

	.face {
		--border-width: 4px;
		border: var(--border-width) solid black;
		transition: transform 0.5s, opacity 0.5s, margin 0.5s;
	}

	.face--right {
		background-color: var(--bg);
		transform: var(--iso-right);
		transform-origin: bottom left;
		width: calc(100% / 3);
		background-size: cover;
		background-position: center;
	}

	.face--right > img {
		opacity: 0;
	}

	.face--left {
		width: calc(100% / 3);
		background-color: var(--black);
		padding: 1em;
		color: rgba(255, 255, 255, 0.85);
		transform: var(--iso-left);
		transform-origin: bottom right;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.face--top {
		background-color: transparent;
		width: calc(100% / 3);
		padding-top: calc((100% / 3) - (2 * var(--border-width)));
		height: 0;
		transform: var(--iso-top);
		transform-origin: top left;
	}

	blockquote {
		margin: 0;
	}

	@media (max-width: 400px) {
		.face--left > * {
			display: none;
		}
	}
</style>
