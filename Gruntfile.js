module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            prod: {
                options: {
                    compress: {
                        drop_console: true
                    }
                },
                files: {
                    'deploy/main.min.js': ['js/testFile1.js', 'js/testFile2.js']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'deploy/main.css': 'sass/main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('prod', ['uglify:prod','sass']);
};