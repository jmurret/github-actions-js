/*!
 * Copyright 2019 Omar Tawfik. Please see LICENSE file at the root of this repository.
 */

import * as path from "path";
import * as gulp from "gulp";
import { outPath, rootPath, gulp_mergePackageJson, gulp_extractReadMe } from "./utils";

const vsCodePath = path.join(outPath, "vscode");

export module VSCodeTasks {
  export const copyFiles = "vscode:copy-files";
  export const generateReadMe = "vscode:generate-read-me";
  export const generatePackageJson = "vscode:generate-package-json";
}

gulp.task(VSCodeTasks.copyFiles, () => {
  return gulp
    .src([path.join(outPath, "src", "**"), path.join(rootPath, "src", "resources*", "**")])
    .pipe(gulp.dest(vsCodePath));
});

gulp_extractReadMe(VSCodeTasks.generateReadMe, "vscode", vsCodePath);

gulp_mergePackageJson(VSCodeTasks.generatePackageJson, "package-vscode.json", vsCodePath);
