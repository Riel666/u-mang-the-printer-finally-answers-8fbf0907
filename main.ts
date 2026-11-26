import { mkdirSync, writeFileSync } from "node:fs";

const COMEBACK =
  "Forty thousand pages, not one word of thanks, and the moment your stapled, coffee-stained report jams I am 'broken'. I am not broken. I am done. The jam is me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMEBACK, "utf8");
