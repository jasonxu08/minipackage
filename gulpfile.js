var gulp = require("gulp"),
    tsc = require("gulp-typescript"),
    tslint = require("gulp-tslint");

gulp.task("lint", function() {
    return gulp.src([
        "source/**/*.ts",
        "test/**/*.test.ts"
    ])
    .pipe(tslint({}))
    .pipe(tslint.report("verbose"));
});

var tsProject = tsc.createProject("tsconfig.json");

gulp.task("compile", function() {
    return gulp.src([
        "source/**/*.ts",
        "./app.ts"
    ])
    .pipe(tsProject())
    .js.pipe(gulp.dest("./source/"));
});

// gulp.task("clean", function() {
//     //return del(["source/**/*.js"]);
// });

