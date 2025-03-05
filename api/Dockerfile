FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy TypeScript configuration and source code
COPY tsconfig.json ./
COPY src/ ./src/

# Build TypeScript code
RUN pnpm build

# Expose port (3000 as per your backend setup)
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
