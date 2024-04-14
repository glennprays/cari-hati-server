FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run prisma:push
RUN npm run seed:structural
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000 

CMD ["npm", "run", "start:prod"]
