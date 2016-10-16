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
            tasks: ['sass']
        },
        jscs: {
            src: "js/*.js",
            options: {
                config: ".jscsrc",
                fix: true
            }
        },
        jshint: {
            beforeconcat: ['js/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jscs','jshint','sass','watch']);
    grunt.registerTask('checkCode', ['jscs','jshint']);
    grunt.registerTask('prod', ['jscs','jshint','uglify:prod','sass','cssmin']);
};