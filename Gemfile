source 'https://rubygems.org'

group :development do
  # Sass, Compass and extensions.
  gem 'sass', '~>3.4.5'                 # Sass.
  gem 'sass-globbing'                   # Import Sass files based on globbing pattern.
  gem 'compass'                         # Framework built on Sass.
  gem 'compass-validator'               # So you can `compass validate`.
  gem 'compass-normalize'               # Compass version of normalize.css.
  gem 'singularitygs'                   # Alternative to the Susy grid framework.
  gem 'breakpoint'                      # Manages CSS media queries.
  gem 'oily_png'                        # Faster Compass sprite generation.
  gem 'toolkit'                         # Compass extension
  gem 'scss-lint'                       # Linting for scss-files

  # Guard
  gem 'guard'                           # Guard event handler.
  gem 'guard-compass'                   # Compile on sass/scss change.
  gem 'guard-shell'                     # Run shell commands.
  gem 'guard-livereload', '~> 2.3.0'    # Browser reload.
  gem 'yajl-ruby'                       # Faster JSON with LiveReload in the browser.

  # Dependency to prevent polling. Setup for multiple OS environments.
  # Optionally remove the lines not specific to your OS.
  # https://github.com/guard/guard#efficient-filesystem-handling
  gem 'rb-inotify', '~> 0.9', :require => false      # Linux
  gem 'rb-fsevent', :require => false                # Mac OSX
  gem 'rb-fchange', :require => false                # Windows
end