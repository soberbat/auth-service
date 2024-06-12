# Express app multistage build 
FROM node:lts-alpine AS base

WORKDIR /app


COPY package*.json ./

RUN npm ci --only=production

FROM base AS release

COPY --from=base /app/node_modules ./node_modules
COPY . .

EXPOSE 3000


CMD ["npm", "run", "start"]
