# PHASE ONE:
# Here we are compiling our frontend assets
# Since we only need need Node for generating our bundle
# we will use a multi-stage build to keep our image small

# The below layers will NOT be included in the final image

# setting up our image aliased as build
FROM node:13.2.0-alpine3.10 as build

# set working directory inside node
WORKDIR /usr/src/node_app

# environment vars must be included in dockerfile
ARG NODE_ENV=production

# Add our node modules to our path
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

# copy over our package.json
COPY package.json /usr/src/node_app/package.json

#  install dependencies silently so we don't have to
#  watch the whole thing download every time
RUN npm install --silent

# Copy over the rest of our file so webpack will be able bundle it
COPY . /usr/src/node_app

# this is the most important line of this build process!
# this is where we will create our bundle files that we will copy over later
RUN npm run postinstall
# npm run postinstall will run the command: "webpack --mode=production"

# PHASE TWO:
# this will be the actual base image of the image we are building
# We are going from the alpine version of ruby to save space
FROM ruby:2.5.1-alpine

# We tell the image `--no-cache` so we don't
# clog up our image with the things we are downloading
RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata

# environment vars must be included in the dockerfile
ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production

# copy over our Gemfile
WORKDIR /Litflix
COPY Gemfile /Litflix/Gemfile
COPY Gemfile.lock /Litflix/Gemfile.lock

# We gem install bundler for a specific issue with bundler 2.0
# then we can bundle install
RUN gem install bundler && bundle update rails && bundle install 
COPY . /Litflix

# Here is where that build stage from earlier comes in. We don't need all the
# Javascript dependencies just the bundle files! So we will copy those over into
# our final image
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

# Add a script to be executed every time the container starts.
# This script will take care of a Rails specific Docker issue with the server
# not starting
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh 

# Expose our port
EXPOSE 3000 

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]