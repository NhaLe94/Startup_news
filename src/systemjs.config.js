/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:':  '/scripts/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:core.umd.js',
      '@angular/common': 'npm:common.umd.js',
      '@angular/compiler': 'npm:compiler.umd.js',
      '@angular/platform-browser': 'npm:platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:http.umd.js',
      '@angular/router': 'npm:router.umd.js',
      '@angular/forms': 'npm:forms.umd.js',
      // other libraries
      'rxjs':                      'npm:',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
