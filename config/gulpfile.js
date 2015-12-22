var gulp = require('gulp');
//定义一个任务
// name 任务的名字 匿名函数，任务定义
gulp.task('hello',function(){
    console.log('hello3');
});

//此任务依赖哪些任务
gulp.task('default',['hello'],function(){
    console.log('default');
});
