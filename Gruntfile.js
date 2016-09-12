module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass:{
      combined:{                                             // Build Non-minfied Version
        options:{                                         // Target options
          sourceMap: true,                               // Do we really need these?
          //includePaths: require('node-bourbon').includePaths, // Include Just Bourbon (for the mixins)
          outputStyle: 'compact',                               // [ nested, compact, compressed, expanded]
          noCache: true
        },
        files:{                                           // Dictionary of files
          // 'destination': 'source'
          'honeywell/hb.css': ['honeywell/honeywell-bio.scss'], // All project files are imported through materialize.scss
          'dunkin/cp_build/css/br-suppcenter.css': ['dunkin/cp_dev/scss/br-suppcenter.scss']
        }
      },
    },
    watch: {
      styles: {
        files: [
          // Listen for Sass/SCSS Files
          'honeywell/*.scss',
          'dunkin/cp_dev/scss/*.scss'

        ],
        /* These are your tasks from above and they run in the order you have them here! */
        tasks: [ /* If you are getting default errors from grunt check this array! */
          'sass:combined'
        ],
        options: {
          nospawn: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass:combined','watch']);

};
