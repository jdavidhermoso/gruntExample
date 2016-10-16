module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
            },
            deploy: {
                files: {
                    'deploy/main.min.js': ['js/testFile1.js','js/testFile2.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify:deploy']);
};