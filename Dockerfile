# Build stage
FROM node:16.16-alpine AS build
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:16.16-alpine
WORKDIR /app
COPY --from=build /src/app/dist ./dist
COPY package*.json ./
RUN npm install --production && \
    npm cache clean --force
EXPOSE 3001
CMD ["npm", "run", "start"]
