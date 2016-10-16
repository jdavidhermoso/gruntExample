module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            deploy: {
                files: {
                    'deploy/main.min.js': ['js/testFile1.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify:deploy']);
};