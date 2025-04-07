# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build arguments
ARG PORT=5000

# Environment variables
ENV PORT=${PORT}
ENV NODE_ENV=production

# Expose port
EXPOSE ${PORT}

# Start command
CMD ["npm", "start"]