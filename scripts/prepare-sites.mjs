import { copyFile, mkdir, readdir, rename } from 'node:fs/promises';
import { join } from 'node:path';

const output = new URL('../dist/', import.meta.url);
const client = new URL('../dist/client/', import.meta.url);
const server = new URL('../dist/server/', import.meta.url);

await mkdir(client, { recursive: true });

for (const entry of await readdir(output)) {
	if (entry === 'client' || entry === 'server') continue;
	await rename(join(output.pathname, entry), join(client.pathname, entry));
}

await mkdir(server, { recursive: true });
await copyFile(new URL('./worker-entry.js', import.meta.url), new URL('./index.js', server));
