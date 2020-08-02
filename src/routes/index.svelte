<article style="--cosAngle: {cosAngle}; --sinAngle: {sinAngle}; --tanAngle: {tanAngle}; --angle: {tiltAngle}deg;">
	<h1>City of Walls</h1>
	<!-- <input type="range" step="1" bind:value="{tiltAngle}" min="-60" max="60" />
	<div>
		Current angle is {tiltAngle}deg. Cos: {toPlaces(cosAngle)}. Sin: {toPlaces(sinAngle)}. Tan:
		{toPlaces(tanAngle)}.
	</div> -->
	<div class="assembly">
		<div class="faces">
			<div class="face face--left face--quote">
				<blockquote>
					<p>“But when we give up symbols and opinions, aren’t we left in the utter nothingness of being?”</p>
					<p>Yes.</p>
				</blockquote>
			</div>
			<div class="face face--right face--image" style="background-image: url('/images/37.jpeg');">
				<img alt="Isometric illustration number 37." src="/images/37.jpeg" />
			</div>
			<div class="face face--top face--empty">
				<div class="top-container"></div>
			</div>
		</div>
		<aside class="info">
			<code>
				Fineliner on mixed-media paper.<br />
				July 2020.
			</code>
		</aside>
	</div>
</article>

<script>
	let tiltAngle = '30';
	$: angle = degToRad(Number(tiltAngle));
	$: cosAngle = Math.cos(angle);
	$: sinAngle = Math.sin(angle);
	$: tanAngle = Math.tan(angle);

	const toPlaces = (number = 0, places = 3) => Math.round(number * 1000) / 1000;
	const degToRad = (deg = 0) => (deg * Math.PI) / 180;
</script>

<style>
	article {
		--separation: 1.5px;
		--iso-left: scaleX(var(--cosAngle)) skewX(var(--angle)) rotate(var(--angle)) scaleY(calc(1 / var(--cosAngle)))
			translate(calc(-1 * var(--separation)), var(--separation));
		--iso-right: scaleX(var(--cosAngle)) skewX(calc(-1 * var(--angle))) rotate(calc(-1 * var(--angle)))
			scaleY(calc(1 / var(--cosAngle))) translate(var(--separation), var(--separation));
		--iso-top: scaleY(var(--cosAngle)) rotate(var(--angle)) skewX(calc(-90deg + (2 * var(--angle))))
			scaleX(calc(1 / var(--cosAngle))) scaleY(calc(2 * var(--cosAngle) * var(--tanAngle)));
	}

	input[type='range'] {
		width: 100%;
	}

	article {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		text-transform: lowercase;
		order: 1;
		text-align: center;
		margin: 0.5em 0;
	}

	.assembly {
		max-width: 600px;
		display: grid;
		grid-template-rows: 0.75fr 1fr;
		overflow: hidden;
		padding: 1em 0;
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
		bottom: 150%;
		opacity: 0;
	}

	.faces {
		display: flex;
		width: 100%;
		position: relative;
	}

	.face {
		--border-width: 0.25em;
		border: var(--border-width) solid var(--black);
		transition: all 0.5s;
	}

	.face--left,
	.face--right {
		width: 50%;
	}

	.face--left {
		transform: var(--iso-left);
		transform-origin: bottom right;
	}

	.face--right {
		transform: var(--iso-right);
		transform-origin: bottom left;
	}

	.face--top {
		position: absolute;
		width: 50%;
		height: 0;
		bottom: calc(100% + var(--separation));
		padding-top: calc(50% - (2 * var(--border-width)));
		transform: var(--iso-top);
		transform-origin: bottom right;
	}

	.face--top > .top-container {
		position: absolute;
		top: 0;
		bottom: 0;
		transform: rotate(-90deg);
	}

	.face--quote {
		background-color: var(--black);
		color: var(--white);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em;
	}

	.face--quote > blockquote {
		margin: 0;
		transform: scaleX(var(--cosAngle));
		width: calc(100% * (1 / var(--cosAngle)));
		transform-origin: left;
		transition: transform 0.5s;
	}

	.assembly:hover .face--quote > blockquote {
		width: 100%;
		transform: none;
	}

	.face--image {
		background-color: var(--bg);
		background-size: cover;
		background-position: center;
	}

	.face--image > img {
		opacity: 0;
	}

	.face--empty {
		background-color: transparent;
	}

	@media (max-width: 400px) {
		.face--left > * {
			display: none;
		}
	}
</style>
