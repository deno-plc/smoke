// ------------------------------------------------------------------
// Harness
// ------------------------------------------------------------------
import { Test } from './test/index.mts'

// ------------------------------------------------------------------
// Modules
// ------------------------------------------------------------------
import './async/index.mts'
import './buffer/index.mts'
import './channel/index.mts'
import './crypto/index.mts'
import './events/index.mts'
import './filesystem/index.mts'
import './http/index.mts'
import './net/index.mts'
import './os/index.mts'
import './proxy/index.mts'

// ------------------------------------------------------------------
// Drift
// ------------------------------------------------------------------
declare const Drift: any

// ------------------------------------------------------------------
// Runner
// ------------------------------------------------------------------
function resolve_filter() {
  if ('Drift' in globalThis) return Drift.args[0]
  const searchParams = new URLSearchParams(globalThis.location.search)
  return searchParams.get('filter') ?? ''
}

Test.run({ filter: resolve_filter() }).then((result) => {
  if ('Drift' in globalThis) return result.success ? Drift.close(0) : Drift.close(1)
  console.log(result)
})
