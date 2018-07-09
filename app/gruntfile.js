module.exports = function(grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            'assets/scripts/min/main.min.js': 'assets/scripts/main.js'
        },

        htmlmin: {
            index: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.min.html': 'index.html'
                }
            }
        }, 

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/styles/style.css': 'assets/styles/style.sass'
                }
            }
        },

        watch: {
            scripts: {
                files: ['assets/scripts/main.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['assets/styles/*.sass'],
                tasks: ['sass']             
            },
            html: {
                files: ['index.html'],
                tasks: ['htmlmin']
            }
        },

        jasmine: {
            test: {
                src: 'assets/scripts/*.js',
                options: {
                  specs: 'tests/*.js'
                }
            }
        },
    };

    grunt.initConfig(gruntConfig);

    // plugins
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // tarefas
    grunt.registerTask('default', ['uglify', 'htmlmin', 'sass']);
}