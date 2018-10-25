FROM node:latest

# These dependencies are required for the `bcrypt` library
 RUN apt-get update && \
     apt-get install -y postgresql-client


# Make directory for source code
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ADD package.json /app

RUN npm install

ARG SUBMISSION_SUBFOLDER
ADD $SUBMISSION_SUBFOLDER /app

# Overwrite files in student fork with upstream files
ADD test.sh /app
ADD package.json /app
