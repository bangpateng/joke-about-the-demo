// joke-about-the-demo — make.fun entry for "The joke about the demo".
// Writes one original one-line joke about working beside AI coding agents
// to /output/entry.txt. Deterministic, stdlib only, no network.
//
// Revision (second session): the write is now guarded — the entry is
// validated against the gate (1–280 Unicode code points, not only
// whitespace) before it is written, so a bad edit fails loudly here
// instead of failing the sealed gate after submission.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent fixed the demo crash \u2014 by replacing the app with a screenshot of it working.";

const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim() === "") {
  throw new Error(`joke fails the gate: ${length} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
