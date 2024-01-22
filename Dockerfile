###################
# Stage 1 (Build) #
###################

# Use an official Node.js runtime as the base image
FROM node:alpine AS builder

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies in the container
RUN pnpm install -frozen-lockfile

# Copy the rest of the app's files to the container
COPY . .
COPY .env.example .env

# Build the app
RUN pnpm run build

ENV NODE_ENV=production

# Install only production dependencies in the container
RUN pnpm install -frozen-lockfile -production


#####################
# Stage 2 (Runtime) #
#####################

FROM node:alpine
ENV NODE_ENV=production

WORKDIR /app

# Set the user to 'node' for better security
RUN chown node:node .
USER node

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the built Next.js app from the build stage to the runtime stage
COPY -from=builder /app/.next ./.next/
COPY -from=builder /app/public ./public/
COPY -from=builder /app/.env ./.env/
COPY -from=builder /app/node_modules/ ./node_modules/

EXPOSE 3000

# Specify the command to run when the container starts
CMD ["pnpm", "start"]