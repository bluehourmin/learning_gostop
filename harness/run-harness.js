#!/usr/bin/env node
const { runHarness } = require('./orchestrator');
const { reportHarnessResults } = require('./reporters/console');

const result = runHarness();
reportHarnessResults(result);
process.exitCode = result.ok ? 0 : 1;
