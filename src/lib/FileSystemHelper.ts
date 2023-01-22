import { AIRLINES_FILE, AIRPORTS_DIRECTORY, DATABASES_DIRECTORY } from './FileSystemConstants';

export default class FileSystemHelper {
	private static mainDirectory: FileSystemDirectoryHandle | null = null;

	public async hasMainGameDirectoryHandle() {
		return FileSystemHelper.mainDirectory !== undefined;
	}

	public async getMainGameDirectory() {
		FileSystemHelper.mainDirectory = await window.showDirectoryPicker();
	}

	public async getAirportsNames() {
		const airportNames: string[] = [];

		const airportsDirectory = await this.getAirportsDirectory();
		if (!airportsDirectory) return airportNames;

		const entries = await airportsDirectory.values();
		for await (const entry of entries) {
			if (entry.kind === 'directory') {
				airportNames.push(entry.name);
			}
		}

		return airportNames;
	}

	public async getAirportDatabases(airportName: string) {
		const databasesName: string[] = [];

		const airportsDirectory = await this.getAirportsDirectory();
		if (!airportsDirectory) return databasesName;

		const airportDirectory = await this.getDirectory(airportsDirectory, airportName);
		const databasesDirectory = await this.getDirectory(airportDirectory, DATABASES_DIRECTORY);

		const entries = await databasesDirectory.values();
		for await (const entry of entries) {
			if (entry.kind === 'directory') {
				databasesName.push(entry.name);
			}
		}

		return databasesName;
	}

	public async readAirlinesFile(airportName: string, databaseName: string) {
		const airportsDirectory = await this.getAirportsDirectory();
		if (!airportsDirectory) return '';

		const airportDirectory = await this.getDirectory(airportsDirectory, airportName);
		const databasesDirectory = await this.getDirectory(airportDirectory, DATABASES_DIRECTORY);
		const databaseDirectory = await this.getDirectory(databasesDirectory, databaseName);

		return await this.readFile(databaseDirectory, AIRLINES_FILE);
	}

	private async getAirportsDirectory() {
		if (!FileSystemHelper.mainDirectory) return;

		return await this.getDirectory(FileSystemHelper.mainDirectory, AIRPORTS_DIRECTORY);
	}

	private async readFile(directory: FileSystemDirectoryHandle, fileName: string) {
		const fileHandle = await directory.getFileHandle(fileName);
		const file = await fileHandle.getFile();
		return await file.text();
	}

	private async getDirectory(directory: FileSystemDirectoryHandle, path: string) {
		return await directory.getDirectoryHandle(path);
	}
}
