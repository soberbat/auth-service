# Use an official Node.js LTS (Long Term Support) image as the base image
FROM node:lts-alpine AS base

# Set the working directory in the image
WORKDIR /app

# Copy only the package.json and package-lock.json to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Switch to a new stage for running the application
FROM base AS release

# Copy only the necessary files for running the application
COPY --from=base /app/node_modules ./node_modules
COPY . .

# Expose the port on which your application will run
EXPOSE 3000

# Specify the command to run your application
CMD ["node", "app.js"]
