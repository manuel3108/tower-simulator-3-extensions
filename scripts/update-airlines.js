import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import { preprocessEntries } from './common.js';

// see https://openflights.org/data.html
const dataUrl = 'https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat';

const response = await fetch(dataUrl);
const csv = await response.text();
const lines = csv.split('\n');

const airlines = [];

// start at one, because the first line is bullshit
for (let i = 1; i < lines.length; i++) {
	const line = lines[i];
	let entries = line.split(',');
	entries = preprocessEntries(entries);

	// const airlineId = entries[0];
	const name = entries[1];
	// const alias = entries[2];
	// const iata = entries[3];
	const icao = entries[4];
	const callsign = entries[5];
	const country = entries[6];
	const active = entries[7] === 'Y';

	if (!active || !name || !icao || !callsign || !country) {
		continue;
	}

	airlines.push({
		name,
		icao,
		callsign,
		country
	});
}
console.log(airlines.length);
const json = JSON.stringify(airlines, null, 4);
const fileContent = `import type { Airline } from "./Airline";

const airlines: Airline[] = ${json}

export default airlines;`;

await writeFile('src/lib/airlines.ts', fileContent);
