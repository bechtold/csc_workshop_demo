# CSS, Sass, Compass Workshop
We have a branch with the design template and the html template.
Your task is to theme the html with as much usage of sass and compass as possible.

This repo is work in progress.

# Compiling Sass
needs Grunt, Guard & Bundler

1.A) Sass/Compass with Bundler & Guard
  1. $ bundle install
  2. $ bundle exec guard

1.B) Sass/Compass with Grunt
  1. $ npm install
  2.
     a) compiling once (using bundler & guard)
        $ grunt shell:compass
     b) compiling once with sass-linting and generating sass-doc
        $ grunt compile
     c) watching (using guard) - maybe useless option
        $ grunt default



# Using Grunt
scsslint and jshint - make sure all packages are installed (1.B.1)

2.A) run the general lint & test
  1. $ grunt lint
