import fetch from 'node-fetch';

const endpoint = 'https://barnsworthburning-api.netlify.com/.netlify/functions';

export async function get(req, res, next) {
	const posts = await fetch(`${endpoint}/airtableGet?base=corpus&table=isometrics`).then((data) => data.json());

	if (posts !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(posts));
	} else {
		next();
	}
}
