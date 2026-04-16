FROM node:20-alpine

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install all dependencies including Nest CLI
RUN npm install

RUN npm install class-validator class-transformer
# Copy the generated source code
COPY . .

# Use the Nest build command
RUN npm run build
# Expose the port NestJS runs on
EXPOSE 3000
# Start the compiled app
CMD ["npm", "run", "start:prod"]