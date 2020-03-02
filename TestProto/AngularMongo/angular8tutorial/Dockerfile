# Create image based on the official Node 10 image from dockerhub
FROM node:12.12.0-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p
# Get all the code needed to run the app
COPY . /app/

EXPOSE 4200

# Serve the app
CMD ["npm", "start"]