// ------------------------------------------------------------------
// Harness
// ------------------------------------------------------------------
import { Test } from './test/index.ts';

// ------------------------------------------------------------------
// Modules
// ------------------------------------------------------------------
import './async/index.ts';
import './buffer/index.ts';
import './channel/index.ts';
import './crypto/index.ts';
import './events/index.ts';
import './filesystem/index.ts';
import './http/index.ts';
import './net/index.ts';
import './os/index.ts';
import './proxy/index.ts';

// ------------------------------------------------------------------
// Drift
// ------------------------------------------------------------------
declare const Drift: any;

// ------------------------------------------------------------------
// Runner
// ------------------------------------------------------------------
function resolve_filter() {
  if ('Drift' in globalThis) return Drift.args[0];
  const searchParams = new URLSearchParams(globalThis.location.search);
  return searchParams.get('filter') ?? '';
}

Test.run({ filter: resolve_filter() }).then((result) => {
  if ('Drift' in globalThis) return result.success ? Drift.close(0) : Drift.close(1);
  console.log(result);
});
