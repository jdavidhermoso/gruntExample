module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            prod: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'deploy/main.min.js': ['js/testFile1.js','js/testFile2.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');



    grunt.registerTask('prod', ['uglify:prod']);
};