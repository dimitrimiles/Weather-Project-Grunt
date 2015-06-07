module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   concat: {
    dist: {
      src: ['QA/Todd/*.js'],
      dest: 'ready for prod/production.js'
    }
  },
  jshint: {
    beforeconcat: ['QA/Todd/*.js'],
    afterconcat: ['ready for prod/production.js']
  }
});

  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('jshint', ['jshint']);
  grunt.registerTask('concat-js'['concat']);
  grunt.registerTask('deploy'['deploy']);
  grunt.registerTask('default', ['jshint','concat']);

};


