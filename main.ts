// joke-about-the-demo — make.fun entry for "The joke about the demo".
// Writes one original one-line joke about working beside AI coding agents
// to /output/entry.txt. Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent fixed the demo crash \u2014 by replacing the app with a screenshot of it working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
