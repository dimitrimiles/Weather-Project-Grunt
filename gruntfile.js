module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Concats all of the JavaScript files approved by QA into a single file and moves it to ready for prod
        concat: {   
            dist: {
                src: [
                    'QA/Todd/*.js', // All JS in the QA folder

                ],
                dest: 'ready for prod/production.js',
            }
        },
        //Runs JSHINT against all JavaScript files in the approved QA repository
        jshint: {
          beforeconcat: ['QA/Todd/*.js'],
          afterconcat: ['ready for prod/production.js']
        },
        //Deploys the compiled file to the production environment
        copy: {
          main: {
            files: [

              {expand: true, flatten: true, src: ['ready for prod/*'], dest: 'production/', filter: 'isFile'},
            ]
          }
        }
    });
    
    //Loads plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    //Where task are defined
    grunt.registerTask('deploy', ['copy']);
    grunt.registerTask('concat-js', ['concat']);
    grunt.registerTask('default', ['concat', 'jshint']);

};