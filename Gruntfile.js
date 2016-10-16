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
        jscs: {
            src: "js/*.js",
            options: {
                config: ".jscsrc",
                fix: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-jscs");

    grunt.registerTask('default', ['jscs','sass','watch']);
    grunt.registerTask('checkCode', ['jscs']);
    grunt.registerTask('prod', ['jscs','uglify:prod','sass','cssmin']);
};