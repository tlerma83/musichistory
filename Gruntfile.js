module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['javascript/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"Player":true} //name value pairs, allows to define global vars used in many files.
      }
    },

    watch: { //automatically watch for changes
      javascripts: {
        files: ['javascript/**/*.js'],
        tasks: ['jshint']
      }

    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'watch']);
};
