# Use the official image as a parent image.(This is an official image, built by the node.js vendors and validated by Docker to be a high-quality image containing the Node.js Long Term Support (LTS) interpreter and basic dependencies.)
FROM node:current-slim

# Set the working directory. (to specify that all subsequent actions should be taken from the directory). in your image filesystem (never the host’s filesystem).
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 5000

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the specified command within the container.
CMD [ "npm", "run dev" ]

