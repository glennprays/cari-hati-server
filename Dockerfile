FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run prisma:generate
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY ./prisma ./prisma
EXPOSE 3000 

CMD ["npm", "run", "prisma:push", "&&", "npm", "run", "seed:structural", "&&", "npm", "run", "start:prod"]
