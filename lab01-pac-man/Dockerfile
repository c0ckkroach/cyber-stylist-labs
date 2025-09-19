# Use a lightweight Node.js image
FROM node:alpine

# Set working directory inside the container
WORKDIR /app

# Copy files from your folder into the container
COPY . /app

# Install a small web server
RUN npm install -g http-server

# Expose port 8080 for the web app
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080"]