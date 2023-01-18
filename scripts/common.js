export function preprocessEntries(entries) {
	for (let i = 0; i < entries.length; i++) {
		entries[i] = entries[i].replaceAll('"', '').replaceAll('\t', '');

		if (entries[i] === '\\N') {
			entries[i] = null;
		}
	}

	return entries;
}
