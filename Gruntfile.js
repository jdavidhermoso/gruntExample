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
        },
        cssmin: {
            target: {
                files: {
                    'deploy/main.min.css': ['deploy/main.css']
                }
            }
        },
        watch: {
            files: ['sass/*'],
            tasks: ['sass','cssmin']
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','watch']);
    grunt.registerTask('prod', ['uglify:prod','sass','cssmin']);
};