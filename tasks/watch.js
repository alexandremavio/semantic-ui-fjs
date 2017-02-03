var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');
var compileTs = require('./compile');

gulp.task('static_serve', function() {
  connect.server({
    root: ".",
    port: 9000,
    livereload: true
  });
});

gulp.task('reload',function(){
	connect.reload();
});

gulp.task('watch',['compile','template','copy_assets'],function(){
    gulp.run('static_serve');
    gulp.watch("./src/**/*.html", ['template']);
    gulp.watch('./src/**/*.ts').on('change',function(file){
        var search = "/";
        var path = file.path.replace(/\\/g,"/");
        var fileName = path.substring(path.lastIndexOf(search)+search.length,path.length);
        compileTs("./src/**/"+fileName);
        console.log("transpilando arquivo:"+file.path);
    });
    gulp.watch('./src/**/*.ts', ['compile']);
    gulp.watch('./src/**/assets/**/*.*', ['copy_assets']);

    gulp.watch('./dist/**/*.*').on('change',function(file){
        gulp.src(file.path).pipe(connect.reload());
    });

});
