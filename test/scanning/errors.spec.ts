/*!
 * Copyright 2019 Omar Tawfik. Please see LICENSE file at the root of this repository.
 */

import { expectDiagnostics } from "../utils";

describe(__filename, () => {
  it("reports errors on unrecognized characters", () => {
    expectDiagnostics(`
workflow "x" {
  %
}`).toMatchInlineSnapshot(`
"
  %
  ~ The character '%' is unrecognizable. (line 2)
"
`);
  });

  it("reports errors on a single forward slash", () => {
    expectDiagnostics(`
/ comment
`).toMatchInlineSnapshot(`
"
/ comment
~ The character '/' is unrecognizable. (line 1)
"
`);
  });

  it("reports errors on unterminated strings (middle of file)", () => {
    expectDiagnostics(`
workflow "something \\" else {
}`).toMatchInlineSnapshot(`
"
workflow \\"something \\\\\\" else {
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ This string literal must end with double quotes. (line 1)
"
`);
  });

  it("reports errors on unterminated strings (end of file)", () => {
    expectDiagnostics(`
workflow "something`).toMatchInlineSnapshot(`
"
workflow \\"something
         ~~~~~~~~~~~~ This string literal must end with double quotes. (line 1)
"
`);
  });

  it("reports errors on unrecognized escape sequences", () => {
    expectDiagnostics(`
workflow "test\\m" {
}`).toMatchInlineSnapshot(`
"
workflow \\"test\\\\m\\" {
                      ~~~ The character 'm' is not a supported escape sequence. (line 1)
"
`);
  });

  it("reports errors on unsupported characters in a string", () => {
    expectDiagnostics(`
workflow "test \u0000 \u0002" {
}`).toMatchInlineSnapshot(`
"
workflow \\"test   \\" {
                  ~ The character ' ' is unrecognizable. (line 1)
workflow \\"test   \\" {
                    ~~~ The character '' is unrecognizable. (line 1)
"
`);
  });
});
