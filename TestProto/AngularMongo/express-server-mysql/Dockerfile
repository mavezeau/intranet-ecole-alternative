# Create image based on the official Node 6 image from the dockerhub
FROM node:12.12.0-alpine

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY ./package.json .
COPY ./package-lock.json .

# Install dependecies
RUN npm install
RUN npm install -g nodemon

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 4000

# Serve the app
CMD ["npm", "start"]
#CMD ["nodemon", "server.js"]