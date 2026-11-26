// Your AI Therapist's Diagnosis — one-line entry.
// Writes the diagnosis text to /output/entry.txt (program/v1 harness).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Diagnosis: acute confessional dependence \u2014 you confess your secrets to a chatbot, then beg the cloud to forget them.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
