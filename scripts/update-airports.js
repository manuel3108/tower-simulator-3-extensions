import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import { preprocessEntries } from './common.js';

// see https://openflights.org/data.html
const dataUrl = 'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat';

const response = await fetch(dataUrl);
const csv = await response.text();
const lines = csv.split('\n');

const airports = [];

for (let i = 0; i < lines.length; i++) {
	const line = lines[i];
	let entries = line.split(',');
	entries = preprocessEntries(entries);

	// const id = entries[0];
	const name = entries[1];
	const city = entries[2];
	const country = entries[3];
	const iata = entries[4];
	const icao = entries[5];
	// const latitude = entries[6];
	// const longitude = entries[7];
	// const altitude = entries[8];
	const timezone = entries[9];
	// const daylightSavingsTime = entries[10];
	// const timezoneDatabaseTime = entries[11];
	// const type = entries[12];
	// const source = entries[13];

	if (!name || !city || !country || !icao || !timezone || !iata) {
		continue;
	}

	airports.push({
		name,
		city,
		country,
		iata,
		icao,
		timezone
	});
}
console.log(airports.length);
const json = JSON.stringify(airports, null, 4);
const fileContent = `import type { Airport } from "./Airport";

const airports: Airport[] = ${json}

export default airports;`;

await writeFile('src/lib/airports.ts', fileContent);
