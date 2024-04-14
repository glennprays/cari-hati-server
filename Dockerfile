FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000 

CMD ["npm", "run", "prisma:push", "&&", "npm", "run", "seed:structural", "&&", "npm", "run", "start:prod"]
