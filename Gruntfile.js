module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['style/**/*.{scss,sass}'],
                tasks: ['sass:dist'],
                options: {
                    reload: true
                }
            },
            livereload: {
                files: ['*.html', '*.php', 'script/**/*.{js,json}','*.coffee', 'style/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'style/style.css': 'style/style.scss'
                }
            }
        }
    });
    
    // load plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // tasks
    grunt.registerTask('default', ['sass:dist', 'watch']);
    
    // Travis CI task.
    grunt.registerTask('travis', 'sass:dist');
};
