import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const output = join(root, ".vercel", "output");

await rm(output, { recursive: true, force: true });
await mkdir(join(output, "functions", "__server.func"), { recursive: true });
await mkdir(join(output, "static"), { recursive: true });

await cp(join(dist, "config.json"), join(output, "config.json"));
await cp(join(dist, "client"), join(output, "static"), { recursive: true });
await cp(join(dist, "server"), join(output, "functions", "__server.func"), {
  recursive: true,
});

console.log("Packaged Nitro output for Vercel prebuilt deploy.");
