/*!
 * Copyright 2019 Omar Tawfik. Please see LICENSE file at the root of this repository.
 */

import { Compilation } from "./util/compilation";
import { Diagnostic } from "./util/diagnostics";

export { TextPosition, TextRange } from "./scanning/tokens";
export { DiagnosticCode, Diagnostic } from "./util/diagnostics";

export function lint(text: string): ReadonlyArray<Diagnostic> {
  return new Compilation(text).diagnostics;
}